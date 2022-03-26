jQuery(document).ready(function() {
	jQuery('a[href^="#"]').not(".carousel-control-prev, .carousel-control-next").click(function(event) {
		var id = jQuery(this).attr("href");
		var offset = 200;
		var target = jQuery(id).offset().top - offset;

		jQuery('html, body').animate({scrollTop:target}, 500);
		event.preventDefault();
	});
});