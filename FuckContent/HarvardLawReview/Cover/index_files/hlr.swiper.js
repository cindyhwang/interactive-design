var SLIDEINDEX = '';

(function($) {
    "use strict";

    $(window).on('load', function(){
        if ($('html').hasClass('no-cssanimations')){
            $('.swiper-slide:gt(0)').remove();
            $('.swiper-mod').css("opacity", "100");
            return;
        }

        function getHeight(){
            var slides = $('.swiper-slide');
            slides.each(function(i){
                var $slide = $(this);
                var maybeHeight = $(this).height();
                if (!maybeHeight){
                    maybeHeight = 300;
                }
                $slide.attr('data-saved-height', maybeHeight);
            });
        }

        function fixHeights(){
            var $slides = $('.swiper-slide');
            $slides.each(function(){
                var $slide = $(this);
                var savedHeight = $slide.data('saved-height');
                $slide.height(savedHeight);
            });
        }

        function newHeight(){
            var $activeSlide = $('.swiper-slide-active');
            var setHeightTo = $activeSlide.data('saved-height');
            $('.swiper-mod').css('height', setHeightTo);
            $('.swiper-wrapper').css('height', setHeightTo);
            $('.swiper-mod').css("opacity", "100");
        }

        getHeight();

        var leadSwiper = new Swiper('.swiper-mod',{
            loop:true,
            mode:'horizontal',
            cssHeight: false,
            speed: 100,
            onTouchEnd: newHeight,
            // removes transition class after slide changes
            onSlideChangeEnd: function() {
                $('.swiper-mod').removeClass('transition-active');
                var slide = leadSwiper.activeSlide();
                var bg = slide.data('background-class');
                $("body").removeClass (function (index, css) {
                    return (css.match (/\bbg-\S+/g) || []).join(' ');
                });
                $('body').addClass(bg);
            }
        });

        $('body.home').on('keyup', function(e){
            if (e.keyCode == 37){
                $('.lead-tz-nav .swiper-prev').trigger('click');
            } else if (e.keyCode == 39){
                $('.lead-tz-nav .swiper-next').trigger('click');
            }
        });

        newHeight();

        $( window ).resize(function() {
            newHeight();
        });

        setTimeout(function(){
            fixHeights();
        }, 500);


        // Bind Prev/Next Buttons
        // (and apply new height after click)
        $('.swiper-prev').click(function(){
            $('.swiper-mod').addClass('transition-active');
            setTimeout(function(){
                leadSwiper.swipePrev();
                newHeight();
            }, 400);
        });
        $('.swiper-next').click(function(){
            $('.swiper-mod').addClass('transition-active');
            setTimeout(function(){
                leadSwiper.swipeNext();
                newHeight();
            }, 400);
        });
    });

})(jQuery);
