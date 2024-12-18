document.addEventListener('DOMContentLoaded', () => {
    const courses = {
        html: {
            title: 'HTML Basics',
            content: `
                <p><strong>Overview:</strong> Learn the structure of web pages using HTML.</p>
                <ul>
                    <li>Lesson 1: Understanding Tags and Elements</li>
                    <li>Lesson 2: Creating Forms</li>
                    <li>Lesson 3: Working with Media</li>
                </ul>
            `
        },
        css: {
            title: 'CSS Styling',
            content: `
                <p><strong>Overview:</strong> Learn how to style your web pages using CSS.</p>
                <ul>
                    <li>Lesson 1: Selectors and Properties</li>
                    <li>Lesson 2: Flexbox and Grid</li>
                    <li>Lesson 3: Animations</li>
                </ul>
            `
        },
        javascript: {
            title: 'JavaScript Essentials',
            content: `
                <p><strong>Overview:</strong> Learn to make your web pages dynamic using JavaScript.</p>
                <ul>
                    <li>Lesson 1: Variables and Functions</li>
                    <li>Lesson 2: DOM Manipulation</li>
                    <li>Lesson 3: Events and Async Programming</li>
                </ul>
            `
        },
        java: {
            title: 'Java for Backend',
            content: `
                <p><strong>Overview:</strong> Learn backend programming using Java.</p>
                <ul>
                    <li>Lesson 1: Introduction to Java</li>
                    <li>Lesson 2: Object-Oriented Programming</li>
                    <li>Lesson 3: Building APIs</li>
                </ul>
            `
        }
    };

    const courseElements = document.querySelectorAll('.course');
    const courseTitle = document.getElementById('course-title');
    const courseContent = document.getElementById('course-content');

    // Attach event listeners to each course
    courseElements.forEach(course => {
        course.addEventListener('click', () => {
            const courseId = course.getAttribute('data-course');
            const courseData = courses[courseId];
            if (courseData) {
                courseTitle.textContent = courseData.title;
                courseContent.innerHTML = courseData.content;
            }
        });
    });

    // Back button functionality
    const backButton = document.getElementById('back-btn');
    backButton.addEventListener('click', () => {
        window.location.href = 'index.html'; // Redirect to the homepage
    });
});

