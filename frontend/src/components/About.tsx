import { motion } from "framer-motion";
import "./About.css";


const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="about-label">
              About
            </p>
            <h2 className="about-heading">
              A bit about<br /><span className="text-gradient">myself</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-content-wrapper"
          >
            <p className="about-text">
              Hi! I'm Emil. I'm currently doing my MSc in IT and Management,
              building on a BSc in Cognitive Science.
              I’m passionate about AI and ML and love working on personal projects in my free time.
              When I’m not doing that, I’m usually hanging out with friends, running, or watching sports!
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
