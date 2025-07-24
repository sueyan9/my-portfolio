import React from 'react';
import { Link } from "react-router-dom";
import { blogPosts } from "./blogData";
import "./Blog.css";

export default function Blog() {
    return (
        <div>
            <div className="blog-container">
                {blogPosts.map((post) => (
                    <div key={post.id} className="blog-card">
                        <img src={post.coverImage} alt={post.title} className="blog-image" />
                        <div className="blog-content">
                            <p className="blog-date">{post.date}</p>
                            <h2 className="blog-title">{post.title}</h2>
                            <p className="blog-author">by <strong>{post.author}</strong></p>
                            <p className="blog-snippet">{post.snippet}</p>
                            <Link to={`/blog/${post.id}`} className="read-more">
                                → Read Article
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}