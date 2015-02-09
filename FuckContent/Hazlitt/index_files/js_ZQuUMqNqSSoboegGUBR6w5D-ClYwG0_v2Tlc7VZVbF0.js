/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-shiv-cssclasses-load
 */
;window.Modernizr=function(a,b,c){function u(a){j.cssText=a}function v(a,b){return u(prefixes.join(a+";")+(b||""))}function w(a,b){return typeof a===b}function x(a,b){return!!~(""+a).indexOf(b)}function y(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:w(f,"function")?f.bind(d||b):f}return!1}var d="2.5.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m={},n={},o={},p=[],q=p.slice,r,s={}.hasOwnProperty,t;!w(s,"undefined")&&!w(s.call,"undefined")?t=function(a,b){return s.call(a,b)}:t=function(a,b){return b in a&&w(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=q.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(q.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(q.call(arguments)))};return e});for(var z in m)t(m,z)&&(r=z.toLowerCase(),e[r]=m[z](),p.push((e[r]?"":"no-")+r));return u(""),i=k=null,function(a,b){function g(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function h(){var a=k.elements;return typeof a=="string"?a.split(" "):a}function i(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createElement=function(a){var e=(b[a]||(b[a]=c(a))).cloneNode();return k.shivMethods&&e.canHaveChildren&&!d.test(a)?f.appendChild(e):e},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/\w+/g,function(a){return b[a]=c(a),f.createElement(a),'c("'+a+'")'})+");return n}")(k,f)}function j(a){var b;return a.documentShived?a:(k.shivCSS&&!e&&(b=!!g(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),f||(b=!i(a)),b&&(a.documentShived=b),a)}var c=a.html5||{},d=/^<|^(?:button|form|map|select|textarea)$/i,e,f;(function(){var a=b.createElement("a");a.innerHTML="<xyz></xyz>",e="hidden"in a,f=a.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var k={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:j};a.html5=k,j(b)}(this,b),e._version=d,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+p.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)=="[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return o.call(a)=="[object Array]"},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};;
// Generated by CoffeeScript 1.6.2
/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(window,function(n,r){var i,o,l,s,f,u,c,a,h,d,p,y,v,w,g,m;i=n(r);a=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;c={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};this.element[u]=this.id;c[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||a)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(a&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete c[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=this.element[w])!=null?o:[];i.push(this.id);this.element[w]=i}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=t[w];if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;e=n.extend({},n.fn[g].defaults,e);if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=c[i[0][u]];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke.call(this,"disable")},enable:function(){return d._invoke.call(this,"enable")},destroy:function(){return d._invoke.call(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t){this.each(function(){var e;e=l.getWaypointsByElement(this);return n.each(e,function(e,n){n[t]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(c,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=c[n(t)[0][u]])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=c[n(t)[0][u]];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.on("load.waypoints",function(){return n[m]("refresh")})})}).call(this);;
// Generated by CoffeeScript 1.6.2
/*
Sticky Elements Shortcut for jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){(function(t,n){if(typeof define==="function"&&define.amd){return define(["jquery","waypoints"],n)}else{return n(t.jQuery)}})(window,function(t){var n,i;n={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck",direction:"down right"};i=function(t,n){var i;t.wrap(n.wrapper);i=t.parent();return i.data("isWaypointStickyWrapper",true)};t.waypoints("extendFn","sticky",function(r){var e,a,s;a=t.extend({},t.fn.waypoint.defaults,n,r);e=i(this,a);s=a.handler;a.handler=function(n){var i,r;i=t(this).children(":first");r=a.direction.indexOf(n)!==-1;i.toggleClass(a.stuckClass,r);e.height(r?i.outerHeight():"");if(s!=null){return s.call(this,n)}};e.waypoint(a);return this.data("stuckClass",a.stuckClass)});return t.waypoints("extendFn","unsticky",function(){var t;t=this.parent();if(!t.data("isWaypointStickyWrapper")){return this}t.waypoint("destroy");this.unwrap();return this.removeClass(this.data("stuckClass"))})})}).call(this);
;
/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

!function(a,b,c){var d=window.matchMedia;"undefined"!=typeof module&&module.exports?module.exports=c(d):"function"==typeof define&&define.amd?define(function(){return b[a]=c(d)}):b[a]=c(d)}("enquire",this,function(a){"use strict";function b(a,b){var c,d=0,e=a.length;for(d;e>d&&(c=b(a[d],d),c!==!1);d++);}function c(a){return"[object Array]"===Object.prototype.toString.apply(a)}function d(a){return"function"==typeof a}function e(a){this.options=a,!a.deferSetup&&this.setup()}function f(b,c){this.query=b,this.isUnconditional=c,this.handlers=[],this.mql=a(b);var d=this;this.listener=function(a){d.mql=a,d.assess()},this.mql.addListener(this.listener)}function g(){if(!a)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!a("only all").matches}return e.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(a){return this.options===a||this.options.match===a}},f.prototype={addHandler:function(a){var b=new e(a);this.handlers.push(b),this.matches()&&b.on()},removeHandler:function(a){var c=this.handlers;b(c,function(b,d){return b.equals(a)?(b.destroy(),!c.splice(d,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){b(this.handlers,function(a){a.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a=this.matches()?"on":"off";b(this.handlers,function(b){b[a]()})}},g.prototype={register:function(a,e,g){var h=this.queries,i=g&&this.browserIsIncapable;return h[a]||(h[a]=new f(a,i)),d(e)&&(e={match:e}),c(e)||(e=[e]),b(e,function(b){d(b)&&(b={match:b}),h[a].addHandler(b)}),this},unregister:function(a,b){var c=this.queries[a];return c&&(b?c.removeHandler(b):(c.clear(),delete this.queries[a])),this}},new g});
;
/*! appendAround markup pattern. [c]2012, @scottjehl, Filament Group, Inc. MIT/GPL */
(function( $ ){
	$.fn.appendAround = function(){
	  return this.each(function(){

	    var $self = $( this ),
	        att = "data-set",
	        $parent = $self.parent(),
	        parent = $parent[ 0 ],
	        attval = $parent.attr( att ),
	        $set = $( "["+ att +"='" + attval + "']" );

		function isHidden( elem ){
			return $(elem).css( "display" ) === "none";
		}

		function appendToVisibleContainer(){
			if( isHidden( parent ) ){
				var found = 0;
				$set.each(function(){
					if( !isHidden( this ) && !found ){
						$self.appendTo( this );
						found++;
						parent = this;
					}
				});
	      	}
	    }

	    appendToVisibleContainer();

	    $(window).bind( "resize", appendToVisibleContainer );

	  });
	};
}( jQuery ));
;
//this closure reserves the $.
(function ($) {
    $.fn.extend({
        equalHeight: function (options) {
            //set default height to 0 or auto
            var defaults = {
                height:null,
                minHeight: 0,
                maxHeight: null
            };
            //merge options
            options = $.extend(defaults, options);
            //cache the children (is this the parent or a group of elements)
            var children = (this.length > 1) ? this : this.children();
            if(options.height !== null){
                //if specific height is set
                children.height(options.height);
            }else{
                //set the height to auto which releases the boxes heights
                children.css('height', 'auto');
                //loop though the elements and get their heights
                children.each(function () {
                    //if bigger than the default set to default
                    if ($(this).outerHeight() > options.minHeight) options.minHeight= $(this).outerHeight();
                    //if maxheight is set
                    if(options.maxHeight !== null){
                        if(options.minHeight > options.maxHeight) options.minHeight= options.maxHeight;
                    }
                });
                //set the height on all the children
                children.height(options.minHeight);
            }
            //return this so the jQuery chain is preserved
            return this;
        }
     });
})(jQuery);
;
(function($) {

  Drupal.jsAC.prototype.select = function (node) {
    this.input.value = $(node).data('autocompleteValue');
    if(jQuery(this.input).hasClass('form-autocomplete')){
      this.input.form.submit();
    }
  };

  Drupal.jsAC.prototype.onkeydown = function (input, e) {
    if (!e) {
      e = window.event;
    }
    switch (e.keyCode) {
      case 13: // Enter.
        if ($(input).hasClass('auto-submit')) {
          this.hidePopup(e.keyCode);
          input.form.submit();
        }
        return true;
      case 40: // down arrow.
        this.selectDown();
        return false;
      case 38: // up arrow.
        this.selectUp();
        return false;
      default: // All other keys.
        return true;
    }
  };


  $(document).ready(function() {

    // detect operating system and set a body class
    var OSName="unknown-os";
    if (navigator.appVersion.indexOf("Win")!=-1) OSName="its-windows";
    else if (navigator.appVersion.indexOf("Mac")!=-1) OSName="its-mac";
    $('body').addClass(OSName);

    // change site logo if homepage has light theme
    var lightLogo = '/sites/all/themes/de_html5/prh-logo-light.svg';
    if ($('body').hasClass('nav-light')) {
      $('#logo img').attr('src', lightLogo);
    }

    // change small screen imprint logo
    var desktopLogo = $('#logo img').attr('src');
    var mobileLogo = '/sites/all/themes/de_html5/prh-logo-mobile.svg';
    enquire.register("all and (max-width: 1171px)", {
      match : function() {
        $('#logo img').attr('src', mobileLogo);
      }, unmatch : function() {
        $('#logo img').attr('src', desktopLogo);
      }
    });

    $('.block-search-form').attr('data-set', 'menu-search');

    if ($('#slice-menu').length > 0) {
      $('ul#slice-menu').parent().attr('data-set', 'menu-section');
      $('ul#slice-menu').parent().addClass('slice-menu-nav');
    }

    // appendaround for small screen menu
    $('.block-search-form .block-inner').appendAround();
    $('.slice-menu-nav ul.menu').appendAround();
    $('.menu-block-4 ul.menu').appendAround();
    $('.menu-block-8 ul.menu').appendAround();
    $('.menu-block-7 ul.menu').appendAround();

    // window resize function
    var delay = (function(){
      var timer = 0;
      return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
      };
    })();

    // mega dropdown equal heights
    $('li.has-dropdown').mouseenter(function() {
      $(this).find('.dropdown-inner .mega-dropdown').equalHeight();
    });

    // mega dropdown set timeout delay on mouse exit
    var delayNav = function() {
      $('.dropdown-wrapper').removeClass('visible');
    };
    enquire.register("all and (min-width: 1171px)", {
      match : function() {
        $('li.has-dropdown').mouseenter(function() {
          $('.dropdown-wrapper').removeClass('visible');
          // $('.mega-dropdown').equalHeight();
        });
        $('li.has-dropdown').mouseleave(function(e) {
          $(this).find('.dropdown-wrapper').addClass('visible');
          setTimeout(delayNav, 300);
          var bottom = $(this).offset().top + $(this).outerHeight();
          if(e.pageY >= bottom) $('.dropdown-wrapper').removeClass('visible');
        });
      }
    });

    // tertiary menus
    $('.tertiary-nav li').mouseenter(function() {
      $('.dropdown-wrapper').removeClass('visible');
    });

    // tertiary menus
    $('.tertiary-nav li').mouseenter(function() {
      $('.dropdown-wrapper').removeClass('visible');
    });
    var tertiaryPrimary = $('.tertiary-nav .menu-mlid-1894 ul.menu').first();
    var tertiarySecondary = $('.tertiary-nav .menu-mlid-1894 ul.menu').last();
    var programsLink = $('.menu-mlid-4581 > a').attr('href');
    var programsHeight = $('.menu-mlid-1894 > ul.menu').outerHeight();
    $(tertiarySecondary).height(programsHeight);
    $('<li><a href="#" class="back">Back to Publishers</a></li>').prependTo(tertiarySecondary);
    $('<li><a href="'+ programsLink +'">View all Programs</a></li>').appendTo(tertiarySecondary);

    $('.tertiary-nav .menu-mlid-4581 > a').attr('href', '#');
    $('.tertiary-nav .menu-mlid-4581 > a').on('click',function() {
      console.log('on');
      $(tertiarySecondary).addClass('slidein');
      $(tertiarySecondary).removeClass('slideout');
    });
    $('.back').on('click tap',function() {
      console.log('off');
      $(tertiarySecondary).addClass('slideout');
      $(tertiarySecondary).removeClass('slidein');
    });


    // hazlitt list page equal height for borders on content / sidebars
    enquire.register("all and (min-width: 1050px)", {
      match : function() {
        $(window).load(function() {
          $('.hz-list-page .region-sidebar-first, .hz-list-page .region-content .region-inner, .hz-list-page .region-sidebar-second').equalHeight();
        });
      }, unmatch : function() {
        $('.hz-list-page .region-sidebar-first, .hz-list-page .region-content .region-inner, .hz-list-page .region-sidebar-second').css('height', '');
      }
    });

    enquire.register("all and (min-width: 800px) and (max-width: 1049px)", {
      match : function() {
        $(window).load(function() {
          $('.hz-list-page .region-content .region-inner, .hz-list-page .region-sidebar-second').equalHeight();
        });
      }, unmatch : function() {
        $('.hz-list-page .region-content .region-inner, .hz-list-page .region-sidebar-second').css('height', '');
      }
    });

    // hazlitt article page > move header image on small screen
    enquire.register("all and (max-width: 1171px)", {
      match : function() {
        $('.right-col .image-wrap').prependTo('.left-col');
      }, unmatch : function() {
        $('.left-col .image-wrap').prependTo('.right-col');
      }
    });

    // hazlitt index page > sidebar move for small screen layout
    enquire.register("all and (max-width: 1049px)", {
      match : function() {
        $('.hz-the-latest').prependTo('.region-sidebar-second');
      }, unmatch : function() {
        $('.hz-the-latest').prependTo('.region-sidebar-first');
      }
    });

    // hazlitt bookshop
    $('.bookshop .top-2').equalHeight();

    // hazlitt > not hazlitt
    if (!$('.page').hasClass('hazlitt-magazine') && !$('body').hasClass('node-type-poetry')) {
      $('body').addClass('not-hz');
    }

    // mobile menu > sidr
    $('.mobile-menu-btn').sidr({
      name: 'zone-mobile-wrapper',
      side: 'right',
    });

    // menu expand/collapse
    $('.slice-title').closest('a').addClass('slice-title-link');
    var imprintTitle = $('.slice-title-link').clone();
    if ($('#slice-menu').length > 0) {
      $(imprintTitle).prependTo('.mobile-section');
    }
    if ($('.page').hasClass('hazlitt-magazine')) {
      $('<h2 class="nav-title"><a href="/hazlitt">Hazlitt Magazine</a></h2>').prependTo('.mobile-section');
    }
    $('<h2 class="global-title"><a href="/" title="Return to the Penguin Random House Canada home page">Penguin Random House Canada</a></h2>').prependTo('.mobile-primary');

    // kill sidr when clicking outside nav
    $('.page').on('click', function(e) {
      if (!$(e.target).hasClass('mobile-menu-btn') && $('body').hasClass('sidr-open') && !$(e.target).closest('.zone-mobile-wrapper').length) {
        $.sidr('close', 'zone-mobile-wrapper');
      }
    });

    enquire.register("all and (max-width: 1171px)", {
      match : function() {
        $('.mobile-nav-container li.expanded ul').addClass('hidden');
        $('.mobile-nav-container li.expanded ul').before('<span class="expander">Expand</span>');
        $('.mobile-nav-container .expander').on('click tap',function() {
          $(this).toggleClass('active');
          $(this).next('ul.menu').toggleClass('hidden');
        });
      }, unmatch : function() {
        $('.mobile-nav-container .expander').toggleClass('hidden');
      }
    });


    // search button toggle
    $('.search-btn').bind('click',searchToggleClick);
    function searchToggleClick() {
      $('.search-btn').toggleClass('active');
      if ($('.section-header').hasClass('nav-small')) {
        $('.section-header.nav-small .block-search-form .block-inner').toggleClass('visible');
        $('.section-header.nav-small .block-search-form .block-inner').toggleClass('fadein');
      }
      else {
        if ($('body').hasClass('hazlitt-menu')) {
          $('.block-menu-block-7 #edit-search-feature-block--2').toggleClass('hidden');
        }
        $('.block-search-form .block-inner').toggleClass('visible');
        $('.block-search-form .block-inner').toggleClass('fadein');
        $('.region-masthead').toggleClass('border-none');
        if ($('body').hasClass('front')) {
          $('body.front').toggleClass('search-open');
        }
      }
      $('#search-feature-block-form input.form-text').focus();
    }

    // search field placeholder
    $('input[name$="search"]').attr('placeholder', 'Title, Author, ISBN, or Keyword');
    $('#edit-search-feature-block--2 input.form-text').attr('placeholder', 'Search');

    // check if element is visible (photo essays)
    $('.image-field-wrapper').waypoint(function(direction) {
      if(direction == "down") {
        $(this).addClass('pop-up');
      }
    }, {
      offset: '110%'
    });

    if ($('body').hasClass('nav-light')) {
      var light = 'nav-light';
    }

    var diff = $(document).height() - $(window).height();

    if (!$('body').hasClass('hazlitt-menu')) {
      $('.nav-toggle').bind('click',navToggleClick);
      if (diff > 100) {
        enquire.register("all and (min-width: 1139px)", {
          match : function() {
            $('.menu-block-4').waypoint(function(direction) {
              if(direction == "down" && ($('.nav-toggle').offset().top > 0)) {
                $('.section-header').addClass('nav-small');
                if ($('body').hasClass('search-open')) {
                  $('body').removeClass('search-open');
                }
                if (light) {
                  $('body').removeClass('nav-light');
                  $('#logo img').attr('src','/sites/all/themes/de_html5/prh-logo.svg')
                }
              }
            }).waypoint(function(direction) {
              if(direction == "up") {
                if (light) {
                  $('body').addClass('nav-light');
                  $('#logo img').attr('src','/sites/all/themes/de_html5/prh-logo-light.svg')
                }
                if ($('.block-search-form .block-inner').hasClass('visible')) {
                  $('.block-search-form .block-inner').removeClass('visible');
                  $('.search-btn').toggleClass('active');
                }
                $('.section-header').removeClass('nav-small');
                $('.section-header').removeClass('show-nav');
              }
            }, {
              offset: 0
            });
          }, unmatch : function() {
            $('.section-header').removeClass('nav-small');
            $.waypoints('destroy');
          }
        });
      }
    }

    // imprint nav
    if ($('#slice-menu').length > 0) {
      if (diff > 100) {
        enquire.register("all and (min-width: 1139px)", {
          match : function() {
            $('.slice-menu').waypoint(function(direction) {
              if(direction == "down" && ($('.nav-toggle').offset().top > 0)) {
                $(this).insertAfter('.nav-toggle-block');
                $('.block-prhc-slices .field-name-field-logo').insertAfter('.nav-toggle-block');
              }
            }, {
              offset: 0
            }).waypoint(function(direction) {
              if(direction == "up") {
                $(this).appendTo('.block-prhc-slices .item-list');
                $('.region-navigation .field-name-field-logo').prependTo('.block-prhc-slices .ds-1col');
              }
            }, {
              offset: 0
            });
          }, unmatch : function() {
             $('.section-header').removeClass('nav-small');
            $.waypoints('destroy');
          }
        });
      }
    }

    // -- SEARCH FILTERS --

    enquire.register("all and (max-width: 799px)", {
      match : function() {
        if ($('.block-facetapi').length > 0) {
          if ($('.block-facetapi').length > 2) {
            $('.region-sidebar-first-inner').prepend('<a id="search-filters-toggle" class="search-filters btn" href="">Filters</a>');
            $('#search-filters-toggle').bind('click', filterBtnClick);
            $('.block-facetapi').addClass('hidden');
          }
          $('.block-facetapi .content').addClass('hidden');
          $('.block-facetapi h2').addClass('search-filters btn');
          $('.block-facetapi h2').bind('click', facetClick);
          $sidebar_facets = $('#region-sidebar-first').detach();
          $sidebar_facets.appendTo('.search-page .view-filters');
        }
        $('#search-filters-toggle').click(function() {
          $(this).toggleClass('expanded');
        });
      }, unmatch : function() {
        if ($('.block-facetapi').length > 0) {
          $sidebar_facets = $('#region-sidebar-first').detach();
          $sidebar_facets.insertBefore('#region-content');
          $('#search-filters-toggle').remove();
          $('.block-facetapi .content').removeClass('hidden');
          $('.block-facetapi h2').removeClass('search-filters btn');
          $('.block-facetapi h2').unbind('click', facetClick);
          $('.block-facetapi').removeClass('hidden');
        }
      }
    });

    function facetClick() {
      if($(this).parent().find('.content.hidden').length > 0) {
        $(this).parent().find('.content').removeClass('hidden');
      } else {
        $(this).parent().find('.content').addClass('hidden');
      }
    }

    function filterBtnClick(event) {
      event.preventDefault();
      if($('.block-facetapi.hidden').length > 0) {
        $('.block-facetapi').removeClass('hidden');
      }else{
        $('.block-facetapi').addClass('hidden');
      }
    }

    // -- END -- SEARCH FILTERS --

    // mobile menu
    $('.accordion-menus .accordion-toggle').click(function(e) {
      $(this).toggleClass('active');
      $the_lists = $(this).siblings();
      $the_lists.each(function() {
        if ($(this).children('ul').hasClass('active')) {
          $(this).children('ul').removeClass('active');
          $(this).removeClass('active');
        }
        else {
          $(this).children('ul').addClass('active');
          $(this).addClass('active');
        }
      })
    });

    // mobile menu > hazlitt
    $('.menu-mlid-4026 .col-full li').addClass('hz-sect');
    enquire.register("all and (max-width: 1172px)", {
      match : function() {
        $('li.hz-sect').prependTo('.mobile-section ul.menu');
        $(window).on("resize",function(e) {
          delay(function(){
            $('li.hz-sect').prependTo('.mobile-section ul.menu');
          }, 100);
        });
      }, unmatch : function() {
        $(window).on("resize",function(e) {
          delay(function(){
            $('li.hz-sect').prependTo('.menu-mlid-4026 .col-full ul');
          }, 100);
        });
      }
    });

    // hazlitt homepage
    var hazlittLogo = '/sites/all/themes/de_html5/images/hazlitt/hazlitt-logo.svg';
    enquire.register("all and (max-width: 1171px)", {
      match : function() {
        if ($('.page').hasClass('hazlitt-magazine')) {
          $('.logo').addClass('visible');
          $('a#logo').attr('href', '/hazlitt').attr('title', 'Return to the Hazlitt Magazine homepage');
          $('.logo img').attr('src', hazlittLogo).attr('alt', 'Hazlitt Magazine');
        }
      }, unmatch : function() {
        if ($('.page').hasClass('hazlitt-magazine')) {
          $('.logo').removeClass('visible');
          $('.logo img').attr('src', desktopLogo);
        }
      }
    });

    // hazlitt fiction feature block
    enquire.register("all and (min-width: 768px)", {
      match : function() {
        $(window).on("load resize",function(e) {
          delay(function(){
            var fictionHeight = $('.hz-fiction-feature .inner').height();
            $('.hz-fiction-feature .left, .hz-fiction-feature .right').equalHeight();
            $('.hz-fiction-feature .inner').height(fictionHeight);
            $('.hz-fiction-feature .inner').addClass('absolute-center');
          }, 500);
        });
      }, unmatch : function() {
        $('.hz-fiction-feature .left, .hz-fiction-feature .right').css('height', '');
        $('.hz-fiction-feature .inner').css('height', '');
        $('.hz-fiction-feature .inner').removeClass('absolute-center');
      }
    });

    $( document ).ajaxComplete(function() {
      $('form#views-exposed-form-search-page #autocomplete li, form#search-feature-block-form #autocomplete li').off('click', searchCompleteClick);
      $('form#views-exposed-form-search-page #autocomplete li, form#search-feature-block-form #autocomplete li').on('click', searchCompleteClick);
    });

    // Bind fix function to keypress on search forms
    $('form#views-exposed-form-search-page, form#search-feature-block-form').bind('keypress',pressAgain);

    function pressAgain(e) {
      if(e.which == 13) {
        if($(this).find("li.selected").length < 1){
          var press_again = jQuery.Event("keypress");
          press_again.which = 13; // 13 == Return/Enter key
          press_again.keyCode = 13;
          $(this).unbind('keypress',pressAgain);
          $(this).trigger(press_again);
          $(this).submit();
          $(this).closest('form').submit();
        }
      }
    }

    // Event handler for autocomplete keypress as well
    $('form#views-exposed-form-search-page #autocomplete, form#search-feature-block-form #autocomplete').keypress(function(){
      if(e.which == 13) {
        if($(this).find("li.selected").length < 1) {
          $(this).closest('form').submit();
        }
      }
    });

    function searchCompleteClick() {
      $(this).closest('form').find('input.form-text.form-autocomplete').focus();
      var e = jQuery.Event("keydown");
      e.which = 50; // # Some key code value
      $(this).closest('form').find('input.form-text').trigger(e);
      $(this).closest('form').submit();w
    }

    // END -- Fixing search input & submitting issues

    fixTheNav();

    function trackNavToggle() {
      ga('send', 'event', 'Toggle Nav ON', 'click', 'Navigation');
      $('a.nav-toggle').off('click', trackNavToggle);
    }

    if ( $('body').hasClass('not-logged-in') ) {
      $('a.nav-toggle').on('click', trackNavToggle);

      $('#block-menu-block-4 ul.menu li > a:first-child').click(function(){
        ga('send', 'event', $(this).text(), 'click', 'Navigation');
      });

    }

  }); // end of document.ready

    $(window).load(function(){
      fixTheNav();
    }); // End window.load

    // hazlitt homepage layout mid size
    enquire.register("all and (min-width: 979px)", {
    match : function() {
      $(window).load(function(){
        checkHeights();
      });
      resizeCheck();
    }, unmatch : function() {
      $(window).on("resize",function(e) {
        delay(function(){
          resetHeights();
        }, 500);
      });
    }
  });

  function checkHeights() {
    $('.hz-popular .view-content > div').equalHeight();
    $('.hz-longform .image-feature, .hz-longform .attachment').equalHeight();
    $('.hz-latest-1 .views-row-1, .hz-latest-1 .views-row-2').equalHeight();
    $('.region-postscript-grid .row-1').equalHeight();
    $('.hz-contribs .views-row').equalHeight();
  }
  function resetHeights() {
    $('.hz-popular .view-content > div').css('height', '');
    $('.hz-longform .image-feature, .hz-longform .attachment').css('height', '');
    $('.hz-latest-1 .views-row').css('height', '');
    $('.region-postscript-grid .row-1').css('height', '');
    $('.hz-contribs .views-row').css('height', '');
  }
  function resizeCheck() {
    $(window).on("resize",function(e) {
      delay(function(){
        checkHeights();
      }, 500);
    });
  }

  // window resize function
  var delay = (function(){
    var timer = 0;
    return function(callback, ms){
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
    };
  })();



  // hazlitt homepage layout mid size
  enquire.register("all and (min-width: 979px)", {
    match : function() {
      $(window).load(function(){
        checkHeights();
      });
      resizeCheck();
    }, unmatch : function() {
      $(window).on("resize",function(e) {
        delay(function(){
          resetHeights();
        }, 500);
      });
    }
  });

  function checkHeights() {
    $('.hz-popular .view-content > div').equalHeight();
    $('.hz-longform .image-feature, .hz-longform .attachment').equalHeight();
    $('.hz-latest-1 .views-row-1, .hz-latest-1 .views-row-2').equalHeight();
    $('.region-postscript-grid .row-1').equalHeight();
    $('.hz-contribs .views-row').equalHeight();
  }
  function resetHeights() {
    $('.hz-popular .view-content > div').css('height', '');
    $('.hz-longform .image-feature, .hz-longform .attachment').css('height', '');
    $('.hz-latest-1 .views-row').css('height', '');
    $('.region-postscript-grid .row-1').css('height', '');
    $('.hz-contribs .views-row').css('height', '');
  }
  function resizeCheck() {
    $(window).on("resize",function(e) {
      delay(function(){
        checkHeights();
      }, 500);
    });
  }

  // window resize function
  var delay = (function(){
    var timer = 0;
    return function(callback, ms){
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
    };
  })();

  function fixTheNav(){
    var diff = $(document).height() - $(window).height();
    $('.nav-toggle').unbind('click',navToggleClick);
    $('.nav-toggle').bind('click',navToggleClick);
    if ($('.hazlitt-menu').length > 0) {
      if (diff > 100) {
        enquire.register("all and (min-width: 1139px)", {
          match : function() {
            if (!$('.section-header').parent().hasClass('sticky-wrapper')) {
              $('.section-header').waypoint('sticky', {
                direction: 'down right',
                stuckClass: 'stuck',
                wrapper: '<div class="sticky-wrapper" />',
                offset: 0
              });
            }
          }, unmatch : function() {
            $.waypoints('destroy');
            $('.section-header').waypoint('disable');
            $('.section-header').waypoint('unsticky');
            $('.section-header').removeClass('show-nav');
            $('.menu-mlid-1896 a').unbind('click',socialClick);
          }
        });
      }
    }
  }

  function navToggleClick() {
    $('.section-header').toggleClass('show-nav');
    if ($('.block-search-form .block-inner').hasClass('visible')) {
      $('.block-search-form .block-inner').removeClass('visible');
      $('.search-btn').toggleClass('active');
      $('.region-masthead').toggleClass('border-none');
      if ($('body').hasClass('hazlitt-menu')) {
        $('.block-menu-block-7 #edit-search-feature-block--2').toggleClass('hidden');
      }
    }
  }

  function socialClick() {
    $('.menu-mlid-1896 .menu').toggleClass('visible');
    $('.menu-mlid-1896 .menu').toggleClass('fadein');
  }

/* -- END SEARCH FILTERS -- */

})(jQuery);
;
(function ($, Drupal, window, document) {
  $(window).load(function() {

    if($('#article-wrap .footnote').length > 0) {
      var $footnote_wrapper = $("<div>").attr('id','footnote-wrapper').addClass('footnote-wrapper');
      var $footnote_container = $("<div>").attr('id','footnote-container').addClass('footnote-container').html($footnote_wrapper);
      $('.left-col').append($footnote_container);
      var contain_offset = $('.right-col').offset().top;
      var footnote_index = 0;
      var footnote_height = $('.left-col').height();
      var addHeight = 0;
      $('#article-wrap .footnote').each(function() {
        var footnote_offset = ($(this).offset().top * 0.994) - contain_offset;
        if (footnote_offset < footnote_height) {
          footnote_offset = footnote_height;
        }
        var footnote_num = $('#article-wrap .footnote-ref').eq(footnote_index).html();
        var $footnote = $(this).detach();
        var $footnote_ref_link = $("<a>").attr('href','#'+'footnote-'+footnote_num).text(footnote_num);
        $('#article-wrap .footnote-ref').eq(footnote_index).html($footnote_ref_link);
        var $new_footnote = $("<div>").attr('id','footnote-'+footnote_num).html($footnote).addClass('footnote').css('top',footnote_offset);
        $('#footnote-wrapper').append($new_footnote);
        footnote_index ++;
        addHeight = $new_footnote.height();
        footnote_height = footnote_offset + addHeight;
      });
      var articleMax = (contain_offset + $('#article-wrap').height());
      $('div.footnote').each(function(){
        var thisOffset = $(this).offset().top;
        if(($(this).offset().top + $(this).height()) > articleMax){
          $(this).css('top', ($(this).offset().top - (($(this).offset().top + $(this).height()) - articleMax)- contain_offset -50) );
        }
        if(typeof prevPos != 'undefined' && (thisOffset >= prevPos) && (thisOffset <= (prevPos + prevHeight))){
          $(this).css('top', prevPos + prevHeight + 20 );
          $(this).addClass('bumped');
        }
        prevPos = $(this).offset().top - contain_offset;
        prevHeight = $(this).height();
      });
      var footnotes_height = prevPos + prevHeight - contain_offset;
      if(footnotes_height > $('#article-wrap').height()){
        $('#article-wrap').height(footnotes_height);
      }
    }

    enquire.register("all and (max-width : 1172px)", {
      match : function() {
        var $footnote_container = $('.footnote-container');
        $('.footnote-container').detach();
        $('#article-wrap .field-name-body').append($footnote_container);
      }, unmatch : function() {
        var $footnote_container = $('.footnote-container');
        $('.footnote-container').detach();
        $('.left-col').append($footnote_container);
      }
    });

  });

})(jQuery, Drupal, this, this.document);
;
/*! Sidr - v1.2.1 - 2013-11-06
 * https://github.com/artberri/sidr
 * Copyright (c) 2013 Alberto Varela; Licensed MIT */
(function(e) {
    var t = !1,
        i = !1,
        n = {
            isUrl: function(e) {
                var t = RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
                return t.test(e) ? !0 : !1
            },
            loadContent: function(e, t) {
                e.html(t)
            },
            addPrefix: function(e) {
                var t = e.attr("id"),
                    i = e.attr("class");
                "string" == typeof t && "" !== t && e.attr("id", t.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-id-$1")), "string" == typeof i && "" !== i && "sidr-inner" !== i && e.attr("class", i.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-class-$1")), e.removeAttr("style")
            },
            execute: function(n, s, a) {
                "function" == typeof s ? (a = s, s = "sidr") : s || (s = "sidr");
                var r, d, l, c = e("#" + s),
                    u = e(c.data("body")),
                    f = e("html"),
                    p = c.outerWidth(!0),
                    g = c.data("speed"),
                    h = c.data("side"),
                    m = c.data("displace"),
                    v = c.data("onOpen"),
                    y = c.data("onClose"),
                    x = "sidr" === s ? "sidr-open" : "sidr-open " + s + "-open";
                if ("open" === n || "toggle" === n && !c.is(":visible")) {
                    if (c.is(":visible") || t) return;
                    if (i !== !1) return o.close(i, function() {
                        o.open(s)
                    }), void 0;
                    t = !0, "left" === h ? (r = {
                        left: p + "px"
                    }, d = {
                        left: "0px"
                    }) : (r = {
                        right: p + "px"
                    }, d = {
                        right: "0px"
                    }), u.is("body") && (l = f.scrollTop(), f.css("overflow-x", "hidden").scrollTop(l)), m ? u.addClass("sidr-animating").css({
                        width: u.width(),
                        position: "absolute"
                    }).animate(r, g, function() {
                        e(this).addClass(x)
                    }) : setTimeout(function() {
                        e(this).addClass(x)
                    }, g), c.css("display", "block").animate(d, g, function() {
                        t = !1, i = s, "function" == typeof a && a(s), u.removeClass("sidr-animating")
                    }), v()
                } else {
                    if (!c.is(":visible") || t) return;
                    t = !0, "left" === h ? (r = {
                        left: 0
                    }, d = {
                        left: "-" + p + "px"
                    }) : (r = {
                        right: 0
                    }, d = {
                        right: "-" + p + "px"
                    }), u.is("body") && (l = f.scrollTop(), f.removeAttr("style").scrollTop(l)), u.addClass("sidr-animating").animate(r, g).removeClass(x), c.animate(d, g, function() {
                        c.removeAttr("style").hide(), u.removeAttr("style"), e("html").removeAttr("style"), t = !1, i = !1, "function" == typeof a && a(s), u.removeClass("sidr-animating")
                    }), y()
                }
            }
        },
        o = {
            open: function(e, t) {
                n.execute("open", e, t)
            },
            close: function(e, t) {
                n.execute("close", e, t)
            },
            toggle: function(e, t) {
                n.execute("toggle", e, t)
            },
            toogle: function(e, t) {
                n.execute("toggle", e, t)
            }
        };
    e.sidr = function(t) {
        return o[t] ? o[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "function" != typeof t && "string" != typeof t && t ? (e.error("Method " + t + " does not exist on jQuery.sidr"), void 0) : o.toggle.apply(this, arguments)
    }, e.fn.sidr = function(t) {
        var i = e.extend({
                name: "sidr",
                speed: 200,
                side: "left",
                source: null,
                renaming: !0,
                body: "body",
                displace: !0,
                onOpen: function() {},
                onClose: function() {}
            }, t),
            s = i.name,
            a = e("#" + s);
        if (0 === a.length && (a = e("<div />").attr("id", s).appendTo(e("body"))), a.addClass("sidr").addClass(i.side).data({
            speed: i.speed,
            side: i.side,
            body: i.body,
            displace: i.displace,
            onOpen: i.onOpen,
            onClose: i.onClose
        }), "function" == typeof i.source) {
            var r = i.source(s);
            n.loadContent(a, r)
        } else if ("string" == typeof i.source && n.isUrl(i.source)) e.get(i.source, function(e) {
            n.loadContent(a, e)
        });
        else if ("string" == typeof i.source) {
            var d = "",
                l = i.source.split(",");
            if (e.each(l, function(t, i) {
                d += '<div class="sidr-inner">' + e(i).html() + "</div>"
            }), i.renaming) {
                var c = e("<div />").html(d);
                c.find("*").each(function(t, i) {
                    var o = e(i);
                    n.addPrefix(o)
                }), d = c.html()
            }
            n.loadContent(a, d)
        } else null !== i.source && e.error("Invalid Sidr Source");
        return this.each(function() {
            var t = e(this),
                i = t.data("sidr");
            i || (t.data("sidr", s), "ontouchstart" in document.documentElement ? (t.bind("touchstart", function(e) {
                e.originalEvent.touches[0], this.touched = e.timeStamp
            }), t.bind("touchend", function(e) {
                var t = Math.abs(e.timeStamp - this.touched);
                200 > t && (e.preventDefault(), o.toggle(s))
            })) : t.click(function(e) {
                e.preventDefault(), o.toggle(s)
            }))
        })
    }
})(jQuery);
;
