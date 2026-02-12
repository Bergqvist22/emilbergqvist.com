import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Developer & Creator
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground leading-[1.1] mb-6">
            Building
            <br />
            <span className="italic font-normal">digital</span>
            <br />
            experiences
          </h1>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed mb-8">
            I craft elegant, performant web applications with a focus on clean code and thoughtful user experiences.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-muted-foreground/30 hover:border-foreground pb-0.5"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:flex justify-end"
        >
          <div className="w-80 h-96 bg-card rounded-lg border border-border overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="h-2 w-12 bg-primary/30 rounded mb-3" />
              <div className="h-2 w-20 bg-muted-foreground/20 rounded mb-2" />
              <div className="h-2 w-16 bg-muted-foreground/15 rounded" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
