/* ===================================================================
 * Main JS
 *
 * ------------------------------------------------------------------- */

(function(html) {

    'use strict';


   /* preloader
    * -------------------------------------------------- */
    const ssPreloader = function() {

        const siteBody = document.querySelector('body');
        const preloader = document.querySelector('#preloader');
        if (!preloader) return;

        html.classList.add('ss-preload');
        
        window.addEventListener('load', function() {
            html.classList.remove('ss-preload');
            html.classList.add('ss-loaded');
            
            preloader.addEventListener('transitionend', function afterTransition(e) {
                if (e.target.matches('#preloader'))  {
                    siteBody.classList.add('ss-show');
                    e.target.style.display = 'none';
                    preloader.removeEventListener(e.type, afterTransition);
                }
            });
        });

    }; // end ssPreloader


   /* move header
    * -------------------------------------------------- */
    const ssMoveHeader = function () {

        const hdr = document.querySelector('.s-header');
        const hero = document.querySelector('#intro');
        let triggerHeight;

        if (!(hdr && hero)) return;

        setTimeout(function() {
            triggerHeight = hero.offsetHeight - 170;
        }, 300);

        window.addEventListener('scroll', function () {

            let loc = window.scrollY;

            if (loc > triggerHeight) {
                hdr.classList.add('sticky');
            } else {
                hdr.classList.remove('sticky');
            }

            if (loc > triggerHeight + 20) {
                hdr.classList.add('offset');
            } else {
                hdr.classList.remove('offset');
            }

            if (loc > triggerHeight + 150) {
                hdr.classList.add('scrolling');
            } else {
                hdr.classList.remove('scrolling');
            }

        });

    }; // end ssMoveHeader


   /* mobile menu
    * ---------------------------------------------------- */ 
    const ssMobileMenu = function() {

        const toggleButton = document.querySelector('.s-header__menu-toggle');
        const mainNavWrap = document.querySelector('.s-header__nav');
        const siteBody = document.querySelector('body');

        if (!(toggleButton && mainNavWrap)) return;

        toggleButton.addEventListener('click', function(e) {
            e.preventDefault();
            toggleButton.classList.toggle('is-clicked');
            siteBody.classList.toggle('menu-is-open');
        });

        mainNavWrap.querySelectorAll('.s-header__nav a').forEach(function(link) {

            link.addEventListener("click", function(event) {

                // at 900px and below
                if (window.matchMedia('(max-width: 900px)').matches) {
                    toggleButton.classList.toggle('is-clicked');
                    siteBody.classList.toggle('menu-is-open');
                }
            });
        });

        window.addEventListener('resize', function() {

            // above 900px
            if (window.matchMedia('(min-width: 901px)').matches) {
                if (siteBody.classList.contains('menu-is-open')) siteBody.classList.remove('menu-is-open');
                if (toggleButton.classList.contains('is-clicked')) toggleButton.classList.remove('is-clicked');
            }
        });

    }; // end ssMobileMenu


   /* highlight active menu link on pagescroll
    * ------------------------------------------------------ */
    const ssScrollSpy = function() {

        const sections = document.querySelectorAll('.target-section');
        if (!sections) return;

        // Add an event listener listening for scroll
        window.addEventListener('scroll', navHighlight);

        function navHighlight() {
        
            // Get current scroll position
            let scrollY = window.pageYOffset;
        
            // Loop through sections to get height(including padding and border), 
            // top and ID values for each
            sections.forEach(function(current) {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute('id');
            
               /* If our current scroll position enters the space where current section 
                * on screen is, add .current class to parent element(li) of the thecorresponding 
                * navigation link, else remove it. To know which link is active, we use 
                * sectionId variable we are getting while looping through sections as 
                * an selector
                */
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector('.s-header__nav a[href*=' + sectionId + ']').parentNode.classList.add('current');
                } else {
                    document.querySelector('.s-header__nav a[href*=' + sectionId + ']').parentNode.classList.remove('current');
                }
            });
        }

    }; // end ssScrollSpy


   /* glightbox
    * ------------------------------------------------------ */ 
    const ssGLightbox = function() {

        const lightbox = GLightbox({
            selector: '.glightbox',
            zoomable: false,
            touchNavigation: true,
            loop: false,
            autoplayVideos: true,
            svg: {
                close: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>',
                prev: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" fill-rule="nonzero"/></svg>',
                next: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero"/></svg>'
            }
        });        

    } // end ssGLightbox


   /* swiper
    * ------------------------------------------------------ */ 
    const ssSwiper = function() {

        const testimonialsSwiper = new Swiper('.s-testimonials__slider', {

            slidesPerView: 1,
            spaceBetween: 20,
            loop: false,
            grabCursor: true,
            touchRatio: 1,
            touchAngle: 45,
            threshold: 5,
            longSwipesRatio: 0.5,
            resistance: true,
            resistanceRatio: 0.85,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                // when window width is > 400px
                401: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is > 800px
                801: {
                    slidesPerView: 2,
                    spaceBetween: 50
                },
                // when window width is > 1180px
                1181: {
                    slidesPerView: 3,
                    spaceBetween: 48
                }
            }
        });

    }; // end ssSwiper


   /* alert boxes
    * ------------------------------------------------------ */
    const ssAlertBoxes = function() {

        const boxes = document.querySelectorAll('.alert-box');
  
        boxes.forEach(function(box){

            box.addEventListener('click', function(e) {
                if (e.target.matches('.alert-box__close')) {
                    e.stopPropagation();
                    e.target.parentElement.classList.add('hideit');

                    setTimeout(function() {
                        box.style.display = 'none';
                    }, 500)
                }
            });
        })

    }; // end ssAlertBoxes


    /* Back to Top
    * ------------------------------------------------------ */
    const ssBackToTop = function() {

        const pxShow = 900;
        const goTopButton = document.querySelector(".ss-go-top");

        if (!goTopButton) return;

        // Show or hide the button
        if (window.scrollY >= pxShow) goTopButton.classList.add("link-is-visible");

        window.addEventListener('scroll', function() {
            if (window.scrollY >= pxShow) {
                if(!goTopButton.classList.contains('link-is-visible')) goTopButton.classList.add("link-is-visible")
            } else {
                goTopButton.classList.remove("link-is-visible")
            }
        });

    }; // end ssBackToTop


   /* smoothscroll
    * ------------------------------------------------------ */
    const ssMoveTo = function() {

        const easeFunctions = {
            easeInQuad: function (t, b, c, d) {
                t /= d;
                return c * t * t + b;
            },
            easeOutQuad: function (t, b, c, d) {
                t /= d;
                return -c * t* (t - 2) + b;
            },
            easeInOutQuad: function (t, b, c, d) {
                t /= d/2;
                if (t < 1) return c/2*t*t + b;
                t--;
                return -c/2 * (t*(t-2) - 1) + b;
            },
            easeInOutCubic: function (t, b, c, d) {
                t /= d/2;
                if (t < 1) return c/2*t*t*t + b;
                t -= 2;
                return c/2*(t*t*t + 2) + b;
            }
        }

        const triggers = document.querySelectorAll('.smoothscroll');
        
        const moveTo = new MoveTo({
            tolerance: 0,
            duration: 1200,
            easing: 'easeInOutCubic',
            container: window
        }, easeFunctions);

        triggers.forEach(function(trigger) {
            moveTo.registerTrigger(trigger);
        });

    }; // end ssMoveTo


   /* intro carousel
    * ------------------------------------------------------ */
    const ssIntroCarousel = function() {

        const carousel = document.querySelector('.intro-carousel');
        if (!carousel) return;

        const track = carousel.querySelector('.intro-carousel__track');
        const slides = carousel.querySelectorAll('.intro-carousel__slide');
        const dotsContainer = carousel.querySelector('.intro-carousel__dots');
        if (!track || slides.length === 0 || !dotsContainer) return;

        const slideCount = slides.length;
        let currentIndex = 0;
        let autoplayTimer = null;
        let isDragging = false;
        let startX = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;
        let animationID = null;

        // Create dots
        slides.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'intro-carousel__dot' + (i === 0 ? ' is-active' : '');
            dot.setAttribute('aria-label', 'Bild ' + (i + 1));
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll('.intro-carousel__dot');

        function updateDots() {
            dots.forEach((dot, i) => {
                dot.classList.toggle('is-active', i === currentIndex);
            });
        }

        function updateSlidePosition(withTransition = true) {
            if (withTransition) {
                track.style.transition = 'transform 600ms cubic-bezier(0.33, 0.66, 0.66, 1)';
            }
            track.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
        }

        function goToSlide(newIndex) {
            currentIndex = newIndex;
            updateSlidePosition(true);
            updateDots();
            resetAutoplay();
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slideCount;
            updateSlidePosition(true);
            updateDots();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slideCount) % slideCount;
            updateSlidePosition(true);
            updateDots();
        }

        function resetAutoplay() {
            if (autoplayTimer) clearInterval(autoplayTimer);
            autoplayTimer = setInterval(nextSlide, 20000);
        }

        // Touch/Mouse events
        function onMouseDown(e) {
            isDragging = true;
            startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
            track.style.transition = 'none';
            if (autoplayTimer) clearInterval(autoplayTimer);
        }

        function onMouseMove(e) {
            if (!isDragging) return;

            const currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
            currentTranslate = prevTranslate + (currentX - startX) / carousel.offsetWidth * -100;
            track.style.transform = 'translateX(' + currentTranslate + '%)';
        }

        function onMouseUp(e) {
            if (!isDragging) return;

            isDragging = false;

            const movedBy = currentTranslate - prevTranslate;

            // Threshold: 20% movement to trigger slide change
            if (Math.abs(movedBy) > 20) {
                if (movedBy > 0) {
                    prevSlide();
                } else {
                    nextSlide();
                }
            } else {
                // Snap back to current slide
                goToSlide(currentIndex);
            }

            prevTranslate = -currentIndex * 100;
            resetAutoplay();
        }

        // Event listeners
        carousel.addEventListener('mousedown', onMouseDown);
        carousel.addEventListener('mousemove', onMouseMove);
        carousel.addEventListener('mouseup', onMouseUp);
        carousel.addEventListener('mouseleave', onMouseUp);

        carousel.addEventListener('touchstart', onMouseDown);
        carousel.addEventListener('touchmove', onMouseMove);
        carousel.addEventListener('touchend', onMouseUp);

        // Keyboard navigation
        carousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        });

        // Initial setup
        updateSlidePosition();
        resetAutoplay();

    }; // end ssIntroCarousel


   /* contact form
    * ------------------------------------------------------ */
    const ssContactForm = function() {
        const form = document.getElementById('contactForm');
        const submitBtn = form?.querySelector('button[type="submit"]');
        const msgSuccess = document.getElementById('message-success');
        const msgWarning = document.getElementById('message-warning');

        if (!form) return;

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(form);
            const originalBtnText = submitBtn.textContent;

            // Disable button and show loading
            submitBtn.textContent = 'Wird gesendet...';
            submitBtn.disabled = true;
            msgSuccess.style.display = 'none';
            msgWarning.style.display = 'none';

            // Send form data
            fetch('contact.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                if (data.trim() === 'OK') {
                    msgSuccess.style.display = 'block';
                    form.reset();
                } else {
                    msgWarning.textContent = data;
                    msgWarning.style.display = 'block';
                }
            })
            .catch(error => {
                msgWarning.textContent = 'Es gab einen Fehler. Bitte versuchen Sie es erneut.';
                msgWarning.style.display = 'block';
            })
            .finally(() => {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            });
        });
    };


   /* Initialize
    * ------------------------------------------------------ */
    (function ssInit() {

        ssPreloader();
        ssMoveHeader();
        ssMobileMenu();
        ssScrollSpy();
        ssGLightbox();
        ssSwiper();
        ssAlertBoxes();
        ssMoveTo();
        ssIntroCarousel();
        ssContactForm();

    })();

})(document.documentElement);