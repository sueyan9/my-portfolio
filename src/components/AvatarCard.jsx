import React from "react";
import "./AvatarCard.css";
import avatar from "../assets/avatar.png";

export default function AvatarCard({ onExploreClick }) {
    return (
        <div className="parent">
            <div className="card">
                <div className="logo">
                    <span className="circle circle1"></span>
                    <span className="circle circle2"></span>
                    <span className="circle circle3"></span>
                    <span className="circle circle4"></span>
                    <span className="circle circle5">
                    <img src={avatar} alt="avatar" className="avatar-img" />
                    </span>
                </div>
                <div className="glass"></div>
                <div className="content">
                    <span className="title">Sue Yan</span>
                    <span className="text"
                    >Full Stack Developer | 3D UI Enthusiast</span
                    >
                </div>
                <div className="bottom">
                    <div className="social-buttons-container">
                        <button className="social-button social-button1"
                                onClick={() => window.open("https://www.linkedin.com/in/sue-yan-b74a72274/", "_blank")}>
                            <svg
                                viewBox="0 0 24 20"
                                xmlns="http://www.w3.org/2000/svg"
                                className="svg"
                            >
                                <path
                                    d="M 20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
                                ></path>
                            </svg>
                        </button>
                        <button className="social-button social-button2"
                                onClick={() => window.open("https://github.com/sueyan9", "_blank")}>
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="svg"
                                fill="currentColor"
                            >
                                <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303
                                          3.438 9.8 8.205 11.387.6.113.82-.258.82-.577
                                          0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61
                                          -.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729
                                          1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.495.998
                                          .108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.335-5.467-5.93
                                          0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176
                                          0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3-.405
                                          11.52 11.52 0 0 1 3 .405c2.28-1.552 3.285-1.23 3.285-1.23
                                          .645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22
                                          0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22
                                          0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57
                                          C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
                            </svg>

                        </button>
                        <button className="social-button social-button3"
                                onClick={() => window.open("https://discord.gg/Q7VECRW4", "_blank")}>
                            <svg
                                viewBox="0 0 640 512"
                                xmlns="http://www.w3.org/2000/svg"
                                className="svg"
                            >
                                <path
                                    d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className="view-more">
                        <button className="view-more-button"
                                onClick={onExploreClick}
                            >
                            Explore</button>
                        <svg
                            className="svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m6 9 6 6 6-6"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

    );
}
