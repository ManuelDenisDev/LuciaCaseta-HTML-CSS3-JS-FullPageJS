//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "16 jun 2023 21:30:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	