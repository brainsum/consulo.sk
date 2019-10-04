/**
 * @file
 * Attaches behaviors for consulo_theme.
 */

'use strict';

(function drupalJqueryTheme($) {
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

  Drupal.behaviors.goToTop = {
    attach: function () {
      var btn = $('#scrollToTopButton');

      $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
          btn.addClass('is-active');
        } else {
          btn.removeClass('is-active');
        }
      });

      btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
      });
    }
  };

})(jQuery);
