var common = {
	init: function() {
		common.fixElements();
		common.share();
		common.main();
		common.carousel();
		common.video();
		common.submit();
	},
	fixElements: function(){
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
	share: function(){
		if($('.article-shared').length) {
			var headerHeight = $('header').outerHeight();
			var footerHeight = $('footer').outerHeight();
			var sharedrHeight = $('.article-shared').outerHeight();
			var newsArticleHeight = $('.news-article').outerHeight();
			var bannerHeight = $('.banner').outerHeight();
			var sharedPos = $('.article-shared').offset().top - 96;
			var docHeight = $(document).height();
			$( window ).scroll(function() {
				var pos = $(window).scrollTop();
				if($(window).width() > 1370) {
					if ((docHeight - pos) < (footerHeight + newsArticleHeight + sharedrHeight + 200)){
						$(".article-shared").removeClass('fixed');
						if($('.news-article').hasClass('contact-form') == false){
							$(".article-shared").css({"top" : 'auto', "bottom" : 90 + newsArticleHeight});
						}else {
							$(".article-shared").css({"top" : 'auto', "bottom" : 90});
						}
					}else if(sharedPos - headerHeight < pos) {
						$(".article-shared").css("top", (headerHeight +  96));
						$(".article-shared").addClass('fixed');
					}else {
						$(".article-shared").css("top", '96px');
						$(".article-shared").removeClass('fixed');
					}
				}
			});
		}
	},
	main: function(){


		$('.fancybox').fancybox({
		 beforeShow : function(){
		  this.title =  $(this.element).data("caption");
		 }
		});

		var galleryList = $('.card-gallery-list');

		galleryList.each(function(item){
			var galleryListItem = $(this).find('a').length
			var itemLink = $(this).find('a');
			itemLink.each(function(index){
				var itemB = $(this).find('span');
				if(index == 5) {
					itemB.css('opacity', '1')
					itemB.find('img').remove();
					itemB.text('+' + (galleryListItem - 6))
				}
			})
		});

		new WOW().init();

		$('.phone-mask').mask("+380 (99) 999-99-99");

		if($(window).width() > 1024) {
			$(".menu .menu-level-trigger").hover(function(){
				$(this).closest('li').addClass('open');
				$(this).closest('li').find('.hidden-menu').slideDown('fast');
				$('.search-field').slideUp("fast");
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
				$('.search-field').slideUp("fast");
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

		$('.popup-close').click(function(event){
			event.preventDefault();
			$('body').removeClass('hidden');
			$('.popup-wrapper').hide('fast');
		});

		// setTimeout(function(){
		// 	$('#subscribePopup').show('fast');
		// 	$('body').addClass('hidden');
		// }, 10000)

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
			autoplay: true,
			autoplayTimeout:5000,
			autoplayHoverPause:false
		})


		function sidebar(){
			if($(window).width() < 993) {
				$('.article-sidebar-slider').addClass('owl-carousel')
				$('.article-sidebar-slider').owlCarousel({
					items: 3,
					loop:true,
					margin:28,
					nav: false,
					dots: false,
					autoHeight: true,
					smartSpeed: 2000,
					animateOut: 'fadeOut',
					animateIn: 'fadeIn',
					autoplay: true,
					autoplayTimeout:5000,
					autoplayHoverPause:false
				})
			}else{
				$('.article-sidebar-slider').trigger('destroy.owl.carousel');
				$('.article-sidebar-slider').removeClass('owl-carousel')
			};
		};
		sidebar();

		$( window ).resize(function() {
			sidebar();
		});

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
			formField = $(this).find(".form-field, .form-line")
			
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
				$('#submitPopup').show('fast');
				$('body').addClass('hidden');
				var bLazy = new Blazy({});
			}
		});

		$('.btn-thanks-link').click(function(event){
			event.preventDefault();
			$('body').removeClass('hidden');
			document.location.href = "./thanks.html";
		});
	}
};

(function() {
	common.init();
}());


