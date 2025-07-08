import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';
import MarkdownBlog from "./components/MarkdownBlog";
import Home from './Home';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<MarkdownBlog />} />
            </Routes>
        </Router>
    );
}