$(document).ready(function() {
    var _intervalId;
    
    function fadeInLastImg()
    {
        var backImg = $('#background_cycler img:first');
        backImg.hide();
        backImg.remove();
        $('#background_cycler' ).append( backImg );
        backImg.fadeIn();
    };
        
    _intervalId = setInterval( function() {
        fadeInLastImg();
    }, 772 );

});

    




   

    
 



