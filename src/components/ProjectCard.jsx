import React from "react";
import "./ProjectCard.css";

export default function ProjectCard({ image, video, title, desc, link }) {
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
                ) : (
                    <img
                        src={image}
                        alt={title}
                        className="modern-card__img"
                    />
                )}
            </div>
            <div className="modern-card__content">
                <h5 className="modern-card__title">{title}</h5>
                <p className="modern-card__desc">{desc}</p>
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