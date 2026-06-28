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
    position: "Software Engineering Intern",
    dates: "May 2025 - Aug 2025",
    responsibilities: [
      "test1%.",
      "test2",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"]
  },

];
