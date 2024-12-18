// Initialize Typed.js
const typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "UI/UX Designer", "Backend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});
// Menu Toggle Script
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


