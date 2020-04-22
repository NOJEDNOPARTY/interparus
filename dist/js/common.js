var common = {
	init: function() {
		common.fixNavigation();
		common.main();
		common.carousel();
	},
	fixNavigation: function(){
		function fixPanel() {
			if ($(window).scrollTop() > 0) {
				$('header').addClass('fixed');
				$('body').css({'margin-top':$('header').outerHeight()})
			}else {
				$('header').removeClass('fixed')
				$('body').css({'margin-top':0})
			}
		};
		fixPanel();
		$(window).scroll(function() {
			if($(window).width() > 993) {
				fixPanel();
			}
		});
	},
	main: function(){


		$(".search-trigger").click(function(e){
			e.preventDefault();
			$('.search-field').slideDown("fast");
		});
		$(".search-reset").click(function(e){
			e.preventDefault();
			$('.search-field').slideUp("fast");
		});

		$(".menu .menu-level-trigger").hover(function(){
			$(this).closest('li').addClass('open');
			$(this).closest('li').find('.hidden-menu').slideDown('fast');
		},function(){
			$(this).closest('li').removeClass('open');
			$(this).closest('li').find('.hidden-menu').slideUp('fast');
		});

	
		// var bLazy = new Blazy({});

		// if($(window).width() < 1025) {
		// 	$('.nav-link-trigger').click(function(){
		// 		if($(this).closest('.nav-link').hasClass('active')) {
		// 			$('.nav-link').removeClass('active');
		// 		}else{
		// 			$('.nav-link').removeClass('active');
		// 			$(this).closest('.nav-link').addClass('active');
		// 		}
		// 	});
		// }
		// $('.menu-trigger').click(function(){
		// 	$('.header').addClass('open');
		// });
		// $('.menu-mob-close').click(function(){
		// 	$('.header').removeClass('open');
		// });
	},
	
	carousel: function(){
		$('.banner-slider').owlCarousel({
			items: 1,
			loop:true,
			margin:0,
			nav: false,
			dots: false,
			autoHeight: true,
			smartSpeed: 2000,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			autoplay: true
		})

		$('.news-list-slider').owlCarousel({
			loop:true,
			margin:10,
			responsive:{
				0:{
					items:1,
					nav:true
				},
				600:{
					items:3,
					nav:false
				},
				1000:{
					items:3,
					nav:false,
					dots: false
				}
			}
		})
	},
};

(function() {
	common.init();
}());


