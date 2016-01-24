$(document).ready(function() {


	$(".set > a").on("click", function(){
		if($(this).hasClass('active')){
			$(this).removeClass("active");
			$(this).siblings('.content').slideUp(200);
			$(".set > a i").removeClass("fa-minus").addClass("fa-plus");
		}else{
			$(".set > a i").removeClass("fa-minus").addClass("fa-plus");
			$(this).find("i").removeClass("fa-plus").addClass("fa-minus");
			$(".set > a").removeClass("active");
			$(this).addClass("active");
			$('.content').slideUp(200);
			$(this).siblings('.content').slideDown(200);
		}
	});

$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});


var stateInfoBlockWebmaster = 0,stateInfoBlockAdvertising = 0;
	$(".block_conditions .webmaster").click(function() 
	{
		if(stateInfoBlockWebmaster == 1) return false;
		stateInfoBlockWebmaster = 1;
		$("#bg_block_inf").removeAttr("hidden");
		$("#block_inf").removeAttr("hidden");
		$("#bg_block_inf").animate({opacity: "1.0", queue:false, duration:500});
		$("#block_inf").animate({opacity: "1.0", queue:false, duration:500});
	});
	$(".block_conditions .advertising").click(function() 
	{
		if(stateInfoBlockAdvertising == 1) return false;
		stateInfoBlockAdvertising = 1;
		$("#bg_block_inf").removeAttr("hidden");
		$("#block_inf2").removeAttr("hidden");
		$("#bg_block_inf").animate({opacity: "1.0", queue:false, duration:500});
		$("#block_inf2").animate({opacity: "1.0", queue:false, duration:500});
	});
	$("#close_webmaster").click(function() 
	{
		hideBlockInfo();
	});
	$("#close_advertising").click(function() 
	{
		hideBlockInfo();
	});
	function hideBlockInfo()
	{
		if(stateInfoBlockWebmaster == 1)
		{
			stateInfoBlockWebmaster = 0;
			$("#bg_block_inf").animate({opacity: "0.0",queue:false, duration:500});
			$("#block_inf").animate({opacity: "0.0", queue:false, duration:500}, function()
			{
				$("#bg_block_inf").attr("hidden","hidden");
				$("#block_inf").attr("hidden","hidden");
			});
		}
		if(stateInfoBlockAdvertising == 1)
		{
			stateInfoBlockAdvertising = 0;
			$("#bg_block_inf").animate({opacity: "0.0",queue:false, duration:500});
			$("#block_inf2").animate({opacity: "0.0", queue:false, duration:500}, function()
			{
				$("#bg_block_inf").attr("hidden","hidden");
				$("#block_inf2").attr("hidden","hidden");
			});
		}
	}
document.onkeydown = function(event) 
 {
  if(!event) var event = window.event;
  if (event.keyCode) {
   keycode = event.keyCode; // IE
   hideBlockInfo();
  } else if(event.which) {
   keycode = event.which; // all browsers
   hideBlockInfo();
  }
 }

	$(".fakeloader").fakeLoader({
		timeToHide:1700,
		bgColor:"#4a50b6",
		spinner:"spinner3",
		zIndex:99999
	});



$('.scrolling a').bind('click',function(event){
		var $anchor = $(this);
		switch ($anchor.attr('href')) {
			case '#section1':
				$('.top-scroll ul li').removeClass('active');
				$('.logo').addClass('active');
				$('.main-mnu li').removeClass('active');
				$('.main-mnu li:first-child').addClass('active');
				break;
			case '#section2':
				$('.top-scroll ul li').removeClass('active');
				$('.top-scroll ul li:first-child').addClass('active');
				$('.logo').removeClass('active');
				$('.main-mnu li').removeClass('active');
				$('.main-mnu li:nth-child(2)').addClass('active');
				break;
			case '#section3':
				$('.top-scroll ul li').removeClass('active');
				$('.top-scroll ul li:nth-child(2)').addClass('active');
				$('.logo').removeClass('active');
				$('.main-mnu li').removeClass('active');
				$('.main-mnu li:nth-child(3)').addClass('active');
				break;
			case '#section4':
				$('.top-scroll ul li').removeClass('active');
				$('.top-scroll ul li:nth-child(3)').addClass('active');
				$('.logo').removeClass('active');
				$('.main-mnu li').removeClass('active');
				$('.main-mnu li:nth-child(4)').addClass('active');
				break;
			case '#section5':
				$('.top-scroll ul li').removeClass('active');
				$('.top-scroll ul li:nth-child(4)').addClass('active');
				$('.logo').removeClass('active');
				$('.main-mnu li').removeClass('active');
				$('.main-mnu li:nth-child(5)').addClass('active');
				break;
			case '#section6':
				$('.top-scroll ul li').removeClass('active');
				$('.top-scroll ul li:last-child').addClass('active');
				$('.logo').removeClass('active');
				$('.main-mnu li').removeClass('active');
				$('.main-mnu li:last-child').addClass('active');
				break;
		}
		/*$('html, body').stop().animate({
			scrollLeft: $($anchor.attr('href')).offset().left
		}, 1000);*/
		var i = $anchor.attr('href').charAt($anchor.attr('href').length - 1) - 1;
			  $(document).horizon('scrollTo', i);
		 $('.scrolling ul li').removeClass('active');
		$anchor.parent().addClass('active');
		event.preventDefault();
	});




$('.top-scroll a').bind('click',function(event){
		var $anchor = $(this);
		switch ($anchor.attr('href')) {
			case '#section1':
				$('.scrolling ul li').removeClass('active');
				$('.scrolling ul li:first-child').addClass('active');
				break;
			case '#section2':
				$('.scrolling ul li').removeClass('active');
				$('.scrolling ul li:nth-child(2)').addClass('active');
				$('.logo').removeClass('active');
				break;
			case '#section3':
				$('.scrolling ul li').removeClass('active');
				$('.scrolling ul li:nth-child(3)').addClass('active');
				$('.logo').removeClass('active');
				break;
			case '#section4':
				$('.scrolling ul li').removeClass('active');
				$('.scrolling ul li:nth-child(4)').addClass('active');
				$('.logo').removeClass('active');
				break;
			case '#section5':
				$('.scrolling ul li').removeClass('active');
				$('.scrolling ul li:nth-child(5)').addClass('active');
				$('.logo').removeClass('active');
				break;
			case '#section6':
				$('.scrolling ul li').removeClass('active');
				$('.scrolling ul li:last-child').addClass('active');
				$('.logo').removeClass('active');
				break;
		}
	 var i = $anchor.attr('href').charAt($anchor.attr('href').length - 1) - 1;
	  $(document).horizon('scrollTo', i);
		 $('.top-scroll ul li').removeClass('active');
		$anchor.parent().addClass('active');
		event.preventDefault();
	});

$('.main-mnu a').bind('click',function(event){
		var $anchor = $(this);
		switch ($anchor.attr('href')) {
			case '#section1':
				$('.scrolling ul li').removeClass('active');
				$('.scrolling ul li:first-child').addClass('active');
				break;
			case '#section2':
				$('.scrolling ul li').removeClass('active');
				$('.scrolling ul li:nth-child(2)').addClass('active');
				break;
			case '#section3':
				$('.scrolling ul li').removeClass('active');
				$('.scrolling ul li:nth-child(3)').addClass('active');
				break;
			case '#section4':
				$('.scrolling ul li').removeClass('active');
				$('.scrolling ul li:nth-child(4)').addClass('active');
				break;
			case '#section5':
				$('.scrolling ul li').removeClass('active');
				$('.scrolling ul li:nth-child(5)').addClass('active');
				break;
			case '#section6':
				$('.scrolling ul li').removeClass('active');
				$('.scrolling ul li:last-child').addClass('active');
				break;
		}
	 var i = $anchor.attr('href').charAt($anchor.attr('href').length - 1) - 1;
	  $(document).horizon('scrollTo', i);
		 $('.main-mnu ul li').removeClass('active');
		$anchor.parent().addClass('active');
		event.preventDefault();
	});

$('.scrolling a').bind('click',function(event){
		var $anchor = $(this);
		switch ($anchor.attr('href')) {
			case '#section1':
				$('.top-scroll ul li').removeClass('active');
				$('.logo').addClass('active');
				break;
			case '#section2':
				$('.top-scroll ul li').removeClass('active');
				$('.top-scroll ul li:first-child').addClass('active');
				$('.logo').removeClass('active');
				break;
			case '#section3':
				$('.top-scroll ul li').removeClass('active');
				$('.top-scroll ul li:nth-child(2)').addClass('active');
				$('.logo').removeClass('active');
				break;
			case '#section4':
				$('.top-scroll ul li').removeClass('active');
				$('.top-scroll ul li:nth-child(3)').addClass('active');
				$('.logo').removeClass('active');
				break;
			case '#section5':
				$('.top-scroll ul li').removeClass('active');
				$('.top-scroll ul li:nth-child(4)').addClass('active');
				$('.logo').removeClass('active');
				break;
			case '#section6':
				$('.top-scroll ul li').removeClass('active');
				$('.top-scroll ul li:last-child').addClass('active');
				$('.logo').removeClass('active');
				break;
		}
		/*$('html, body').stop().animate({
			scrollLeft: $($anchor.attr('href')).offset().left
		}, 1000);*/
		var i = $anchor.attr('href').charAt($anchor.attr('href').length - 1) - 1;
			  $(document).horizon('scrollTo', i);
		 $('.scrolling ul li').removeClass('active');
		$anchor.parent().addClass('active');
		event.preventDefault();
	});

	$('.tabs_menu a').click(function(e) {
				e.preventDefault();
				$('.tabs_menu .active').removeClass('active');
				$(this).addClass('active');
				var tab = $(this).attr('href');
				$('.tab').not(tab).css({'display':'none'});
				$(tab).fadeIn(400);
		});

	$('.tabs_menu2 a').click(function(e) {
				e.preventDefault();
				$('.tabs_menu2 .active').removeClass('active');
				$(this).addClass('active');
				var tab = $(this).attr('href');
				$('.tab2').not(tab).css({'display':'none'});
				$(tab).fadeIn(400);
		});


$('section').horizon();

	$('.open-link').magnificPopup({
		type:'inline'
	});

	$('.open-registration').magnificPopup({
		type:'inline'
	});
	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};



	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

