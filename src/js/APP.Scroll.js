// ==========================================
// Smooth scroll when click.
// ==========================================

var APP = APP || {};
APP.Scroll = {
  setUp: function(){
    this.getClick();
    this.getPosition();
  },

  getClick: function() {
    var target, that;

    that = this;

    // nav links
    $('.scroll').on('click', function(event) {
      event.preventDefault();
      target = $( $(this).attr('href') );

      console.log(target);

      that.smoothScroll(target, 85);

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
      if ($(document).scrollTop() >= 345) {
        $('#nav-primary').addClass('js-nav-active');
      } else if ($(document).scrollTop() <= 405) {
        $('#nav-primary').removeClass('js-nav-active');
      }
    });
  }
}
