(function( $ ) {

  $.fn.zzoom = function() {
    this.each( function() {
      var $image = $('.zzomIn').find('.zoom');
      var $imageLarge = $('.zzomIn').find('.zoom-plus');
      var imageH = $image.height();
      var imageW = $image.width();
      var boxWidth = $(".zoom").width();
      var boxHeight = $(".zoom").height();
      var imageLargeW = $imageLarge.width();
      var imageLargeH = $imageLarge.height();


      $('.zzomIn')
        .width(boxWidth)
        .height(boxHeight);

      $('.zzomIn').on({

        mouseenter: function() {
          $('.zoom-plus').show();
          $('.zoom').toggle();
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
          $('.zoom').toggle();
          $('.zoom-plus').hide();
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