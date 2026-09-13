/* =====================================================
   SKILLBRIDGE AI
   LEARNING PATH + COURSE EXPLORER
===================================================== */


/* =====================================================
   CAREER DATABASE
===================================================== */

const careerDatabase = {

    "full stack developer": {

        title: "Full Stack Developer",

        match: 95,

        description:
            "Build modern web applications by mastering frontend, backend, databases and deployment.",

        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "SQL",
            "Git & GitHub",
            "APIs"
        ],

        roadmap: [
            ["Fundamentals", "HTML, CSS & Web Basics"],
            ["JavaScript", "Programming & DOM"],
            ["Frontend", "React & UI Development"],
            ["Backend", "Node.js & APIs"],
            ["Database", "SQL & Data Management"],
            ["Deploy", "Git, Cloud & Production"]
        ]

    },


    "frontend developer": {

        title: "Frontend Developer",

        match: 93,

        description:
            "Create responsive and interactive user interfaces for modern web applications.",

        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Responsive Design",
            "Git"
        ],

        roadmap: [
            ["HTML & CSS", "Web foundations"],
            ["JavaScript", "Interactive websites"],
            ["Responsive UI", "Mobile-first design"],
            ["React", "Component development"],
            ["Projects", "Build real interfaces"],
            ["Portfolio", "Show your skills"]
        ]

    },


    "backend developer": {

        title: "Backend Developer",

        match: 91,

        description:
            "Build secure and scalable server-side applications, APIs and databases.",

        skills: [
            "Python",
            "Java",
            "Node.js",
            "REST APIs",
            "SQL",
            "Git"
        ],

        roadmap: [
            ["Programming", "Python / Java / JavaScript"],
            ["Backend", "Server development"],
            ["APIs", "REST API development"],
            ["Database", "SQL & data"],
            ["Security", "Authentication"],
            ["Deploy", "Cloud deployment"]
        ]

    },


    "ai engineer": {

        title: "AI Engineer",

        match: 94,

        description:
            "Build intelligent applications using machine learning, Python and modern AI technologies.",

        skills: [
            "Python",
            "Machine Learning",
            "Statistics",
            "Deep Learning",
            "APIs",
            "AI Tools"
        ],

        roadmap: [
            ["Python", "Programming foundations"],
            ["Math", "Statistics & probability"],
            ["ML", "Machine learning"],
            ["Deep Learning", "Neural networks"],
            ["AI Apps", "Build intelligent systems"],
            ["Deploy", "Production AI"]
        ]

    },


    "data scientist": {

        title: "Data Scientist",

        match: 92,

        description:
            "Turn data into insights and predictive models using statistics, Python and machine learning.",

        skills: [
            "Python",
            "Statistics",
            "SQL",
            "Pandas",
            "Machine Learning",
            "Data Visualization"
        ],

        roadmap: [
            ["Python", "Programming"],
            ["Statistics", "Data fundamentals"],
            ["SQL", "Data querying"],
            ["Analysis", "Pandas & visualization"],
            ["ML", "Predictive models"],
            ["Projects", "Real datasets"]
        ]

    },


    "data analyst": {

        title: "Data Analyst",

        match: 90,

        description:
            "Analyze business data and create meaningful insights using SQL, Python and visualization tools.",

        skills: [
            "Excel",
            "SQL",
            "Python",
            "Power BI",
            "Statistics",
            "Data Visualization"
        ],

        roadmap: [
            ["Excel", "Data basics"],
            ["SQL", "Query databases"],
            ["Statistics", "Understand data"],
            ["Python", "Data analysis"],
            ["Visualization", "Power BI"],
            ["Portfolio", "Business projects"]
        ]

    },


    "cybersecurity analyst": {

        title: "Cybersecurity Analyst",

        match: 91,

        description:
            "Protect systems and networks by learning security fundamentals, monitoring and threat analysis.",

        skills: [
            "Networking",
            "Linux",
            "Cybersecurity",
            "Python",
            "SIEM",
            "Ethical Hacking"
        ],

        roadmap: [
            ["Networking", "Network fundamentals"],
            ["Linux", "Security environment"],
            ["Security", "Core concepts"],
            ["Threats", "Threat analysis"],
            ["Tools", "Security tools"],
            ["Projects", "Security labs"]
        ]

    }

};


/* =====================================================
   COURSE DATABASE
===================================================== */

const courses = [

    /* ---------- GOVERNMENT ---------- */

    {
        id: 1,
        platform: "SWAYAM",
        title: "Web Development Fundamentals",
        type: "free",
        category: "government",
        level: "Beginner",
        duration: "8 Weeks",
        skills: ["HTML", "CSS", "JavaScript"],
        careers: ["full stack developer", "frontend developer"],
        description:
            "Learn the fundamentals of building websites and web applications.",

        learn: [
            "HTML page structure",
            "CSS styling and layouts",
            "Responsive web design",
            "JavaScript fundamentals",
            "Basic web development concepts"
        ],

        projects: [
            {
                title: "Personal Portfolio",
                description: "Create a responsive personal portfolio website."
            },
            {
                title: "Landing Page",
                description: "Build a professional responsive landing page."
            }
        ],

        assessments: {
            online: "6 quizzes + 2 assignments + final test",
            offline: "Optional proctored certification examination"
        },

        requirements: [
            "Complete all modules",
            "Complete 2 projects",
            "Complete online assessments",
            "Pass final assessment"
        ]

    },


    {
        id: 2,
        platform: "NPTEL",
        title: "Programming and Web Development",
        type: "free",
        category: "government",
        level: "Beginner",
        duration: "12 Weeks",
        skills: ["Programming", "Web", "JavaScript"],
        careers: ["full stack developer", "frontend developer"],
        description:
            "University-level learning covering programming and web technologies.",

        learn: [
            "Programming fundamentals",
            "Web technologies",
            "JavaScript concepts",
            "Problem solving",
            "Software development basics"
        ],

        projects: [
            {
                title: "Web Application",
                description: "Build a small web application using learned concepts."
            },
            {
                title: "Programming Project",
                description: "Solve a real-world programming problem."
            }
        ],

        assessments: {
            online: "Weekly assignments + online quizzes",
            offline: "Proctored certification examination"
        },

        requirements: [
            "Complete weekly assignments",
            "Complete 2 projects",
            "Attend assessments",
            "Complete final examination"
        ]

    },


    {
        id: 3,
        platform: "SWAYAM Plus",
        title: "Industry Ready Web Development",
        type: "free",
        category: "government",
        level: "Beginner",
        duration: "10 Weeks",
        skills: ["HTML", "CSS", "JavaScript", "Git"],
        careers: ["full stack developer", "frontend developer"],
        description:
            "Industry-oriented learning focused on employability and practical skills.",

        learn: [
            "Web development fundamentals",
            "Frontend development",
            "Git and version control",
            "Industry practices",
            "Project development"
        ],

        projects: [
            {
                title: "Business Website",
                description: "Build a responsive business website."
            },
            {
                title: "Mini Web App",
                description: "Create an interactive web application."
            }
        ],

        assessments: {
            online: "Module quizzes + practical assessment",
            offline: "Assessment mode depends on the course"
        },

        requirements: [
            "Complete learning modules",
            "Complete practical projects",
            "Pass assessments",
            "Submit final project"
        ]

    },


    /* ---------- INDUSTRY ---------- */

    {
        id: 4,
        platform: "Microsoft Learn",
        title: "Web Development Learning Path",
        type: "free",
        category: "industry",
        level: "Beginner",
        duration: "Self-paced",
        skills: ["HTML", "CSS", "JavaScript"],
        careers: ["full stack developer", "frontend developer"],
        description:
            "Free industry learning resources for modern web development.",

        learn: [
            "HTML",
            "CSS",
            "JavaScript",
            "Web accessibility",
            "Developer tools"
        ],

        projects: [
            {
                title: "Interactive Website",
                description: "Create an interactive website using web technologies."
            }
        ],

        assessments: {
            online: "Module knowledge checks",
            offline: "Not applicable for learning modules"
        },

        requirements: [
            "Complete learning modules",
            "Complete knowledge checks",
            "Build the recommended project"
        ]

    },


    {
        id: 5,
        platform: "IBM SkillsBuild",
        title: "AI and Web Development Foundations",
        type: "free",
        category: "industry",
        level: "Beginner",
        duration: "Self-paced",
        skills: ["AI", "Programming", "Web"],
        careers: ["full stack developer", "ai engineer"],
        description:
            "Industry-focused learning with practical digital skills.",

        learn: [
            "Digital technology fundamentals",
            "Programming concepts",
            "AI fundamentals",
            "Web concepts",
            "Professional skills"
        ],

        projects: [
            {
                title: "Digital Solution",
                description: "Create a small technology solution."
            }
        ],

        assessments: {
            online: "Knowledge checks and learning activities",
            offline: "Not applicable"
        },

        requirements: [
            "Complete modules",
            "Pass knowledge checks",
            "Complete practical activity"
        ]

    },


    /* ---------- UNIVERSITY ---------- */

    {
        id: 6,
        platform: "edX",
        title: "CS50's Web Programming",
        type: "paid",
        category: "university",
        level: "Intermediate",
        duration: "12 Weeks",
        skills: ["Python", "JavaScript", "SQL", "Web"],
        careers: ["full stack developer", "backend developer"],
        description:
            "University-level web programming covering frontend and backend concepts.",

        learn: [
            "HTML and CSS",
            "JavaScript",
            "Python",
            "Databases",
            "APIs",
            "Web application architecture"
        ],

        projects: [
            {
                title: "Search Application",
                description: "Build a functional search-based web application."
            },
            {
                title: "E-commerce Application",
                description: "Create a web application with user functionality."
            },
            {
                title: "Final Web Project",
                description: "Build an original web application."
            }
        ],

        assessments: {
            online: "Programming assignments + project evaluation",
            offline: "Course assessment requirements depend on the program"
        },

        requirements: [
            "Complete programming assignments",
            "Complete 3 projects",
            "Pass course assessments",
            "Submit final project"
        ]

    },


    {
        id: 7,
        platform: "Coursera",
        title: "Full Stack Web Development",
        type: "paid",
        category: "university",
        level: "Beginner",
        duration: "4-6 Months",
        skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
        careers: ["full stack developer", "frontend developer"],
        description:
            "Structured learning covering frontend and backend web development.",

        learn: [
            "HTML and CSS",
            "JavaScript",
            "React",
            "Backend development",
            "APIs",
            "Databases"
        ],

        projects: [
            {
                title: "Responsive Website",
                description: "Build a modern responsive website."
            },
            {
                title: "React Application",
                description: "Create an interactive React application."
            },
            {
                title: "Full Stack Application",
                description: "Build a complete frontend and backend application."
            }
        ],

        assessments: {
            online: "Quizzes + coding assignments + project reviews",
            offline: "Usually online; provider-specific certification requirements may apply"
        },

        requirements: [
            "Complete course modules",
            "Complete 3 projects",
            "Pass required quizzes",
            "Submit final project"
        ]

    },


    /* ---------- FREE COMMUNITY ---------- */

    {
        id: 8,
        platform: "freeCodeCamp",
        title: "Responsive Web Design",
        type: "free",
        category: "industry",
        level: "Beginner",
        duration: "Self-paced",
        skills: ["HTML", "CSS", "Responsive Design"],
        careers: ["frontend developer", "full stack developer", "web designer"],
        description:
            "Hands-on free learning through coding challenges and projects.",

        learn: [
            "HTML",
            "CSS",
            "Responsive design",
            "Accessibility",
            "Modern web layouts"
        ],

        projects: [
            {
                title: "Tribute Page",
                description: "Create a responsive tribute page."
            },
            {
                title: "Survey Form",
                description: "Build a functional survey form."
            },
            {
                title: "Product Landing Page",
                description: "Create a responsive product page."
            },
            {
                title: "Technical Documentation",
                description: "Build a technical documentation website."
            },
            {
                title: "Personal Portfolio",
                description: "Create a responsive portfolio website."
            }
        ],

        assessments: {
            online: "Coding challenges + project tests",
            offline: "Not applicable"
        },

        requirements: [
            "Complete coding challenges",
            "Complete 5 projects",
            "Pass project tests"
        ]

    },


    {
        id: 9,
        platform: "The Odin Project",
        title: "Full Stack JavaScript Path",
        type: "free",
        category: "industry",
        level: "Beginner",
        duration: "Self-paced",
        skills: ["JavaScript", "React", "Node.js", "Git"],
        careers: ["full stack developer", "frontend developer", "backend developer"],
        description:
            "Project-based full-stack learning with a strong JavaScript focus.",

        learn: [
            "HTML and CSS",
            "JavaScript",
            "Git",
            "React",
            "Node.js",
            "Databases"
        ],

        projects: [
            {
                title: "Landing Page",
                description: "Build a responsive landing page."
            },
            {
                title: "JavaScript Application",
                description: "Create an interactive JavaScript application."
            },
            {
                title: "Full Stack Project",
                description: "Build a complete full-stack application."
            }
        ],

        assessments: {
            online: "Coding exercises + project reviews",
            offline: "Not applicable"
        },

        requirements: [
            "Complete lessons",
            "Complete coding exercises",
            "Build 3+ portfolio projects",
            "Complete the selected path"
        ]

    },


    /* ---------- PAID ---------- */

    {
        id: 10,
        platform: "Udemy",
        title: "Complete Full Stack Developer Bootcamp",
        type: "paid",
        category: "industry",
        level: "Beginner",
        duration: "40+ Hours",
        skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
        careers: ["full stack developer"],
        description:
            "Practical bootcamp-style learning with multiple development projects.",

        learn: [
            "Frontend development",
            "JavaScript",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Deployment"
        ],

        projects: [
            {
                title: "Portfolio Website",
                description: "Build your professional developer portfolio."
            },
            {
                title: "Task Manager",
                description: "Build a full-stack task management application."
            },
            {
                title: "E-commerce Website",
                description: "Create a complete e-commerce application."
            },
            {
                title: "Final Full Stack Project",
                description: "Build an original production-style project."
            }
        ],

        assessments: {
            online: "Quizzes + coding exercises + projects",
            offline: "Not normally provided"
        },

        requirements: [
            "Complete lectures",
            "Complete coding exercises",
            "Build 4 projects",
            "Complete final project"
        ]

    },


    {
        id: 11,
        platform: "Great Learning",
        title: "Full Stack Development Program",
        type: "paid",
        category: "industry",
        level: "Beginner",
        duration: "6 Months",
        skills: ["HTML", "CSS", "JavaScript", "React", "Backend"],
        careers: ["full stack developer"],
        description:
            "Structured full-stack development learning with practical projects.",

        learn: [
            "Frontend technologies",
            "Backend development",
            "Databases",
            "API development",
            "Software development practices"
        ],

        projects: [
            {
                title: "Frontend Project",
                description: "Build a responsive frontend application."
            },
            {
                title: "Backend API",
                description: "Create a backend REST API."
            },
            {
                title: "Full Stack Application",
                description: "Connect frontend, backend and database."
            }
        ],

        assessments: {
            online: "Quizzes + assignments + project evaluation",
            offline: "Depends on program format"
        },

        requirements: [
            "Complete modules",
            "Complete 3 projects",
            "Pass assessments",
            "Submit final project"
        ]

    },


    {
        id: 12,
        platform: "Simplilearn",
        title: "Full Stack Developer Program",
        type: "paid",
        category: "industry",
        level: "Intermediate",
        duration: "6 Months",
        skills: ["JavaScript", "React", "Node.js", "SQL", "Cloud"],
        careers: ["full stack developer", "software developer"],
        description:
            "Career-focused learning covering full-stack technologies and projects.",

        learn: [
            "Frontend development",
            "Backend development",
            "Databases",
            "Cloud concepts",
            "Software development"
        ],

        projects: [
            {
                title: "Web Application",
                description: "Build a complete web application."
            },
            {
                title: "API Project",
                description: "Develop a REST API."
            },
            {
                title: "Capstone Project",
                description: "Build a portfolio-ready final project."
            }
        ],

        assessments: {
            online: "Module tests + coding assignments",
            offline: "Program-specific assessment"
        },

        requirements: [
            "Complete modules",
            "Complete assignments",
            "Build 3 projects",
            "Complete capstone project"
        ]

    }

];


/* =====================================================
   VARIABLES
===================================================== */

let selectedCareer = "full stack developer";

let activeFilter = "all";


/* =====================================================
   INITIALIZATION
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    setupCareerSearch();

    setupFilters();

    setupCourseSearch();

    setupSuggestions();

    renderCareer(selectedCareer);

    renderCourses();

    setupKeyboard();

});


/* =====================================================
   CAREER SEARCH
===================================================== */

function setupCareerSearch() {

    const button = document.getElementById("generateBtn");

    button.addEventListener("click", generatePath);

}


function generatePath() {

    const input =
        document.getElementById("careerInput").value.trim();

    if (!input) {

        showToast("Please enter a career goal.");

        return;

    }

    const career = findCareer(input);

    selectedCareer = career.key;

    renderCareer(selectedCareer);

    renderCourses();

    document
        .querySelector(".ai-match-section")
        .scrollIntoView({
            behavior: "smooth"
        });

    showToast(
        `AI learning path generated for ${career.title}`
    );

}


/* =====================================================
   FIND CAREER
===================================================== */

function findCareer(input) {

    const normalized =
        input.toLowerCase().trim();

    /* Exact match */

    if (careerDatabase[normalized]) {

        return {
            key: normalized,
            ...careerDatabase[normalized]
        };

    }


    /* Partial match */

    const foundKey =
        Object.keys(careerDatabase).find(key =>
            key.includes(normalized) ||
            normalized.includes(key)
        );


    if (foundKey) {

        return {
            key: foundKey,
            ...careerDatabase[foundKey]
        };

    }


    /* Keyword matching */

    if (
        normalized.includes("ai") ||
        normalized.includes("artificial intelligence")
    ) {

        return {
            key: "ai engineer",
            ...careerDatabase["ai engineer"]
        };

    }


    if (
        normalized.includes("data scientist") ||
        normalized.includes("data science")
    ) {

        return {
            key: "data scientist",
            ...careerDatabase["data scientist"]
        };

    }


    if (
        normalized.includes("data analyst") ||
        normalized.includes("analytics")
    ) {

        return {
            key: "data analyst",
            ...careerDatabase["data analyst"]
        };

    }


    if (
        normalized.includes("cyber") ||
        normalized.includes("security")
    ) {

        return {
            key: "cybersecurity analyst",
            ...careerDatabase["cybersecurity analyst"]
        };

    }


    if (
        normalized.includes("frontend") ||
        normalized.includes("front end")
    ) {

        return {
            key: "frontend developer",
            ...careerDatabase["frontend developer"]
        };

    }


    if (
        normalized.includes("backend") ||
        normalized.includes("back end")
    ) {

        return {
            key: "backend developer",
            ...careerDatabase["backend developer"]
        };

    }


    /* Default */

    return {
        key: "full stack developer",
        ...careerDatabase["full stack developer"]
    };

}


/* =====================================================
   RENDER CAREER
===================================================== */

function renderCareer(key) {

    const career =
        careerDatabase[key];

    document.getElementById("careerTitle").textContent =
        career.title;

    document.getElementById("careerDescription").textContent =
        career.description;

    document.getElementById("recommendedCareer").textContent =
        career.title;


    /* Skills */

    const skillList =
        document.getElementById("skillList");

    skillList.innerHTML = "";

    career.skills.forEach(skill => {

        const chip =
            document.createElement("span");

        chip.className = "skill-chip";

        chip.textContent = skill;

        skillList.appendChild(chip);

    });


    /* Score */

    document.getElementById("matchScore").textContent =
        career.match;

    const progress =
        document.getElementById("scoreProgress");

    const circumference = 326.7;

    progress.style.strokeDashoffset =
        circumference -
        (career.match / 100) * circumference;


    /* Roadmap */

    renderRoadmap(career.roadmap);

}


/* =====================================================
   ROADMAP
===================================================== */

function renderRoadmap(roadmap) {

    const container =
        document.getElementById("roadmapContainer");

    container.innerHTML = "";

    roadmap.forEach((step, index) => {

        const item =
            document.createElement("div");

        item.className = "roadmap-step";

        item.innerHTML = `

            <div class="roadmap-node">
                ${getRoadmapIcon(index)}
            </div>

            <h4>${step[0]}</h4>

            <p>${step[1]}</p>

        `;

        container.appendChild(item);

    });

}


function getRoadmapIcon(index) {

    const icons = [

        "fa-book-open",

        "fa-code",

        "fa-laptop-code",

        "fa-server",

        "fa-database",

        "fa-cloud-arrow-up"

    ];

    return `<i class="fa-solid ${icons[index] || "fa-star"}"></i>`;

}


/* =====================================================
   COURSE FILTERS
===================================================== */

function setupFilters() {

    document
        .querySelectorAll(".filter-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                document
                    .querySelectorAll(".filter-btn")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                button.classList.add("active");

                activeFilter =
                    button.dataset.filter;

                renderCourses();

            });

        });

}


/* =====================================================
   COURSE SEARCH
===================================================== */

function setupCourseSearch() {

    document
        .getElementById("courseSearch")
        .addEventListener(
            "input",
            renderCourses
        );

}


/* =====================================================
   RENDER COURSES
===================================================== */

function renderCourses() {

    const grid =
        document.getElementById("courseGrid");

    const empty =
        document.getElementById("emptyState");

    const search =
        document
            .getElementById("courseSearch")
            .value
            .toLowerCase()
            .trim();


    let results =
        courses.filter(course => {

            /* Career recommendation */

            const careerMatch =
                course.careers.includes(
                    selectedCareer
                );


            /* Search */

            const searchable =
                (
                    course.title +
                    " " +
                    course.platform +
                    " " +
                    course.skills.join(" ")
                ).toLowerCase();

            const searchMatch =
                !search ||
                searchable.includes(search);


            /* Filter */

            let filterMatch = true;


            if (activeFilter === "free") {

                filterMatch =
                    course.type === "free";

            }

            else if (activeFilter === "paid") {

                filterMatch =
                    course.type === "paid";

            }

            else if (
                activeFilter === "government" ||
                activeFilter === "university" ||
                activeFilter === "industry"
            ) {

                filterMatch =
                    course.category === activeFilter;

            }


            return (
                careerMatch &&
                searchMatch &&
                filterMatch
            );

        });


    /*
       If career-specific courses are unavailable,
       show relevant search results.
    */

    if (results.length === 0 && search) {

        results =
            courses.filter(course => {

                const searchable =
                    (
                        course.title +
                        " " +
                        course.platform +
                        " " +
                        course.skills.join(" ")
                    ).toLowerCase();

                return searchable.includes(search);

            });

    }


    grid.innerHTML = "";


    results.forEach(course => {

        grid.appendChild(
            createCourseCard(course)
        );

    });


    empty.style.display =
        results.length === 0
            ? "block"
            : "none";

}


/* =====================================================
   COURSE CARD
===================================================== */

function createCourseCard(course) {

    const card =
        document.createElement("article");

    card.className = "course-card";

    card.innerHTML = `

        <div class="course-top">

            <span class="platform">
                ${course.platform}
            </span>

            <span class="course-type">
                ${course.type === "free"
                    ? "FREE"
                    : "PAID"}
            </span>

        </div>


        <h3>
            ${course.title}
        </h3>


        <p>
            ${course.description}
        </p>


        <div class="course-tags">

            ${course.skills
                .slice(0, 4)
                .map(skill =>
                    `<span>${skill}</span>`
                )
                .join("")}

        </div>


        <div class="course-meta">

            <span>
                <i class="fa-regular fa-clock"></i>
                ${course.duration}
            </span>

            <span>
                ${course.level}
            </span>

        </div>


        <button
            class="view-course-btn"
            onclick="openCourseModal(${course.id})"
        >
            View Course
            <i class="fa-solid fa-arrow-right"></i>
        </button>

    `;

    return card;

}


/* =====================================================
   COURSE MODAL
===================================================== */

function openCourseModal(courseId) {

    const course =
        courses.find(
            item => item.id === courseId
        );

    if (!course) return;


    document.getElementById("modalPlatform").textContent =
        course.platform;

    document.getElementById("modalTitle").textContent =
        course.title;

    document.getElementById("modalType").textContent =
        course.type === "free"
            ? "FREE"
            : "PAID";

    document.getElementById("modalLevel").textContent =
        course.level;

    document.getElementById("modalDuration").textContent =
        course.duration;


    /* Learn */

    const learn =
        document.getElementById("modalLearn");

    learn.innerHTML = "";

    course.learn.forEach(item => {

        const li =
            document.createElement("li");

        li.innerHTML =
            `<i class="fa-solid fa-check"></i> ${item}`;

        learn.appendChild(li);

    });


    /* Projects */

    document.getElementById("modalProjectCount")
        .textContent =
        `(${course.projects.length})`;


    const projectContainer =
        document.getElementById("modalProjects");

    projectContainer.innerHTML = "";

    course.projects.forEach((project, index) => {

        const div =
            document.createElement("div");

        div.className =
            "project-item";

        div.innerHTML = `

            <strong>
                Project ${index + 1}: ${project.title}
            </strong>

            <p>
                ${project.description}
            </p>

        `;

        projectContainer.appendChild(div);

    });


    /* Assessments */

    const assessmentContainer =
        document.getElementById(
            "modalAssessments"
        );

    assessmentContainer.innerHTML = `

        <div class="assessment-summary-card">

            <strong>
                💻 Online Assessment
            </strong>

            <span>
                ${course.assessments.online}
            </span>

        </div>


        <div class="assessment-summary-card">

            <strong>
                🏫 Offline Assessment
            </strong>

            <span>
                ${course.assessments.offline}
            </span>

        </div>

    `;


    /* Requirements */

    const requirements =
        document.getElementById(
            "modalRequirements"
        );

    requirements.innerHTML = "";

    course.requirements.forEach(item => {

        const li =
            document.createElement("li");

        li.innerHTML =
            `<i class="fa-solid fa-circle-check"></i> ${item}`;

        requirements.appendChild(li);

    });


    document.getElementById("startCourseBtn")
        .onclick = () => {

            showToast(
                `${course.title} selected`
            );

            closeCourseModal();

        };


    document
        .getElementById("courseModal")
        .classList.add("show");

    document.body.style.overflow =
        "hidden";

}


/* =====================================================
   CLOSE MODAL
===================================================== */

function closeCourseModal() {

    document
        .getElementById("courseModal")
        .classList.remove("show");

    document.body.style.overflow =
        "";

}


document
    .getElementById("courseModal")
    .addEventListener("click", event => {

        if (
            event.target.id === "courseModal"
        ) {

            closeCourseModal();

        }

    });


/* =====================================================
   SUGGESTIONS
===================================================== */

function setupSuggestions() {

    document
        .querySelectorAll(".suggestion")
        .forEach(button => {

            button.addEventListener("click", () => {

                const role =
                    button.dataset.role;

                document
                    .getElementById("careerInput")
                    .value = role;

                generatePath();

            });

        });

}


/* =====================================================
   ASSESSMENT ACTIONS
===================================================== */

function startAssessment(type) {

    if (type === "online") {

        showToast(
            "Online assessment demo started"
        );

    }

    else {

        showToast(
            "Finding available offline assessment centers..."
        );

    }

}


/* =====================================================
   TOAST
===================================================== */

function showToast(message) {

    const toast =
        document.getElementById("toast");

    document.getElementById("toastText")
        .textContent = message;

    toast.classList.add("show");

    clearTimeout(
        window.toastTimer
    );

    window.toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);

}


/* =====================================================
   KEYBOARD
===================================================== */

function setupKeyboard() {

    document
        .getElementById("careerInput")
        .addEventListener("keydown", event => {

            if (event.key === "Enter") {

                generatePath();

            }

        });


    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeCourseModal();

            }

        }
    );

}