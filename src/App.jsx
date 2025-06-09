import React from "react";
import AboutMe from "./components/AboutMe";
import ProjectCarousel from "./components/ProjectCarousel";
import TechStack from "./components/TechStack";
import './App.css';

 function App() {
    return (
        <div>
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

export default App;