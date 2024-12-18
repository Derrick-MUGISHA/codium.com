document.addEventListener('DOMContentLoaded', function () {
    // Prevent copying in the code-display
    const codeDisplays = document.querySelectorAll('.code-display');
    codeDisplays.forEach(display => {
        display.addEventListener('copy', (e) => {
            e.preventDefault();
            alert('Copying is disabled!');
        });
    });

    // Redirect to GitHub repository when clicking a skill
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            const githubLink = skill.getAttribute('data-github');
            if (githubLink) {
                window.open(githubLink, '_blank');
            }
        });
    });
});
