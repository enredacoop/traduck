(function($) {
	
	'use strict';
	
	$(window).load(function(){
		
		var preloader = $('.preloader');
		var preloaderImg = $('.preloader img');
		preloaderImg.fadeOut('slow');
		preloader.delay(500).fadeOut('slow');
	
	});

    $('#feedbacks').owlCarousel({
        
		//items:3,
		navigation: false,
        slideSpeed: 400,
        paginationSpeed: 800,
        autoPlay: 5000,
        singleItem: true
		
    });
	
	$('#search-icon').on('click',function(){
		
		var topSearch = $('.top-search');
		topSearch.slideToggle('slow');
	
	});

	var wow = new WOW(
		{
			mobile: false
		}
	);
	
	wow.init();

	// Boostrap DropDown Menu Show on Hover
	$('ul.nav li.dropdown').on('mouseenter',function(){
		
		var menuItem = $(this);
		menuItem.find('.dropdown-menu').stop(true,true).delay(100).slideDown(500);
		
	});
	
	$('ul.nav li.dropdown').on('mouseleave',function(){
		
		var menuItem = $(this);
		menuItem.find('.dropdown-menu').stop(true,true).delay(100).slideUp(500);
		
	});


	$('#controls li').on('click',function(){
		
		var controlItem = $('#controls li');
		controlItem.removeClass('active');
		$(this).addClass('active');
			
	});

	// Preloader setting //
	
	
})(jQuery);