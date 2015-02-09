jQuery(document).ready(function($) {

  $(document).ready(function () {
    $('.addthis_toolbox .addthis_button_twitter').on('click', function() {
      ga('send', 'event', 'AddThis Twitter', 'click', 'Social Links');
      // console.log('EVENT: Social Twitter');
    });

    $('.addthis_toolbox .addthis_button_facebook').on('click', function() {
      ga('send', 'event', 'AddThis Facebook', 'click', 'Social Links');
      // console.log('EVENT: Social Facebook');
    });

    $('.addthis_toolbox.addthis_button_google_plusone_share').on('click', function() {
      ga('send', 'event', 'AddThis Google Plus', 'click', 'Social Links');
      // console.log('EVENT: Social Google+');
    });

    $('.addthis_toolbox .addthis_button_linkedin').on('click', function() {
      ga('send', 'event', 'AddThis LinkedIn', 'click', 'Social Links');
      // console.log('EVENT: Social LinkedIn');
    });

    $('.addthis_toolbox .addthis_button_print').on('click', function() {
      ga('send', 'event', 'AddThis Print', 'click', 'Social Links');
      // console.log('EVENT: Social Print');
    });

    // good reads is a seperate button only on book pages!
    $('.goodreads').on('click', function() {
      ga('send', 'event', 'GoodReads Share Button', 'click', 'Social Links');
      // console.log('EVENT: Social Print');
    });
  });

});
;
(function($) {
  $( document ).ready(function() {
    $('a').each(function() {
      var a = new RegExp('/' + window.location.host + '/');
      if(!a.test(this.href) && this.href !="" && ((this.href.indexOf("http://")> -1) || (this.href.indexOf("https://")> -1))) {
        $(this).click(function(event) {
         event.preventDefault();
         event.stopPropagation();
         window.open(this.href, '_blank');
       });
      }
    });
  });
})(jQuery);
;
