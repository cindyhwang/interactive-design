		$(function () {
			var austDay = new Date();
			austDay = new Date(austDay.getFullYear() + 0, 4-1, 07, 20, 0);
			$('#defaultCountdown').countdown({until: austDay});
			$('#year').text(austDay.getFullYear());
			});


			$(document).ready(function(){
			$("img").delay(500).fadeIn(500);
			$("h1").delay(1000).fadeIn(500);
			$("h2").delay(1500).fadeIn(500);

			});




			$('.hover').bind('touchstart touchend', function(e) {
				e.preventDefault();
      
       		$(this).toggleClass('hover');

			

			});
       	

       	



			