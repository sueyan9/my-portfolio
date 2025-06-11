import React, { useRef } from "react";
import Navbar from "./components/Navbar.jsx";
import AboutMe from "./components/AboutMe";
import ProjectCarousel from "./components/ProjectCarousel";
import TechStack from "./components/TechStack";
import './App.css';

export default function App() {
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const techRef = useRef(null);

    return (
        <div>
            {/* Nav Bar*/}
            <Navbar
                onAboutClick={() => aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })}
                onProjectClick={() => projectRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })}
                onTechClick={() => techRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })}
            />
            {/* 顶部 About Me */}
            <section className="section-block">
                <div className="container">
                <AboutMe />
                </div>
            </section>

            {/* 中间 Project 墙，背景色全屏 */}
            <section className="section-block project-wall-bg">
                <div className="container">
                    <ProjectCarousel />
                </div>
            </section>

            {/* 底部 技术栈 */}
            <section className="section-block">
                <div className="container">
                <TechStack />
                </div>
            </section>
        </div>
    );
}

