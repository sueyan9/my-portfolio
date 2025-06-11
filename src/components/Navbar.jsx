import React from "react";
import "./Navbar.css";

export default function Navbar({ onAboutClick, onProjectClick, onTechClick }) {
    return (
        <nav className="navbar">
            <ul className="navbar-grid">
                    <li  className="navbar-logo">MyPortfolio</li>
                    <li> <button
                        className="nav-btn-link"
                        onClick={e => {
                            e.preventDefault();
                            onAboutClick && onAboutClick();
                        }}
                    >
                        About
                    </button>
                    </li>
                    <li><button
                        className="nav-btn-link"
                        onClick={e => {
                            e.preventDefault();
                            onProjectClick && onProjectClick();
                        }}
                    >
                        Projects
                    </button>
                    </li>
                    <li><button
                        className="nav-btn-link"
                        onClick={e => {
                            e.preventDefault();
                            onTechClick && onTechClick();
                        }}
                    >
                        Tech Stack
                    </button>
                    </li>
            </ul>

        </nav>
    );
}