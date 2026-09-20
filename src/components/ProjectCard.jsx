import React, { useState } from "react";
import "./ProjectCard.css";

export default function ProjectCard({ image, video, title, desc, links = [], imageFit = "contain" }) {
    const [isDescScrolled, setIsDescScrolled] = useState(false);
    const [isDescActive, setIsDescActive] = useState(false);
    const descriptionLines = desc?.split("\n") ?? [];
    const externalLinks = links.filter(({ href }) => /^https?:\/\//.test(href));

    return (
        <div className="modern-card">
            <div className="modern-card__media">
                {video ? (
                    <video
                        src={video}
                        className="modern-card__img"
                        muted
                        autoPlay
                        loop
                        playsInline
                    />
                ) : image ? (
                    <img
                        src={image}
                        alt={title}
                        className={`modern-card__img modern-card__img--${imageFit}`}
                    />
                ) : (
                    <div className="modern-card__placeholder">
                        <span className="modern-card__placeholder-badge">New Project</span>
                        <h6 className="modern-card__placeholder-title">{title}</h6>
                        <p className="modern-card__placeholder-text">
                            {desc
                                ?.split("\n")
                                .find((line) => line.trim().length > 0 && line.trim() !== "Overview:") ??
                                "Details coming soon."}
                        </p>
                    </div>
                )}
            </div>
            <div className="modern-card__content">
                <h5 className="modern-card__title">{title}</h5>
                <div
                    className={`modern-card__desc ${isDescScrolled && isDescActive ? "modern-card__desc--scrolled" : ""}`}
                    onScroll={(event) => {
                        setIsDescScrolled(event.currentTarget.scrollTop > 4);
                    }}
                    onMouseEnter={() => setIsDescActive(true)}
                    onMouseLeave={() => setIsDescActive(false)}
                    onFocus={() => setIsDescActive(true)}
                    onBlur={() => setIsDescActive(false)}
                >
                    {descriptionLines.map((line, index) => (
                        <React.Fragment key={`${line}-${index}`}>
                            {line === "Overview:" || line === "Key Features:" || line === "Tech Stack:" ? (
                                <strong className="modern-card__section-title">{line}</strong>
                            ) : (
                                line
                            )}
                            {index < descriptionLines.length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </div>
                {externalLinks.length > 0 && (
                    <div className="modern-card__actions">
                        {externalLinks.map(({ href, label }) => {
                            const buttonLabel = new URL(href).hostname === "github.com"
                                ? "GitHub"
                                : label === "Visit company site" ? "Visit Website" : "Live Demo";

                            return (
                                <a
                                    key={href}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="modern-card__btn"
                                    aria-label={`${title}: ${buttonLabel} (opens in a new tab)`}
                                >
                                    {buttonLabel} <span aria-hidden="true">↗</span>
                                </a>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
