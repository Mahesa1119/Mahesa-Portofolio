const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const image = document.getElementById('toggleImage');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});
