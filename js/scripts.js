$(document).ready(function(){

	if ($('#projects_carusel').length){
	  $('#projects_carusel').bxSlider({
	    auto: true,
	    pause: 7000,
	    pager: false,
	    //controls: false,
	    autoHover: true,
	    slideWidth: 480,
	    minSlides: 2,
	    maxSlides: 2,
	    moveSlides: 1,
	    prevSelector  : ".projects_control",
	    nextSelector : ".projects_control",
	    useCSS: false
	  });
	}

	//http://dimsemenov.com/plugins/magnific-popup
	if ($('.open-popup-link').length){
		$('.open-popup-link').magnificPopup({
		  type:'inline',
		  midClick: true 
		});
	}

	
});

