import React, { useEffect, useState } from "react";
import { useParams , Link} from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import Navbar from "./Navbar";
import "./Blog.css";

export default function MarkdownBlog( ) {

    const { slug } = useParams();
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch(`/blogs/${slug}.md`)
            .then((res) => res.text())
            .then((text) => setMarkdown(text))
            .catch(() => setMarkdown('# Not Found 😢'));
    }, [slug]);


    return (
        <>

            <div className="markdown-blog-container">
                <div className="markdown-content">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {markdown}
                    </ReactMarkdown>
                </div>
                <Link to="/blog" className="back-button">← Back to Blog</Link>
            </div>

        </>
    );
}
