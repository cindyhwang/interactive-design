/* global jQuery:false */
/* global twig, _, Modernizr */

(function($, twig, _, Modernizr){
    "use strict";

    var windowWidth = $(window).width(),
        contentHeight = $('#content').height(),
        contentWrapperHeight = $('.content-wrapper').height(),
        throttleDelay = 100,
        debounceDelay = 500,
        isFootnoteScroll = false;

    $(function() {

        var $body = $('body'),
            $nav = $('.hp-nav'),
            isTouch = Modernizr.touch;

        ////////////////////////
        //* Site Navigation
        ////////////////////////

        function hideNav() {
            $body.addClass('nav-hiding');
            $body.removeClass('nav-active');
            setTimeout(function() {
                $body.removeClass('nav-hiding');
            }, 200);
        }

        function fixSvgs() {
            $('img').each(function() {
                var $img = $(this);
                var src = $img.attr('src');
                if (src.indexOf('.svg') > 0) {
                    src = src.replace('.svg', '.png');
                    $img.attr('src', src);
                }
            });
        }
        if ($('html').hasClass('no-svg')) {
            fixSvgs();
        }

        function hideSearch() {
            $body.addClass('search-hiding');
            $body.removeClass('search-active');
            setTimeout(function() {
                $body.removeClass('search-hiding');
            }, 200);
        }

        // Show/Hide Navigation
        $('.js-nav-trigger').on('click', function(e) {
            e.preventDefault();

            if ($body.hasClass('nav-active')) {
                hideNav();
            } else {
                $body.addClass('nav-active');
                if ($body.hasClass('search-active')) {
                    hideSearch();
                }
            }
        });

        // Show/Hide Search
        $('.js-search-trigger').on('click', function(e) {
            e.preventDefault();

            if ($body.hasClass('search-active')) {
                hideSearch();
            } else {
                $body.addClass('search-active');
                $('.nav-search-input:visible').focus();
                if ($body.hasClass('nav-active')) {
                    hideNav();
                }
            }
        });

        // Smooth scroll to anchor links
        $('.subnav-link, .smooth-scroll').on('click', function(e) {
            e.preventDefault();
            if ($(e.target).attr('href') === "/submissions/submit-now/") {
                window.location.href = "/submissions/submit-now/";
            } else {
                $('body,html').animate({
                    'scrollTop': $($(e.target).attr('href')).offset().top - 80
                }, 700);
            }
        });

        // this handles scrool to and from footnotes
        $('a[name*="_ftn"]').click(function(e) {
            e.preventDefault();

            var $clickTarget,
                footTargetName,
                $anchor;

            isFootnoteScroll = true; // prevent ribbon from appearing

            // select the anchor
            if (e.target.hash) {
                $clickTarget = $(e.target);
            } else {
                $clickTarget = $($(e.target).parent());
            }

            //set target position and animate to that footnote
            footTargetName = $clickTarget.attr('href').slice(1,this.length);
            $anchor = $('a[name="' + footTargetName + '"]');
            $('body,html').animate({
                'scrollTop': $anchor.offset().top - 80
            }, 700, function (){ // callback to enable ribbon
                isFootnoteScroll = false;
            });
        });

        // Smooth scroll to top of page
        $('.js-scroll-to-top').on('click', function(e) {
            e.preventDefault();

            $('body,html').animate({
                'scrollTop': 0
            }, 500);
        });

        // Toggle Subnav Open/Closed
        $('.js-subnav-trigger').on('click', function(e) {
            e.preventDefault();

            if ($body.hasClass('subnav-active')) {
                $body.removeClass('subnav-active');
            } else {
                $body.addClass('subnav-active');
            }
        });

        ////////////////////////
        //* Article Id Nav
        ////////////////////////

        //check if .article.body exists
        if ($('.single-post')[0]) {

            var articlePos = $('.article-body').position().top,
                articleHeight = $('.article-body').height(),
                windowHeight = window.innerHeight,
                lastScroll = 0;

            if (articleHeight > window.innerHeight) {
                if (!isTouch) {

                    $(window).on('scroll', _.throttle(function() {
                            var scrollTop = $(window).scrollTop();
                            lastScroll = ribbonNav(scrollTop, lastScroll, windowHeight, articleHeight, articlePos);
                            // call ribbonNav() to set ribbon-active
                            articleIdNav(scrollTop, windowHeight, articleHeight, articlePos);
                            // call articleIdNav to set article-id-active in nav
                        }, throttleDelay));
                } else {
                    $('body').on({
                        'touchmove': _.throttle(function() {
                            var scrollTop = $(window).scrollTop();
                            lastScroll = ribbonNav(scrollTop, lastScroll, windowHeight, articleHeight, articlePos);
                            // call ribbonNav() to set ribbon-active
                            articleIdNav(scrollTop, windowHeight, articleHeight, articlePos);
                            // call articleIdNav to set article-id-active in nav

                        }, throttleDelay)
                    });
                }
            }

            $(window).resize(_.debounce(function() {
                articlePos = $('.article-body').position().top;
                articleHeight = $('.article-body').height();
            }, debounceDelay));
        }

        function articleIdNav(_scrollTop, _windowHeight, _articleHeight, _articlePos) {

            // don't check article-id-active is set
            if (!$body.hasClass('article-id-active')) {
                if ((_scrollTop >= _articlePos + 50) && (_scrollTop + _windowHeight / 2 < _articleHeight + _articlePos)) {
                    $body.addClass('article-id-active');
                }
            } else {
                if ((_scrollTop < _articlePos + 50) || (_scrollTop + _windowHeight / 2 >= _articleHeight + _articlePos)) {
                    $body.removeClass('article-id-active');
                }
            }

        }

        ////////////////////////
        //* Ribbon
        ////////////////////////

        function ribbonNav(_scrollTop, _lastScroll, _windowHeight, _articleHeight, _articlePos) {
            if (!isFootnoteScroll) { // don't activate ribbon nav if scroll is triggered by footnote click

                var scrollDelta = _lastScroll - _scrollTop;

                if (scrollDelta > 0) {

                    if (scrollDelta > 300) { // threshold for ribbon appearing: higher int means it needs faster scroll to appear
                        $body.addClass('ribbon-active');
                    }
                } else {
                    if (scrollDelta < -10) {
                        $body.removeClass('ribbon-active');
                    }
                }
                if ((_scrollTop < _articlePos + 50) || (_scrollTop + _windowHeight / 2 >= _articleHeight + _articlePos)) {
                    $body.removeClass('ribbon-active');
                }

                _lastScroll = _scrollTop;

                return _lastScroll;
            }
        }

        ////////////////////////
        //* Sticky Nav
        ////////////////////////

        // Make homepage nav stick after user scrolls past
        // TODO: Check with Pete about lodash throttle, which
        //  could minimize calls, improve performance
        if ($body.hasClass('home')) {
            var $navPos = $('.nav-mod'),
                navTop = $navPos.offset().top,
                scrollTop = $(window).scrollTop(),
                adminOffset;

            if ($body.hasClass('admin-bar')) {
                adminOffset = -31;
            } else {
                adminOffset = 0;
            }

            $(window).on('scroll',  _.throttle(function(e) {
                e.preventDefault();
                navTop = $navPos.offset().top;
                scrollTop = $(window).scrollTop();

                // don't check pos if already has sticky
                if (!$body.hasClass('nav-sticks')) {

                    if (scrollTop >= navTop + adminOffset) {
                        $body.addClass('nav-sticks');
                    }

                } else {

                    if (scrollTop < navTop + adminOffset) {
                        $body.removeClass('nav-sticks');
                    }
                }
            }, throttleDelay));

            $(window).resize(_.debounce(function() {

                navTop = $navPos.offset().top;

            }, debounceDelay));
        }

        ////////////////////////
        //* Show More
        ////////////////////////

        // Toggle Content Open/Closed
        $('.js-show-more').on('click', function(e) {
            e.preventDefault();

            var $trigger = $(this);
            var $mod = $trigger.closest('.more-mod');

            if ($mod.hasClass('content-open')) {
                $trigger.text('Show More');
                $mod.removeClass('content-open');
            } else {
                $trigger.text('Show Less');
                $mod.addClass('content-open');
            }
        });


        ////////////////////////
        //* Staff List
        ////////////////////////

        // Toggle Staff List Open/Closed
        $('.js-staff-select-trigger').on('click', function(e) {
            e.preventDefault();

            if ($body.hasClass('staff-select-active')) {
                $body.removeClass('staff-select-active');
            } else {
                $body.addClass('staff-select-active');
            }
        });


        ////////////////////////
        //* Footnotes
        ////////////////////////

        // Show/Hide Article Asides & Footnotes
        $($body).on('click', '.js-article-aside-trigger', function() {
            var $trigger = $(this),
                $aside = $trigger.parent().siblings('.article-aside');

            console.log($trigger);
            console.log($aside);

            if ($trigger.hasClass('aside-active')) {
                $trigger.removeClass('aside-active');
                $aside.removeClass('aside-active');
            } else {
                $trigger.addClass('aside-active');
                $aside.addClass('aside-active');
            }
        });

        // alternates asides and places asides in center if short article
        function alternateAsides() {
            var asides = $('.article-aside');
            asides.not(':odd').addClass('right');

            var articleText = $('.article-txt').text();
            var articleParas = $('.article-txt p').length;

            if (articleText.length < 2500 || articleParas <= 1) {
                asides.removeClass('right').addClass('center-aside');
            }
        }

        // Abridge Long Footnotes
        function abridgeAside(isFirst) {
            var $aside = $('.case-comment .article-aside-txt, .footnote'),
                trigger_btn = '<button class="article-aside--more-link js-article-unabridge-trigger">Show More</button>';

            if ($aside.length > 0){
                $aside.each(function() {
                    var $this = $(this);
                    // if aside is too long, abridge it and add a show more/less button
                    var cropHeight = 190;
                    if ($this.hasClass('short-crop')){
                        cropHeight = 105;
                    }
                    if ($this.height() > cropHeight && !$this.hasClass('center-aside')) {
                        $this.addClass('article-aside--abridged').append(trigger_btn);
                    } else {
                        console.log('no abridge');
                    }
                    // check the content height at each aside for overlap with footer
                    alreadyAbridged = true;
                });
            }
            setContentHeight(true);
        }

        // changes the height of the content div to accomodate longe footnotes
        function setContentHeight(isFirst) {
            var $asides = $('.article-aside').not('.center-aside');

            if ($asides.length > 0) {
                var $lastaside = $asides.last(),
                    maxFootOffset = $lastaside.offset().top + $lastaside.height();

                // find the lowest aside position and set that to maxFootOffset
                $asides.each(function() {
                    var $this = $(this);
                    if ($this.offset().top + $this.height() > maxFootOffset) {
                        maxFootOffset = $this.offset().top + $this.height();
                    }
                });

                // if it's the first time opening page only adjust height if greater than footnote pos offset + height
                if (isFirst) {
                    if (maxFootOffset + 300 > contentHeight) {
                        animateHeightChange( maxFootOffset, maxFootOffset, -100);
                    }
                } else { // if user clicked show more/less
                    if (maxFootOffset + 100 > contentHeight) {
                        animateHeightChange( maxFootOffset, maxFootOffset, -200);
                    } else {
                        animateHeightChange( contentWrapperHeight, contentHeight, -400);
                    }
                }
            }
        }

        // function will animate change in height, takes the height params that setContentHeight calculates
        function animateHeightChange(wrapperHeight, conHeight, heightOffset) {
            // the two DOM elements we want to animate
            var $contentWrapper = $('.content-wrapper');
            var $content = $('#content');

            // animate height change together
            $contentWrapper.animate({height: wrapperHeight + heightOffset + "px"}, { duration: 300, queue: false });
            $content.animate({height: conHeight + 400 + heightOffset + "px"}, { duration: 300, queue: false });
        }

        var alreadyAbridged = false;
        alternateAsides();

        // abridge the asides if dosktop environment
        if(windowWidth > 1024) {
            var isFirst = true;
            abridgeAside(isFirst);
        }

        // abridge the asides on window resezie
        $(window).resize(_.debounce(function() {
            windowWidth = $(window).width();
            contentHeight = $('#content').height();
            if (windowWidth > 1024 && !alreadyAbridged) {
                alternateAsides();
                abridgeAside(false);
            }
        }, debounceDelay));

        // Show/Hide Long Footnotes
        $($body).on('click', '.js-article-unabridge-trigger', function() {
            var $trigger = $(this),
                $aside = $trigger.closest('.article-aside');

            if ($aside.hasClass('article-aside--abridged')) {
                $aside.removeClass('article-aside--abridged');
                $aside.addClass('article-aside--unabridged');
                $trigger.text('Show Less');
            } else {
                $aside.removeClass('article-aside--unabridged');
                $aside.addClass('article-aside--abridged');
                $trigger.text('Show More');
            }
            setContentHeight();
        });

        var newText = $('.article-txt').html();
        if (newText && newText.indexOf('<nobr') == -1){
            newText = newText.replace(/(\S+\s?)(?=<sup class="footnote-ref)/g, '<nobr>$&');
            newText = newText.replace(/sup>/g, 'sup></nobr>');
            $('.article-txt').html(newText);
        }

        ////////////////////////
        //* Typography
        ////////////////////////

        // Page Headers
        $('.page-hdr .page-h').fitText(0.9, {
            minFontSize: '28px',
            maxFontSize: '66px'
        });

        // Small Page Headers
        $('.page-hdr-small .page-h').fitText(0.95, {
            minFontSize: '32px',
            maxFontSize: '52px'
        });
    });

    ////////////////////////
    //* Pagination
    ////////////////////////

    // Infinite scroll for archive pages (topics, content-types, maybe more)

    $('body').on('click', '.archive-load-more', function() {
        var $a = $(this),
            $button = $(this).closest('.l-btn'),
            url = $a.attr('href');

        if (url.indexOf('api=true') < 0) {
            url += '?api=true';
        }

        $a.html('Loading ...');

        $.ajax({
            type: 'POST',
            url: url,
            success: function(data) {
                $('.js-load-more-mod').append(data);
                $button.slideUp(function() {
                    $(this).remove();
                });
            },
            error: function() {
                $a.text('No more content to display');
            }
        });

        return false;

    });

    ////////////////////////
    //* MC Mailing List
    ////////////////////////

    // Add a flag when user begins typing
    // so we can show/hide the submit button
    $('#mce-EMAIL').keyup(function() {
        $('.ftr-mc-form').addClass('user-typing');
    });
    $('#mce-EMAIL').focusout(function() {
        $('.ftr-mc-form').removeClass('user-typing');
    });

    ////////////////////////
    //* Odds & Ends
    ////////////////////////

    // Identify second-last child in fancy grid
    $('.fancy-grid > .grid-item:nth-last-child(2)').addClass('second-last');

    // Responsive Video
    if ($('body').hasClass('single')) {

        var selectors = [
            "iframe[src*='player.vimeo.com']",
            "iframe[src*='youtube.com']",
            "iframe[src*='youtube-nocookie.com']",
            "iframe[src*='kickstarter.com'][src*='video.html']",
            "object",
            "embed"
        ];

        var $allVideos = $('body').find(selectors.join(','));

        $allVideos.each(function(){
            var $this = $(this);

            $this.wrap('<div class="video-mod"></div>');
            $this.removeAttr('height').removeAttr('width');
        });
    }

    // Pre-load Homepage Backgrounds
    if (windowWidth > 600){
        $('.cssanimations .home .swiper-slide').each(function(){
            var $slide = $(this);
            var $img = $('<img />');
            var bg = $slide.data('background-image');
            $img.attr('src', bg);
            $img.attr('style', 'display:none');
            $slide.append($img);
        });
    }

})(jQuery, twig, _, Modernizr);
