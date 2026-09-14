/* =========================================================
   SKILLBRIDGE AI
   ========================================================= */


/* =========================================================
   CAREER DATA
   ========================================================= */

const careerData = {

    "Full Stack Developer": {

        score: 95,

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
        ]

    },


    "Frontend Developer": {

        score: 93,

        description:
            "Create responsive and interactive user interfaces using modern frontend technologies.",

        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Responsive Design",
            "Git",
            "UI Development"
        ]

    },


    "Backend Developer": {

        score: 91,

        description:
            "Develop scalable server-side applications, APIs, databases and backend systems.",

        skills: [
            "JavaScript",
            "Node.js",
            "Python",
            "SQL",
            "REST APIs",
            "Databases",
            "Git"
        ]

    },


    "AI Engineer": {

        score: 94,

        description:
            "Build intelligent applications using artificial intelligence, machine learning and generative AI.",

        skills: [
            "Python",
            "Machine Learning",
            "Deep Learning",
            "NLP",
            "Generative AI",
            "APIs",
            "Data"
        ]

    },


    "Machine Learning Engineer": {

        score: 92,

        description:
            "Design, train and deploy machine learning models for real-world applications.",

        skills: [
            "Python",
            "Statistics",
            "Machine Learning",
            "Scikit-learn",
            "Deep Learning",
            "Model Deployment"
        ]

    },


    "Data Scientist": {

        score: 94,

        description:
            "Use data, statistics and machine learning to discover insights and build predictive solutions.",

        skills: [
            "Python",
            "Statistics",
            "Pandas",
            "NumPy",
            "Machine Learning",
            "Data Visualization",
            "SQL"
        ]

    },


    "Data Analyst": {

        score: 90,

        description:
            "Transform raw data into meaningful insights using analytics, SQL and visualization tools.",

        skills: [
            "Excel",
            "SQL",
            "Python",
            "Power BI",
            "Statistics",
            "Data Visualization"
        ]

    },


    "Cybersecurity Analyst": {

        score: 89,

        description:
            "Protect systems, networks and applications by identifying threats and security vulnerabilities.",

        skills: [
            "Networking",
            "Linux",
            "Cybersecurity",
            "Ethical Hacking",
            "SOC",
            "SIEM",
            "Security Analysis"
        ]

    }

};


/* =========================================================
   COURSE DATABASE
   ========================================================= */

const courses = [

    {
        id: 1,
        platform: "SWAYAM",
        title: "Web Development Fundamentals",
        type: "free",
        category: "government",
        mode: "online",
        location: "",
        duration: "12 Weeks",
        fee: "Free Learning",
        certificationFee: "Exam fee applicable",
        assignment: "Online weekly assignments",
        examMode: "Offline — Designated Exam Centre",
        certification: "Certificate available after meeting course requirements and completing the certification examination.",
        level: "Beginner",
        skills: ["HTML", "CSS", "JavaScript"],
        careers: ["Full Stack Developer", "Frontend Developer"],
        description: "Learn the fundamentals of modern web development.",
        learn: [
            "HTML structure",
            "CSS styling",
            "JavaScript basics",
            "Responsive web design"
        ],
        projects: [
            "Personal Portfolio Website",
            "Responsive Landing Page"
        ],
        requirements: "Complete learning activities, assignments and applicable certification requirements."
    },


    {
        id: 2,
        platform: "NPTEL",
        title: "Programming and Web Development",
        type: "free",
        category: "government",
        mode: "online",
        location: "",
        duration: "12 Weeks",
        fee: "Free Learning",
        certificationFee: "₹1,000 currently listed exam fee",
        assignment: "Online weekly assignments",
        examMode: "Offline — Proctored Exam Centre",
        certification: "Optional NPTEL certification through the proctored examination.",
        level: "Beginner",
        skills: ["Programming", "Web", "JavaScript", "Algorithms"],
        careers: ["Full Stack Developer", "Frontend Developer", "Backend Developer"],
        description: "Develop programming foundations and web development knowledge.",
        learn: [
            "Programming fundamentals",
            "Web technologies",
            "Problem solving",
            "Basic algorithms"
        ],
        projects: [
            "Web Application",
            "Programming Practice Project"
        ],
        requirements: "Complete weekly assignments and meet the certification examination requirements."
    },


    {
        id: 3,
        platform: "SWAYAM",
        title: "Industry Ready Web Development",
        type: "free",
        category: "government",
        mode: "online",
        location: "",
        duration: "8 Weeks",
        fee: "Free Learning",
        certificationFee: "Exam fee applicable",
        assignment: "Online assignments",
        examMode: "Offline — Designated Exam Centre",
        certification: "Certificate available subject to course and examination requirements.",
        level: "Intermediate",
        skills: ["Web Development", "JavaScript", "APIs"],
        careers: ["Full Stack Developer", "Frontend Developer"],
        description: "Build industry-oriented web development skills.",
        learn: [
            "Modern web development",
            "APIs",
            "Frontend concepts",
            "Backend fundamentals"
        ],
        projects: [
            "Mini Web Application",
            "API Integration Project"
        ],
        requirements: "Complete course activities and applicable certification requirements."
    },


    {
        id: 4,
        platform: "Microsoft Learn",
        title: "Web Development Learning Path",
        type: "free",
        category: "industry",
        mode: "online",
        location: "",
        duration: "Self-paced",
        fee: "Free",
        certificationFee: "No separate course certification fee",
        assignment: "Interactive exercises",
        examMode: "Provider-specific",
        certification: "Learning path completion badges may be available.",
        level: "Beginner",
        skills: ["HTML", "CSS", "JavaScript"],
        careers: ["Frontend Developer", "Full Stack Developer"],
        description: "Learn web development through Microsoft's interactive learning platform.",
        learn: [
            "HTML",
            "CSS",
            "JavaScript",
            "Web accessibility"
        ],
        projects: [
            "Interactive Web Page"
        ],
        requirements: "Complete the modules and practical exercises."
    },


    {
        id: 5,
        platform: "IBM SkillsBuild",
        title: "AI and Web Development Foundations",
        type: "free",
        category: "industry",
        mode: "online",
        location: "",
        duration: "Self-paced",
        fee: "Free",
        certificationFee: "Free digital credentials where applicable",
        assignment: "Online learning activities",
        examMode: "Provider-specific",
        certification: "Digital credentials may be available for eligible learning activities.",
        level: "Beginner",
        skills: ["AI", "Web", "Programming"],
        careers: ["AI Engineer", "Full Stack Developer"],
        description: "Build foundational knowledge across AI and technology.",
        learn: [
            "AI fundamentals",
            "Technology concepts",
            "Programming basics"
        ],
        projects: [
            "AI/Web Mini Project"
        ],
        requirements: "Complete required learning activities."
    },


    {
        id: 6,
        platform: "freeCodeCamp",
        title: "Responsive Web Design",
        type: "free",
        category: "industry",
        mode: "online",
        location: "",
        duration: "Self-paced",
        fee: "Free",
        certificationFee: "Free",
        assignment: "Hands-on coding exercises",
        examMode: "Project-based",
        certification: "Certification based on completion of required projects.",
        level: "Beginner",
        skills: ["HTML", "CSS", "Responsive Design"],
        careers: ["Frontend Developer", "Full Stack Developer"],
        description: "Learn responsive web design through practical coding projects.",
        learn: [
            "HTML",
            "CSS",
            "Flexbox",
            "Grid",
            "Responsive layouts"
        ],
        projects: [
            "Tribute Page",
            "Product Landing Page",
            "Portfolio Website"
        ],
        requirements: "Complete required projects and certification tasks."
    },


    {
        id: 7,
        platform: "The Odin Project",
        title: "Full Stack JavaScript Path",
        type: "free",
        category: "industry",
        mode: "online",
        location: "",
        duration: "Self-paced",
        fee: "Free",
        certificationFee: "No paid certification required",
        assignment: "Coding assignments",
        examMode: "Project-based",
        certification: "Project portfolio focused learning.",
        level: "Intermediate",
        skills: ["JavaScript", "React", "Node.js", "Git"],
        careers: ["Full Stack Developer", "Backend Developer"],
        description: "A project-based path for learning full stack JavaScript.",
        learn: [
            "JavaScript",
            "React",
            "Node.js",
            "Git",
            "Databases"
        ],
        projects: [
            "Full Stack Web App",
            "JavaScript Application",
            "React Project"
        ],
        requirements: "Complete lessons, exercises and projects."
    },


    {
        id: 8,
        platform: "Coursera",
        title: "Machine Learning",
        type: "paid",
        category: "university",
        mode: "online",
        location: "",
        duration: "Approx. 3 Months",
        fee: "Paid / Subscription",
        certificationFee: "Included according to enrollment plan",
        assignment: "Online quizzes and programming assignments",
        examMode: "Online / Provider-specific",
        certification: "Course certificate according to the selected enrollment.",
        level: "Intermediate",
        skills: ["Python", "Machine Learning", "Statistics"],
        careers: ["AI Engineer", "Machine Learning Engineer", "Data Scientist"],
        description: "Learn core machine learning concepts and practical model building.",
        learn: [
            "Supervised learning",
            "Unsupervised learning",
            "Model evaluation",
            "Machine learning algorithms"
        ],
        projects: [
            "Prediction Model",
            "Machine Learning Application"
        ],
        requirements: "Complete assignments and required course activities."
    },


    {
        id: 9,
        platform: "NPTEL",
        title: "Introduction to Machine Learning",
        type: "free",
        category: "government",
        mode: "online",
        location: "",
        duration: "12 Weeks",
        fee: "Free Learning",
        certificationFee: "₹1,000 currently listed exam fee",
        assignment: "Online weekly assignments",
        examMode: "Offline — Proctored Exam Centre",
        certification: "Optional NPTEL certification through the proctored examination.",
        level: "Intermediate",
        skills: ["Python", "Machine Learning", "Statistics"],
        careers: ["AI Engineer", "Machine Learning Engineer", "Data Scientist"],
        description: "Learn machine learning fundamentals and algorithms.",
        learn: [
            "Machine learning concepts",
            "Regression",
            "Classification",
            "Model evaluation"
        ],
        projects: [
            "ML Prediction Project"
        ],
        requirements: "Complete weekly assignments and certification requirements if selected."
    },


    {
        id: 10,
        platform: "IBM SkillsBuild",
        title: "AI and Machine Learning Foundations",
        type: "free",
        category: "industry",
        mode: "online",
        location: "",
        duration: "Self-paced",
        fee: "Free",
        certificationFee: "Free digital credentials where applicable",
        assignment: "Online activities",
        examMode: "Provider-specific",
        certification: "Digital credential may be available.",
        level: "Beginner",
        skills: ["AI", "Machine Learning", "Python"],
        careers: ["AI Engineer", "Machine Learning Engineer"],
        description: "Understand the foundations of AI and machine learning.",
        learn: [
            "AI concepts",
            "Machine learning basics",
            "Data concepts"
        ],
        projects: [
            "AI Mini Project"
        ],
        requirements: "Complete required learning activities."
    },


    {
        id: 11,
        platform: "Microsoft Learn",
        title: "Data Analytics Learning Path",
        type: "free",
        category: "industry",
        mode: "online",
        location: "",
        duration: "Self-paced",
        fee: "Free",
        certificationFee: "No separate course fee",
        assignment: "Interactive exercises",
        examMode: "Provider-specific",
        certification: "Learning achievements and badges may be available.",
        level: "Beginner",
        skills: ["Data Analytics", "SQL", "Power BI"],
        careers: ["Data Analyst", "Data Scientist"],
        description: "Develop data analytics skills using modern tools.",
        learn: [
            "Data analysis",
            "Data visualization",
            "Power BI",
            "Data modeling"
        ],
        projects: [
            "Business Dashboard"
        ],
        requirements: "Complete modules and exercises."
    },


    {
        id: 12,
        platform: "Google",
        title: "Google Data Analytics Certificate",
        type: "paid",
        category: "industry",
        mode: "online",
        location: "",
        duration: "Approx. 6 Months",
        fee: "Paid / Subscription",
        certificationFee: "Included according to enrollment",
        assignment: "Online quizzes and practical activities",
        examMode: "Online / Provider-specific",
        certification: "Professional certificate after completing the program.",
        level: "Beginner",
        skills: ["SQL", "Excel", "Data Analysis", "Visualization"],
        careers: ["Data Analyst"],
        description: "Build job-ready data analytics skills.",
        learn: [
            "Data cleaning",
            "SQL",
            "Spreadsheets",
            "Data visualization"
        ],
        projects: [
            "Data Analysis Case Study",
            "Portfolio Project"
        ],
        requirements: "Complete all required modules and practical activities."
    },


    {
        id: 13,
        platform: "IBM SkillsBuild",
        title: "Data Analytics Foundations",
        type: "free",
        category: "industry",
        mode: "online",
        location: "",
        duration: "Self-paced",
        fee: "Free",
        certificationFee: "Free digital credentials where applicable",
        assignment: "Interactive learning activities",
        examMode: "Provider-specific",
        certification: "Digital credentials may be available.",
        level: "Beginner",
        skills: ["Data", "Analytics", "Visualization"],
        careers: ["Data Analyst", "Data Scientist"],
        description: "Learn the fundamentals of data analytics.",
        learn: [
            "Data concepts",
            "Analytics",
            "Visualization",
            "Data-driven decisions"
        ],
        projects: [
            "Data Visualization Project"
        ],
        requirements: "Complete the learning activities."
    },


    {
        id: 14,
        platform: "NPTEL",
        title: "Data Science and Analytics",
        type: "free",
        category: "government",
        mode: "online",
        location: "",
        duration: "12 Weeks",
        fee: "Free Learning",
        certificationFee: "₹1,000 currently listed exam fee",
        assignment: "Online weekly assignments",
        examMode: "Offline — Proctored Exam Centre",
        certification: "Optional certification through the proctored examination.",
        level: "Intermediate",
        skills: ["Python", "Data Science", "Statistics", "SQL"],
        careers: ["Data Scientist", "Data Analyst"],
        description: "Explore data science concepts, statistics and analytics.",
        learn: [
            "Statistics",
            "Python",
            "Data analysis",
            "Data science fundamentals"
        ],
        projects: [
            "Data Analysis Project",
            "Predictive Analytics Project"
        ],
        requirements: "Complete weekly assignments and examination requirements."
    },


    {
        id: 15,
        platform: "NIELIT",
        title: "Artificial Intelligence and Machine Learning",
        type: "paid",
        category: "government",
        mode: "online",
        location: "",
        duration: "Varies by program",
        fee: "Fee varies by program",
        certificationFee: "As applicable",
        assignment: "Online practical assignments",
        examMode: "Provider-specific",
        certification: "Certification according to the selected NIELIT program.",
        level: "Intermediate",
        skills: ["AI", "ML", "Python"],
        careers: ["AI Engineer", "Machine Learning Engineer"],
        description: "Develop practical foundations in AI and machine learning.",
        learn: [
            "AI concepts",
            "Machine learning",
            "Python",
            "Model development"
        ],
        projects: [
            "Machine Learning Project"
        ],
        requirements: "Complete program requirements."
    },


    {
        id: 16,
        platform: "IBM SkillsBuild",
        title: "Cybersecurity Fundamentals",
        type: "free",
        category: "industry",
        mode: "online",
        location: "",
        duration: "Self-paced",
        fee: "Free",
        certificationFee: "Free digital credentials where applicable",
        assignment: "Interactive cybersecurity activities",
        examMode: "Provider-specific",
        certification: "Digital credentials may be available.",
        level: "Beginner",
        skills: ["Cybersecurity", "Networking", "Security"],
        careers: ["Cybersecurity Analyst"],
        description: "Build foundational knowledge in cybersecurity.",
        learn: [
            "Cyber threats",
            "Security concepts",
            "Network security",
            "Risk awareness"
        ],
        projects: [
            "Cybersecurity Awareness Project"
        ],
        requirements: "Complete required learning activities."
    },


    {
        id: 17,
        platform: "NIELIT",
        title: "Cyber Security Assistant",
        type: "paid",
        category: "government",
        mode: "online",
        location: "",
        duration: "Varies",
        fee: "Fee varies",
        certificationFee: "As applicable",
        assignment: "Practical assignments",
        examMode: "Provider-specific",
        certification: "Program-specific certification.",
        level: "Intermediate",
        skills: ["Cybersecurity", "Networking", "Linux"],
        careers: ["Cybersecurity Analyst"],
        description: "Develop practical cybersecurity and security operations skills.",
        learn: [
            "Network security",
            "Linux basics",
            "Security concepts",
            "Cyber threats"
        ],
        projects: [
            "Security Analysis Project"
        ],
        requirements: "Complete program requirements."
    },


    {
        id: 18,
        platform: "Coursera",
        title: "Cybersecurity Foundations",
        type: "paid",
        category: "university",
        mode: "online",
        location: "",
        duration: "Self-paced",
        fee: "Paid / Subscription",
        certificationFee: "According to enrollment plan",
        assignment: "Online quizzes and practical assignments",
        examMode: "Online / Provider-specific",
        certification: "Course certificate according to enrollment.",
        level: "Beginner",
        skills: ["Cybersecurity", "Networking", "Security"],
        careers: ["Cybersecurity Analyst"],
        description: "Learn fundamental cybersecurity concepts.",
        learn: [
            "Security fundamentals",
            "Threats",
            "Network security",
            "Risk management"
        ],
        projects: [
            "Cybersecurity Case Study"
        ],
        requirements: "Complete required course activities."
    },


    {
        id: 19,
        platform: "Udemy",
        title: "Complete Full Stack Developer Bootcamp",
        type: "paid",
        category: "industry",
        mode: "online",
        location: "",
        duration: "Self-paced",
        fee: "Paid",
        certificationFee: "Included according to course",
        assignment: "Coding assignments",
        examMode: "Project-based",
        certification: "Course completion certificate.",
        level: "Beginner",
        skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
        careers: ["Full Stack Developer"],
        description: "Learn full stack development through structured lessons and projects.",
        learn: [
            "Frontend development",
            "Backend development",
            "Databases",
            "APIs"
        ],
        projects: [
            "Full Stack Web Application",
            "REST API Project"
        ],
        requirements: "Complete course lessons and projects."
    },


    {
        id: 20,
        platform: "Great Learning",
        title: "Full Stack Development Program",
        type: "paid",
        category: "industry",
        mode: "online",
        location: "",
        duration: "Varies",
        fee: "Paid",
        certificationFee: "According to program",
        assignment: "Online assignments",
        examMode: "Provider-specific",
        certification: "Program certificate according to course terms.",
        level: "Beginner",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        careers: ["Full Stack Developer", "Frontend Developer"],
        description: "Learn full stack development through guided learning.",
        learn: [
            "Frontend",
            "Backend",
            "Databases",
            "Web applications"
        ],
        projects: [
            "Full Stack Project"
        ],
        requirements: "Complete the program requirements."
    },


    {
        id: 21,
        platform: "360DigiTMG",
        title: "Data Analytics Classroom Training",
        type: "paid",
        category: "industry",
        mode: "offline",
        location: "Anantapur",
        duration: "Approx. 4 Months",
        fee: "Contact provider",
        certificationFee: "According to institute",
        assignment: "Classroom assignments and practical work",
        examMode: "Offline — Training Centre",
        certification: "Institute certification according to program terms.",
        level: "Beginner",
        skills: ["Excel", "SQL", "Power BI", "Data Analytics"],
        careers: ["Data Analyst"],
        description: "Classroom-oriented data analytics training.",
        learn: [
            "Excel",
            "SQL",
            "Power BI",
            "Data analytics"
        ],
        projects: [
            "Business Dashboard",
            "Data Analytics Capstone"
        ],
        requirements: "Attend training sessions and complete practical assignments."
    },


    {
        id: 22,
        platform: "360DigiTMG",
        title: "Cyber Security Classroom Training",
        type: "paid",
        category: "industry",
        mode: "offline",
        location: "Anantapur",
        duration: "Approx. 1 Month",
        fee: "Contact provider",
        certificationFee: "According to institute",
        assignment: "Classroom practical assignments",
        examMode: "Offline — Training Centre",
        certification: "Institute certification according to program terms.",
        level: "Beginner",
        skills: ["Cybersecurity", "Networking", "Linux"],
        careers: ["Cybersecurity Analyst"],
        description: "Practical cybersecurity training in classroom mode.",
        learn: [
            "Cybersecurity fundamentals",
            "Networking",
            "Security tools"
        ],
        projects: [
            "Security Lab Project"
        ],
        requirements: "Attend classes and complete practical work."
    },


    {
        id: 23,
        platform: "Quality Thought",
        title: "Cyber Security with AI",
        type: "paid",
        category: "industry",
        mode: "offline",
        location: "Hyderabad",
        duration: "3–6 Months",
        fee: "₹40,000 listed",
        certificationFee: "According to program",
        assignment: "Classroom practical assignments",
        examMode: "Offline — Training Centre",
        certification: "Institute certification according to program terms.",
        level: "Intermediate",
        skills: ["Cybersecurity", "AI", "Ethical Hacking"],
        careers: ["Cybersecurity Analyst", "AI Engineer"],
        description: "Cybersecurity training combining security and AI concepts.",
        learn: [
            "Cybersecurity",
            "Ethical hacking",
            "AI for security"
        ],
        projects: [
            "Security Monitoring Project"
        ],
        requirements: "Attend training and complete practical assignments."
    },


    {
        id: 24,
        platform: "QEdge",
        title: "Data Analytics with AI",
        type: "paid",
        category: "industry",
        mode: "offline",
        location: "Hyderabad",
        duration: "Approx. 4 Months",
        fee: "Contact provider",
        certificationFee: "According to program",
        assignment: "Classroom assignments",
        examMode: "Offline — Training Centre",
        certification: "Institute certification according to program terms.",
        level: "Beginner",
        skills: ["Data Analytics", "AI", "SQL", "Power BI"],
        careers: ["Data Analyst", "Data Scientist"],
        description: "Classroom data analytics training with AI concepts.",
        learn: [
            "Data analysis",
            "SQL",
            "Power BI",
            "AI fundamentals"
        ],
        projects: [
            "Analytics Dashboard",
            "AI Analytics Project"
        ],
        requirements: "Complete classroom sessions and assignments."
    },


    {
        id: 25,
        platform: "CodeEasy Innovation Labs",
        title: "AI Engineer Program",
        type: "paid",
        category: "industry",
        mode: "offline",
        location: "Bengaluru",
        duration: "12 Weeks",
        fee: "Contact provider",
        certificationFee: "According to program",
        assignment: "In-person practical assignments",
        examMode: "Offline — Training Centre",
        certification: "Institute program completion certification.",
        level: "Intermediate",
        skills: ["Python", "AI", "Machine Learning", "Generative AI"],
        careers: ["AI Engineer", "Machine Learning Engineer"],
        description: "In-person AI engineering program with practical projects.",
        learn: [
            "Python",
            "AI engineering",
            "Machine learning",
            "Generative AI"
        ],
        projects: [
            "AI Application",
            "Capstone Project"
        ],
        requirements: "Attend sessions and complete required projects."
    },


    {
        id: 26,
        platform: "Cambridge Infotech",
        title: "Full Stack Development Training",
        type: "paid",
        category: "industry",
        mode: "offline",
        location: "Bengaluru",
        duration: "Approx. 120 Hours",
        fee: "Contact provider",
        certificationFee: "According to program",
        assignment: "Classroom practical assignments",
        examMode: "Offline — Training Centre",
        certification: "Training completion certificate according to provider.",
        level: "Beginner",
        skills: ["HTML", "CSS", "JavaScript", "Backend"],
        careers: ["Full Stack Developer", "Frontend Developer"],
        description: "Classroom-oriented full stack development training.",
        learn: [
            "Frontend development",
            "Backend development",
            "Databases",
            "Deployment"
        ],
        projects: [
            "Full Stack Application",
            "Portfolio Website"
        ],
        requirements: "Attend classes and complete practical projects."
    },


    {
        id: 27,
        platform: "Vizonis Academy",
        title: "Data Analytics Classroom Program",
        type: "paid",
        category: "industry",
        mode: "offline",
        location: "Bengaluru",
        duration: "Weekend Program",
        fee: "Contact provider",
        certificationFee: "According to program",
        assignment: "In-person practical assignments",
        examMode: "Offline — Training Centre",
        certification: "Provider certification according to course terms.",
        level: "Beginner",
        skills: ["Excel", "SQL", "Power BI"],
        careers: ["Data Analyst"],
        description: "In-person data analytics training.",
        learn: [
            "Excel",
            "SQL",
            "Power BI",
            "Data visualization"
        ],
        projects: [
            "Analytics Dashboard"
        ],
        requirements: "Attend sessions and complete practical activities."
    },


    {
        id: 28,
        platform: "Intellipaat",
        title: "Data Science and AI Program",
        type: "paid",
        category: "industry",
        mode: "offline",
        location: "Bengaluru",
        duration: "4–6 Months",
        fee: "Contact provider",
        certificationFee: "According to program",
        assignment: "Classroom assignments and projects",
        examMode: "Offline — Training Centre",
        certification: "Program certification according to enrollment.",
        level: "Intermediate",
        skills: ["Python", "Data Science", "AI", "ML"],
        careers: ["Data Scientist", "AI Engineer", "Machine Learning Engineer"],
        description: "Classroom-based data science and AI training.",
        learn: [
            "Python",
            "Statistics",
            "Machine learning",
            "AI"
        ],
        projects: [
            "Machine Learning Project",
            "Data Science Capstone"
        ],
        requirements: "Complete classroom training and projects."
    }

];


/* =========================================================
   CAREER SELECTION
   ========================================================= */

let selectedCareers = [];


const careerChips =
    document.querySelectorAll(".career-chip");

const selectedCareersBox =
    document.getElementById("selectedCareers");


function updateSelectedCareers() {

    selectedCareersBox.innerHTML = "";


    if (selectedCareers.length === 0) {

        selectedCareersBox.innerHTML =
            `<span class="placeholder">
                Select up to 3 career goals
             </span>`;

        return;
    }


    selectedCareers.forEach(career => {

        const tag =
            document.createElement("div");

        tag.className = "selected-career";

        tag.innerHTML = `
            ${career}

            <button
                type="button"
                data-remove="${career}">
                <i class="fa-solid fa-xmark"></i>
            </button>
        `;

        selectedCareersBox.appendChild(tag);

    });


    document
        .querySelectorAll("[data-remove]")
        .forEach(button => {

            button.addEventListener("click", () => {

                const career =
                    button.dataset.remove;

                selectedCareers =
                    selectedCareers.filter(
                        item => item !== career
                    );

                updateCareerChipState();

                updateSelectedCareers();

            });

        });

}


function updateCareerChipState() {

    careerChips.forEach(chip => {

        const career =
            chip.dataset.career;

        chip.classList.toggle(
            "selected",
            selectedCareers.includes(career)
        );

    });

}


careerChips.forEach(chip => {

    chip.addEventListener("click", () => {

        const career =
            chip.dataset.career;


        /* Remove if already selected */

        if (selectedCareers.includes(career)) {

            selectedCareers =
                selectedCareers.filter(
                    item => item !== career
                );

        }

        /* Add new career */

        else {

            if (selectedCareers.length >= 3) {

                alert(
                    "You can select a maximum of 3 career goals."
                );

                return;
            }

            selectedCareers.push(career);

        }


        updateCareerChipState();

        updateSelectedCareers();

    });

});


/* =========================================================
   GENERATE CAREER PATH
   ========================================================= */

document
    .getElementById("generateBtn")
    .addEventListener("click", generatePath);


function generatePath() {

    if (selectedCareers.length === 0) {

        alert(
            "Please select at least one career goal."
        );

        return;
    }


    const selectedData =
        selectedCareers.map(
            career => careerData[career]
        );


    const averageScore =
        Math.round(
            selectedData.reduce(
                (total, item) =>
                    total + item.score,
                0
            ) / selectedData.length
        );


    const allSkills = [

        ...new Set(
            selectedData.flatMap(
                item => item.skills
            )
        )

    ];


    const descriptions =
        selectedCareers.join(" + ");


    document.getElementById("matchTitle")
        .textContent = descriptions;


    document.getElementById("matchScore")
        .textContent = averageScore;


    document.getElementById("matchDescription")
        .textContent =
        selectedCareers.length === 1
            ? selectedData[0].description
            : `SkillBridge AI has combined your ${selectedCareers.length} career goals into one learning path covering the common and complementary skills required for ${descriptions}.`;


    const skillTags =
        document.getElementById("skillTags");

    skillTags.innerHTML = "";


    allSkills.slice(0, 12).forEach(skill => {

        const span =
            document.createElement("span");

        span.textContent = skill;

        skillTags.appendChild(span);

    });


    /* Scroll to career match */

    document
        .getElementById("career-match")
        .scrollIntoView({
            behavior: "smooth"
        });


    /* Update courses according to selected careers */

    renderCourses();

}


/* =========================================================
   COURSE FILTER
   ========================================================= */

let activeFilter = "all";


const filterButtons =
    document.querySelectorAll(".filter");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        activeFilter =
            button.dataset.filter;

        renderCourses();

    });

});


/* =========================================================
   COURSE SEARCH
   ========================================================= */

const searchInput =
    document.getElementById("courseSearch");


searchInput.addEventListener(
    "input",
    renderCourses
);


/* =========================================================
   RENDER COURSES
   ========================================================= */

function renderCourses() {

    const grid =
        document.getElementById("courseGrid");

    const noCourses =
        document.getElementById("noCourses");

    const count =
        document.getElementById("courseCount");


    const search =
        searchInput.value
            .toLowerCase()
            .trim();


    let filteredCourses =
        courses.filter(course => {


            /* Search */

            const searchableText = [

                course.platform,
                course.title,
                course.description,
                course.location,
                ...course.skills,
                ...course.careers

            ]
                .join(" ")
                .toLowerCase();


            const matchesSearch =
                !search ||
                searchableText.includes(search);


            /* Filter */

            let matchesFilter = true;


            if (activeFilter === "free") {

                matchesFilter =
                    course.type === "free";

            }


            else if (activeFilter === "paid") {

                matchesFilter =
                    course.type === "paid";

            }


            else if (
                ["government", "university", "industry"]
                    .includes(activeFilter)
            ) {

                matchesFilter =
                    course.category === activeFilter;

            }


            else if (
                ["online", "offline"]
                    .includes(activeFilter)
            ) {

                matchesFilter =
                    course.mode === activeFilter;

            }


            return matchesSearch &&
                   matchesFilter;

        });


    /* If career selected, prioritize relevant courses */

    if (selectedCareers.length > 0) {

        filteredCourses.sort((a, b) => {

            const aMatch =
                a.careers.some(
                    career =>
                        selectedCareers.includes(career)
                );

            const bMatch =
                b.careers.some(
                    career =>
                        selectedCareers.includes(career)
                );


            return bMatch - aMatch;

        });

    }


    grid.innerHTML = "";


    count.textContent =
        filteredCourses.length;


    if (filteredCourses.length === 0) {

        noCourses.style.display =
            "block";

        return;

    }


    noCourses.style.display =
        "none";


    filteredCourses.forEach(course => {

        const card =
            document.createElement("div");

        card.className =
            "course-card";


        const typeLabel =
            course.type === "free"
                ? "FREE"
                : "PAID";


        const categoryLabel =
            course.category.toUpperCase();


        card.innerHTML = `

            <div class="course-platform">
                ${course.platform}
            </div>

            <h3>
                ${course.title}
            </h3>

            <div class="course-badges">

                <span>${typeLabel}</span>

                <span>
                    ${course.mode.toUpperCase()}
                </span>

                <span>
                    ${categoryLabel}
                </span>

            </div>


            <p class="course-description">
                ${course.description}
            </p>


            <div class="course-info">

                <div>

                    <small>Duration</small>

                    <strong>
                        ${course.duration}
                    </strong>

                </div>


                <div>

                    <small>Fee</small>

                    <strong>
                        ${course.fee}
                    </strong>

                </div>


                <div>

                    <small>Mode</small>

                    <strong>
                        ${course.mode === "online"
                            ? "Online"
                            : "Offline"}
                    </strong>

                </div>


                <div>

                    <small>Location</small>

                    <strong>
                        ${course.location || "Anywhere"}
                    </strong>

                </div>

            </div>


            <button
                class="view-course"
                data-id="${course.id}">

                View Course
                <i class="fa-solid fa-arrow-right"></i>

            </button>

        `;


        grid.appendChild(card);

    });


    document
        .querySelectorAll(".view-course")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        Number(button.dataset.id);

                    openCourseModal(id);

                }
            );

        });

}


/* =========================================================
   COURSE MODAL
   ========================================================= */

const modal =
    document.getElementById("courseModal");


function openCourseModal(id) {

    const course =
        courses.find(
            item => item.id === id
        );


    if (!course) return;


    document.getElementById("modalPlatform")
        .textContent = course.platform;


    document.getElementById("modalTitle")
        .textContent = course.title;


    document.getElementById("modalType")
        .textContent =
        course.type === "free"
            ? "FREE"
            : "PAID";


    document.getElementById("modalMode")
        .textContent =
        course.mode.toUpperCase();


    document.getElementById("modalDuration")
        .textContent =
        course.duration;


    document.getElementById("modalLevel")
        .textContent =
        course.level;


    document.getElementById("modalDescription")
        .textContent =
        course.description;


    /* Learn */

    const learn =
        document.getElementById("modalLearn");

    learn.innerHTML = "";

    course.learn.forEach(item => {

        const li =
            document.createElement("li");

        li.textContent = item;

        learn.appendChild(li);

    });


    /* Projects */

    const projects =
        document.getElementById("modalProjects");

    projects.innerHTML = "";

    course.projects.forEach(item => {

        const li =
            document.createElement("li");

        li.textContent = item;

        projects.appendChild(li);

    });


    document.getElementById("modalAssignment")
        .textContent =
        course.assignment;


    document.getElementById("modalCertification")
        .textContent =
        course.certification;


    document.getElementById("modalExam")
        .textContent =
        course.examMode;


    document.getElementById("modalFee")
        .textContent =
        `${course.fee} | Certification/Exam: ${course.certificationFee}`;


    document.getElementById("modalRequirements")
        .textContent =
        course.requirements;


    /* Skills */

    const skills =
        document.getElementById("modalSkills");

    skills.innerHTML = "";


    course.skills.forEach(skill => {

        const span =
            document.createElement("span");

        span.textContent =
            skill;

        skills.appendChild(span);

    });


    modal.classList.add("show");

    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

document
    .getElementById("closeModal")
    .addEventListener(
        "click",
        closeModal
    );


modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {

            closeModal();

        }

    }
);


function closeModal() {

    modal.classList.remove("show");

    document.body.style.overflow =
        "";

}


/* =========================================================
   START LEARNING
   ========================================================= */

document
    .getElementById("startLearning")
    .addEventListener(
        "click",
        () => {

            alert(
                "Course learning link can be connected here."
            );

        }
    );


/* =========================================================
   INITIAL LOAD
   ========================================================= */

updateSelectedCareers();

renderCourses();
