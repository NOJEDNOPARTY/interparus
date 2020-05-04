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
		var bLazy = new Blazy({});
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
			var sharedPos = $('.article-shared').offset().top - 96;
			var docHeight = $(document).height();			
			function sharedFunc(){
				var pos = $(window).scrollTop();
				var bannerHeight = $('.banner').outerHeight();
				if($(window).width() > 1370) {
					if((bannerHeight + headerHeight - 96) < pos){
						$(".article-shared").css("top", (headerHeight +  96));
						$(".article-shared").addClass('fixed');
					}else{
						$(".article-shared").css("top", '96px');
						$(".article-shared").removeClass('fixed');
					}	
				}
			}
			setTimeout(function(){
				sharedFunc();
			}, 200);
			$( window ).scroll(function() {
				sharedFunc();
			});
		}
	},
	main: function(){


		$('.fancybox').fancybox({
		 beforeShow : function(){
		  this.title =  $(this.element).data("caption");
		 }
		});

		new WOW().init();

		$('.phone-mask').mask("+380 (99) 999-99-99");

		if($(window).width() > 1024) {
			$(".menu .menu-level-trigger").hover(function(){
				if($(this).closest('li').hasClass('open') == false){
					$(".menu .menu-level-trigger span").closest('li').removeClass('open');
					$(".menu .menu-level-trigger span").closest('li').find('.hidden-menu').hide('fast');
					$(this).closest('li').addClass('open');
					$(this).closest('li').find('.hidden-menu').show('fast');
					$('.search-field').slideUp("fast");
				}else{
					$(this).closest('li').removeClass('open');
					$(this).closest('li').find('.hidden-menu').hide('fast');
				}
			});
		}else {
			$(".menu .menu-level-trigger span").click(function(e){
				e.preventDefault();
				$(this).closest('li').addClass('open');
				$('header').addClass('step-two');
				$(this).closest('li').find('.hidden-menu').show();
				$('.search-field').slideUp("fast");
			});
			$(".close-hidden-menu").click(function(e){
				e.preventDefault();
				$(this).closest('.menu-level-trigger').removeClass('open');
				$('header').removeClass('step-two');
				$(this).closest('.hidden-menu').hide();
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
			$('.popup-wrapper').hide();
			$('body').removeClass('hidden');
		});

		setTimeout(function(){
			$('#subscribePopup').show('fast');
			$('body').addClass('hidden');
		}, 50000)

		var galleryList = $('.card-gallery-list');

		galleryList.each(function(item){
			var galleryListItem = $(this).find('a').length
			var itemLink = $(this).find('a');
			if(galleryListItem > 6) {
				itemLink.each(function(index){
					var itemB = $(this).find('span');
					if($(window).width() > 550) {
						if(index == 5) {
							itemB.css('opacity', '1')
							itemB.find('img').remove();
							itemB.text(galleryListItem - 6)
						}
					}else {
						if(index == 3) {
							itemB.css('opacity', '1')
							itemB.find('img').remove();
							itemB.text(galleryListItem - 4)
						}
					}
				})
			}
		});

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


