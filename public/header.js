const header = document.querySelector('header');
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

// Toggle mobile menu
function toggleMenu() {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
}

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Change header on scroll
function updateHeader() {
    const heroSection = document.querySelector('.hero');
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    
    if (window.scrollY > heroBottom - header.offsetHeight) {
        header.classList.remove('transparent');
        header.classList.add('white');
    } else {
        header.classList.add('transparent');
        header.classList.remove('white');
    }
}

// Set initial header state
header.classList.add('transparent');

// Listen for scroll events
window.addEventListener('scroll', updateHeader);
window.addEventListener('load', updateHeader);