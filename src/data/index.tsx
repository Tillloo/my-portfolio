import React from 'react';
import { 
  Code2, Database, Terminal, Globe, Cpu, 
GitBranch, Layers, Server 
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
    company: "TechNova Solutions",
    position: "Software Engineering Intern",
    dates: "May 2025 - Aug 2025",
    responsibilities: [
      "Developed and maintained React-based frontend components, increasing user engagement by 15%.",
      "Designed robust RESTful APIs using Node.js and Express.",
      "Optimized database queries in PostgreSQL, reducing load times by 20%."
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"]
  },
  {
    id: 2,
    company: "University Research Lab",
    position: "Undergraduate Research Assistant",
    dates: "Jan 2024 - Present",
    responsibilities: [
      "Assisted in developing machine learning models for natural language processing tasks.",
      "Processed and cleaned datasets of over 1 million records using Python and Pandas.",
      "Co-authored a paper accepted into a regional undergraduate conference."
    ],
    technologies: ["Python", "PyTorch", "Pandas", "Jupyter"]
  }
];

export const PROJECTS = [
  {
    id: "1",
    title: "EcoTrack AI",
    category: "Machine Learning",
    shortDesc: "An AI-powered application to monitor and optimize personal carbon footprint.",
    longDesc: "EcoTrack AI leverages machine learning algorithms to analyze user spending and travel habits to estimate carbon footprints accurately. It provides actionable recommendations for sustainable living.",
    tech: ["Python", "TensorFlow", "React", "MongoDB"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    title: "DevCollab Platform",
    category: "Web Applications",
    shortDesc: "Real-time collaborative code editor with integrated video chat.",
    longDesc: "A complex real-time application allowing multiple developers to edit code simultaneously. Features syntax highlighting, live execution for JS/Python, and peer-to-peer video streaming.",
    tech: ["Next.js", "Socket.io", "WebRTC", "Tailwind"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "3",
    title: "CryptoPortfolio Manager",
    category: "Mobile Apps",
    shortDesc: "Cross-platform mobile app for tracking cryptocurrency investments.",
    longDesc: "Integrated with multiple exchange APIs to provide real-time portfolio valuation, interactive charting, and custom price alerts using push notifications.",
    tech: ["React Native", "Firebase", "Redux", "REST APIs"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "4",
    title: "Algorithm Visualizer",
    category: "Academic Projects",
    shortDesc: "Interactive web tool to visualize sorting and pathfinding algorithms.",
    longDesc: "Designed to help computer science students understand complex algorithms. Features step-by-step execution, speed control, and code highlighting for algorithms like A*, Dijkstra, and QuickSort.",
    tech: ["React", "TypeScript", "Framer Motion"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800"
  }
];