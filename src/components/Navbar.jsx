import React from "react";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-grid">
                    <li  className="navbar-logo">MyPortfolio</li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#stack">Tech Stack</a></li>
            </ul>

        </nav>
    );
}