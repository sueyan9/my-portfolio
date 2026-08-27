import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "./AboutMe.css";
import AvatarCard from "./AvatarCard";
import { SimpleTimeline } from "./SimpleTimeline";

const AboutWrapper = styled.section`
    background: #f5f5f8;
    padding: 6rem 3rem 3rem 3rem; // 顶部增加到6rem，左右增加到3rem
    border-radius: 22px;
    text-align: center;
    @media (max-width: 768px) {
        padding: 4rem 2rem 2rem 2rem; // 移动端也相应调整
    }
`;

const HeroContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 4rem; // 增加底部边距
    gap: 4rem; // 增加间距
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`;

const HeroText = styled.div`
    max-width: 500px;
    padding: 1.5rem; // 增加内边距
    text-align: left;
    h1 {
        font-size: 2.5rem;
        margin-top: 0;
        margin-bottom: 1.5rem; // 增加标题底部边距
    }
    p {
        margin-top: 1.5rem; // 增加段落间距
        margin-bottom: 1rem; // 增加段落底部边距
        font-size: 1.2rem;
        line-height: 1.6; // 增加行高
    }
`;

const AvatarWrapper = styled(motion.div)`
    margin: 0;
    cursor: pointer;
`;

const TimelineSection = styled.div`
    width: 100%;
    margin-top: 3rem; // 增加顶部边距
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`;

export default function AboutMe({ onExploreClick }) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    
    const texts = [
        "Hi, I'm Sue. Welcome To My Page !",
        "I'm a developer who loves using technology to solve real problems. Lately, I've been diving deeper into AI and cloud technologies—always curious about what they can make possible. Outside of work, you'll usually find me hiking or training for my goal of running through every reserve in New Zealand.",
        "🌏 Based in New Zealand"
    ];

    useEffect(() => {
        if (currentTextIndex < texts.length) {
            const timer = setTimeout(() => {
                setCurrentTextIndex(prev => prev + 1);
            }, 1000);
            
            return () => clearTimeout(timer);
        }
    }, [currentTextIndex, texts.length]);

    return (
        <AboutWrapper>
            {/* 上半部分：文字和Profile Card */}
            <HeroContent>
                <HeroText className="hero-text">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: currentTextIndex >= 1 ? 1 : 0, y: currentTextIndex >= 1 ? 0 : 30 }}
                        transition={{ duration: 0.8 }}
                    >
                        {texts[0]}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: currentTextIndex >= 2 ? 1 : 0, y: currentTextIndex >= 2 ? 0 : 30 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {texts[1]}
                    </motion.p>

                    <br />

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: currentTextIndex >= 3 ? 1 : 0, y: currentTextIndex >= 3 ? 0 : 30 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {texts[2]}
                    </motion.p>
                </HeroText>
                
                <AvatarWrapper
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <AvatarCard onExploreClick={onExploreClick}/>
                </AvatarWrapper>
            </HeroContent>
            
            {/* 下半部分：时间轴 */}
            <TimelineSection>
                <SimpleTimeline />
            </TimelineSection>
        </AboutWrapper>
    );
}
