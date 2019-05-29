/**
 * @file
 * Slick slider configs.
 */

(function ($) {
  'use strict';

  Drupal.behaviors.frontpageSlider = {
    attach: function (context) {
      var slickElement = $('.slick_slider', context);

      if (slickElement.length > 0) {
        slickElement.not('.slick-initialized').slick({
          adaptiveHeight: false,
          accessibility: false,
          arrows: true,
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="icon icon--arrow-left"></i></button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="icon icon--arrow-right"></i></button>',
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 3000,
          speed: 800,
          dots: true,
          fade: true,
          pauseOnFocus: false,
          pauseOnHover: false,
          swipe: true,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: false
              }
            }
          ]
        });
      }
    }
  };

  Drupal.behaviors.aboutSlider = {
    attach: function (context) {

      if ($('.slick_slider_4', context).length > 0) {
        $('.slick_slider_4', context).not('.slick-initialized').slick({
          accessibility: false,
          arrows: false,
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          lazyLoad: 'ondemand',
          adaptiveHeight: true,
          autoplaySpeed: 3000,
          speed: 800,
          dots: false,
          fade: true,
          pauseOnFocus: false,
          pauseOnHover: false,
          swipe: true
        });
      }

      if ($('.slick_slider_5', context).length > 0) {
        $('.slick_slider_5', context).not('.slick-initialized').slick({
          accessibility: false,
          arrows: false,
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          lazyLoad: 'ondemand',
          adaptiveHeight: true,
          autoplaySpeed: 3000,
          speed: 800,
          dots: false,
          fade: true,
          pauseOnFocus: false,
          pauseOnHover: false,
          swipe: true
        });
      }

      if ($('.slick_slider_6', context).length > 0) {
        $('.slick_slider_6', context).not('.slick-initialized').slick({
          accessibility: false,
          arrows: false,
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          lazyLoad: 'ondemand',
          adaptiveHeight: true,
          autoplaySpeed: 3000,
          speed: 800,
          dots: false,
          fade: true,
          pauseOnFocus: false,
          pauseOnHover: false,
          swipe: true
        });
      }
    }
  };

  Drupal.behaviors.quotesslider = {
    attach: function (context) {
      var quouesSlider = $('.view-partner-quotes > .view-content', context);

      if (quouesSlider.length > 0 ) {
        quouesSlider.slick({
          accessibility: false,
          autoplay: true,
          arrows: true,
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="icon icon--arrow-left"></i></button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="icon icon--arrow-right"></i></button>',
          slidesToShow: 1,
          slidesToScroll: 1,
          lazyLoad: 'ondemand',
          adaptiveHeight: true,
          autoplaySpeed: 4000,
          speed: 800,
          dots: true,
          pauseOnFocus: false,
          pauseOnHover: false,
          swipe: true
        });
      }
    }
  };

})(jQuery);
