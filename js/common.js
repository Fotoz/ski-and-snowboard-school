$(function() {

// owl-carousel
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 500,
		autoHeight: true
	});


// smooth-scroll
	$('[data-scroll]').on('click', function(event) {
		event.preventDefault();

		var sectionId = $(this).data('scroll'),
				sectionOffset = $(sectionId).offset().top;

		// нужно для изменения активной ссылки
		// $('.nav a').removeClass('active'); // #nav
		// $(this).addClass('active');

		$('html, body').animate({
			scrollTop: sectionOffset
		}, 1000);
	});


// toTop-button
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height() - 1) {
				$('.toTop').addClass('toTop-active');
		} else {
				$('.toTop').removeClass('toTop-active');
		};
	});
	$('.toTop').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

});
