import React, { useState }  from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProjectCarousel.css";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.MP4";

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
        video: project2,
        link: "#",
    },
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    afterChange: () => {},
};

export default function ProjectCarousel() {
    const [current, setCurrent] = useState(0);

    const sliderSettings = {
        ...settings,
        afterChange: (index) => setCurrent(index),
    };

    return (
        <div className="carousel-wrapper">
            <div className="carousel-left">
                <Slider {...sliderSettings}>
                    {projects.map((proj, idx) => (
                        <div key={idx} className="carousel-image-box">
                            {proj.video ? (
                                <video
                                    src={proj.video}
                                    controls
                                    className="carousel-media"
                                    style={{ width: "100%", borderRadius: "16px" }}
                                />
                            ) : (
                                <img
                                    src={proj.image}
                                    alt={proj.title}
                                    className="carousel-media"
                                    style={{ width: "100%", borderRadius: "16px" }}
                                />
                            )}
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="carousel-right">
                <div className="carousel-text-block">
                    <h3>{projects[current].title}</h3>
                    <p>{projects[current].desc}</p>
                    <a href={projects[current].link} target="_blank" rel="noreferrer" className="see-detail-btn">
                        See Detail
                    </a>
                </div>
            </div>
        </div>
    );
}