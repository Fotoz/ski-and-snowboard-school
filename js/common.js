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

		$('.nav a').removeClass('is-active');
		$(this).addClass('is-active');

		$('#burger').removeClass('is-active');
		$('#top_line').removeClass('is-active');
		$('body').removeClass('overflow-hidden');

		$('html, body').animate({
			scrollTop: sectionOffset
		}, 700);
	});


// menu-nav-toggle
	$('#burger').on('click', function(event) {
		event.preventDefault();

		$(this).toggleClass('is-active');
		$('#top_line').toggleClass('is-active');
		$('body').toggleClass('overflow-hidden');

		// resetting scroll for menu
		$('.nav').delay(500).queue(function(reset_scroll) {
			$(this).scrollTop(0);
			reset_scroll();
		});
	});


// toTop-button
	$(window).scroll(function() {
		if ($(this).scrollTop() >= $(this).height()) {
				$('.toTop').addClass('toTop-active');
		} else {
				$('.toTop').removeClass('toTop-active');
		};
	});
	$('.toTop').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

});
