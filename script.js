$(document).ready(function() {
	$('.single-item')
		.slick({
			arrows: false
		})
		.slickExtension();
});

$('.single-item')
	.on('init', function(event, slick, currentSlide, nextSlide) {
		var current = $(slick.$slides.get(currentSlide))[0];
		$(current).addClass('slick-animation-start');
	})
	.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		var current = $(slick.$slides.get(currentSlide))[0];
		var next = $(slick.$slides.get(nextSlide))[0];

		if (current != next) {
			$(current)
				.removeClass('slick-animation-start')
				.addClass('slick-animation-stop');
			$(next)
				.removeClass('slick-animation-stop')
				.addClass('slick-animation-start');
		}
	});
