import { FaReact, FaNodeJs, FaGithub, FaCloud, FaMobileAlt, FaDatabase, FaSass, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { SiRedux, SiExpo, SiMongodb, SiVercel, SiFirebase, SiNgrok } from "react-icons/si";
import "./TechStack.css";

const techStacks = [
    {
        title: "Frontend",
        items: [
            { name: "React", icon: <FaReact color="#61dafb" /> },
            { name: "Redux", icon: <SiRedux color="#764abc" /> },
            { name: "Bootstrap", icon: <FaBootstrap color="#7952b3" /> },
            { name: "Sass", icon: <FaSass color="#cc6699" /> },
        ],
    },
    {
        title: "Backend",
        items: [
            { name: "Node.js", icon: <FaNodeJs color="#3c873a" /> },
            { name: "Express", icon: <FaNodeJs color="#000" /> },
            { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
        ],
    },
    {
        title: "Mobile",
        items: [
            { name: "React Native", icon: <FaMobileAlt color="#61dafb" /> },
            { name: "Expo", icon: <SiExpo color="#000" /> },
            { name: "WebView", icon: <FaMobileAlt color="#888" /> },
        ],
    },
    {
        title: "Tools & Cloud",
        items: [
            { name: "Git", icon: <FaGitAlt color="#f34f29" /> },
            { name: "GitHub", icon: <FaGithub color="#333" /> },
            { name: "Vercel", icon: <SiVercel color="#000" /> },
            { name: "ngrok", icon: <SiNgrok color="#1f1f1f" /> },
            { name: "Firebase", icon: <SiFirebase color="#ffca28" /> },
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