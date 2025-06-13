import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProjectCarousel.css";
import project1 from "../assets/project1.jpg";

const projects = [
    {
        title: "Project One",
        desc: "A cool project about ...",
        image: project1,
        link: "#",
    },
    {
        title: "Project Two",
        desc: "Another project ...",
        image: "/img2.png",
        link: "#",
    },
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
};

export default function ProjectCarousel() {
    return (
        <div className="carousel-wrapper">
            <div className="carousel-left">
                <Slider {...settings}>
                    {projects.map((proj, idx) => (
                        <div key={idx} className="carousel-image-box">
                            <img src={proj.image} alt={proj.title} className="carousel-img" />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="carousel-right">
                {projects.map((proj, idx) => (
                    <div key={idx} className="carousel-text-block">
                        <h3>{proj.title}</h3>
                        <p>{proj.desc}</p>
                        <a href={proj.link} target="_blank" rel="noreferrer" className="see-detail-btn">
                            See Detail
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}