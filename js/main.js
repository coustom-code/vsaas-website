(function ($) {
    "use strict";
        var wind = $(window);
        // Header Sticky
        $(".vsaas-fixed-nav").scrollToFixed();

        // Mean Menu
        jQuery(".mean-menu").meanmenu({
            meanScreenWidth: "991",
        });

        //  Star Counter
        $(".counter-number").counterUp({
            delay: 15,
            time: 2000,
        });

        // Popup Video
        $(".popup-youtube").magnificPopup({
            disableOn: 320,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
        });
		
        // Testimonials-1 owl
		$('.testimonial-slide .owl-carousel').owlCarousel({
			margin: 16,
			autoplay: true,
			autoplayTimeout: 4000,
			nav: false,
			smartSpeed: 800,
			dots: true,
			autoplayHoverPause: true,
			loop: true,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});

        // Testimonials-2 owl
        $("#testimonial-slide2").owlCarousel({
            margin: 0,
            center: true,
            autoplay: true,
            autoplayTimeout: 4000,
            nav: false,
            smartSpeed: 800,
            dots: true,
            autoplayHoverPause: true,
            loop: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
					center: false,
                },
                768: {
                    items: 1,
                },
                1000: {
                    items: 3,
                },
            },
        });
		
		// Testimonials-3 owl
        $("#testimonial-slide3").owlCarousel({
            margin: 0,
            autoplay: true,
            autoplayTimeout: 4000,
            nav: false,
            smartSpeed: 800,
            dots: true,
            autoplayHoverPause: true,
            loop: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                1000: {
                    items: 2,
                },
            },
        });
		
		// Product shop owl
		$('#product-shop-slide').owlCarousel({
			margin: 0,
			autoplay: true,
			autoplayTimeout: 4000,
			nav: false,
			smartSpeed: 1000,
			dots: true,
			autoplayHoverPause: true,
			loop: true,
			responsiveClass:true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 4
				}
			}
		});
		
        // Partner Logo
        $("#partner-carousel").owlCarousel({
            margin: 0,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 800,
            nav: false,
            dots: false,
            autoplayHoverPause: true,
            loop: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 3,
                },
                1000: {
                    items: 5,
                },
            },
        });
		
        // Tabs
        (function ($) {
            $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
            $('.tab ul.tabs li a').on('click', function (g) {
                var tab = $(this).closest('.tab'), 
                index = $(this).closest('li').index();
                tab.find('ul.tabs > li').removeClass('current');
                $(this).closest('li').addClass('current');
                tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
                tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
                g.preventDefault();
            });
        })(jQuery);

        // FAQ Accordion
        $(function () {
            $(".accordion")
                .find(".accordion-title")
                .on("click", function () {
                    // Adds Active Class
                    $(this).toggleClass("active");
                    // Expand or Collapse This Panel
                    $(this).next().slideToggle("slow");
                    // Hide The Other Panels
                    $(".accordion-content").not($(this).next()).slideUp("slow");
                    // Removes Active Class From Other Titles
                    $(".accordion-title").not($(this)).removeClass("active");
                });
        });

        // Go to Top
        $(function () {
            // Scroll Event
            $(window).on("scroll", function () {
                var scrolled = $(window).scrollTop();
                if (scrolled > 600) $(".go-top").addClass("active");
                if (scrolled < 600) $(".go-top").removeClass("active");
            });
            // Click Event
            $(".go-top").on("click", function () {
                $("html, body").animate({ scrollTop: "0" }, 500);
            });
        });
		
        // Count Time
        function makeTimer() {
            var endTime = new Date("January 10, 2028 17:00:00 PDT");
            var endTime = Date.parse(endTime) / 1000;
            var now = new Date();
            var now = Date.parse(now) / 1000;
            var timeLeft = endTime - now;
            var days = Math.floor(timeLeft / 86400);
            var hours = Math.floor((timeLeft - days * 86400) / 3600);
            var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
            var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);
            if (hours < "10") {
                hours = "0" + hours;
            }
            if (minutes < "10") {
                minutes = "0" + minutes;
            }
            if (seconds < "10") {
                seconds = "0" + seconds;
            }
            $("#days").html(days + "<span>Days</span>");
            $("#hours").html(hours + "<span>Hours</span>");
            $("#minutes").html(minutes + "<span>Minutes</span>");
            $("#seconds").html(seconds + "<span>Seconds</span>");
        }
        setInterval(function () {
            makeTimer();
        }, 1000);
		
    // MagnificPopup
    $(".project-container-3").magnificPopup({
        delegate: ".popimg",
        type: "image",
        gallery: {
            enabled: true,
        },
    });

    // Project isotope and filter
    $(window).on("load", function () {
        var projectIsotope = $(".project-flip-container, .project-container-3").isotope({
            itemSelector: ".project-flip-grid, .project-grid-box",
        });
        $("#project-flip-flters li, #project-flters-3 li").on("click", function () {
            $("#project-flip-flters li, #project-flters-3 li").removeClass("filter-active");
            $(this).addClass("filter-active");
            projectIsotope.isotope({
                filter: $(this).data("filter"),
            });
        });
    });

    // Search Popup JS
    $(".close-btn").on("click", function () {
        $(".search-overlay").fadeOut();
        $(".search-btn").show();
        $(".close-btn").removeClass("active");
    });
    $(".search-btn").on("click", function () {
        $(this).hide();
        $(".search-overlay").fadeIn();
        $(".close-btn").addClass("active");
    });

	// Progress bar
	$(window).on('scroll', function () {
		$(".skill-progress .progres").each(function () {
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			var myVal = $(this).attr('data-value');
			if (bottom_of_window > bottom_of_object) {
				$(this).css({
					width: myVal
				});
			}
		});
	});
	
    // WOW JS
    $(window).on("load", function () {
        if ($(".wow").length) {
            var wow = new WOW({
                boxClass: "wow", // Animated element css class (default is wow)
                animateClass: "animated", // Animation css class (default is animated)
                offset: 20, // Distance to the element when triggering the animation (default is 0)
                mobile: true, // Trigger animations on mobile devices (default is true)
                live: true, // Act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
    });
	// START PRELOADED
    $(window).on('load', function() {
        $('.vsaas-preloader').fadeOut();
        $('.vsaas-preloader').delay(350).fadeOut('slow');
    });
	
	/*START CONTACT MAP JS*/
	if($('.map-canvas').length) {
		// Specify features and elements to define styles.
		var styles = [{
			"featureType": "administrative",
			"elementType": "all",
			"stylers": [{
				"visibility": "simplified"
			}]
		}, {
			"featureType": "landscape",
			"elementType": "geometry",
			"stylers": [{
				"visibility": "simplified"
			}, {
				"color": "#fcfcfc"
			}]
		}, {
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [{
				"visibility": "simplified"
			}, {
				"color": "#fcfcfc"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [{
				"visibility": "simplified"
			}, {
				"color": "#dddddd"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [{
				"visibility": "simplified"
			}, {
				"color": "#dddddd"
			}]
		}, {
			"featureType": "road.local",
			"elementType": "geometry",
			"stylers": [{
				"visibility": "simplified"
			}, {
				"color": "#eeeeee"
			}]
		}, {
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [{
				"visibility": "simplified"
			}, {
				"color": "#dddddd"
			}]
		}];
		var mapOptions = {
			center: new google.maps.LatLng(40.7143528, -74.0059731),
			zoom: 12,
			scrollwheel: false,
			panControl: true,
			mapTypeControl: false,
			streetViewControl: false,
			disableDefaultUI: false,
			zoomControl: true,
			disableDoubleClickZoom: false,
			fullscreenControl: false,
			styles: styles
		};
		var initMap = function() {
			var contactdata = $('#contact-map').data('content');
			var map = new google.maps.Map(document.getElementById("contact-map"), mapOptions);
			var bounds = new google.maps.LatLngBounds();
			var myIcon = new google.maps.MarkerImage("assets/img/map_pin.png", null, null, null, new google.maps.Size(50, 55));
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(40.7143528, -74.0059731),
				map: map,
				icon: myIcon
			});
		};
		initMap();
		google.maps.event.addDomListener(window, 'load resize', initMap);
	}
	/*END CONTACT MAP JS*/
})(jQuery);

// Current year for the copyrights
function getCurrentYear() {
    return new Date().getFullYear();
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("currentYear").innerText = getCurrentYear();
  });
  // Current year for the copyrights

// technologies stack
const tabs = document.querySelectorAll('.navtab');
const contents = document.querySelectorAll('.content');
const underline = document.querySelector('.underline');

function updateUnderline() {
  const activeTab = document.querySelector('.navtab.active');
  underline.style.width = `${activeTab.offsetWidth}px`;
  underline.style.left = `${activeTab.offsetLeft}px`;
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.getAttribute('data-target');
    contents.forEach(content => {
      if (content.id === target) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
    updateUnderline();
  });
});

window.addEventListener('resize', updateUnderline);
updateUnderline();
// technologies stack


jQuery(document).ready(function ($) {
    var tabwrapWidth = $('.tabs-wrapper').outerWidth();
    var totalWidth = 0;
    jQuery("ul li").each(function () {
        totalWidth += jQuery(this).outerWidth();

    });
    if (totalWidth > tabwrapWidth) {
        $('.scroller-btn').removeClass('inactive');
    }
    else {
        $('.scroller-btn').addClass('inactive');
    }

    if ($("#scroller").scrollLeft() == 0) {
        $('.scroller-btn.left').addClass('inactive');
    }
    else {
        $('.scroller-btn.left').removeClass('inactive');
    }
    var liWidth = $('#scroller li').outerWidth();
    var liCount = $('#scroller li').length;
    var scrollWidth = liWidth * liCount;

    $('.right').on('click', function () {
        $('.nav-tabs').animate({ scrollLeft: '+=200px' }, 300);
        console.log($("#scroller").scrollLeft() + " px");
    });

    $('.left').on('click', function () {
        $('.nav-tabs').animate({ scrollLeft: '-=200px' }, 300);
    });
    scrollerHide()

    function scrollerHide() {
        var scrollLeftPrev = 0;
        $('#scroller').scroll(function () {
            var $elem = $('#scroller');
            var newScrollLeft = $elem.scrollLeft(),
                width = $elem.outerWidth(),
                scrollWidth = $elem.get(0).scrollWidth;
            if (scrollWidth - newScrollLeft == width) {
                $('.right.scroller-btn').addClass('inactive');
            }
            else {

                $('.right.scroller-btn').removeClass('inactive');
            }
            if (newScrollLeft === 0) {
                $('.left.scroller-btn').addClass('inactive');
            }
            else {

                $('.left.scroller-btn').removeClass('inactive');
            }
            scrollLeftPrev = newScrollLeft;
        });
    }
});

  