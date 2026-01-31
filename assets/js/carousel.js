/*
   Carousel Prototype
   Eric Eggert for W3C
*/

// Modified to remove animations and updated

let myCarousel = (function () {

    "use strict";

    // Initial variables
    let carousel, slides, index, settings, setFocus;

    // Helper function: Remove Class
    function removeClass(el, className) {
        if (el.classList) {
            el.classList.remove(className);
        } else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

    // Helper function: Test if element has a specific class
    function hasClass(el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        } else {
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
        }
    }

    // Initialization for the carousel
    // Argument: set = an object of settings
    // Possible settings:
    // id <string> ID of the carousel wrapper element (required).
    function init(set) {

        // Make settings available to all functions
        settings = set;

        // Select the element and the individual slides
        carousel = document.getElementById(settings.id);
        slides = carousel.getElementsByTagName('li');

        // Get present slide controls and attach click events
        const prev = carousel.getElementsByClassName('prev')[0];
        const next = carousel.getElementsByClassName('next')[0];

        prev.addEventListener('click', function () {
                prevSlide(true);
            });

        next.addEventListener('click', function () {
                nextSlide(true);
            });

        // Set the index (=current slide) to 0 – the first slide
        index = 0;
        setSlides(index);
    }

    // Function to set a slide the current slide
    function setSlides(new_current, setFocusHere, transition, announceItemHere) {
        // Focus, transition and announce Item are optional parameters.
        // focus denotes if the focus should be set after the
        // carousel advanced to slide number new_current.
        // transition denotes if the transition is going into the
        // next or previous direction.
        // If announceItem is set to true, the live region’s text is changed (and announced)
        // Here defaults are set:

        setFocus = typeof setFocusHere !== 'undefined' ? setFocusHere : false;
        transition = typeof transition !== 'undefined' ? transition : 'none';
        let announceItem = typeof announceItemHere !== 'undefined' ? announceItemHere : false;

        new_current = parseFloat(new_current);

        const length = slides.length;
        let new_next = new_current + 1;
        let new_prev = new_current - 1;

        // If the next slide number is equal to the length,
        // the next slide should be the first one of the slides.
        // If the previous slide number is less than 0.
        // the previous slide is the last of the slides.
        if (new_next === length) {
            new_next = 0;
        } else if (new_prev < 0) {
            new_prev = length - 1;
        }

        // Reset slide classes
        for (let i = slides.length - 1; i >= 0; i--) {
            slides[i].className = "slide";
            slides[i].setAttribute('aria-hidden', 'true');
        }

        let slideNextImg, slidePrevImg, slideCurrentImg;

        // Add classes to the previous, next and current slide
        slides[new_next].className = 'next slide';
        slides[new_next].setAttribute('aria-hidden', 'true');

        slideNextImg = slides[new_next].getElementsByTagName('img')[0];
        slideNextImg.removeAttribute('tabindex');

        slides[new_prev].className = 'prev slide';
        slides[new_prev].setAttribute('aria-hidden', 'true');

        slidePrevImg = slides[new_prev].getElementsByTagName('img')[0];
        slidePrevImg.removeAttribute('tabindex');

        slides[new_current].className = 'current slide';
        slides[new_current].removeAttribute('aria-hidden');

        slideCurrentImg = slides[new_current].getElementsByTagName('img')[0];
        slideCurrentImg.setAttribute('tabindex', '-1');
        slideCurrentImg.focus();

        // Update the text in the live region which is then announced by screen readers.
        if (announceItem) {
            carousel.querySelector('.liveregion').textContent = 'Page ' + (new_current + 1) + ' of ' + slides.length;
        }

        // Set the global index to the new current value
        index = new_current;

    }

    // Function to advance to the next slide
    function nextSlide(announceItem) {
        announceItem = typeof announceItem !== 'undefined' ? announceItem : false;

        let length = slides.length,
            new_current = index + 1;

        if (new_current === length) {
            new_current = 0;
        }

        // If we advance to the next slide, the previous needs to be
        // visible to the user, so the third parameter is 'prev', not
        // next.
        setSlides(new_current, false, 'prev', announceItem);

    }

    // Function to advance to the previous slide
    function prevSlide(announceItem) {
        announceItem = typeof announceItem !== 'undefined' ? announceItem : false;

        let length = slides.length,
            new_current = index - 1;

        // If we are already on the first slide, show the last slide instead.
        if (new_current < 0) {
            new_current = length - 1;
        }

        // If we advance to the previous slide, the next needs to be
        // visible to the user, so the third parameter is 'next', not
        // prev.
        setSlides(new_current, false, 'next', announceItem);

    }

    // Making some functions public
    return {
        init: init,
        next: nextSlide,
        prev: prevSlide,
        goto: setSlides,
    };
});

let carousels = {
    "comic1": carousel1 = new myCarousel(),
    "comic2": carousel2 = new myCarousel(),
}

Object.keys(carousels).forEach(key => {
    carousels[key].init({
        id: key
    });
})