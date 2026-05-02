import React, { useEffect, useState } from "react";
import {
    motion ,
    useScroll,
    useTransform
} from "framer-motion";
import "./Navbar.css";

export default function Navbar({
                                   onLogoClick,
                                   onAboutClick,
                                   onProjectClick,
                                   onTechClick,
                                   onBlogClick,
                                   onChatClick
                               }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== "undefined" ? window.innerWidth <= 700 : false
    );

    // framer-motion hooks
    const { scrollY } = useScroll();
    const background = useTransform(
        scrollY,
        [0, 100],
        ["rgba(255,255,255,0)", "rgba(255,255,255,0.8)"] // 你可以自定义颜色
    );
    const height = useTransform(scrollY, [0, 100], [72, 38]);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 700);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // 关闭菜单后再跳转
    const handleNavClick = (fn) => {
        setMenuOpen(false);
        if (fn && typeof fn === "function") {
            console.log('Calling nav handler:', fn.name || 'anonymous');
            fn();
        } else {
            console.warn('handleNavClick got invalid fn:', fn);
        }
    };

    return (
        <motion.nav
            className="navbar"
            style={{
                background: isMobile ? "rgba(255,255,255,0.96)" : background,
                height: isMobile ? 58 : height,
                backdropFilter: "blur(8px)",   // 模糊玻璃感
                WebkitBackdropFilter: "blur(8px)", // Safari 兼容
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)"
            }}
        >
            <div className="navbar-grid">
                <span className="navbar-logo" onClick={() => {console.log('logo clicked'); handleNavClick(onLogoClick)}}>Sue Yan</span>
                <div className="navbar-links desktop-nav">
                    <button className="nav-text-link" onClick={() => handleNavClick(onAboutClick)}>About</button>
                    <button className="nav-text-link" onClick={() => handleNavClick(onProjectClick)}>Projects</button>
                    <button className="nav-text-link" onClick={() => handleNavClick(onTechClick)}>Tech Stack</button>
                    <button className="nav-text-link" onClick={() => handleNavClick(onBlogClick)}>Blog</button>
                </div>
                <div className="navbar-cta desktop-nav">
                    <button className="nav-btn-link chat-btn" onClick={() => handleNavClick(onChatClick)}>Ask My AI</button>
                </div>
                {/* 汉堡按钮 */}
                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Open navigation"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
            {/* 移动端弹出菜单 */}
            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={() => setMenuOpen(false)}>&times;</button>
                <button className="nav-btn-link" onClick={() => handleNavClick(onAboutClick)}>About</button>
                <button className="nav-btn-link" onClick={() => handleNavClick(onProjectClick)}>Projects</button>
                <button className="nav-btn-link" onClick={() => handleNavClick(onTechClick)}>Tech Stack</button>
                <button className="nav-btn-link" onClick={() => handleNavClick(onBlogClick)}>Blog</button>
                <button className="nav-btn-link chat-btn" onClick={() => handleNavClick(onChatClick)}>
                    Ask My AI
                </button>
            </div>
            {/* 遮罩层 */}
            {menuOpen && <div className="menu-backdrop" onClick={() => setMenuOpen(false)}></div>}
        </motion.nav>
    );
}
