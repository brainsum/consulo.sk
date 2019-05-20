/**
 * @file
 * Attaches behaviors for consulo_theme.
 */

(function ($) {
  'use strict';

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
