/**
 * @file
 * Attaches behaviors for consulo_theme.
 */

'use strict';

(function drupalJqueryGrayscale($) {
  Drupal.behaviors.grayscale = {
    attach: function applyGrayscale() {
      $('.image-style-partner-logo').gray();
    }
  };

})(jQuery);
