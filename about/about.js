document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('back-btn');

    backButton.addEventListener('click', function() {
        // Add the 'clicked' class to the back button for animation
        backButton.classList.add('clicked');

        // Wait for the animation to complete before redirecting
        setTimeout(() => {
            window.location.href = '../home/index.html'; // Redirect to the home section
        }, 300); // Duration matches the CSS transition time
    });
});

