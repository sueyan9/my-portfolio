import React, { useRef } from "react";
import Navbar from "./components/Navbar.jsx";
import AboutMe from "./components/AboutMe";
import ProjectCarousel from "./components/ProjectCarousel";
import TechStack from "./components/TechStack";
import './App.css';

export default function App() {
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const techRef = useRef(null);

    const scrollToAbout = () => {
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToProjects = () => {
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToTech = () => {
        techRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            {/* Nav Bar*/}
            <Navbar
                onAboutClick={scrollToAbout}
                onProjectClick={scrollToProjects}
                onTechClick={scrollToTech}
            />
            {/* 顶部 About Me */}
            <section className="section-block" ref={aboutRef}>
                <div className="container">
                <AboutMe />
                </div>
            </section>

            {/* 中间 Project 墙，背景色全屏 */}
            <section className="section-block project-wall-bg"ref={projectsRef}>
                <div className="container">
                    <ProjectCarousel />
                </div>
            </section>

            {/* 底部 技术栈 */}
            <section className="section-block" ref={techRef}>
                <div className="container">
                <TechStack />
                </div>
            </section>
        </div>
    );
}

