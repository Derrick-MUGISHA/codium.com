// Initialize Typed.js for text animation
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'UI/UX Designer', 'Backend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Mobile Menu Functionality
const mobileMenu = document.querySelector('.mobile-menu');
const navbar = document.querySelector('.navbar');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navbar.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !mobileMenu.contains(e.target)) {
        navbar.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            // Close mobile menu after clicking a link
            navbar.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scrolling down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scrolling up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Responsive layout adjustments
function adjustLayout() {
    const windowWidth = window.innerWidth;
    const homeContent = document.querySelector('.home-content');
    const homeImg = document.querySelector('.home-img img');
    
    if (windowWidth <= 480) {
        homeImg.style.maxWidth = '300px';
        homeContent.style.padding = '1rem';
    } else if (windowWidth <= 768) {
        homeImg.style.maxWidth = '350px';
        homeContent.style.padding = '1.5rem';
    } else {
        homeImg.style.maxWidth = '450px';
        homeContent.style.padding = '0';
    }
}

// Initialize and handle window resize
window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);

// Add active class to current section in navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});