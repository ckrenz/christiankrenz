
$(document).ready(function() {
		
	$('#nav').hide(0);

		
			$(window).scroll(function(){


					var windowHeight = $(window).scrollTop();
					var main = $("#main").offset();

					main = main.top;


					if(windowHeight >= main  ){
						

						$('#nav').fadeIn(500);

					}else{
						$('#nav').fadeOut(1000);

					}


			});

	});

var navbarHeight = 20;
var didScroll = false;

$(window).scroll(function() {
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    didScroll = false;
    // Check your page position and then
    // Load in more results
    var top = $(window).scrollTop() + navbarHeight;
    if ($('#about').offset().top < top) {
      $('li').removeClass('aviso');
      $('#aboutme').addClass('aviso');
    }
    if ($('#know1').offset().top < top) {
      $('li').removeClass('aviso');
      $('#habilidades').addClass('aviso');
    }
    if ($('#jobs1').offset().top < top) {
      $('li').removeClass('aviso');
      $('#trabajos').addClass('aviso');
    }
    if ($('#contact1').offset().top < top) {
      $('li').removeClass('aviso');
      $('#contacto').addClass('aviso');
    }
  }
}, 100);



jQuery("document").ready(function($){
	
	var nav = $('.knowp');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1000) {
			nav.addClass("photoshop");
		}else {
			nav.removeClass("photoshop");
		}
	});
});
jQuery("document").ready(function($){
	
	var nav = $('.knowi');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1000) {
			nav.addClass("ilustrator");
		}else {
			nav.removeClass("ilustrator");
		}
	});
});

jQuery("document").ready(function($){
	
	var nav = $('.knowh');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1000) {
			nav.addClass("html");
		}else {
			nav.removeClass("html");
		}
	});
});
jQuery("document").ready(function($){
	
	var nav = $('.knowc');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1000) {
			nav.addClass("cs3");
		}else {
			nav.removeClass("cs3");
		}
	});
});
jQuery("document").ready(function($){
	
	var nav = $('.knowj');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1000) {
			nav.addClass("js");
		}else {
			nav.removeClass("js");
		}
	});
});
jQuery("document").ready(function($){
	
	var nav = $('.knowres');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1000) {
			nav.addClass("res");
		}else {
			nav.removeClass("res");
		}
	});
});
jQuery("document").ready(function($){
	
	var nav = $('.knowcreatividad');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1000) {
			nav.addClass("creatividad");
		}else {
			nav.removeClass("creatividad");
		}
	});
});
jQuery("document").ready(function($){
	
	var nav = $('.knowganas');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1000) {
			nav.addClass("ganas");
		}else {
			nav.removeClass("ganas");
		}
	});
});
jQuery("document").ready(function($){
	
	var nav = $('.knowsuperacion');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1000) {
			nav.addClass("superacion");
		}else {
			nav.removeClass("superacion");
		}
	});
});
jQuery("document").ready(function($){
	
	var nav = $('.knowcomunicacion');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1000) {
			nav.addClass("comunicacion");
		}else {
			nav.removeClass("comunicacion");
		}
	});
});
jQuery("document").ready(function($){
	
	var nav = $('.knowresponsabilidad');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1000) {
			nav.addClass("responsabilidad");
		}else {
			nav.removeClass("responsabilidad");
		}
	});
});
jQuery("document").ready(function($){
	
	var nav = $('.knowdedicacion');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1000) {
			nav.addClass("dedicacion");
		}else {
			nav.removeClass("dedicacion");
		}
	});
});

$(window).load(function() {
    $('#loading').fadeOut('slow');
    $('body').css({'overflow':'visible'});
})