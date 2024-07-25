const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('hidden');
});

const footerItems = document.querySelectorAll('.footer-item');
const footerLinks = document.querySelectorAll('.footer-link');

for (let i = 0; i < footerItems.length; i++) {
    footerItems[i].addEventListener('click', () => {
        footerItems[i].classList.toggle('active');
        footerLinks[i].classList.toggle('active');
    });
}



