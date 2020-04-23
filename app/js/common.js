var common = {
	init: function() {
		common.fixNavigation();
		common.main();
		common.carousel();
		common.video();
		common.submit();
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
			fixPanel();
		});
	},
	main: function(){



		if($(window).width() > 1024) {
			$(".menu .menu-level-trigger").hover(function(){
				$(this).closest('li').addClass('open');
				$(this).closest('li').find('.hidden-menu').slideDown('fast');
			},function(){
				$(this).closest('li').removeClass('open');
				$(this).closest('li').find('.hidden-menu').slideUp('fast');
			});
		}else {
			$(".menu .menu-level-trigger").click(function(e){
				e.preventDefault();
				$(this).closest('li').toggleClass('open');
				$('header').toggleClass('step-two');
				$(this).closest('li').find('.hidden-menu').toggle();
			});
		}

		if($(window).width() > 993) {
			$(".search-trigger").click(function(e){
				e.preventDefault();
				$('.search-field').slideDown("fast");
			});
			$(".search-reset").click(function(e){
				e.preventDefault();
				$('.search-field').slideUp("fast");
			});
		}else {
			$('.menu-trigger').click(function(e){
				e.preventDefault();
				$('header').addClass('open');
				$('body').addClass('hidden');
				$('html').addClass('hidden');

			});
			$('.menu-close').click(function(e){
				e.preventDefault();
				$('header').removeClass('open');
				$('body').removeClass('hidden');
				$('html').removeClass('hidden');
				$('.menu').find('li').removeClass('open');
				$('header').removeClass('step-two');
				$('.menu').find('li').find('.hidden-menu').hide();
			});
		}
	
		var bLazy = new Blazy({});

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
					items:2,
					margin:0,
				},
				601:{
					items:3,
				},
				993:{
					items:2,
				},
				1101:{
					items:3,
				}
			}
		})
	},
	video: function(){
		var $video = $('.video-item');
		var $window = $(window);
		if($video.length){
			$window.scroll(function() {

				$video.each(function(){
					var $thisItem = $(this)
					var $topOfVideo = $thisItem.offset().top;
					var $bottomOfVideo = $thisItem.offset().top + $thisItem.outerHeight();
					
					var $topOfScreen = $window.scrollTop();
					var $bottomOfScreen = $window.scrollTop() + $window.innerHeight();
					
					if(($bottomOfScreen > $bottomOfVideo) && ($topOfScreen < $topOfVideo)){
						$thisItem[0].play();
					} else {
						$thisItem[0].pause();
					}
				})
	
				
			});
		}

	},
	submit: function(){
		$("form").submit(function(event){
			event.preventDefault();
			formField = $(this).find(".form-field")
			
			formField.each(function(){
				var thisEl = $(this);
				if (! thisEl.val().length) {
					thisEl.addClass('error')
					setTimeout(function(){
						thisEl.removeClass('error')
					}, 3000)
					thisEl.addClass('form-error')
				}else { thisEl.removeClass('form-error')}
			});	
			if(formField.hasClass('form-error') == false){
				$('.popup-wrapper').removeClass('active');
				$('#thanksPopup').addClass('active')
				var bLazy = new Blazy({});
			}
		});

	}
};

(function() {
	common.init();
}());


