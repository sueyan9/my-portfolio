import React,{ useEffect, useRef } from "react";
import HeroSection from './components/HeroSection';
import AboutMe from "./components/AboutMe";
import ProjectCarousel from "./components/ProjectCarousel";
import TechStack from "./components/TechStack";
import './App.css';
import { useLocation } from "react-router-dom";

export default function Home({ aboutRef, projectsRef, techRef , mainContentRef }) {

    const location = useLocation();
    // const scrollToAbout = () => {
    //     aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    // };
    // const scrollToProjects = () => {
    //     projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    // };
    // const scrollToTech = () => {
    //     techRef.current?.scrollIntoView({ behavior: "smooth" });
    // };
    //
    // const scrollToTop = () => {
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    // };
    // const navigate = useNavigate();
    // const goToBlog = () => {
    //     navigate('/blog');
    // };
    // const openCrispChat = () => {
    //     if (window.$crisp) {
    //         window.$crisp.push(["do", "chat:open"]);
    //     }
    //     // 如果你还想滚动到 contact 区域，可以加上：
    //     // contactRef.current?.scrollIntoView({ behavior: "smooth" });
    // };
    // useEffect(() => {
    //     function setMainContentPadding() {
    //         const navbar = document.querySelector('.navbar');
    //         const mainContent = document.querySelector('.main-content');
    //         if (navbar && mainContent) {
    //             mainContent.style.paddingTop = navbar.offsetHeight + 'px';
    //         }
    //     }
    //     setMainContentPadding();
    //     window.addEventListener('resize', setMainContentPadding);
    //     return () => window.removeEventListener('resize', setMainContentPadding);
    // }, []);
    useEffect(() => {
        if (location.state?.scrollToMain && mainContentRef?.current) {
            mainContentRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location, mainContentRef]);
    return (
        <div ref={mainContentRef} id="top">
            <HeroSection />

            {/* matrix background */}
            <div className="matrix-container">
                <div className="matrix-pattern">
                    <div className="matrix-column"></div>
                    <div className ="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className ="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                </div>
                <div className="matrix-pattern">
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                </div>
                <div className="matrix-pattern">
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                </div>
                <div className="matrix-pattern">
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                </div>
                <div className="matrix-pattern">
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                    <div className="matrix-column"></div>
                </div>
            </div>

            <div className="main-content" >
                {/* 顶部 About Me */}
                <section className="section-block" ref={aboutRef} id="about">
                    <div className="container">
                        <AboutMe
                            onExploreClick={() =>
                                projectsRef.current?.scrollIntoView({ behavior: "smooth" })
                            }
                        />
                    </div>
                </section>

                {/*  技术栈 */}
                <section className="section-block tech-stack-bg" ref={techRef} id="tech-stack">
                    <div className="container">
                        <TechStack />
                    </div>
                </section>

                {/*  Project 墙，背景色全屏 */}
                <section className="section-block project-wall-bg" ref={projectsRef} id="projects">
                    <div className="container">
                        <ProjectCarousel />
                    </div>
                </section>

            </div>
        </div>
    );
}
