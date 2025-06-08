import React from "react";
import Slider from "react-slick";
import projects from "../data/projects";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCard = styled.div`
  background: #b3c6e7;
  border-radius: 16px;
  padding: 1rem;
  margin: 0 1rem;
  text-align: center;
`;

export default function ProjectCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            { breakpoint: 900, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <section style={{ padding: "2rem 0" }}>
            <h2>My Projects</h2>
            <Slider {...settings}>
                {projects.map((proj) => (
                    <ProjectCard key={proj.title}>
                        <img src={proj.image} alt={proj.title} style={{ width: "100%", borderRadius: 8 }} />
                        <h3>{proj.title}</h3>
                        <p>{proj.desc}</p>
                        <a href={proj.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </ProjectCard>
                ))}
            </Slider>
        </section>
    );
}
