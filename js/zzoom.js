(function( $ ) {

  $.fn.zzoom = function() {



    this.each( function() {

      var $image = $('.zzomIn').find('#zoom');

      var $circle =  $( "<div></div>");

      var plus = 0;

      $image.on({

        mouseenter: function(event) {
          $circle.insertBefore(this);
          console.log('hello!');
          $circle.on({
            mousemove: function(e) {
              console.log('dd');
              $(this).css({
                top: (e.pageY - 50),
                left: (e.pageX - 50)
              });
            }
          });
          $image.animate({
            top: (event.pageY - 50),
            left: (event.pageX - 50),
            width: $image.width() * 1.2,
            height: $image.height() * 1.2,
            display: 'block'
          });
        },
        mouseout: function() {
          $image.animate({
            width: $image.width() / 1.2,
            height: $image.height()  / 1.2,
          });
        }
      });
    });
  }
  return this;
}( jQuery ));