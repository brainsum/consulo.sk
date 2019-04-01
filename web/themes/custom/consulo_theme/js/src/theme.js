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
          autoplay: true,
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
