$(document).on('ready', function() {

	"use strict";

	/*-------------------------------------
		Animations
	-------------------------------------*/
    $('[data-vp-animate]').each(function() {
        var classToAdd = 'visible-o animated '+($(this).data('vp-animate') ? $(this).data('vp-animate') : 'fadeIn');
        
        var delay = ($(this).data('vp-delay') ? $(this).data('vp-delay') : 0)+'ms';
        
        $(this).css({'animation-delay': delay}); 
        
        $(this).addClass('hidden-o').viewportChecker({
            classToAdd: classToAdd,
       });
    });

	/* =================================
	LOADER 
	=================================== */
	$(".loader").delay(1200).fadeOut();
    $(".animationload").delay(1200).fadeOut("slow");	

	/* =================================
	NAVBAR 
	=================================== */
	jQuery(window).on('scroll', function() {
		var top = jQuery(document).scrollTop();
		var batas = jQuery(window).height();
		var header = jQuery('#header');
		var windowW = $( window ).width();
			if ( top > 0 ) {
				$('.if-s').addClass('sticky');
			}else {
				$('.if-s').removeClass('sticky'); 
			}
	});

	/* =================================
	POPUP SEARCH 
	=================================== */
    $( '.search-toggle' ).on( 'click', function( event ) {
      var that    = $( this ),
      wrapper = $( '.search-container' );
      that.addClass( 'active' );
      wrapper.toggleClass( 'hide-search-container' );

      if ( that.is( '.active' ) || $( '.search-toggle .screen-reader-text' )[0] === event.target ) {
        wrapper.find( '.search-field' ).focus();
      }
    } );

	/* =================================
	TO TOP 
	=================================== */
	var scroll = $(document).scrollTop();
	var toTop =  $('#back-to-top');

	/*-------------------------------------
	Top menu - fixed
	-------------------------------------*/
	jQuery(window).on('scroll', function() {
		var winTop = $(document).scrollTop();

		if(winTop >= 150){
			toTop.addClass("visible");
		}else{
			toTop.removeClass("visible");
		}
	})

	/* =================================
	ISOTOP
	=================================== */
	var $gridv1 = $('.grid-v1');
	$gridv1.isotope({
		itemSelector: '.grid-item-v1',
		isFitWidth: true,
		filter: '.all',
		masonry: {
			columnWidth: '.grid-sizer-v1'
		}
	});

	$gridv1.imagesLoaded().progress( function() {
		$gridv1.isotope('layout');
	});

	$('.portfolio_filter a').on('click', function() {
 		$('.portfolio_filter .active').removeClass('active');
		$(this).addClass('active');
 
		var selector = $(this).attr('data-filter');
		$gridv1.isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				animationEngine : "jquery"
			}
		});
		return false;	
 	});

	var $gridv2 = $('.grid-v2');
	$gridv2.isotope({
		itemSelector: '.grid-item-v2',
		isFitWidth: true,
		filter: '.all',
		masonry: {
			columnWidth: '.grid-sizer-v2'
		}
	});

	$('.portfolio_filter a').on('click', function() {
 		$('.portfolio_filter .active').removeClass('active');
		$(this).addClass('active');
 
		var selector = $(this).attr('data-filter');
		$gridv2.isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				animationEngine : "jquery"
			}
		});
		return false;	
 	});	

	$gridv2.imagesLoaded().progress( function() {
		$gridv2.isotope('layout');
	});

	var $gridv3 = $('.grid-v3');
	$gridv3.isotope({
		itemSelector: '.grid-item-v3',
		isFitWidth: true,
		filter: '.all',
		masonry: {
			columnWidth: '.grid-sizer-v3'
		}
	});

	$('.portfolio_filter a').on('click', function() {
 		$('.portfolio_filter .active').removeClass('active');
		$(this).addClass('active');
 
		var selector = $(this).attr('data-filter');
		$gridv3.isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				animationEngine : "jquery"
			}
		});
		return false;	
 	});	

	$gridv3.imagesLoaded().progress( function() {
		$gridv3.isotope('layout');
	});

	var $blogMas = $('.masonry-container');
	$blogMas.isotope({
		itemSelector: '.masonry-item',
		isFitWidth: true,
		masonry: {
			columnWidth: '.masonry-item'
		}
	});

	/* =================================
	COUNTER
	=================================== */
	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });

	/* =================================
	VIDEO
	=================================== */
    var video = $('.video-wrap');
    if (video.length) {
      $(".overlay-image").on("click", function(){
        $(this).addClass("hide");
        $("#video-frame")[0].src += "&autoplay=1";
      });
    }

	/* =================================
	FAQ
	=================================== */	
	$(".panel").on("show.bs.collapse hide.bs.collapse", function(e) {
	    if (e.type=='show'){
	      $(this).addClass('active');
	    }else{
	      $(this).removeClass('active');
	    }
  	});  

	/* =================================
	SCROLL TO
	=================================== */
	$('.navbar-nav li a[href^="#"]').on('click', function(event) {
	    var target = $(this.getAttribute('href'));
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});

	$('a#back-to-top[href^="#"]').on('click', function(event) {
	    var target = $(this.getAttribute('href'));
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});	

	$('a.scroll-down[href^="#"]').on('click', function(event) {
	    var target = $(this.getAttribute('href'));
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});

	$('.demo-banner a.btn-primary[href^="#"]').on('click', function(event) {
	    var target = $(this.getAttribute('href'));
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});

	/* =================================
	MAGNIFIC POPUP
	=================================== */
	 $('.popup-with-zoom-anim').magnificPopup({
		type:'inline',
		fixedContentPos: false,
		removalDelay: 100,
		preloader: true,
		 mainClass: 'my-mfp-zoom-in'
	 });

	$('.popup-gallery-zoom').magnificPopup({
		type:'inline',
		fixedContentPos: false,
		removalDelay: 100,
		preloader: true,
		mainClass: 'my-mfp-zoom-in',
		callbacks: {
			open: initSliders 
		}
	});

	$('.popup-youtube').magnificPopup({
        type: 'iframe',
		fixedContentPos: false,
		removalDelay: 100,
		mainClass: 'my-mfp-zoom-in',
		preloader: true,
    });

	/*-------------------------------------
		Slider portfolio
	-------------------------------------*/
	function initSliders(){
	    var swiper = new Swiper('.swiper-gallery-container', {
		    slidesPerView: 1,
			fixedContentPos: true,
			removalDelay: 100,
			closeBtnInside: true,
			preloader: true,	    	
		    centeredSlides: true,
		    navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
		    },
	 	});
	}

	/* =================================
	SWIPER SLIDER
	=================================== */
	if ($(".swiper-banner-container").length){
		var swiperAnimation = new SwiperAnimation();
	  	var mySwiper4 = new Swiper('.swiper-banner-container', {   	
		    on: {
		      	init: function () {
		        	swiperAnimation.init(this).animate();
		     	},
		      	slideChange: function () {
		        	swiperAnimation.init(this).animate();
		      	},        	        
		    },
			pagination: {
			    el: '.swiper-pagination',
			    clickable: true,
			},	
	        autoplay: {
	            delay: 5000,
	        },	
	        grabCursor: true,		
	  	});
  	}

	if ($(".swiper-banner-container-2").length){
		var mySwiper3 = new Swiper('.swiper-banner-container-2', {  
			slidesPerView: 3,
			fixedContentPos: true,
			pagination: {
			    el: '.swiper-pagination',
			    clickable: true,
			},	
	        autoplay: {
	            delay: 5000,
	        },	
	        grabCursor: true,
		    breakpoints: {
			    1024: {
			      slidesPerView: 2,
			    },
			    992: {
			      slidesPerView: 1,
			    }
		  	},
		  	loop: true,	        		
	  	});
  	}

	var swiper2 = new Swiper('.swiper-testimonial-container', {
	 	slidesPerView: 1,
		fixedContentPos: true,
		removalDelay: 100,
		closeBtnInside: true,
		preloader: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },      		 	
	    breakpoints: {
		    // when window width is <= 640px
		    992: {
		      slidesPerView: 1,
		    }
	  	},
	  	loop: 'true',	    
	});

	var swiper1 = new Swiper('.swiper-works-container', {
	 	slidesPerView: 3,
		fixedContentPos: true,
		removalDelay: 100,
		closeBtnInside: true,
		preloader: true,
		spaceBetween: 30,	 	
	    pagination: {
	      	el: '.swiper-pagination',
	      	clickable: true,
	    },
        autoplay: {
            delay: 3000,
        },	 	    
	    breakpoints: {
		    992: {
		      slidesPerView: 2,
		    },
		    640: {
		      slidesPerView: 1,
		    },		    
	  	},
	  	loop: 'true',

	});

	var swiper = new Swiper('.swiper-portfolio-container', {
	 	slidesPerView: 1,
		fixedContentPos: true,
		removalDelay: 100,
		closeBtnInside: true,
		preloader: true,
		spaceBetween: 30,	 	
	    pagination: {
	      	el: '.swiper-pagination',
	      	clickable: true,
	    },
        autoplay: {
            delay: 3000,
        },	         	    
	  	loop: 'true',
	  	grabCursor: true
	});

	var swiper5 = new Swiper('.swiper-blog-container', {
	 	slidesPerView: 1,
		fixedContentPos: true,
		removalDelay: 100,
		closeBtnInside: true,
		preloader: true,
		spaceBetween: 30,	 	
        autoplay: {
            delay: 7000,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },         	         	    
	  	loop: 'true',
	  	grabCursor: true
	});	

	var swiper6 = new Swiper('.swiper-partners-container-1', {
      	slidesPerView: 5,
		spaceBetween: 100, 
		autoplay: {
    		delay: 5000,
 		},	
	    breakpoints: {
		    1024: {
		      slidesPerView: 4,
		      centeredSlides: false,
		    },
		    991: {
		      slidesPerView: 3,
		      centeredSlides: false,
		    },
		    640: {
		      slidesPerView: 2,
		      centeredSlides: false,
		    },		    
		    479: {
		      slidesPerView: 1,
		      centeredSlides: true,
		      		spaceBetween: 30, 
		    },		    
	  	},
	  	loop: 'true',
	  	grabCursor: 'true'	    
	});	

	var swiper7 = new Swiper('.swiper-intro-2-container', {
      	slidesPerView: 3,
      	centeredSlides: true,
		spaceBetween: 30, 
	    breakpoints: {
		    1024: {
		      slidesPerView: 3,
		      centeredSlides: false,
		    },
		    992: {
		      slidesPerView: 2,
		      centeredSlides: false,
		    },
		    480: {
		      slidesPerView: 1,
		      centeredSlides: true,
		      		spaceBetween: 30, 
		    },		    
	  	},
	  	loop: 'true',
	  	grabCursor: 'true'	    
	});

	var swiper8 = new Swiper('.swiper-testimonial-container-2', {
      	slidesPerView: 3,
	    breakpoints: {
		    1024: {
		      slidesPerView: 2,
		      centeredSlides: false,
		    },
		    480: {
		      slidesPerView: 1,
		      centeredSlides: true,
		    },		    
	  	},      	
      	centeredSlides: true,
		spaceBetween: 30, 	
	  	loop: 'true',
	  	grabCursor: 'true',
	    pagination: {
	      	el: '.swiper-pagination',
	      	clickable: true,
	    },	  	    
	});

	/* =================================
	WORDS ANIMATIONS
	=================================== */
	if ($(".tlt").length){
		$('.tlt').textillate({
		    minDisplayTime: 1000, 
		    loop: true
		});
	}

	/* =================================
	SKILLBAR
	=================================== */
	$('.skill-progress .skill').each(function () {
	    var $this = $(this);
	    var myVal = $(this).data("value");
	    var mypercent = $(this).attr("data-percent");
	    var targetbox = $(this).children('.outer-box');
	    $this.appear(function() {
	        $(window).one('scroll', function() {
	            progress(mypercent, $(targetbox));
	        });
	    });

  		function progress(percent, $element) {
          	var myItem = $element.children('div');
          	myItem.append('<span></span>');

          	var progressBarWidth = percent * $element.width() / 100;
          	$element.find('div').animate({ width: progressBarWidth }, 2000).find('span').html(percent + "% ");
      	}
  	});

	/* =================================
	PARALLAX
	=================================== */
    if($('body').outerWidth()>480){			
    	$('#banner.parallax').parallax("50%", 0.5);  
    	$('#facts.parallax').parallax("50%", 0.5); 
    	$('#cta.parallax').parallax("50%", 0.5);
    	$('#page-info.parallax').parallax("50%", 0.5);
    	$('.grid-item-v4.n1.parallax').parallax("50%", 0.5); 
    	$('.grid-item-v4.n2.parallax').parallax("50%", 0.5);  		   	 	
    }

	/* =================================
	PARTICLES
	=================================== */
	var ini =  $(this);
	var currentheight =  ini.height();
	if(currentheight >= 600){
		/*banner*/
		if ($("#particles-banner-js").length){
			particlesJS("particles-banner-js", {
			    particles: {
				    number: {
				        value: 140,
				        density: { enable: true, value_area: 1000 }
				    },
				    color: { value: "#ffffff" },
				    shape: {
				      type: "circle",
				      stroke: { width: 0, color: "#000000" },
				      polygon: { nb_sides: 4 },
				      image: { src: "img/github.svg", width: 100, height: 100 }
				    },
				    opacity: {
				      value: 0.4,
				      random: true,
				      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
				    },
				    size: {
				      value: 3,
				      random: true,
				      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
				    },
				    line_linked: {
				      enable: true,
				      distance: 120,
				      color: "#ffffff",
				      opacity: 0.3,
				      width: 1
				    },
				    move: {
				      enable: true,
				      speed: 4,
				      direction: "none",
				      random: false,
				      straight: false,
				      out_mode: "out",
				      bounce: false,
				      attract: { enable: false, rotateX: 600, rotateY: 1200 }
				    }
				},
				interactivity: {
				    detect_on: "canvas",
				    events: {
				      onhover: { enable: true, mode: "repulse" },
				      onclick: { enable: true, mode: "push" },
				      resize: true
				    },
				    modes: {
				      grab: { distance: 400, line_linked: { opacity: 1 } },
				      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
				      repulse: { distance: 200, duration: 0.4 },
				      push: { particles_nb: 4 },
				      remove: { particles_nb: 2 }
				    }
				},
				retina_detect: true
			});
		}
    }


    /* =================================
    SKILLBAR
    =================================== */
	$('.skill').each(function () {
		var $this = $(this);
		var doughnutArray = [document.getElementById('doughnut').getContext('2d'), document.getElementById('doughnut2').getContext('2d'), document.getElementById('doughnut3').getContext('2d'), document.getElementById('doughnut4').getContext('2d')];
		for (var i = 0; i < doughnutArray.length; i++) {
			doughnutArray[i].lineWidth = 6; //thickness of the line
			doughnutArray[i].fillStyle = '#ededed';
			doughnutArray[i].strokeStyle = "#ededed";
			doughnutArray[i].beginPath();
			doughnutArray[i].arc(60, 60, 55, 4.72, 15, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
			doughnutArray[i].stroke();
		}
		
		$this.appear(function() {
			loadSkills1();
			loadSkills2();
			loadSkills3();
			loadSkills4();
		});

		/*Load skills one function*/
		function loadSkills1() {
			var ctx = document.getElementById('skill1').getContext('2d');
			var al = 0;
			var start = 4.72;
			var cw = ctx.canvas.width;
			var ch = ctx.canvas.height;
			var diff;
			ctx.fillStyle = "#272727";
			ctx.strokeStyle = "#6381e5";
			  
			function progressSim() {
			    diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
			    ctx.clearRect(0, 0, cw, ch);
			    ctx.lineWidth = 7; //thickness of the line
			    ctx.textAlign = 'center';
			    ctx.font = "700 24px Poppins";
			    ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
			    ctx.beginPath();
			    ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
			    ctx.stroke();
			    if (al >= 95) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
			      clearTimeout(sim);
			      // Add scripting here that will run when progress completes
			    }
			    al++;
			}
			var sim = setInterval(progressSim, 10); //speed  	
		}

		/*loadSkills2 function*/
		function loadSkills2() {
			var ctx = document.getElementById('skill2').getContext('2d');
			var al = 0;
			var start = 4.72;
			var cw = ctx.canvas.width;
			var ch = ctx.canvas.height;
			var diff;
			ctx.fillStyle = "#272727";
			ctx.strokeStyle = "#6381e5";
			  
			function progressSim() {
			    diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
			    ctx.clearRect(0, 0, cw, ch);
			    ctx.lineWidth = 7; //thickness of the line
			    ctx.textAlign = 'center';
			    ctx.font = "700 24px Poppins";
			    ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
			    ctx.beginPath();
			    ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
			    ctx.stroke();
			    if (al >= 90) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
			      clearTimeout(sim);
			      // Add scripting here that will run when progress completes
			    }
			    al++;
			}
			var sim = setInterval(progressSim, 10); //speed
		}

		/* loadSkill3 function*/
		function loadSkills3() {
			var ctx = document.getElementById('skill3').getContext('2d');
			var al = 0;
			var start = 4.72;
			var cw = ctx.canvas.width;
			var ch = ctx.canvas.height;
			var diff;
			ctx.fillStyle = "#272727";
			ctx.strokeStyle = "#6381e5";

			function progressSim() {
			    diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
			    ctx.clearRect(0, 0, cw, ch);
			    ctx.lineWidth = 7; //thickness of the line
			    ctx.textAlign = 'center';
			    ctx.font = "700 24px Poppins";
			    ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
			    ctx.beginPath();
			    ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
			    ctx.stroke();
			    if (al >= 80) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
			      clearTimeout(sim);
			      // Add scripting here that will run when progress completes
			    }
			    al++;
			}
			var sim = setInterval(progressSim, 10); //speed
		}

		/* loadSkill4 function*/
		function loadSkills4() {
			var ctx = document.getElementById('skill4').getContext('2d');
			var al = 0;
			var start = 4.72;
			var cw = ctx.canvas.width;
			var ch = ctx.canvas.height;
			var diff;
			ctx.fillStyle = "#272727";
			ctx.strokeStyle = "#6381e5";

			function progressSim() {
			    diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
			    ctx.clearRect(0, 0, cw, ch);
			    ctx.lineWidth = 7; //thickness of the line
			    ctx.textAlign = 'center';
			    ctx.font = "700 24px Poppins";
			    ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
			    ctx.beginPath();
			    ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
			    ctx.stroke();
			    if (al >= 75) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
			      clearTimeout(sim);
			      // Add scripting here that will run when progress completes
			    }
			    al++;
			}
			var sim = setInterval(progressSim, 10); //speed
		}
	});

	/* =================================
	COMING SOON
	=================================== */
	if ($("#countdown").length){
		$('#countdown').countdown({
			date: "December 14, 2018 18:03:26",
			render: function(data) {
			  var el = $(this.el);
			  el.empty()
			    //.append("<div>" + this.leadingZeros(data.years, 4) + "<span>years</span></div>")
			    .append("<div class='col-md-3 col-xs-3'><div class='text-gradient'>" + this.leadingZeros(data.days, 2) + "</div><span>days</span></div>")
			    .append("<div class='col-md-3 col-xs-3'><div class='text-gradient'>" + this.leadingZeros(data.hours, 2) + "</div><span>hours</span></div>")
			    .append("<div class='col-md-3 col-xs-3'><div class='text-gradient'>" + this.leadingZeros(data.min, 2) + "</div><span>min</span></div>")
			    .append("<div class='col-md-3 col-xs-3'><div class='text-gradient'>" + this.leadingZeros(data.sec, 2) + "</div><span>sec</span></div>");
			}
		});
  	}	

});