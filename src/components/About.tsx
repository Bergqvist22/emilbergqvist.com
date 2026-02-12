import { motion } from "framer-motion";

const skills = [
  "React", "TypeScript", "Node.js", "Tailwind CSS",
  "PostgreSQL", "Git", "REST APIs", "GraphQL",
];

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">
              About
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              A bit about<br /><span className="text-gradient">myself</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              I'm a developer passionate about creating beautiful, functional web applications.
              With a strong foundation in modern web technologies, I focus on writing clean,
              maintainable code that delivers exceptional user experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>

            <div className="pt-6">
              <p className="text-sm font-medium text-foreground mb-4">Technologies I work with</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-md border border-border hover:border-primary/30 hover:bg-primary/5 transition-colors duration-200"
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
