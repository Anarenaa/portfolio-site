const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

function preventDefault(event) {
    event.preventDefault();
}

const path = window.location.pathname;

document.querySelectorAll('.menu__link').forEach(link => {
    const linkHref = link.getAttribute('href');
    
    if (path === linkHref) {
        link.classList.add('menu__link--active');
        link.addEventListener('click', preventDefault);
        link.removeAttribute('href');
    } else {
        link.classList.remove('menu__link--active');
        link.removeEventListener('click', preventDefault);
    }
});
