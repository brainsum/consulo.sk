/**
 * @file
 * Attaches behaviors for consulo_theme.
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
          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1,
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
          pauseOnFocus: true,
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
          pauseOnFocus: true,
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
          pauseOnFocus: true,
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
          pauseOnFocus: true,
          swipe: true
        });
      }
    }
  };

  Drupal.behaviors.mobileMenu = {
    attach: function () {
      var hamburgerIcon;
      var closeIcon;
      var menuHolder;

      hamburgerIcon = $('.hamburger .fa');
      closeIcon = $('.close .fa');
      menuHolder = $('#block-consulo-theme-main-menu');

      hamburgerIcon.on('click', function () {
        menuHolder.addClass('active');
      });
      closeIcon.on('click', function () {
        menuHolder.removeClass('active');
      });
    }
  };


})(jQuery);
