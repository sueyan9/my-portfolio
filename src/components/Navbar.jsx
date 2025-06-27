import React, { useState } from "react";
import { motion, useScroll , useTransform } from "framer-motion";
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

    // framer-motion hooks
    const { scrollY } = useScroll();
    const background = useTransform(
        scrollY,
        [0, 100],
        ["rgba(255,255,255,0)", "rgba(255,255,255,0.95)"] // 你可以自定义颜色
    );
    const height = useTransform(scrollY, [0, 100], [120, 60]);

    // 关闭菜单后再跳转
    const handleNavClick = (fn) => {
        setMenuOpen(false);
        fn && fn();
    };

    return (
        <motion.nav
            className="navbar"
            style={{
                background,
                height,
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)" // 可选：滚动时加阴影
            }}
        >
            <div className="navbar-grid">
                <span className="navbar-logo" onClick={() => handleNavClick(onLogoClick)}>Sue Yan</span>
                <div className="navbar-links desktop-nav">
                    <button className="nav-btn-link" onClick={() => handleNavClick(onAboutClick)}>About</button>
                    <button className="nav-btn-link" onClick={() => handleNavClick(onProjectClick)}>Projects</button>
                    <button className="nav-btn-link" onClick={() => handleNavClick(onTechClick)}>Tech Stack</button>
                    <button className="nav-btn-link" onClick={() => handleNavClick(onBlogClick)}>Blog</button>
                    <button className="nav-btn-link chat-btn" onClick={() => handleNavClick(onChatClick)}>Let’s Chat! 👋</button>
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
                <button className="nav-btn-link chat-btn" onClick={() => {
                    setMenuOpen(false);
                    if (window.$crisp) {
                        window.$crisp.push(["do", "chat:open"]);
                    }
                }}
                >
                    Let’s Chat! 👋</button>
            </div>
            {/* 遮罩层 */}
            {menuOpen && <div className="menu-backdrop" onClick={() => setMenuOpen(false)}></div>}
        </motion.nav>
    );
}