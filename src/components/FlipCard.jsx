import React, { useState } from "react";
import "./FlipCard.css";

const FlipCard = () => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="flip-card-container">
            <div
                className={`flip-card ${flipped ? "is-flipped" : ""}`}
                onClick={() => setFlipped(v => !v)}
                onKeyDown={(e) => e.key === "Enter" && setFlipped(v => !v)}
                role="button"
                tabIndex={0}
                aria-label="Flip to view SPCA volunteering details"
            >
                <div className="flip-card-inner">
                    <div className="flip-card-face flip-card-front">
                        <div className="flip-card-content">
                            <h3>🥾 徒步 Hiking</h3>
                            <ul>
                                <li>完成多条新西兰步道（如 Tongariro、Abel Tasman）</li>
                                <li>擅长路线规划、风险评估和复盘</li>
                                <li>热爱自然，享受挑战与专注</li>
                            </ul>
                            <span className="flip-card-hint">Tap / Hover</span>
                        </div>
                    </div>

                    <div className="flip-card-face flip-card-back">
                        <div className="flip-card-content">
                            <h3>🐾 爱动物 · SPCA 义工</h3>
                            <ul>
                                <li>参与动物照护与前台支持</li>
                                <li>提升同理心、耐心与沟通协作</li>
                                <li>把责任感带到工程实践</li>
                            </ul>
                            <span className="flip-card-hint">Tap / Hover</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;