/**
 * @file
 * Attaches behaviors for consulo_theme.
 */

(function ($) {
  'use strict';

  Drupal.behaviors.grayscale = {
    attach: function applyGrayscale() {
      $('.image-style-partner-logo').gray();
    }
  };

})(jQuery);
