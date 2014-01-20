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
          plus += 40;
          $image.css({
            top: (event.pageY - 50),
            left: (event.pageX - 50),
            width: $image.width() + plus,
            height: $image.height() + plus,
            display: 'block'
          });
        },
        mouseout: function() {
          plus = 100;
          $image.css({
            width: $image.width() - plus,
            height: $image.height() - plus,      
          });
        }
      });
    });
  }
  return this;
}( jQuery ));