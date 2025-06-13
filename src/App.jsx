import React, { useRef , useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import AboutMe from "./components/AboutMe";
import ProjectCarousel from "./components/ProjectCarousel";
import TechStack from "./components/TechStack";
import './App.css';

export default function App() {
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const techRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToAbout = () => {
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToProjects = () => {
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToTech = () => {
        techRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const goToBlog = () => {
        window.location.href = "/blog";
    };
    useEffect(() => {
        function setMainContentPadding() {
            const navbar = document.querySelector('.navbar');
            const mainContent = document.querySelector('.main-content');
            if (navbar && mainContent) {
                mainContent.style.paddingTop = navbar.offsetHeight + 'px';
            }
        }
        setMainContentPadding();
        window.addEventListener('resize', setMainContentPadding);
        return () => window.removeEventListener('resize', setMainContentPadding);
    }, []);

    return (
        <div>
            {/* Nav Bar*/}
            <Navbar
                onLogoClick={scrollToTop}
                onAboutClick={scrollToAbout}
                onProjectClick={scrollToProjects}
                onTechClick={scrollToTech}
                onBlogClick={goToBlog}
                onChatClick={scrollToContact}
                />
            <div className="main-content">
            {/* 顶部 About Me */}
            <section className="section-block" ref={aboutRef}>
                <div className="container">
                <AboutMe />
                </div>
            </section>

            {/*  技术栈 */}
            <section className="section-block" ref={techRef}>
                <div className="container">
                <TechStack />
                </div>
            </section>

                {/*  Project 墙，背景色全屏 */}
                <section className="section-block project-wall-bg"ref={projectsRef}>
                    <div className="container">
                        <ProjectCarousel />
                    </div>
                </section>

            {/* 联系方式区域 */}
            <section className="section-block" ref={contactRef}>
                <div className="container">
                    {/* 你的联系方式内容 */}
                    Contact Me!
                </div>
            </section>
        </div>
        </div>
    );
}

