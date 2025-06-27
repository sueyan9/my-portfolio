import React from "react";
import "./ProjectCarousel.css";
import ProjectCard from "./ProjectCard";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.MP4";
import project3 from "../assets/priceHound.jpg";

const projects = [
    {
        title: "3D Dental Chart",
        desc: `Overview:
This is a React-based 3D dental chart application that provides an interactive, educational, and engaging way to explore human teeth anatomy. Built for web platforms, the application allows users to rotate, zoom, and drag the full set of teeth in a 3D view, offering a modern solution for dental education, patient communication, and treatment planning.

Key Features:
• 🧠 Interactive 3D Visualization: Users can freely rotate and zoom the dental model to explore different angles and perspectives.
• 🦷 Tooth-Specific Info Display: Clicking on a single tooth reveals detailed information (e.g., name, ID, treatment record placeholder).
• 🖱️ Drag & Pan Support: Smooth drag-to-rotate and pinch-to-zoom interactions using Three.js and React Three Fiber.
• 🎓 Educational Use: Ideal for dental students, educators, or apps requiring anatomical visualization.

Tech Stack:
React · React Three Fiber · Three.js · JavaScript · HTML/CSS`,
        image: project1,
        link: "https://github.com/sueyan9/tooth-static.git",
    },
    {
        title: "ToothMate Mobile App",
        desc: "🦷 ToothMate Mobile App\n" +
            "\n" +
            "Overview:\n" +
            "ToothMate is a personalized dental care and education mobile app designed to enhance dental awareness and streamline treatment management. Tailored for patients and parents, the app provides interactive 3D dental charts, custom treatment plans, and engaging educational content—all accessible from your phone.\n" +
            "\n" +
            "Key Features:\n" +
            "\t•\t🦷 3D Dental Chart: Interactive, age-based 3D tooth models with click-to-view treatment history\n" +
            "\t•\t📋 Treatment Records: Add and view treatment history independently or through appointments\n" +
            "\t•\t🎓 Personalized Dental Education: Interactive modules with animations, quizzes, and flashcards\n" +
            "\t•\t📅 Appointment Management: View completed appointments and associated treatment details\n" +
            "\t•\t🧒 Child-Friendly Mode: Tailored views for younger users with simplified interaction\n" +
            "\t•\t🌐 Cross-Platform Ready: Built with React Native for both Android and iOS compatibility\n" +
            "\t•\t🔒 Authentication & Profiles: User login, role-based access, and secure treatment data\n" +
            "\n" +
            "Tech Stack:\n" +
            "React Native · Node.js · Express · MongoDB · Three.js · Firebase · Expo\n",
        video: project2,
        link: "https://github.com/sueyan9/ToothMate_App_2025",
    },
    {
        title: "Price Hound",
        desc: "Overview:\n" +
            "PriceHound is a smart price comparison web application tailored for users in New Zealand and Australia. It allows users to search for products and instantly compare prices across multiple online retailers—helping them find the best deals effortlessly.\n" +
            "\n" +
            "Key Features:\n" +
            "\t•\t🔍 Product Search: Search for items by keywords with preset or custom price filters\n" +
            "\t•\t💰 Real-Time Price Comparison: Instantly compare prices from different e-commerce sites\n" +
            "\t•\t🌐 Currency Selection: Convert prices into your preferred currency with live exchange rates\n" +
            "\t•\t⭐ User Reviews & Ratings\n" +
            "\t•\t📝 Wishlist Functionality\n" +
            "\t•\t📱 Responsive Design: Seamless experience across desktop and mobile\n" +
            "\t•\t🔐 Firebase Authentication: Sign in via Google, email/password, or passwordless login\n" +
            "\t•\t👤 Account Management: Update profile picture, email, password, or delete account\n" +
            "\t•\t📬 Contact Form: Submit queries stored in Firestore and sent via MailJet email\n" +
            "\t•\t🚫 Ad Detection: Integrated ad system with ad blocker detection to minimize revenue loss",
        image: project3,
        link: "https://github.com/thomasbrears/SDP_PriceHound.git",
    },
];

export default function ProjectCarousel() {
    return (
        <div className="project-card-grid-wrapper">
            <div className="project-card-grid">
                {projects.map((proj, idx) => (
                    <ProjectCard
                        key={idx}
                        image={proj.image}
                        video={proj.video}
                        title={proj.title}
                        desc={proj.desc}
                        link={proj.link}
                    />
                ))}
            </div>
        </div>
    );
}