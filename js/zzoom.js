(function( $ ) {

  $.fn.zzoom = function() {
    this.each( function() {
      var $container = $('.zzomIn');
      var boxWidth = $(".zoom").width();
      var boxHeight = $(".zoom").height();
      var $image = $container.find('.zoom');
      var $imageClone = $image.clone();
      var $imageLarge = $imageClone.width(boxWidth * 2);
      var imageH = $image.height();
      var imageW = $image.width();
      var imageLargeW = $imageLarge.width();
      var imageLargeH = $imageLarge.height();

      $('.zzomIn')
        .width(boxWidth)
        .height(boxHeight);
        
      $('.zzomIn').on({

        mouseenter: function() {
          $imageLarge.prependTo($container);
        },

        mousemove: function(e) {
          var mouseX = e.pageX - $(this).offset().left;
          var mouseY = e.pageY - $(this).offset().top;
          var amountMovedX = (Math.round((mouseX/imageW)*100)/100) * (imageLargeW - imageW);
          var amountMovedY = (Math.round((mouseY/imageH)*100)/100) * (imageLargeH - imageH);
           $imageLarge.css ({
            'top' : -amountMovedY + 'px',
            'left': -amountMovedX + 'px',
            'position' : 'relative'
          });
        },

        mouseleave: function() {
          $imageLarge.remove();
          $image.show;
        }
      });
    });
  };

  return this;
}( jQuery ));
