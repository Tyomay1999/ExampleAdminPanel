const burgerIcon = document.getElementById('burger-icon');
const menuModal = document.getElementById('menu-modal');

burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('open');
    menuModal.classList.toggle('open');
});

const scrollToTopBtn = document.getElementById('scrollToTopBtn');
let lastScrollY = window.scrollY;
let hideTimeout = null;

function showButton() {
    scrollToTopBtn.classList.add('show');
    scrollToTopBtn.classList.remove('hide');

    if (hideTimeout) clearTimeout(hideTimeout);

    hideTimeout = setTimeout(() => {
        scrollToTopBtn.classList.add('hide');
        scrollToTopBtn.classList.remove('show');
    }, 1000);
}

function handleScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY) {
        showButton();
    }

    lastScrollY = currentScrollY;
}

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', handleScroll);