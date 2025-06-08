import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";

const AboutWrapper = styled.section`
  background: #f3e6e8;
  padding: 2rem;
  text-align: center;
`;

export default function AboutMe() {
    return (
        <AboutWrapper>
            <img src="/avatar.jpg" alt="avatar" style={{ borderRadius: "50%", width: 120 }} />
            <h1>Your Name</h1>
            <p>Hi! I'm a passionate developer specializing in ...</p>
            <div>
                <a href="https://github.com/yourname"><FaGithub size={28} /></a>
                <a href="https://linkedin.com/in/yourname"><FaLinkedin size={28} /></a>
                <a href="mailto:your@email.com"><FaEnvelope size={28} /></a>
            </div>
        </AboutWrapper>
    );
}
