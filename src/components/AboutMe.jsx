import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";
import palaceImg from "../assets/hero-bg.jpg"
import "./AboutMe.css";

const AboutWrapper = styled.section`
  background: #f3e6e8;
  padding: 2rem;
  text-align: center;
    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

export default function AboutMe() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Experi<br />of Indian Culture<br />and Diversity</h1>
                    <p>
                        Discover the rich heritage of Indian culture and the vibrant diversity that makes it truly unique. Immerse yourself in the breathtaking traditions, art forms, music, and cuisines that showcase the beauty of India.
                    </p>
                    <button className="hero-btn">Explore Now</button>
                </div>
                <div className="hero-img-wrapper">
                    <img src={palaceImg} alt="Indian Palace" className="hero-img" />
                </div>
            </div>
        </section>
    );
}
