jQuery(document).ready(function($) {
    $('.tax-filter').click( function(event) {
 
        // Prevent defualt action - opening tag page
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
 
        // Get tag slug from title attirbute
        var selecetd_taxonomy = $(this).attr('title');
 
    });
    
});