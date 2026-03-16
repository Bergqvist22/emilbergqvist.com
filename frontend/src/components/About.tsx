import { motion } from "framer-motion";
import "./About.css";

const skills = [
  "React", "JavaScript", "LLM", "Git"
];

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
              Hi! My name is Emil and I am currently doing my MSc in IT and Management with a bachelor of Science in Cognitive Science.
              I am passionate about AI and ML and like to do my own projects at my free time. When I am not doing that,
              I am hanging out with friends, running or watching Sports!
            </p>
            <div className="tech-container">
              <p className="tech-title">Some of the most common technologies I work with.</p>
              <div className="tech-list">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="tech-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
