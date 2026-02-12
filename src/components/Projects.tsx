import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
    <section id="projects" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">
            Work
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Selected <span className="italic font-normal">projects</span>
          </h2>
        </motion.div>

        <div className="space-y-0 divide-y divide-border">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group py-8 md:py-10 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    />
                  </div>
                  <p className="text-muted-foreground max-w-xl leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 md:flex-col md:items-end">
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
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
