const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})