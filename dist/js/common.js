var common = {
	init: function() {
		common.fixNavigation();
		common.main();
		common.carousel();
	},
	fixNavigation: function(){
		// function fixPanel() {
		// 	if ($('.header-top').offset().top + $('.header-top').height() <= $(window).scrollTop()) {
		// 		$('header nav').addClass('fixed-nav');
		// 		$('.header-top').css({'margin-bottom':$('header nav').height()})
		// 	}else {
		// 			$('header nav').removeClass('fixed-nav')
		// 			$('.header-top').css({'margin-bottom':0})
		// 	}
		// };
		// fixPanel();
		// $(window).scroll(function() {
		// 	if($(window).width() > 993) {
		// 		fixPanel();
		// 	}
		// });
	},
	main: function(){


		$(".search-trigger").click(function(e){
			e.preventDefault();
			$('.search-field').slideToggle("fast");
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
			// autoplay: true
		})
		
	},
};

(function() {
	common.init();
}());


