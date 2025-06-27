import React from "react";
import "./ProjectCard.css";

export default function ProjectCard({ image, video, title, desc, link }) {
    console.log("ProjectCard props:", { image, video, title, desc, link });
    return (
        <div className="card hover-flip">
            <div className="card__face card__face--front">
                {video ? (
                    <video
                        src={video}
                        className="card__img"
                        style={{ width: 80, height: 80, borderRadius: 12, objectFit: "cover", background: "#000" }}
                        muted
                        autoPlay
                        loop
                    />
                ) : (
                    <img
                        src={image}
                        alt={title}
                        className="card__img"
                    />
                )}
            </div>
            <div className="card__face card__face--back">
                <p className="card__title">{title}</p>
                <p className="card__description">{desc}</p>
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="see-detail-btn"
                    >
                        See Detail
                    </a>
                )}
            </div>
        </div>
    );
}