(function( $ ) {

  $.fn.zzoom = function() {
    this.each( function() {
      var $container = $('.zzomIn');
      var $image = $container.find('.zoom');
      var $imageW = $image.width();
      var $imageH = $image.height();
      var $containerW = $container.width($imageW);
      var $containerH = $container.height($imageH);
      var $imageClone = $image.clone();
      var $imageLarge = $imageClone.width($imageW * 2);
      var imageLargeW = $imageLarge.width();
      var imageLargeH = $imageLarge.height();

      $image
        .width($imageW)
        .height($imageH);
        
      $('.zzomIn').on({

        mouseenter: function() {
          $imageLarge.prependTo($container);
        },

        mousemove: function(e) {
          var mouseX = e.pageX - $(this).offset().left;
          var mouseY = e.pageY - $(this).offset().top;
          var amountMovedX = (Math.round((mouseX/$imageW)*100)/100) * (imageLargeW - $imageW);
          var amountMovedY = (Math.round((mouseY/$imageH)*100)/100) * (imageLargeH - $imageH);
           $imageLarge.css ({
            'top' : amountMovedY + 'px',
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
