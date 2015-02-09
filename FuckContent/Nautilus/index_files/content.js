$(document).ready(function() {

		$.each($(".vimeo-breakers"), function(){
				
           var _w = $(this).data('w');
           var _h = $(this).data('h');
           var _title = $(this).data('title');
           var _video_id = $(this).data('video-id');
           var _caption = $(this).data('capper');
           var _credits = $(this).data('credits');

           _title = unescape(unescape(_title));
           _caption = unescape(unescape(_caption));
           _credits = unescape(unescape(_credits));

           _title = _title.replace(/\+/g, ' ');
           _caption = _caption.replace(/\+/g, ' ');
           _credits = _credits.replace(/\+/g, ' ');	           

           var fig_text = "";

	            	 	if (_credits=='') {
	            	 		if (_title=='') {
	            	 			fig_text = "<figcaption>"+_caption+"</figcaption>";
	            	 		} else {
	            	 			fig_text = "<figcaption><strong>"+_title+":</strong> "+_caption+"</figcaption>";
	            	 		}
	            	 	} else {
	            	 		if (_title=='') {
	            	 			if (_caption == '') {
	            	 				fig_text = "<figcaption>"+_credits+"</figcaption>";
	            	 			} else {
	            	 				fig_text = "<figcaption><span class='caption'>"+_caption+"</span><span class='credit'>"+_credits+"</span></figcaption>";
	            	 			}
	            	 		} else {
	            	 			fig_text = "<figcaption><span class='caption'><strong>"+_title+":</strong> "+_caption+"</span><span class='credit'>"+_credits+"</span></figcaption>";
	            	 		}		            	 		
	            	 	}

	            	 	if (_credits=="" && _title=="" && _caption=="") {
	            	 		fig_text = "";
	            	 	}              
           
           var _video_html = "<figure><iframe src='http://player.vimeo.com/video/"+_video_id+"' width='"+_w+"' height='"+_h+"' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>"+fig_text+"</figure>";
           
           $(this).parent().replaceWith(_video_html);
	});

	
	$.each($(".iframe-breakers"), function(){
			var _h = $(this).data('h');
			var _url = $(this).data('url');
			var _iframe_html = "<iframe src='"+_url+"' width='733' height='"+_h+"' frameborder='0' scrolling='no'></iframe>";
			$(this).parent().replaceWith(_iframe_html);
	});	


	$.each($(".breaker-image"), function(){
			var _alt = unescape( unescape( $(this).data('alt') ) );
			if (_alt!='') {
				$(this).find("img").attr("alt",_alt);
			} else {
				$(this).find("img").removeAttr("alt");
			}
	});

});