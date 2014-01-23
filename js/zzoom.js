(function( $ ) {

  $.fn.zzoom = function() {
    this.each( function() {
      var $image = $('.zzomIn').find('.zoom');
      var imageSrc = $image.attr('src');
      var imageData = $image.data('img');
      var boxWidth = $(".zzomIn").width();
      var boxHeight = $(".zzomIn").height();

      $('.zoom')
        .width(boxWidth)
        .height(boxHeight);

      $('.zzomIn').on({

        mouseenter: function() {
          $image.attr("src",((imageData)));
           $image.css({
            width: "200%",
            height: "200%",
            display: 'block',
            'z-index': 100
          });
        },

        mousemove: function(e) {
          var amountMovedX = (e.pageX * -5.5 / 6);
          var amountMovedY = (e.pageY * -5.9 / 6);
           $image.css ({
            'top' : amountMovedY,
            'left': amountMovedX,
            'position' : 'relative'
          });
        },

        mouseleave: function() {
          $image.attr("src",((imageSrc)));
          $image
            .width(boxWidth)
            .height(boxHeight);
          $image.css({
            top: 0,
            left: 0,
            'z-index': 99
          });
        }
      });
    });
  };

  return this;
}( jQuery ));