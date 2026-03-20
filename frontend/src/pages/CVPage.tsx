import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import "./CVPage.css";

const cvPages = [
    "/Emil Bergqvist - CV-4_page-0001.jpg",
    "/Emil Bergqvist - CV-4_page-0002.jpg",
];

const contactLinks = [
    {
        href: "mailto:emil.bergqvist7@hotmail.com",
        label: "Email",
        icon: "✉️",
        text: "emil.bergqvist7@hotmail.com",
    },
    {
        href: "https://www.linkedin.com/in/emil-bergqvist-6b6b61195/",
        label: "LinkedIn",
        icon: "💼",
        text: "LinkedIn",
    },
    {
        href: "https://github.com/bergqvist22",
        label: "GitHub",
        icon: "💻",
        text: "GitHub",
    },
];

const CVPage = () => {
    return (
        <main className="cv-page">
            <Navbar />
            <div className="cv-page-content">
                <motion.h1
                    className="cv-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    My CV
                </motion.h1>

                <div className="cv-layout">
                    <div className="cv-images-wrapper">
                        {cvPages.map((src, index) => (
                            <motion.div
                                key={src}
                                className="cv-container"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                            >
                                <img
                                    src={src}
                                    alt={`CV page ${index + 1}`}
                                    className="cv-image"
                                />
                            </motion.div>
                        ))}
                    </div>

                    <motion.aside
                        className="cv-sidebar"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="cv-sidebar-card">
                            <h2 className="cv-sidebar-heading">Contact & Links</h2>
                            <div className="cv-sidebar-links">
                                {contactLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cv-sidebar-link"
                                    >
                                        <span className="cv-link-icon">{link.icon}</span>
                                        <span className="cv-link-text">{link.text}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.aside>
                </div>
            </div>
        </main>
    );
};

export default CVPage;
