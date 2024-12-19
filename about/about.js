document.addEventListener('DOMContentLoaded', function() {
    // Back button functionality
    const backButton = document.getElementById('back-btn');
    
    backButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Add fade-out animation to the entire page
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.3s ease';
        
        // Navigate back after animation completes
        setTimeout(() => {
            window.location.href = '../home/index.html';
        }, 300);
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all skill cards
    document.querySelectorAll('.skill-card').forEach(card => {
        observer.observe(card);
    });

    // Add hover sound effect (optional)
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // You can add a subtle hover sound here if desired
            // const hoverSound = new Audio('path/to/hover-sound.mp3');
            // hoverSound.play();
            
            // Add hover animation class
            this.classList.add('card-hover');
        });

        card.addEventListener('mouseleave', function() {
            this.classList.remove('card-hover');
        });
    });

    // Handle page transitions
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {
            document.body.style.opacity = '1';
        }
    });

    // Initialize page with fade-in
    document.body.style.opacity = '1';
});