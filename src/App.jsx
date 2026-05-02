import React, { useRef, useState }  from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import Blog from './components/Blog';
import MarkdownBlog from "./components/MarkdownBlog";
import Home from './Home';
import Navbar from './components/Navbar';
import MatrixCursor from './components/MatrixCursor';
import PortfolioAssistant from './components/PortfolioAssistant';

function AppContent() {
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const techRef = useRef(null);
    const [assistantOpen, setAssistantOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const mainContentRef = useRef(null);

    const handleLogoClick = () => {
        if (location.pathname === "/") {

            mainContentRef.current?.scrollIntoView({ behavior: "smooth" });
        } else {
            console.log('navigate to /');
            navigate("/", { state: { scrollToMain: true } });
        }
    };

    const scrollToAbout = () => aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    const scrollToProjects = () => projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    const scrollToTech = () => techRef.current?.scrollIntoView({ behavior: "smooth" });
    const openPortfolioAssistant = () => setAssistantOpen(true);
    return (
        <>
            <MatrixCursor />
            <Navbar
                onLogoClick={handleLogoClick}
                onAboutClick={scrollToAbout}
                onProjectClick={scrollToProjects}
                onTechClick={scrollToTech}
                onBlogClick={() => navigate('/blog')}
                onChatClick={openPortfolioAssistant}
            />
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                    <Home
                        aboutRef={aboutRef}
                        projectsRef={projectsRef}
                        techRef={techRef}
                        mainContentRef={mainContentRef}
                    />
                } />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<MarkdownBlog />} />
            </Routes>
            <PortfolioAssistant
                isOpen={assistantOpen}
                onToggle={() => setAssistantOpen((open) => !open)}
            />
        </>
    );
}
export default function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}
