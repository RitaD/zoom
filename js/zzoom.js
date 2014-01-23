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
            width: $image.width() * 2,
            height: $image.height() * 2,
            display: 'block',
            'z-index': 100
          });
        },

        mousemove: function(e) {
          var offset = $(this).offset();
          var mouse = {x: e.clientX - offset.left , y: e.clientY - offset.top};
          var amountMovedX = (mouse.x * -5.8 / 6);
          var amountMovedY = (mouse.y * -5.8 / 6);
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