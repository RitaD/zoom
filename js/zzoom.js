(function( $ ) {

    $.fn.zzoom = function() {

        

        this.each( function() {

            var $image = $('.zzomIn').find('#zoom');

            var $circle =  $( "<div></div>");

            $image.on({

                mouseenter: function() {
                    $circle.insertBefore(this);
                    console.log('hello!');
                },
                mouseover: function( event ) {
                    $circle.css({
                        top: (event.pageY - 50), 
                        left: (event.pageX - 50),
                        position: 'absolute',
                        'z-index': '1000',
                        border: '1px solid blue',
                        width: '100px',
                        height: '100px',
                        display: 'block',
                        'border-radius': '100%'
                    });
                    console.log('move!');
                }
            });

            $image.on({
                mouseleave: function() {
                    console.log('bye!');
                }
            });

        });

    }
    return this;

}( jQuery ));