import React, { useState } from "react";
import styled from "styled-components";
import palaceImg from "../assets/aboutme.jpg"
import { motion , AnimatePresence} from "framer-motion";
import "./AboutMe.css";

const AboutWrapper = styled.section`
  background: #f3e6e8;
  padding: 2rem;
  text-align: center;
    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

// Small Thumbnail
const MotionImage = styled(motion.div)`
    width: 300px;
    height: 300px;
    border-radius: 20px;
    background-image: url(${palaceImg});
    background-size: cover;
    background-position: center;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    cursor: pointer;
`;

// Fullscreen Overlay
const FullscreenOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

// Full Image
const FullImage = styled(motion.div)`
  width: 90%;
  max-width: 800px;
  height: 80%;
  border-radius: 20px;
  background-image: url(${palaceImg});
  background-size: cover;
  background-position: center;
`;

export default function AboutMe() {
    const [isOpen, setIsOpen] = useState(false);
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
                    <MotionImage
                        layoutId="hero-image"
                        onClick={() => setIsOpen(true)}
                        whileHover={{
                            rotateY: 15,
                            rotateX: -10,
                            scale: 1.05,
                            transition: { type: "spring", stiffness: 300 },
                        }}
                        whileTap={{ rotateY: 0, rotateX: 0, scale: 0.98 }}
                    />
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <FullscreenOverlay
                        onClick={() => setIsOpen(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FullImage layoutId="hero-image" />
                    </FullscreenOverlay>
                )}
            </AnimatePresence>
        </section>
    );
}
