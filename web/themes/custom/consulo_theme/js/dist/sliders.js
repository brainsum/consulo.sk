!function(s){"use strict";Drupal.behaviors.frontpageSlider={attach:function(e){var i=s(".slick_slider",e);0<i.length&&i.not(".slick-initialized").slick({adaptiveHeight:!1,accessibility:!1,arrows:!0,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button"><i class="icon icon--arrow-left"></i></button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button"><i class="icon icon--arrow-right"></i></button>',autoplay:!0,slidesToShow:1,slidesToScroll:1,autoplaySpeed:6e3,speed:800,dots:!0,fade:!0,pauseOnFocus:!1,pauseOnHover:!1,swipe:!0,responsive:[{breakpoint:768,settings:{dots:!1}}]})}},Drupal.behaviors.aboutSlider={attach:function(e){0<s(".slick_slider_4",e).length&&s(".slick_slider_4",e).not(".slick-initialized").slick({accessibility:!1,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,lazyLoad:"ondemand",adaptiveHeight:!0,autoplaySpeed:3e3,speed:800,dots:!1,fade:!0,pauseOnFocus:!1,pauseOnHover:!1,swipe:!0}),0<s(".slick_slider_5",e).length&&s(".slick_slider_5",e).not(".slick-initialized").slick({accessibility:!1,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,lazyLoad:"ondemand",adaptiveHeight:!0,autoplaySpeed:3e3,speed:800,dots:!1,fade:!0,pauseOnFocus:!1,pauseOnHover:!1,swipe:!0}),0<s(".slick_slider_6",e).length&&s(".slick_slider_6",e).not(".slick-initialized").slick({accessibility:!1,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,lazyLoad:"ondemand",adaptiveHeight:!0,autoplaySpeed:3e3,speed:800,dots:!1,fade:!0,pauseOnFocus:!1,pauseOnHover:!1,swipe:!0})}},Drupal.behaviors.quotesslider={attach:function(e){var i=s(".view-partner-quotes > .view-content",e);0<i.length&&i.slick({accessibility:!1,autoplay:!0,arrows:!0,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button"><i class="icon icon--arrow-left"></i></button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button"><i class="icon icon--arrow-right"></i></button>',slidesToShow:1,slidesToScroll:1,lazyLoad:"ondemand",adaptiveHeight:!0,autoplaySpeed:8e3,speed:800,dots:!0,pauseOnFocus:!1,pauseOnHover:!1,swipe:!0})}}}(jQuery);