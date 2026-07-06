import React from "react";
import "./ProjectCarousel.css";
import ProjectCard from "./ProjectCard";
import { projects } from "../../shared/portfolioData/projects";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.mov";
import project3 from "../assets/priceHound.jpg";
import project4 from "../assets/project3DProject.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";
import projectRAG from "../assets/projectRAG.png";
import leavewise from "../assets/Agentic_ai_project.png";

const projectMediaById = {
    "clinic-system": { image: project7, imageFit: "cover" },
    "clinic-rag-support": { image: projectRAG, imageFit: "cover" },
    "dental-chart": { image: project1 },
    toothmate: { video: project2 },
    pricehound: { image: project3 },
    speed: { image: project5 },
    "parametric-design": { image: project4 },
    "matricle-platform": { image: project6 },
    leavewise: { image: leavewise },
};

function buildProjectDescription(project) {
    const sections = [
        "Overview:",
        "",
        project.summary,
        "",
        "Key Features:",
        ...project.highlights.map((item) => `• ${item}`),
        "",
        "Tech Stack:",
        project.techStack.join(" · "),
    ];

    return sections.join("\n");
}

export default function ProjectCarousel() {
    return (
        <div className="project-card-grid-wrapper">
            <div className="project-card-grid">
                {projects.map((project) => {
                    const media = projectMediaById[project.id] ?? {};

                    return (
                        <ProjectCard
                            key={project.id}
                            image={media.image}
                            video={media.video}
                            title={project.title}
                            desc={buildProjectDescription(project)}
                            link={project.links?.[0]?.href}
                            imageFit={media.imageFit}
                        />
                    );
                })}
            </div>
        </div>
    );
}
