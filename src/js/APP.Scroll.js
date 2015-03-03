// ==========================================
// Smooth scroll when click.
// ==========================================

var APP = APP || {};
APP.Scroll = {
  setUp: function(){
    this.getClick();
    this.getPosition();
    this.activeScroll();
  },

  getClick: function() {
    var target, that;

    that = this;

    // nav links
    $('.scroll').on('click', function(event) {
      event.preventDefault();
      target = $( $(this).attr('href') );

      that.smoothScroll(target, 100);

      // adds and removes active class
      $('.nav-item').removeClass('js-nav-active');
      $(this).parent().addClass('js-nav-active');
    });
  },

  smoothScroll: function(target, offset) {
    $('html, body').animate({
      scrollTop: target.offset().top - offset
    }, 1500);
  },

  getPosition: function() {
    $(window).on('scroll', function() {
      if ($(document).scrollTop() >= 35) {
        $('#header-primary').addClass('js-header-fixed');
      } else if ($(document).scrollTop() <= 117) {
        $('#header-primary').removeClass('js-header-fixed');
      }
    });
  },

  markerSection: function(event) {
    var that = this;
    var scrollPos = $(document).scrollTop();

    $('.scroll').each(function() {
      var currLink = $(this);
      var refElement = $(currLink.attr('href'));

      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.scroll').removeClass('js-nav-active');
        currLink.addClass('js-nav-active');
      } else {
        currLink.removeClass('js-nav-active');
      }
    });
  },

  activeScroll: function() {
    var that = this;

    $(document).on('scroll', that.markerSection);
  }
}
