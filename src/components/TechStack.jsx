import {  FaReact, FaNodeJs, FaGithub, FaMobileAlt, FaSass, FaBootstrap, FaGitAlt,
    FaFigma ,FaAws , FaCube} from "react-icons/fa";
import {
    SiRedux, SiExpo, SiMongodb, SiVercel, SiFirebase, SiNgrok, SiNetlify,
    SiPostman, SiJira, SiMiro, SiGooglecloud,
    SiTailwindcss, SiSpring, SiAdobephotoshop, SiAdobepremierepro
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import "./TechStack.css";

const techStacks = [
    {
        title: "Frontend",
        items: [
            { name: "React", icon: <FaReact color="#61dafb" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss color="#38b2ac" /> },
            { name: "Bootstrap", icon: <FaBootstrap color="#7952b3" /> },
            { name: "Sass", icon: <FaSass color="#cc6699" /> },
        ],
    },
    {
        title: "Backend",
        items: [
            { name: "Node.js", icon: <FaNodeJs color="#3c873a" /> },
            { name: "Express.js", icon: <FaNodeJs color="#000" /> },
            { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
            { name: "Spring Boot", icon: <SiSpring color="#6db33f" /> },
            { name: "MySQL", icon: <GrMysql color="#00758f" /> },
        ],
    },
    {
        title: "Mobile",
        items: [
            { name: "React Native", icon: <FaMobileAlt color="#61dafb" /> },
            { name: "Expo", icon: <SiExpo color="#000" /> },
            { name: "WebView", icon: <FaMobileAlt color="#888" /> },
            { name: "Three.js", icon: < FaCube color="#000" /> },
        ],
    },
    {
        title: "Cloud & DevOps",
        items: [
            { name: "AWS", icon: <FaAws color="#ff9900" /> },
            { name: "Google Cloud", icon: <SiGooglecloud color="#4285f4" /> },
            { name: "Firebase", icon: <SiFirebase color="#ffca28" /> },
            { name: "Netlify", icon: <SiNetlify color="#00c7b7" /> },
            { name: "Vercel", icon: <SiVercel color="#000" /> },
            { name: "ngrok", icon: <SiNgrok color="#1f1f1f" /> },
        ],
    },
    {
        title: "Tools & Collaboration",
        items: [
            { name: "Git", icon: <FaGitAlt color="#f34f29" /> },
            { name: "GitHub", icon: <FaGithub color="#333" /> },
            { name: "Postman", icon: <SiPostman color="#ff6c37" /> },
            { name: "Figma", icon: <FaFigma color="#a259ff" /> },
            { name: "Jira", icon: <SiJira color="#0052cc" /> },
            { name: "Miro", icon: <SiMiro color="#ffd02f" /> },
            { name: "Photoshop", icon: <SiAdobephotoshop color="#31a8ff" /> },
            { name: "Premiere Pro", icon: <SiAdobepremierepro color="#9999ff" /> },
        ],
    },
];

export default function TechStack() {
    return (
        <div className="tech-stack-row">
            {techStacks.map((stack) => (
                <div className="tech-card" key={stack.title}>
                    <h3>{stack.title}</h3>
                    <ul>
                        {stack.items.map((item) => (
                            <li key={item.name}>
                                <span className="tech-icon">{item.icon}</span>
                                <span className="tech-name">{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}