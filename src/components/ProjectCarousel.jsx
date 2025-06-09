import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProjectCarousel.css";

const projects = [
    { title: "Project One", desc: "A cool project about ...", image: "/img1.png", link: "#" },
    { title: "Project Two", desc: "Another project ...", image: "/img2.png", link: "#" },
    { title: "Project Three", desc: "Yet another ...", image: "/img3.png", link: "#" }
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0px",
    responsive: [
        { breakpoint: 900, settings: { slidesToShow: 1 } }
    ]
};

export default function ProjectCarousel() {
    return (
        <div className="container-project">
            <h2 className="text-center mb-4">My Projects</h2>
            <Slider {...settings}>
                {projects.map((proj, idx) => (
                    <div key={idx} className="project-card">
                        <img src={proj.image} alt={proj.title} style={{ width: "100%", borderRadius: 8 }} />
                        <h3>{proj.title}</h3>
                        <p>{proj.desc}</p>
                        <a href={proj.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </Slider>
        </div>
    );
}