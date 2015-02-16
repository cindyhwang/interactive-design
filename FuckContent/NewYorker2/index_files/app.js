/**
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * Modified heavily
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */;

(function($, window, undefined) {

    'use strict';

	var prefix = (function () {
		var styles = window.getComputedStyle(document.documentElement, ''),
			pre = (Array.prototype.slice
				.call(styles)
				.join('') 
				.match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
			)[1],
			dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
		return {
			dom: dom,
			lowercase: pre,
			css: '-' + pre + '-',
			js: pre[0].toUpperCase() + pre.substr(1)
		};
	})();

    jQuery.fn.reverse = [].reverse;

    $.Fan = function(options, element) {
        this.$el = $(element);
        this._init(options);

    };

    $.Fan.prototype = {
        _init: function(options) {
            this.options = $.extend(true, {}, {
		        nextEl: '',
		        prevEl: '',
		        speed: 300,
		        easing: 'ease-in-out'
		    }, options);

			var transEndEventNames = {
				'WebKitTransition' : 'webkitTransitionEnd',
				'MozTransition' : 'transitionend',
				'OTransition' : 'oTransitionEnd',
				'MSTransition' : 'MSTransitionEnd',
				'transition' : 'transitionend'
			};
            this.transEndEventName = transEndEventNames[ prefix.dom + 'Transition' ];

            this.fanSettings = {
				speed : 770,
				easing : 'ease-out',
				range : 33,
				direction : 'left',
				origin : { x : 50, y : 200 },
				center : false,
				translation : 300
			};

            this.$items = this.$el.children('li');
            this.itemsCount = this.$items.length;
            if (this.itemsCount === 0) {
                return false;
            }

            this.supportTransitions = true;
            this.closed = true;
            this.itemZIndexMin = 1000;
            this._setStack();

			if (!this.isSafari()) {
            	this._initEvents();
			}

			this.peekInside();
        },

		isSafari: function() {
			return !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
		},
		
        peekInside: function() {
			var items = this.$items.toArray();
			var deg = 0;

			items.sort(function(a, b) {
			    return(Number(b.style.zIndex) - Number(a.style.zIndex));
			});

			var speed  = 2000;
			var easing = "ease-in-out";
			var delay  = 500;

			for (var i=0; i<4; i++) {
				$(items[i]).css({
	                '-webkit-transition': '-webkit-transform ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
	                '-moz-transition': '-moz-transform ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
	                '-ms-transition': '-ms-transform ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
	                '-o-transition': '-o-transform ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
	                'transition': 'transform ' + speed + 'ms ' + easing + ' ' + delay + 'ms'
	            });
			}

			setTimeout(function(){
				var a;
				for (var i=1; i<4; i++) {
					a = "rotate("+(i*2)+"deg)";
					$(items[i]).css({
		                '-webkit-transform': a,
		                '-moz-transform': a,
		                '-ms-transform': a,
		                '-o-transform': a,
		                'transform': a
		            });
				}
			}, 100);

        },

        _validateDefaultFanSettings: function(settings) {

            if (!settings.origin) {
                settings.origin = this.fanSettings.origin;
            } else {
                settings.origin.x = settings.origin.x || this.fanSettings.origin.x;
                settings.origin.y = settings.origin.y || this.fanSettings.origin.y;
            }
            settings.speed = settings.speed || this.fanSettings.speed;
            settings.easing = settings.easing || this.fanSettings.easing;
            settings.direction = settings.direction || this.fanSettings.direction;
            settings.range = settings.range || this.fanSettings.range;
            settings.translation = settings.translation || this.fanSettings.translation;
            if (settings.center == undefined) {
                settings.center = this.fanSettings.center
            }
            if (settings.scatter == undefined) {
                settings.scatter = this.fanSettings.scatter
            }

            this.direction = settings.direction;

            return settings;

        },
        _setStack: function($items) {
            var self = this;
            $items = $items || this.$items;
            $items.each(function(i) {
                $(this).css('z-index', self.itemZIndexMin + self.itemsCount - 1 - i);
            });
        },
        _updateStack: function($el, dir) {
            var currZIndex = Number($el.css('z-index')),
                newZIndex = dir === 'next' ? this.itemZIndexMin - 1 : this.itemZIndexMin + this.itemsCount,
                extra = dir === 'next' ? '+=1' : '-=1';
            $el.css('z-index', newZIndex);
            this.$items.filter(function() {
                var zIdx = Number($(this).css('z-index')),
                    cond = dir === 'next' ? zIdx < currZIndex : zIdx > currZIndex
                return cond;
            }).css('z-index', extra);
        },
        _initEvents: function() {
            var self = this;
            this.$el.on('click.fan', 'li', function() {
                if (!self.isAnimating) {
                    self._move2front($(this));
                }
            });
        },
        _resetTransition: function($el) {
            $el.css({
                '-webkit-transition': 'none',
                '-moz-transition': 'none',
                '-ms-transition': 'none',
                '-o-transition': 'none',
                'transition': 'none'
            });
        },
        _setOrigin: function($el, x, y) {
            $el.css('transform-origin', x + '% ' + y + '%');
        },
        _setTransition: function($el, prop, speed, easing, delay) {

            if (!this.supportTransitions) {
                return false;
            }
            if (!prop) {
                prop = 'all';
            }
            if (!speed) {
                speed = this.options.speed;
            }
            if (!easing) {
                easing = this.options.easing;
            }
            if (!delay) {
                delay = 0;
            }

            var styleCSS = '';
            prop === 'transform' ? styleCSS = { // -webkit-transition:-webkit-transform 1s;
                '-webkit-transition': '-webkit-transform ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
                '-moz-transition': '-moz-transform ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
                '-ms-transition': '-ms-transform ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
                '-o-transition': '-o-transform ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
                'transition': 'transform ' + speed + 'ms ' + easing + ' ' + delay + 'ms'
            } : styleCSS = {
                '-webkit-transition': prop + ' ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
                '-moz-transition': prop + ' ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
                '-ms-transition': prop + ' ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
                '-o-transition': prop + ' ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
                'transition': prop + ' ' + speed + 'ms ' + easing + ' ' + delay + 'ms'
            }

            $el.css(styleCSS);
        },
        _applyTransition: function($el, styleCSS, fncomplete, force) {
            if (this.supportTransitions) {
                if (fncomplete) {
                    $el.on(this.transEndEventName, fncomplete);
                    if (force) {
                        fncomplete.call();
                    }
                }
                setTimeout(function() {
                    $el.css(styleCSS);
                }, 25);
            } else {
                $el.css(styleCSS);
                if (fncomplete) {
                    fncomplete.call();
                }
            }
        },

        _move2front: function($item) {
            this.isAnimating = true;
            var self = this,
                isTop = Number($item.css('z-index')) === this.itemZIndexMin + this.itemsCount - 1,
                callback = isTop ? function() {
                    self.isAnimating = false;
                } : function() {
                    return false;
                },
                $item = isTop ? null : $item;

            // if it's the one with higher z-index, just close the fan
            if (!this.closed) {
                this._close(callback, $item);
            } else {
                this._fan();
            }

            if (isTop) {
                return false;
            }

            this._resetTransition($item);
            this._setOrigin($item, 50, 50);

            $item.css({
                opacity: 0
            });

            this._updateStack($item, 'prev');

            setTimeout(function() {

                self._setTransition($item, 'all', self.options.speed, 'ease-in');
                self._applyTransition($item, {
                    transform: 'none',
                    opacity: 1
                }, function() {

                    $item.off(self.transEndEventName);
                    self.isAnimating = false;

                });

            }, this.options.speed / 2);

        },
        _close: function(callback, $item) {

            var self = this,
                $items = self.$items,
                force = this.closed ? true : false;

            if ($item) {
                $items = $items.not($item);
            }

            this._applyTransition($items, {
                transform: 'none'
            }, function() {

                self.closed = true;
                $items.off(self.transEndEventName);
                self._resetTransition($items);
                setTimeout(function() {
                    self._setOrigin($items, 50, 50);
                    if (callback) {
                        callback.call();
                    }
                }, 25);

            }, force);

        },
        _fan: function(settings) {

            var self = this;
            this.closed = false;
            settings = this._validateDefaultFanSettings(settings || {});
            if (settings.origin.minX && settings.origin.maxX) {

                var max = settings.origin.maxX,
                    min = settings.origin.minX,
                    stepOrigin = (max - min) / this.itemsCount;

                this.$items.each(function(i) {

                    var $el = $(this),
                        pos = self.itemsCount - 1 - (Number($el.css('z-index')) - self.itemZIndexMin),
                        originX = pos * (max - min + stepOrigin) / self.itemsCount + min;
                    if (settings.direction === 'left') {
                        originX = max + min - originX;
                    }
                    self._setOrigin($(this), originX, settings.origin.y);
                });

            } else {
                this._setOrigin(this.$items, settings.origin.x, settings.origin.y);
            }

            this._setTransition(this.$items, 'transform', settings.speed, settings.easing);

            var stepAngle = settings.range / (this.itemsCount - 1),
                stepTranslation = settings.translation / (this.itemsCount - 1),
                cnt = 0;

            this.$items.each(function(i) {

                var $el = $(this),
                    pos = self.itemsCount - 1 - (Number($el.css('z-index')) - self.itemZIndexMin),
                    val = settings.center ? settings.range / 2 : settings.range,
                    angle = val - stepAngle * pos,
                    position = stepTranslation * (self.itemsCount - pos - 1);

                if (settings.direction === 'left') {

                    angle *= -1;
                    position *= -1;

                }

                if (settings.scatter) {
                    var extraAngle = Math.floor(Math.random() * stepAngle),
                        extraPosition = Math.floor(Math.random() * stepTranslation);

                    // not for the first item..
                    if (pos !== self.itemsCount - 1) {

                        angle = settings.direction === 'left' ? angle + extraAngle : angle - extraAngle;
                        position = settings.direction === 'left' ? position - extraPosition : position + extraPosition;

                    }

                }

                // save..
                $el.data({
                    translation: position,
                    rotation: angle
                });

                self._applyTransition($el, {
                    transform: 'translate(' + position + 'px) rotate(' + angle + 'deg)'
                }, function() {
                    ++cnt;
                    $el.off(self.transEndEventName);
                    if (cnt === self.itemsCount - 1) {
                        self.isAnimating = false;
                    }
                });
            });
        },

        _allowAction: function() {
            return this.itemsCount > 1;
        },

        _prepare: function(callback) {
            var self = this;
            if (!this.closed) {
                this._close(function() {
                    callback.call();
                });
            } else {
                callback.call();
            }
        },

        _dispatch: function(action, args) {
            var self = this;
            if ((action === this._fan && !this._allowAction()) || this.isAnimating) {
                return false;
            }
            this.isAnimating = true;
            this._prepare(function() {
                action.call(self, args);
            });
        },

        close: function(settings) {
            if (this.isAnimating) {
                return false;
            }
            this._close();
        },

        fan: function(settings) {
            this._dispatch(this._fan, settings);
        }
    };

    $.fn.fan = function(options) {
        var instance = $.data(this, 'fan');
        if (typeof options === 'string') {
            var args = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                if (!instance) {
                    return;
                }
                if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                    return;
                }
                instance[options].apply(instance, args);
            });
        } else {
            this.each(function() {
                if (instance) {
                    instance._init();
                } else {
                    instance = $.data(this, 'fan', new $.Fan(options, this));
                }
            });
        }
        return instance;
    };

    $(document).ready(function(){
		var el = document.getElementById("original-issue") || false;
		if (el) {
			var covers = [
				"01_goodrich.jpg",
				"02_banyai.jpg",
				"03_kunz.jpg",
				"04_nelson.jpg",
				"05_chast.jpg",
				"06_mattotti.jpg",
				"07_niemann.gif", // "07_niemann.jpg",
				"08_blitt.jpg",
				"09_mendelsund.jpg"
			].sort(function() { return 0.5 - Math.random() });

			var coverHTML = "";
			for (var i=0; i<covers.length; i++) {
				coverHTML += "		<li><img src=\"/wp-content/assets/static/90th/covers/200/" + covers[i] + "\"/></li>";
			}

			el.innerHTML = [
				"<div class=\"cover-fan\">",
				"	<ul id=\"cover-el\" class=\"cover-container\">",
					coverHTML,
				"	</ul>",
				"</div>"
			].join("");

			$( '#cover-el' ).fan();
		}
    });

})(jQuery, window);

