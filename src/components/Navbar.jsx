import React, { useState } from "react";
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

    // 关闭菜单后再跳转
    const handleNavClick = (fn) => {
        setMenuOpen(false);
        fn && fn();
    };

    return (
        <nav className="navbar">
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
                <button className="nav-btn-link chat-btn" onClick={() => handleNavClick(onChatClick)}>Let’s Chat! 👋</button>
            </div>
            {/* 遮罩层 */}
            {menuOpen && <div className="menu-backdrop" onClick={() => setMenuOpen(false)}></div>}
        </nav>
    );
}