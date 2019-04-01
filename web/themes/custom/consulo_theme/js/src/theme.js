/**
 * @file
 * Attaches behaviors for startertheme.
 */

(function ($) {
  'use strict';

  Drupal.behaviors.frontpageSlider = {
    attach: function (context) {
      var slickElement = $('.slick_slider', context);

      if (slickElement.length > 0) {
        slickElement.not('.slick-initialized').slick({
          accessibility: false,
          arrows: true,
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="fa fa-chevron-left fa-3x"></i></button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fa fa-chevron-right fa-3x"></i></button>',
          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          lazyLoad: 'ondemand',
          adaptiveHeight: true,
          autoplaySpeed: 4000,
          speed: 800,
          dots: true,
          fade: true,
          pauseOnFocus: true,
          swipe: true
        });
      }
    }
  };
})(jQuery);
