const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in-scroll");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
});


let slideIndex = 0;
showSlides(slideIndex);

// Fungsi untuk mengubah slide
function changeSlide(n) {
    showSlides((slideIndex += n));
}

// Fungsi untuk menampilkan slide
function showSlides(n) {
    let slides = document.querySelectorAll(".slide");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? "block" : "none";
    });
}

// Slideshow otomatis
setInterval(() => {
    changeSlide(1);
}, 5000); 


