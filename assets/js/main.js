/*window.addEventListener("load", () => {
let scrollContainer = document.querySelector("[data-scroll-container]");
const scroller = new LocomotiveScroll({
  el: scrollContainer,
  inertia: 0.8,
    smooth: true,
    getDirection: true,
	scrollFromAnywhere:true,
	reloadOnContextChange:true,
    mobile: {
      smooth: true,
      inertia: 0.8,
      getDirection: true,
    },
    tablet: {
      smooth: true,
      inertia: 0.8,
      getDirection: true,
    },
});
scroller.destroy();
setTimeout(function(){
scroller.init()
}, 100);
ScrollTrigger.addEventListener('wp_lazy_loading_enabled', function(){ scroller.update() });

  $('#main').imagesLoaded().always( function( instance ) {
  scroller.update();
});
  
document.addEventListener('lazyloaded', function(){
    scroller.update();
});

scroller.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => scroller.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
});
*/



document.addEventListener('DOMContentLoaded', () => {
  "use strict";
  

  /**
   * Preloader
   */
  /*const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }*/
  
  // scroll
  (function ($) {
	var scrollWindow = function () {
		$(window).scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.header'),
				sd = $('.js-scroll-wrap');

			if (st > 100) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');
				}
			}
			if (st < 100) {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
				}
			}
			if (st > 350) {
				if (!navbar.hasClass('awake')) {
					navbar.addClass('awake');
				}

				if (sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if (st < 350) {
				if (navbar.hasClass('awake')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if (sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();
	
	})(jQuery);
	
  /**
   * Mobile nav toggle
   */

  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
 /*  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    //window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  } */

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

/* 
 * Get videos on load
 */
(function () {
    getVideos();
})();

/**
 * For each video player, create custom thumbnail or
 * use Youtube max resolution default thumbnail and create
 * iframe video.
 */
function getVideos() {
    var v = document.getElementsByClassName("youtube-player");
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
        var id = v[n].getAttribute("data-id");

        var placeholder = v[n].hasAttribute("data-thumbnail")
            ? v[n].getAttribute("data-thumbnail")
            : "";

        if (placeholder.length) p.innerHTML = createCustomThumbail(placeholder);
        else p.innerHTML = createThumbail(id);

        v[n].appendChild(p);
        p.addEventListener("click", function () {
            var parent = this.parentNode;
            createIframe(parent, parent.getAttribute("data-id"));
        });
    }
}

/**
 * Create custom thumbnail from data-attribute provided url
 * @param {string} url
 * @return {string} The HTML containing the <img> tag
 */
function createCustomThumbail(url) {
    return (
        '<img class="youtube-thumbnail" src="' +
        url +
        '" alt="Youtube Preview" /><div class="youtube-play-btn"></div>'
    );
}

/**
 * Get Youtube default max resolution thumbnail
 * @param {string} id The Youtube video id
 * @return {string} The HTML containing the <img> tag
 */
function createThumbail(id) {
    return (
        '<img class="youtube-thumbnail" src="//i.ytimg.com/vi_webp/' +
        id +
        '/maxresdefault.webp" alt="Youtube Preview"><div class="youtube-play-btn"></div>'
    );
}

/**
 * Create and load iframe in Youtube container
 **/
function createIframe(v, id) {
    var iframe = document.createElement("iframe");
    console.log(v);
    iframe.setAttribute(
        "src",
        "//www.youtube.com/embed/" +
            id +
            "?autoplay=1&color=white&autohide=2&modestbranding=1&border=0&wmode=opaque&enablejsapi=1&showinfo=0&rel=0"
    );
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("class", "youtube-iframe");
    v.firstChild.replaceWith(iframe);
}

/** Pause video on modal close **/
$("#video-modal").on("hidden.bs.modal", function (e) {
    $(this).find("iframe").remove();
});

/** Pause video on modal close **/
$("#video-modal").on("show.bs.modal", function (e) {
    getVideos();
});


});

