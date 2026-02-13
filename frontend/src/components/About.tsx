import { motion } from "framer-motion";
import "./About.css";

const skills = [
  "React", "TypeScript", "Node.js", "Tailwind CSS",
  "PostgreSQL", "Git", "REST APIs", "GraphQL",
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
              I'm a developer passionate about creating beautiful, functional web applications.
              With a strong foundation in modern web technologies, I focus on writing clean,
              maintainable code that delivers exceptional user experiences.
            </p>
            <p className="about-text-secondary">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>

            <div className="tech-container">
              <p className="tech-title">Technologies I work with</p>
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
