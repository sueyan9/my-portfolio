import {
    FaReact, FaNodeJs, FaAws, FaCloud, FaCogs, FaDatabase, FaMobileAlt, FaCloudflare, FaJava, FaMicrosoft, FaDocker, FaEnvelope, FaSearch, FaCheckCircle, FaBug, FaListAlt, FaTasks
} from "react-icons/fa";
import { SiSpring, SiMongodb, SiPostgresql, SiMysql  , SiRabbitmq, SiCucumber,SiTestcafe, SiTypescript, SiNextdotjs, SiMui, SiAntdesign, SiVite, SiGooglecloud, SiJirasoftware } from "react-icons/si";
import "./TechStack.css";

const techStacks = [
    {
        title: "Backend",
        items: [
            { name: "Java (Spring Boot, Maven/Gradle)", icon: <FaJava color="#007396" /> },
            { name: "C# (ASP.NET Core, NuGet)", icon: <FaMicrosoft color="#0078D4" /> },
            { name: "Node.js", icon: <FaNodeJs color="#3c873a" /> },
            { name: "Restful API", icon: <FaCogs color="#888" /> },
            { name: "Hibernate/MyBatis", icon: <FaCogs color="#888" /> },
            { name: "Entity Framework", icon: <FaCogs color="#888" /> },
            { name: "LINQ", icon: <FaCogs color="#888" /> }
        ]
    },
    {
        title: "Frontend",
        items: [
            { name: "React", icon: <FaReact color="#61dafb" /> },
            { name: "React Native", icon: <FaMobileAlt color="#61dafb" /> },
            { name: "Next.js", icon: <SiNextdotjs color="#000" /> },
            { name: "Material-UI", icon: <SiMui color="#007fff" /> },
            { name: "Ant Design", icon: <SiAntdesign color="#0170FE" /> },
            { name: "Typescript", icon: <SiTypescript color="#3178c6" /> },
            { name: "Vite", icon: <SiVite color="#646cff" /> }
        ]
    },
    {
        title: "Cloud and Infrastructure",
        items: [
            { name: "AWS (EC2, RDB)", icon: <FaAws color="#ff9900" /> },
            { name: "Azure", icon: <FaCloud color="#0078D4" /> },
            { name: "GCP", icon: <SiGooglecloud color="#4285f4" /> },
            { name: "Cloudflare", icon: <FaCloudflare color="#f38020" /> }
        ]
    },
    {
        title: "DevOps",
        items: [
            { name: "Containerization", icon: <FaDocker color="#2496ed" /> },
            { name: "CICD pipeline", icon: <FaCogs color="#888" /> },
            { name: "Support Request Handling", icon: <FaEnvelope color="#888" /> },
            { name: "Manually configuration and Integration", icon: <FaCogs color="#888" /> }
        ]
    },
    {
        title: "Messaging & Search",
        items: [
            { name: "RabbitMQ", icon: <SiRabbitmq color="#ff6600" /> }
        ]
    },
    {
        title: "Databases",
        items: [
            { name: "MySQL", icon: <SiMysql color="#00758f" /> },
            { name: "SQL Server", icon: <FaDatabase color="#CC2927" /> },
            { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
            { name: "MongoDB", icon: <SiMongodb color="#47a248" /> }
        ]
    },
    {
        title: "Testing",
        items: [
            { name: "Unit Testing", icon: <FaCheckCircle color="#4caf50" /> },
            { name: "Playwright", icon: <FaCheckCircle color="#45ba47" /> },
            { name: "Test-café", icon: <SiTestcafe color="#2d9cdb" /> },
            { name: "Cucumber test", icon: <SiCucumber color="#23d96c" /> }
        ]
    },
    {
        title: "Methodology",
        items: [
            { name: "Agile", icon: <FaTasks color="#888" /> },
            { name: "Scrum", icon: <FaListAlt color="#888" /> },
            { name: "Kanban", icon: <FaTasks color="#888" /> },
            { name: "Jira", icon: <SiJirasoftware color="#0052CC" /> }
        ]
    }
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