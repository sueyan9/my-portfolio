import React, { useState } from "react";
import "./ProjectCard.css";

export default function ProjectCard({ image, video, title, desc, link, imageFit = "contain" }) {
    const [isDescScrolled, setIsDescScrolled] = useState(false);
    const [isDescActive, setIsDescActive] = useState(false);

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
                <p
                    className={`modern-card__desc ${isDescScrolled && isDescActive ? "modern-card__desc--scrolled" : ""}`}
                    onScroll={(event) => {
                        setIsDescScrolled(event.currentTarget.scrollTop > 4);
                    }}
                    onMouseEnter={() => setIsDescActive(true)}
                    onMouseLeave={() => setIsDescActive(false)}
                    onFocus={() => setIsDescActive(true)}
                    onBlur={() => setIsDescActive(false)}
                >
                    {desc}
                </p>
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="modern-card__btn"
                    >
                        Read More
                    </a>
                )}
            </div>
        </div>
    );
}
