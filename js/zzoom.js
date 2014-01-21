(function( $ ) {

  $.fn.zzoom = function() {



    this.each( function() {

      var $image = $('.zzomIn').find('#zoom');

      var $circle =  $( "<div></div>");

      var mouseX;
      var mouseY;

      $image.on({

        mouseenter: function() {
          $circle.insertBefore(this);
          console.log('hello!');
          $(this).animate({
            width: $image.width() * 1.2,
            height: $image.height() * 1.2,
            display: 'block'
          })
        },
        mousemove: function(e) {
           console.log(mouseX , mouseY);
          mouseX = e.clientX; 
          mouseY = e.clientY;
          
        },
        mouseout: function() {
          console.log('bye!');
          $(this).animate({
            width: $image.width() / 1.2,
            height: $image.height()  / 1.2
          });
        }
      });
    });
  }
  return this;
}( jQuery ));