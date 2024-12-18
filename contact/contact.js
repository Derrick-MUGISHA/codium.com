document.addEventListener('DOMContentLoaded', () => {
    // Handle Back Button Functionality
    const backButton = document.getElementById('back-btn');
    backButton.addEventListener('click', () => {
        window.location.href = 'index.html'; // Redirect to the homepage
    });

    // Handle Tech Blog Item Clicks
    const blogItems = document.querySelectorAll('.blog-item');
    blogItems.forEach(item => {
        item.addEventListener('click', () => {
            const blogUrl = item.getAttribute('');
            if (blogUrl) {
                window.open(blogUrl, '_blank'); // Open blog in a new tab
            }
        });
    });
});
