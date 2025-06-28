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
                        A soon-to-graduate software engineering student with hands-on internship experience at a local company. Specializing in C# and full-stack web application development, with a strong foundation in Java, PHP, Spring Boot, HTML, JavaScript, and RESTful APIs.

                        <br />
                        📚 Proficient in Git, CI/CD pipelines, DevOps practices, and software testing, with practical experience working in agile development environments. Passionate about delivering reliable and innovative solutions on time, and eager to contribute to collaborative, high-performing engineering teams.
                        <br />
                        🌏 Based in New Zealand
                    </p>
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