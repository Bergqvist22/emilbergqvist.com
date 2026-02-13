import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with real-time inventory management and seamless checkout experience.",
    tags: ["React", "Node.js", "PostgreSQL"],
    year: "2025",
  },
  {
    title: "Task Management App",
    description: "A collaborative project management tool with drag-and-drop boards, real-time updates, and team workflows.",
    tags: ["TypeScript", "React", "WebSocket"],
    year: "2024",
  },
  {
    title: "Analytics Dashboard",
    description: "An interactive data visualization dashboard with customizable widgets, filters, and export capabilities.",
    tags: ["React", "D3.js", "Tailwind"],
    year: "2024",
  },
];

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
          <p className="projects-label">
            Work
          </p>
          <h2 className="projects-heading">
            Selected <span className="text-gradient">projects</span>
          </h2>
        </motion.div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-item group" /* Added group utility for hover states if needed by any residual tailwind or custom CSS handling group-hover logic manually */
            >
              <div className="project-content">
                <div className="project-info">
                  <div className="project-title-row">
                    <h3 className="project-title">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      className="project-arrow"
                    />
                  </div>
                  <p className="project-description">
                    {project.description}
                  </p>
                </div>

                <div className="project-meta">
                  <span className="project-year">{project.year}</span>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="project-tag"
                      >
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
