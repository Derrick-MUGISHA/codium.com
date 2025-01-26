// Project data
const projects = [
    {
        title: "survey-form",
        description: "Web application demonstrating frontend skills",
        imageUrl: "https://img.freepik.com/free-vector/feedback-survey-concept-illustration_114360-15500.jpg?t=st=1734560663~exp=1734564263~hmac=c3c1ebe5ac51f42596d56dc31b860e1627acaa699569a0ba9d226115d1b82dea&w=1060",
        liveLink: "https://survey-form-yrkk.onrender.com",
        codeLink: "https://github.com/Derrick-MUGISHA/survey-form"
    },
    {
        title: "Build-a-Tribute-Page-Assignment-",
        description: "Build-a-Tribute-Page-Assignment-",
        imageUrl: "https://build-a-tribute-page-assignment.onrender.com/image/tribute-page-main-image.jpg",
        liveLink: "https://build-a-tribute-page-assignment.onrender.com",
        codeLink: "https://github.com/Derrick-MUGISHA/Build-a-Tribute-Page-Assignment-"
    },
    {
        title: "Responsive-animated-page",
        description: "Responsive-animated-page",
        imageUrl: "https://responsive-animated-page.onrender.com/img-20241202T113414Z-001/img/hero.png",
        liveLink: "https://responsive-animated-page.onrender.com",
        codeLink: "https://github.com/Derrick-MUGISHA/Responsive-animated-page"
    },
    {
        title: "magic-ball",
        description: "UI/UX design implementation",
        imageUrl: "https://magic-8ball.com/wp-content/uploads/ball.avif",
        liveLink: "https://magic-ball-7dze.onrender.com",
        codeLink: "https://github.com/Derrick-MUGISHA/magic-ball"
    },
    {
        title: "Project Five",
        description: "Complex web application",
        imageUrl: "https://w3schools-bunb.onrender.com/images/man_smoke.jpg",
        liveLink: "https://w3schools-bunb.onrender.com/",
        codeLink: "https://github.com/Derrick-MUGISHA/list-and-search-filiter"
    },
    {
        title: "technical documentation",
        description: "technical-documentation-page",
        imageUrl: "https://www.dynaway.com/hs-fs/hubfs/Blog%20Featured%20Image.jpg?width=1040&height=684&name=Blog%20Featured%20Image.jpg",
        liveLink: "https://technical-documentation-page-2lfw.onrender.com/",
        codeLink: "#"
    },
    {
        title: "typing game",
        description: "A typing tester",
        imageUrl: "https://i.pinimg.com/736x/2a/50/33/2a503303de2de3fc4d499d5427d3c50e.jpg",
        liveLink: "https://i.pinimg.com/736x/2a/50/33/2a503303de2de3fc4d499d5427d3c50e.jpg",
        codeLink: "https://github.com/Derrick-MUGISHA/tp"
    },
    {
        title: "Text to speech",
        description: "in build speech converter",
        imageUrl: "https://i.pinimg.com/736x/39/cb/c7/39cbc7d4698e49bf5699f683b9efbb02.jpg",
        liveLink: "https://speech-xgo8.onrender.com",
        codeLink: "https://github.com/Derrick-MUGISHA/speech"
    },
    {
        title: "youtube-clone",
        description: "self build playtube",
        imageUrl: "https://www.citypng.com/public/uploads/preview/hd-aesthetic-youtube-yt-black-red-outline-logo-symbol-sign-icon-png-7017516951203758jnlahzimi.png",
        liveLink: "https://youtube-erv2.onrender.com",
        codeLink: "https://github.com/Derrick-MUGISHA/youtube",
    },
    {   
        title: "Qur codes generator",
        description: "Qur codes generator with any words",
        imageUrl: "https://i.pinimg.com/736x/0e/97/27/0e972709749e682fb5bf8d85dcb2e35d.jpg",
        liveLink: "https://qr-bix4.onrender.com",
        codeLink: "https://github.com/Derrick-MUGISHA/QR"
    },
    {  title: "Weather-system",
        description: "fetches weather data",
        imageUrl: "https://www.citypng.com/public/uploads/preview/hd-aesthetic-youtube-yt-black-red-outline-logo-symbol-sign-icon-png-7017516951203758jnlahzimi.png",
        liveLink: "https://tracker-api-r48e.onrender.com",
        codeLink: "https://github.com/Derrick-MUGISHA/tracker-api"
    },
    // {   title: "Project Twelve",
    //     description: "Project Twelve",
    //     imageUrl: "https://www.citypng.com/public/uploads/preview/hd-aesthetic-youtube-yt-black-red-outline-logo-symbol-sign-icon-png-7017516951203758jnlahzimi.png",
    //     liveLink: "https://github.com/Derrick-MUGISHA/youtube",
    //     codeLink: "https://youtube-erv2.onrender.com"
    // },
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
