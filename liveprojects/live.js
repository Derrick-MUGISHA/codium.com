// Project data
const projects = [
    {
        title: "survey-form",
        description: "Web application demonstrating frontend skills",
        imageUrl: "path/to/project1-image.jpg",
        liveLink: "https://survey-form-yrkk.onrender.com",
        codeLink: "https://github.com/Derrick-MUGISHA/survey-form"
    },
    {
        title: "Build-a-Tribute-Page-Assignment-",
        description: "Build-a-Tribute-Page-Assignment-",
        imageUrl: "path/to/project2-image.jpg",
        liveLink: "https://build-a-tribute-page-assignment.onrender.com",
        codeLink: "https://github.com/Derrick-MUGISHA/Build-a-Tribute-Page-Assignment-"
    },
    {
        title: "Responsive-animated-page",
        description: "Responsive-animated-page",
        imageUrl: "path/to/project3-image.jpg",
        liveLink: "https://responsive-animated-page.onrender.com",
        codeLink: "https://github.com/Derrick-MUGISHA/Responsive-animated-page"
    },
    {
        title: "magic-ball",
        description: "UI/UX design implementation",
        imageUrl: "path/to/project4-image.jpg",
        liveLink: "https://magic-ball-7dze.onrender.com",
        codeLink: "https://github.com/Derrick-MUGISHA/magic-ball"
    },
    {
        title: "Project Five",
        description: "Complex web application",
        imageUrl: "path/to/project5-image.jpg",
        liveLink: "#",
        codeLink: "https://github.com/Derrick-MUGISHA/list-and-search-filiter"
    },
    {
        title: "Project Six",
        description: "Frontend development project",
        imageUrl: "path/to/project6-image.jpg",
        liveLink: "#",
        codeLink: "#"
    },
    {
        title: "Project Seven",
        description: "Innovative web solution",
        imageUrl: "path/to/project7-image.jpg",
        liveLink: "#",
        codeLink: "#"
    },
    {
        title: "Project Eight",
        description: "Creative design project",
        imageUrl: "path/to/project8-image.jpg",
        liveLink: "#",
        codeLink: "#"
    }
];

// Function to create project cards
function createProjectCards() {
    const container = document.getElementById('projects-container');
    
    projects.forEach(project => {
        // Create project card element
        const card = document.createElement('div');
        card.classList.add('project-card');
        
        // Card HTML structure
        card.innerHTML = `
            <img src="${project.imageUrl}" alt="${project.title}">
            <div class="project-overlay">
                <a href="${project.liveLink}" class="bx bx-link-external" target="_blank"></a>
                <a href="${project.codeLink}" class="bx bx-code-alt" target="_blank"></a>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;
        
        // Add card to container
        container.appendChild(card);
    });
}

// Event listener to create cards when DOM is loaded
document.addEventListener('DOMContentLoaded', createProjectCards);

// Optional: Add hover animations or interactions
function addCardInteractions() {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
}

// Call interaction function when DOM is loaded
document.addEventListener('DOMContentLoaded', addCardInteractions);