import { Code2, Database, Terminal, Globe, Cpu, GitBranch, Layers, Server 
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Sandeep Dhillon",
  role: "Computer Science Student",
  email: "sda183@sfu.ca",
  github: "https://github.com/Tillloo",
  linkedin: "https://www.linkedin.com/mynetwork/grow/",
  location: "Vancouver, Canada"
};

export const ROLES = ["Software Engineer", "Full Stack Developer", "AI Enthusiast", "Problem Solver"];

export const SKILLS_DATA = {
  "Programming Languages": [
    { name: "Java", desc: "Enterprise application development", icon: <Cpu size={18} /> },
    { name: "Python", desc: "Data analysis, ML & scripting", icon: <Terminal size={18} /> },
    { name: "C++", desc: "High-performance & system programming", icon: <Code2 size={18} /> },
    { name: "JavaScript", desc: "Interactive web elements", icon: <Globe size={18} /> },
    { name: "TypeScript", desc: "Type-safe web development", icon: <Code2 size={18} /> },
    { name: "SQL", desc: "Relational database querying", icon: <Database size={18} /> }
  ],
  "Frontend": [
    { name: "React", desc: "Component-based UI library", icon: <Globe size={18} /> },
    { name: "HTML5", desc: "Web structure & semantics", icon: <Globe size={18} /> },
    { name: "CSS3", desc: "Styling & layout design", icon: <Layers size={18} /> },
    { name: "Tailwind CSS", desc: "Utility-first CSS framework", icon: <Layers size={18} /> },
    { name: "Next.js", desc: "React framework for production", icon: <Globe size={18} /> }
  ],
  "Backend": [
    { name: "Node.js", desc: "Server-side JavaScript runtime", icon: <Server size={18} /> },
    { name: "Express.js", desc: "Web application framework", icon: <Server size={18} /> },
    { name: "FastAPI", desc: "High-performance Python API framework", icon: <Terminal size={18} /> },
    { name: "REST APIs", desc: "API architecture & integration", icon: <GitBranch size={18} /> }
  ],
  "Databases": [
    { name: "PostgreSQL", desc: "Advanced open-source RDBMS", icon: <Database size={18} /> },
    { name: "MySQL", desc: "Popular relational database", icon: <Database size={18} /> },
    { name: "MongoDB", desc: "NoSQL document database", icon: <Database size={18} /> },
    { name: "Firebase", desc: "Backend-as-a-Service & real-time DB", icon: <Database size={18} /> }
  ],
  "Cloud & DevOps": [
    { name: "Git", desc: "Distributed version control", icon: <GitBranch size={18} /> },
    { name: "GitHub", desc: "Code hosting, collaboration & CI/CD", icon: <GitBranch size={18} /> },
    { name: "Docker", desc: "Application containerization", icon: <Layers size={18} /> },
    { name: "Google Cloud", desc: "Cloud computing services (GCP)", icon: <Server size={18} /> },
    { name: "Linux", desc: "Server administration & CLI", icon: <Terminal size={18} /> }
  ],
  "Tools & Technologies": [
    { name: "VS Code", desc: "Primary code editor & IDE", icon: <Code2 size={18} /> },
    { name: "Postman", desc: "API development & testing", icon: <Globe size={18} /> },
    { name: "Figma", desc: "Collaborative UI/UX design", icon: <Layers size={18} /> },
    { name: "Power Automate", desc: "Enterprise workflow automation", icon: <Cpu size={18} /> },
    { name: "UiPath", desc: "Robotic Process Automation (RPA)", icon: <Cpu size={18} /> }
  ]
};

export const EXPERIENCE = [
  {
    id: 1,
    company: " Simon Fraser University",
    position: "Junior Application Developer",
    dates: "May 2025 - Aug 2025",
    responsibilities: [
      "Automated previously manual time-off request and timesheet submission workflows for SFU’s Administrative Technical Solutions team, creating scalable solutions that improved operational efficiency and user experience.",
      "Developed workflow automation solutions using Microsoft Power Automate and Robotic Process Automation tools, leveraging APIs to enhance cross-departmental efficiency and streamline business processes.",
      "Created requirement specification documents by analyzing workflow inefficiencies and defining functional and non-functional requirements, while also supporting documentation of workflows, known issues, and training materials to ensure successful implementation and adoption.",
      "Collaborated with an Agile Scrum team to plan, design, implement, and maintain IT solutions for SFU’s administrative systems, actively participating in daily stand-ups and sprint ceremonies."
    ],
    technologies: ["Microsoft Power Automate", "UiPath", "React", "Node.js", "PostgreSQL", "Docker"]
  },

];


export const PROJECTS = [
  {
    id: "1",
    title: "Diabetic Retinopathy Disease Scanner",
    category: "Machine Learning",
    shortDesc:
      "AI-powered web application for detecting diabetic retinopathy from retinal images.",
    longDesc:
      "Built a full-stack medical imaging application using Flask, TensorFlow, and Keras to classify diabetic retinopathy severity from retinal images. The project uses a ResNet-based deep learning model that achieved 92% diagnostic accuracy. Automated image preprocessing and data augmentation pipelines streamlined training on thousands of images while enabling real-time predictions through a user-friendly web interface.",
    image: "/images/Diabetic.png",
    tech: ["Python", "TensorFlow", "Flask", "Keras", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Tillloo/Diabetic-Retinopathy-Scanner",
    demo: "#",
  },
  {
    id: "2",
    title: "Salary Predictor",
    category: "Machine Learning",
    shortDesc:
      "Full-stack application that predicts salaries using machine learning.",
    longDesc:
      "Developed a full-stack salary prediction application with a Python backend and a React frontend. Cleaned and processed over 40,000 salary records using Pandas and NumPy before training an XGBoost model to generate salary predictions based on user experience, education, and job-related features. Connected the frontend and backend with REST APIs for real-time predictions.",
    image: "/images/Salary_Predictor.png",
    tech: ["Python", "React", "Pandas", "NumPy", "XGBoost", "Tailwind CSS"],
    github: "https://github.com/CMPT-419/Salary-Predictor",
    demo: "#",
  },
  {
    id: "3",
    title: "Socket Messaging Application",
    category: "Software Development",
    shortDesc:
      "Multi-threaded messaging platform built with Java sockets and JavaFX.",
    longDesc:
      "Designed and implemented a real-time messaging application using TCP sockets and multithreading in Java. Built an interactive JavaFX interface supporting login, account switching, messaging, replies, reactions, and deletions. Applied object-oriented design principles to create reusable client and server components that are scalable and maintainable.",
    image: "/images/Group_Chat.png",
    tech: ["Java", "JavaFX", "TCP", "Sockets", "Multithreading", "OOP"],
    github: "https://github.com/Tillloo/Group-Chat-Messenger",
    demo: "#",
  },
];