// Menu Mobile
const burgerIcon = document.getElementById( 'burger-icon' );
const menuModal = document.getElementById( 'menu-modal' );

burgerIcon.addEventListener( 'click', () => {
    burgerIcon.classList.toggle( 'open' );
    menuModal.classList.toggle( 'open' );
} );


// Scroll to top

const scrollToTopBtn = document.getElementById( 'scrollToTopBtn' );
let lastScrollY = window.scrollY;
let hideTimeout = null;

function showButton() {
    scrollToTopBtn.classList.add( 'show' );
    scrollToTopBtn.classList.remove( 'hide' );

    if ( hideTimeout ) clearTimeout( hideTimeout );

    hideTimeout = setTimeout( () => {
        scrollToTopBtn.classList.add( 'hide' );
        scrollToTopBtn.classList.remove( 'show' );
    }, 1000 );
}

function handleScroll() {
    const currentScrollY = window.scrollY;

    if ( currentScrollY < lastScrollY ) {
        showButton();
    }

    lastScrollY = currentScrollY;
}

scrollToTopBtn.addEventListener( 'click', () => {
    window.scrollTo( {
        top: 0,
        behavior: 'smooth'
    } );
} );

window.addEventListener( 'scroll', handleScroll );


// Animation View Port

function isInViewport( el ) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.top <= ( window.innerHeight || document.documentElement.clientHeight ) &&
        rect.left <= ( window.innerWidth || document.documentElement.clientWidth )
    );
}

function animateOnScroll() {
    const elements = document.querySelectorAll( '[data-animation]' );

    elements.forEach( element => {
        if ( isInViewport( element ) ) {
            element.classList.add( 'animate' );
        }
    } );
}

window.addEventListener( 'scroll', animateOnScroll );
window.addEventListener( 'load', animateOnScroll );