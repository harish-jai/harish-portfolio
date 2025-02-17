const educationData = {
    university: {
        name: "University of Michigan, Ann Arbor",
        degree: "Bachelor of Science in Engineering (BSE) in Computer Science",
        minors: ["Math", "Multidisciplinary Design"],
        pin: "Project code cannot be shared as per the University of Michigan Engineering Honor Code.",
    },
    highlightedCourses: [
        {
            courseCode: "EECS 491",
            title: "Distributed Systems",
            topics: "Routines, Channels, RSMs, Fault Tolerance, Concurrency Controls, Scaling Techniques",
            tools: "Go",
            blurb: "This course covers the principles of distributed computing, including system reliability, scalability, and synchronization.",
            projects: [
                "Simple Map-Reduce Paradigm",
                "Primary/Backup Replication",
                "Paxos Consensus Replication",
                "Sharding across Multiple Paxos Groups",
            ],
        },
        {
            courseCode: "EECS 489",
            title: "Computer Networks",
            topics: "TCP/IP, Network Security, Routing, Congestion Control",
            tools: "C++, C",
            blurb: "This course explores how networks operate, from high-level distributed systems to low-level packet routing.",
            projects: [
                "Sockets, Mininet, and Performance",
                "Adaptive Video Streaming via CDN",
                "To Be Announced",
                "To Be Announced",
            ],
        },
        {
            courseCode: "EECS 485",
            title: "Web Systems",
            topics: "Full-stack development, REST APIs, DNS, IaaS, SaaS, PaaS",
            tools: "Python, JavaScript, HTML/CSS, Flask, React, AWS, SQL, Jinja",
            blurb: "Explores web application fundamentals, distributed computing, and web semantics.",
            projects: [
                "Templated Static Site Generator",
                "Server-side Dynamic Pages",
                "Client-side Dynamic Pages",
                "MapReduce",
                "Search Engine",
            ],
        },
        {
            courseCode: "EECS 445",
            title: "Introduction to Machine Learning",
            topics: "Linear Regression, Logistic Regression, Decision Trees, Neural Networks, Support Vector Machines, Clustering",
            tools: "Python",
            blurb: "Introduces the principles of machine learning, including linear regression, logistic regression, decision trees, neural networks, support vector machines, and clustering.",
            projects: [
                "Logistic Regression Classifier",
                "CNN Image Classifier"
            ],
        },
        {
            courseCode: "EECS 498-010",
            title: "Machine Learning for Embedded Systems",
            topics: "Sensors and Actuators, HCI, Tracking, Localization, and Navigation, Wireless Communication, Power Optimization",
            tools: "Python",
            blurb: "Examines the real-world applications of embedded systems in mobile, wearable, and IoT devices, emphasizing their impact on modern computing.",
            projects: [
                "Capstone: Conversation Analyzer for Smartwatches",
                "Acoustic Sound Recording and Playback on the Laptop or Smartphone",
                "Real-Time Ultrasound Playback and Relative Hand Motion Sensing",
                "ML for Real-Time In-Air Hand Gesture Recognition"
            ],
        },
    ],
    otherCourses: [
        {
            name: "EECS 280: Programming & Intro Data Structures",
            skills: "C++",
            blurb: "Fundamental course covering OOP, recursion, and linked lists.",
        },
        {
            name: "EECS 203: Discrete Math",
            skills: "Proofs, Graph Theory",
            blurb: "Formal logic, combinatorics, and number theory applications.",
        },
        {
            name: "EECS 281: Data Structures & Algorithms",
            skills: "C++",
            blurb: "Advanced algorithmic problem-solving and data structure design.",
        },
        {
            name: "EECS 370: Computer Architecture",
            skills: "C++",
            blurb: "CPU pipeline design, memory hierarchy, and assembly programming.",
        },
        {
            name: "EECS 376: Foundations of Computer Science",
            skills: "Big O Notation, Recursion, Graphs, Trees, Sets, Hashing, Sorting, and Searching",
            blurb: "Computational complexity, recursion, and graph theory.",
        },
    ],
    mathMinor: [
        {
            courseCode: "MATH 440",
            title: "Lab of Geometry",
            topics: "Geodesic flows, Riemannian manifolds, Lie groups, Symplectic geometry",
            blurb: "Used differential geometry and Hamiltonian mechanics to study shortest-path problems.",
            link: "/MATH_440_Final_Paper.pdf",
        },
        {
            courseCode: "MATH 423",
            title: "Mathematics of Finance",
            topics: "Risk and return, Portfolio theory, Capital asset pricing model, Black-Scholes model",
            blurb: "Applied mathematical modeling to pricing bonds, options, and futures contracts derived from basic economic principles.",
        },
        {
            courseCode: "MATH 425",
            title: "Introduction to Probability",
            topics: "Conditional probability, Independent events, Random variables, Joint distributions",
            blurb: "Learned key probability theory concepts and applied them to real-world fields like genetics, economics, and engineering.",
        },
    ],
    mdpMinor: [
        {
            courseCode: "ENGR 456",
            title: "Engineering Mentorship",
            blurb: "Mentoring a group of students working for Sartorius through the MDP program. Working on two mentorship objectives: 1) Help the team with their research, brainstorming, and decision-making processes and 2) Work with the team to build cohesion and a supportive, understanding culture.",
        },
        {
            courseCode: "ENGR 455",
            title: "Multidisciplinary Design Program",
            blurb: "Worked with Northrop Grumman on GATE, a tool to generate unit tests for developers. Gained experience working with a large team, managing a project, and developing a product with external specifications.",
        },
        {
            courseCode: "BA 456",
            title: "Living Business Leadership Experience",
            blurb: "Collaborated with Relic, a startup, to develop a business strategy for their digital sports metaverse product. Learned about business strategy, marketing, product development, and pitching to decision-makers.",
        },
    ],
};

export default educationData;
