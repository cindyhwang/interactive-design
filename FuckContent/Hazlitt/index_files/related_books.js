(function ($, Drupal, window, document) {

  $(document).ready(function(){

    // window resize function
    var delay = (function(){
      var timer = 0;
      return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
      };
    })();

    enquire.register("all and (max-width : 1172px)", {
      match : function() {
        $(window).on("load resize",function(e) {
          delay(function(){
            inlineBooks();
          }, 100);
        });
      }, unmatch : function() {
        $(window).on("load resize",function(e) {
          delay(function(){
            sidebarBooks();
          }, 100);
        });
      }
    });

  });

  $(window).load(function() {

    if ($('.node-type-longform').length > 0 && ($('#article-wrap a[name^="isbn"]').length > 0)) {
      var book_index = 0;
      $('#article-wrap a[name^="isbn"]').each(function() {
        var $isbn = $(this).attr('name');
        var $rel_book = $('#article-related-books').find('li[data-isbn="'+$isbn+'"]');
        var $new_book = $("<div>").attr('id','book-'+book_index).html($rel_book.html()).addClass('book-embed');
        $(this).closest('p,div').after($new_book);
        book_index++;
      });
    }

    if($('#article-wrap a[name^="isbn"]').length > 0 && ($('.node-type-longform').length === 0))  {
      sidebarBooks();
    }

  });

  function sidebarBooks() {
    $('#article-wrap .book-embed').each(function() {
      $(this).detach();
    });
    $('#book-container').remove();
    var $book_wrapper = $("<div>").attr('id','book-wrapper').addClass('book-wrapper');
    var $book_container = $("<div>").attr('id','book-container').addClass('book-container').html($book_wrapper);
    $('#region-sidebar-second').append($book_container);
    var contain_offset = $('#region-sidebar-second').offset().top;
    var book_index = 0;
    var book_height = $('#region-sidebar-second').height();
    var addHeight = 0;
    var height_of_books = 0;
    $('#article-wrap a[name^="isbn"]').each(function() {
      var book_tag = ($(this).offset().top * 0.961) - contain_offset;
      if (book_tag < book_height) {
        book_tag = book_height;
      }
      var $isbn = $(this).attr('name');
      var $rel_book = $('#article-related-books').find('li[data-isbn="'+$isbn+'"]');
      var $new_book = $("<div>").attr('id','book-'+book_index).html($rel_book.html()).addClass('book-embed').css('top',book_tag);
      $('#book-wrapper').append($new_book);
      book_index ++;
      addHeight = $new_book.height()+13;
      height_of_books = height_of_books + addHeight;
      book_height = book_tag + addHeight;
    });
    var articleMax = (contain_offset + $('.grid-9 .region-inner').height());
    var prevPos = 0;
    var prevHeight = 0;
    $('div.book-embed').each(function(){
      var thisOffset = $(this).offset().top;
      prevPos = $(this).offset().top - contain_offset;
      prevHeight = $(this).height();
      var books_height = prevPos + prevHeight - contain_offset;
      if(books_height > $('#article-wrap').height()){
        $('#article-wrap').height(books_height);
        if (height_of_books < ($('.article-wrap').height() - $('.field-name-body').height())) {
          $book_container = $('#book-container').detach();
          $('.field-name-body').after($book_container);
          $('.book-embed').each(function() {
            $(this).removeAttr('style');
          })
          $('#article-wrap').removeAttr('style');
        }
      }
    });
  }


  function inlineBooks() {
    var book_index = 0;
    $('#article-wrap a[name^="isbn"]').each(function() {
      $(this).closest('p,div').after($('#book-'+book_index));
      book_index++;
    });
    $('.book-container').detach();
  }


})(jQuery, Drupal, this, this.document);
