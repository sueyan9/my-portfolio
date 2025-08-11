import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence  } from "framer-motion";
import "./AboutMe.css";
import AvatarCard from "./AvatarCard";
import FlipCard from "./FlipCard";

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

export default function AboutMe({ onExploreClick }) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const texts = [
        "Welcome To My Page !",
        "A software engineering student who loves building fun and useful things. Passionate about creating applications that make people's lives easier and more enjoyable.",
        "🌏 Based in New Zealand"
    ];
    useEffect(() => {
        if (currentTextIndex < texts.length) {
            const timer = setTimeout(() => {
                setCurrentTextIndex(prev => prev + 1);
            }, 1000); // 每段文字显示间隔1秒

            return () => clearTimeout(timer);
        }
    }, [currentTextIndex, texts.length]);


    return (
        <AboutWrapper>
            <HeroContent>
                <HeroText className="hero-text">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {currentTextIndex >= 1 ? texts[0] : ""}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: currentTextIndex >= 2 ? 1 : 0, y: currentTextIndex >= 2 ? 0 : 30 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {currentTextIndex >= 2 ? texts[1] : ""}
                    </motion.p>

                    <br />

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: currentTextIndex >= 3 ? 1 : 0, y: currentTextIndex >= 3 ? 0 : 30 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {currentTextIndex >= 3 ? texts[2] : ""}
                    </motion.p>

                    <br />

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: currentTextIndex >= 4 ? 1 : 0, y: currentTextIndex >= 4 ? 0 : 30 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        {currentTextIndex >= 4 ? texts[3] : ""}
                    </motion.p>

                    {/* 独立显示，不依赖文字动画 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}  // 页面加载后0.5秒显示
                    >
                        <FlipCard />
                    </motion.div>

                </HeroText>
                <AvatarWrapper
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <AvatarCard onExploreClick={onExploreClick}/>
                </AvatarWrapper>
            </HeroContent>
        </AboutWrapper>
    );
}