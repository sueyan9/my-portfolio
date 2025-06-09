import React from "react";
import techGroups from "../data/techs";
import "./TechStack.css";

export default function TechStack() {
    return (
        <section className="tech-section">
            <h2 className="tech-title">Explore My Tech Stack</h2>
            <p className="tech-desc">
                From Frontend to Backend, Mobile to Cloud, here are the core technologies I use to build and deploy modern applications.
            </p>
            <div className="tech-card-grid">
                {techGroups.map((group) => (
                    <div className="tech-card" key={group.title}>
                        <h3 className="tech-card-title">{group.title}</h3>
                        <ul className="tech-list">
                            {group.techs.map((tech) => (
                                <li className="tech-list-item" key={tech}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}