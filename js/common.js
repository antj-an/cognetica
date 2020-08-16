$(function() {

	var mob = 992;
	

	// Toogle menu
	$('#toggle').on('click', function() {
		$(this).toggleClass('on');
		$('.header nav').toggleClass('showMenu');

		if ($('.header nav').hasClass('showMenu') && window.innerWidth < mob) {
			$('.logo-block').css('display', 'none');
		}else{
			$('.logo-block').css('display', 'flex');
		}

		if($(this).hasClass('on')) {
			$('body.home #toggle .span').css('background', '#000');
		}else{
			$('body.home #toggle .span').css('background', '#fff');
		}
	});

	// Toggle submenu
	$("#nav li.menu-item-has-children > a").on("click", function (e) {
	     if (window.innerWidth < mob) {
	        if (!$(this).hasClass("clicked")) {
	            e.preventDefault();
	            $(this).next("ul").slideToggle("fast");
	            // $(this).addClass("clicked");
	        }
	    }
	});

	//Scroll down
	$(".scroll-down").click(function() {
		$("html, body").animate({scrollTop: $(".s-bg").height() }, "slow");
		return false;
	});

	//Search
	$('.search .btn-search').on('click', searchClick);
	
	function searchClick(e){
		var	form = $(this).closest("form"),
			input = form.find(".search-field");

		if (!input.val()) {
			e.preventDefault();
			form.toggleClass("expanded");
		}
		if (form.hasClass("expanded")) {
			input.focus();
		}
	}

	$('.search .search-field').on("focusout", function (e) {
		if (!$(this).val()) {
			$(this).closest("form").removeClass("expanded");
		}
	});

	//Select
	$('.js-dropdown').SumoSelect({
		csvDispCount: 0,
		floatWidth: 0,
		placeholder: 'Select Here'
	});



    //slider

	$('.articles-items').slick({
		rtl: true,
		arrows: true,
		dots: false,
		infinite: true,
		draggable: true,
		swipe: true,
		swipeToSlide: false,
		slidesToShow: 3,
		focusOnSelect: false,
		prevArrow: '<div class="prev"></div>',
		nextArrow: '<div class="next"></div>',
		touchThreshold: 10,
		responsive: [
				{
					breakpoint: 1640,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 1
					}
				}
			]
	});

	
    var $rwSlider = $('.rw-slider');
  
    $rwSlider.slick({
		rtl: true,
		initialSlide: 0,
		arrows: false,
		dots: false,
		infinite: true,
		draggable: true,
		swipe: true,
		swipeToSlide: false,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 2000
	});


    	$('.slick-current .circle').eq(0).addClass('move');


	$rwSlider.on('afterChange', function(){
    	if ($('div.rw-slider-wrap').hasClass('slick-current')) {
    		$('.slick-current .circle').addClass('move');
    	}
    });

 	$rwSlider.on('beforeChange', function(){
    	if ($('div.rw-slider-wrap').hasClass('slick-current')) {
    		$('.slick-current .circle').removeClass('move');
    	}
    });

});

