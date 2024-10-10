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
    burgerIcon.style.setProperty( "opacity", "1" )

    if ( hideTimeout ) clearTimeout( hideTimeout );

    hideTimeout = setTimeout( () => {
        scrollToTopBtn.classList.add( 'hide' );
        burgerIcon.style.setProperty( "opacity", "0.5" )
        scrollToTopBtn.classList.remove( 'show' );
    }, 1000 );
}

function handleScroll() {
    const currentScrollY = window.scrollY;

    if ( window.scrollY > 150 ) {
        burgerIcon.style.setProperty( "opacity", "0.5" )
    }

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
        rect.top - 400 <= ( window.innerHeight || document.documentElement.clientHeight ) &&
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


// Display

document.addEventListener( "DOMContentLoaded", function () {
    if ( window.innerWidth < 680 ) {
        const img = document.getElementById( "dice_footer" )
        if ( img ) {
            img.src = "./assets/mobile_footer.webp"
        }
    }
    if ( window.innerWidth < 560 || window.innerWidth < 680 ) {
        document.body.style.zoom = '154%';
    }
    if ( window.innerWidth < 560 ) {
        document.body.style.zoom = '154%';
    }
    if ( window.innerWidth < 519 ) {
        document.body.style.zoom = '140%';
    }
    if ( window.innerWidth < 479 ) {
        document.body.style.zoom = '104%';
    }
} );


//Parallax

window.addEventListener( 'scroll', function () {
    const parallax = document.querySelector( '.parallax_effect' );
    const parallax_tile = document.querySelector( '.parallax_effect_tile' );
    let scrollPosition = window.pageYOffset;

    if ( window.innerWidth > 680 && parallax && parallax_tile ) {
        parallax.style.transform = 'translateY(' + ( 320 + ( scrollPosition * 0.5 ) ) + 'px)';
        parallax_tile.style.transform = 'translateY(' + scrollPosition * 0.2 + 'px)';

    } else {
        if ( parallax && parallax_tile ) {
            parallax.style.transform = 'translateY(' + 0 + 'px)';
            parallax_tile.style.transform = 'translateY(' + 0 + 'px)';
        }
    }
} );


const display = document.querySelector( ".display" )


window.addEventListener( 'load', function () {
    display.classList.add( 'loaded' );
} );

document.querySelectorAll( '.navigation_s' ).forEach( link => {
    link.addEventListener( 'click', function ( e ) {
        e.preventDefault();
        const targetURL = this.href;

        display.classList.remove( 'loaded' );

        setTimeout( function () {
            window.location.href = targetURL;
        }, 500 );
    } );
} );
