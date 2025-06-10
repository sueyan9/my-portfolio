import React from "react";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">MyPortfolio</div>
                <ul className="navbar-menu">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#stack">Tech Stack</a></li>
                </ul>
            </div>
        </nav>
    );
}