// ==========================================
// Some Components that use jQuery
// ==========================================

var APP = APP || {};
APP.Components = {
  setUp: function(){
    this.selectCustom();
  },

  selectCustom: function() {
    $('.select').ddslick({
      onSelected: function(data) {
        console.log(data);
      }
    });

  }
}
