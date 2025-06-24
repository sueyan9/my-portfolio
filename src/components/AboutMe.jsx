import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "./AboutMe.css";
import AvatarCard from "./AvatarCard";

const AboutWrapper = styled.section`
    background: #f5f5f8;
    padding: 2rem;
    border-radius: 22px;
    text-align: center;
    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

const HeroContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const HeroText = styled.div`
    max-width: 500px;
    padding: 1rem;
    text-align: left;

    h1 {
        font-size: 2.5rem;
    }

    p {
        margin-top: 1rem;
        font-size: 1.2rem;
    }
   
`;

const AvatarWrapper = styled(motion.div)`
    margin: 2rem;
    cursor: pointer;
`;

export default function AboutMe() {
    return (
        <AboutWrapper>
            <HeroContent>
                <HeroText>
                    <h1>Welcome To My Page !</h1>
                    <p>
                        A passionate Full-Stack Developer exploring 3D applications, cloud
                        integration, and modern tech stacks.
                        <br />
                        📚 Final year Bachelor of Computer and Information Science student
                        <br />
                        🌏 Based in New Zealand
                    </p>
                    <button className="hero-btn">Explore Now</button>
                </HeroText>

                <AvatarWrapper
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <AvatarCard />
                </AvatarWrapper>
            </HeroContent>
        </AboutWrapper>
    );
}