import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";
import palaceImg from "../assets/hero.jpg"
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
                    <h1>Welcome To My Page !</h1>
                    <p>
                        A passionate Full-Stack Developer exploring 3D applications, cloud integration, and modern tech stacks.
                                  📚 Final year Bachelor of Computer and Information Science student
                                      🌏 Based in New Zealand
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
