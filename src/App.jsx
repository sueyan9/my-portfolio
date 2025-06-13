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


    const scrollToAbout = () => {
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToProjects = () => {
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToTech = () => {
        techRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const goToBlog = () => {
        window.location.href = "/blog";
    };
    const openCrispChat = () => {
        if (window.$crisp) {
            window.$crisp.push(["do", "chat:open"]);
        }
        // 如果你还想滚动到 contact 区域，可以加上：
        // contactRef.current?.scrollIntoView({ behavior: "smooth" });
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
                onChatClick={openCrispChat}
                />
            <div className="main-content">
            {/* 顶部 About Me */}
            <section className="section-block" ref={aboutRef}>
                <div className="container">
                <AboutMe />
                </div>
            </section>

            {/*  技术栈 */}
            <section className="section-block tech-stack-bg" ref={techRef}>
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

        </div>
        </div>
    );
}

