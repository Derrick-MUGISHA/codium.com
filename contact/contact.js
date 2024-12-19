// script.js
class ResponsiveHandler {
    constructor() {
        this.breakpoints = {
            mobile: 576,
            tablet: 768,
            desktop: 1024
        };

        this.elements = {
            header: document.querySelector('.header'),
            contactSection: document.querySelector('.contact-section'),
            techBlogSection: document.querySelector('.tech-blog-section'),
            blogItems: document.querySelectorAll('.blog-item')
        };

        this.init();
    }

    init() {
        // Set initial styles
        this.handleResolution();
        
        // Add event listeners
        window.addEventListener('resize', () => this.handleResolution());
        window.addEventListener('orientationchange', () => this.handleResolution());
        this.setupEventListeners();
        
        // Initialize animations
        this.initAnimations();
    }

    setupEventListeners() {
        // Back button handler
        const backButton = document.getElementById('back-btn');
        if (backButton) {
            backButton.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = '../home/index.html';
            });
        }

        // Blog items click handler
        this.elements.blogItems.forEach(item => {
            item.addEventListener('click', () => {
                const blogUrl = item.dataset.url;
                if (blogUrl) {
                    window.open(blogUrl, '_blank');
                }
            });
        });
    }

    handleResolution() {
        const width = window.innerWidth;
        
        if (width <= this.breakpoints.mobile) {
            this.applyMobileStyles();
        } else if (width <= this.breakpoints.tablet) {
            this.applyTabletStyles();
        } else {
            this.applyDesktopStyles();
        }

        // Update layout animations based on screen size
        this.updateAnimations(width);
    }

    applyMobileStyles() {
        document.documentElement.style.setProperty('--content-padding', '5%');
        document.documentElement.style.setProperty('--heading-size', '1.8rem');
        
        // Additional mobile-specific adjustments
        if (this.elements.contactSection) {
            this.elements.contactSection.style.minHeight = 'auto';
            this.elements.contactSection.style.padding = '60px 5%';
        }
    }

    applyTabletStyles() {
        document.documentElement.style.setProperty('--content-padding', '5%');
        document.documentElement.style.setProperty('--heading-size', '2rem');
        
        // Additional tablet-specific adjustments
        if (this.elements.contactSection) {
            this.elements.contactSection.style.minHeight = '100vh';
            this.elements.contactSection.style.padding = '70px 5%';
        }
    }

    applyDesktopStyles() {
        document.documentElement.style.setProperty('--content-padding', '10%');
        document.documentElement.style.setProperty('--heading-size', '3rem');
        
        // Additional desktop-specific adjustments
        if (this.elements.contactSection) {
            this.elements.contactSection.style.minHeight = '100vh';
            this.elements.contactSection.style.padding = '80px 10%';
        }
    }

    initAnimations() {
        // Add intersection observer for scroll animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Observe blog items
        this.elements.blogItems.forEach(item => {
            observer.observe(item);
        });
    }

    updateAnimations(screenWidth) {
        // Adjust animation durations based on screen size
        const animationDuration = screenWidth <= this.breakpoints.mobile ? '0.3s' : '0.5s';
        document.documentElement.style.setProperty('--animation-duration', animationDuration);
    }
}

// Initialize the responsive handler when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ResponsiveHandler();
});
