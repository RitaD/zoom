(function( $ ) {

  $.fn.zzoom = function() {
    this.each( function() {
      var $image = $('.zzomIn').find('#zoom');
      var $circle =  $( "<div></div>");
      var mouseX;
      var mouseY;

      $('.zzomIn').on({
        mouseenter: function() {
           $image.css({
            width: "200%",
            height: "200%",
            display: 'block',
            'z-index': 0
          });
        },

        mousemove: function(e) {
          var amountMovedX = (e.pageX * -5.5 / 6);
          var amountMovedY = (e.pageY * -5.9 / 6);
          mouseX = e.clientX;
          mouseY = e.clientY;
           $image.css ({
            'top' : amountMovedY,
            'left': amountMovedX,
            'position' : 'relative'
          });
        },

        mouseleave: function() {
          $image.css({
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            'z-index': 100
          });
        }
      });
    });
  };

  return this;
}( jQuery ));