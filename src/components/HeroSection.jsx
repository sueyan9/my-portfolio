import React from "react";
import heroImg from "../assets/hero.jpg";
import "./HeroSection.css";

export default function HeroSection() {
    return (
        <div className="hero-section">
            <img src={heroImg} alt="Landing" className="hero-bg" />
            {/* 半透明遮罩 */}
            <div className="hero-overlay"></div>
            {/* SVG 勾勒线条（可选） */}
            <svg
                className="hero-svg"
                width="100%"
                height="200"
                viewBox="0 0 1000 200"
                style={{
                    position: 'absolute',
                    left: 0,
                    top: '40%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    pointerEvents: 'none'
                }}
            >
                <path
                    id="mountain-path"
                    d="M 50 120 Q 200 80 350 100 Q 500 20 700 80 Q 900 60 950 2"
                    stroke="#fff"
                    strokeWidth="6"
                    fill="none"
                />
                <text fontSize="40" fill="#fff" fontWeight="bold">
                    <textPath href="#mountain-path" startOffset="0%">
                        Climb higher, see farther.
                    </textPath>
                </text>
                {/* 右侧文字 */}
                <text fontSize="40" fill="#fff" fontWeight="bold" textAnchor="end">
                    <textPath href="#mountain-path" startOffset="100%">
                        Every step counts.
                    </textPath>
                </text>
            </svg>
        </div>
    );
}