import React from "react";
import "./ProjectCarousel.css";
import ProjectCard from "./ProjectCard";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.mov";
import project3 from "../assets/priceHound.jpg";
import project4 from "../assets/project3DProject.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";


const projects = [
    {
        title: "Rongokit Clinic Management System",
        desc: `Overview:

Rongokit Clinic Management System is a clinic operations platform designed to simplify everyday healthcare workflows. It brings patient information, appointment coordination, and internal clinic management into one streamlined system for staff and practitioners.

Key Features:
• Patient profile and record management
• Appointment scheduling and visit coordination
• Clinic dashboard for staff workflow visibility
• Treatment and consultation tracking
• Responsive interface for smoother day-to-day operations

Tech Stack:
Full-stack web application`,
        image: project7,
    },
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
        link: " https://tooth-mate-app-2025.vercel.app/",
    },
    {
        title: "🦷ToothMate Mobile App",
        desc: "Overview:\n" +
            "\n" +
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
            "\n" +
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
    {
        title: "SPEED — SERC Public Evidence Extraction Database",
        desc: "Overview:\n" +
            "A full-stack web application for collecting, storing, and presenting structured public evidence data, built with the MNNN stack (MongoDB, NestJS, Next.js, Node.js). It supports secure user authentication, article submission, and moderation workflows.\n\n" +
            "Key Features:\n" +
            "- Data Management: MongoDB database for storing and indexing structured article data for fast querying\n" +
            "- Authentication & Moderation: Secure login system with admin moderation logic implemented in NestJS\n" +
            "- Interactive Frontend: Responsive user interface for article submission and browsing using Next.js\n" +
            "- API Integration: RESTful and GraphQL endpoints for smooth client-server communication\n" +
            "- Deployment: Frontend deployed on Vercel, backend on Node.js hosting with CI/CD\n" +
            "- Team Collaboration: Four-member development team using GitHub for version control and issue tracking\n\n" +
            "Tech Stack:\n" +
            "Frontend: Next.js, CSS\n" +
            "Backend: NestJS, Node.js, TypeScript\n" +
            "Database: MongoDB\n" +
            "Deployment: Vercel (frontend), Node.js hosting (backend)",
        image: project5,
        link: "https://github.com/sueyan9/SPEED"
    },
    {
        title: "Parametric Design & Fabrication",
        desc: "Overview:\n" +
            "This project showcases the full workflow from digital design in Rhino to physical fabrication via 3D printing and laser cutting. The aim was to create a functional and aesthetically pleasing model by combining parametric modeling techniques with modern fabrication methods.\n" +
            "\n" +
            "Key Features:\n" +
            "\n" +
            "\t•\t📐 Rhino 3D Modeling: Designed complex geometric forms using Rhino and Grasshopper for parametric control\n" +
            "\t•\t⚙️ Parametric Workflow: Easily modify design dimensions and proportions for rapid iteration\n" +
            "\t•\t🖨️ 3D Printing: Fabricated prototypes using PLA and resin-based 3D printers for structural and visual testing\n" +
            "\t•\t🔦 Laser Cutting: Produced precision-cut acrylic and plywood components using vector-based cutting paths\n" +
            "\t•\t🎨 Material Experimentation: Tested various materials to achieve desired strength, texture, and transparency effects\n" +
            "\t•\t📏 Assembly & Finishing: Post-processed and assembled components for presentation\n" +
            "\t•\t🏫 Educational Application: Demonstrates end-to-end design-to-fabrication pipeline for teaching purposes",
        image:  project4,

    },
    {
        title: "All-In-One (ERP + CRM + E-commerce) Platform (Internship Project)",
        desc: "Overview:\n" +
            "\n"+
            "During my internship at Matricle Solutions, I contributed to a full-stack ERP, CRM, and E-commerce platform. My focus was on front-end development, building interactive e-commerce pages, performing testing, and implementing simple backend logic to support the system.\n\n" +
            "Key Features:\n" +
            "\t• Frontend Development: Built responsive e-commerce pages and UI components using React, Thymeleaf, Bootstrap, Material-UI, and TypeScript.\n" +
            "\t• Backend Support: Implemented basic RESTful APIs and CRUD operations using Java (Spring Boot), C#, and Node.js.\n" +
            "\t• Testing & QA: Wrote unit tests with JUnit and conducted full-cycle manual testing to ensure functionality and stability.\n" +
            "\t• Purchase Order Module: Developed a core ERP module for creating, submitting, and managing purchase orders, improving efficiency and reducing errors.\n" +
            "\t• Agile Collaboration: Participated in sprint cycles, iterative feature enhancements, and cross-functional team collaboration.\n\n" +
            "Achievements:\n" +
            "\t• Reduced manual input errors by 40% through the Purchase Order module.\n" +
            "\t• Achieved over 85% unit test coverage, leading to more stable releases.\n" +
            "\t• Contributed to multiple feature releases within tight deadlines, receiving positive feedback from stakeholders.\n\n" +
            "Tech Stack: React · Thymeleaf · Bootstrap · Material-UI · Java (Spring Boot) · C# · Node.js · MySQL · PostgreSQL · MongoDB",
        image: project6,
        link: "https://www.matricle.com/"
    }
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
