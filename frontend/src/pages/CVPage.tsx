import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import "./CVPage.css";

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
                    Mitt CV
                </motion.h1>

                <motion.div
                    className="cv-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {/* Placeholder image until user uploads actual CV */}
                    <img
                        src="/lovable-uploads/27110189-9b93-41bb-b855-6679543e395e.png"
                        alt="Mitt CV"
                        className="cv-image"
                    />
                </motion.div>
            </div>
        </main>
    );
};

export default CVPage;
