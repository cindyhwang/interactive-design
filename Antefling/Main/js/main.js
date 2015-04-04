		$(function () {
			var austDay = new Date();
			austDay = new Date(austDay.getFullYear() + 0, 4-1, 10, 20, 0);
			$('#defaultCountdown').countdown({until: austDay});
			$('#year').text(austDay.getFullYear());
			});


			$(document).ready(function(){
			$("div").delay(500).fadeIn(500); 
			$("img").delay(1000).fadeIn(500);
			$("h1").delay(1500).fadeIn(500);
			$("h2").delay(2000).fadeIn(500);
			$("h5").delay(2500).fadeIn(500);


			$('.hover').bind('touchstart touchend', function(e) {
				e.preventDefault();
      
       		$(this).toggleClass('hover');
			

		
			});






			});