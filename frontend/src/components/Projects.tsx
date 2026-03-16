import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import "./Projects.css";
import projectsData from "../data/projects.json";

const GITHUB_URL = "https://github.com/Bergqvist22";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="projects-header"
        >
          <p className="projects-label">Projects</p>
          <h2 className="projects-heading">
            Selected <span className="text-gradient">projects</span>
          </h2>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="projects-github-link"
          >
            <Github size={16} />
            <span>github.com/emilbergqvist22</span>
            <ArrowUpRight size={14} className="projects-github-arrow" />
          </a>
        </motion.div>

        <div className="projects-list">
          {projectsData.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="project-item group"
            >
              <div className="project-content">
                <div className="project-info">
                  <div className="project-title-row">
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                  <p className="project-description">{project.description}</p>
                </div>

                <div className="project-meta">
                  <span className="project-year">{project.year}</span>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
