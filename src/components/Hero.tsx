import { motion } from "framer-motion";
import { ArrowDown, Code2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6"
          >
            <Sparkles size={12} />
            Developer & Creator
          </motion.div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-[1.1] mb-6">
            Building
            <br />
            <span className="text-gradient">digital</span>
            <br />
            experiences
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed mb-8">
            I craft elegant, performant web applications with a focus on clean code and thoughtful user experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-medium hover:shadow-[0_0_20px_hsl(150_80%_50%/0.3)] transition-all duration-300"
            >
              View Work
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-muted-foreground/30 hover:border-foreground pb-0.5"
            >
              Get in touch
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:flex justify-end"
        >
          <div className="w-80 h-96 bg-card rounded-xl border border-border overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 group-hover:from-primary/15 group-hover:to-accent/15 transition-all duration-500" />
            <div className="absolute top-4 left-4 flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
            </div>
            <div className="absolute top-12 left-4 right-4 space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground/40">
                <Code2 size={12} />
                <span className="text-[10px] font-mono">index.tsx</span>
              </div>
              <div className="h-1.5 w-16 bg-primary/20 rounded" />
              <div className="h-1.5 w-24 bg-accent/15 rounded ml-4" />
              <div className="h-1.5 w-20 bg-muted-foreground/10 rounded ml-4" />
              <div className="h-1.5 w-12 bg-primary/15 rounded ml-8" />
              <div className="h-1.5 w-28 bg-muted-foreground/10 rounded ml-4" />
              <div className="h-1.5 w-16 bg-accent/15 rounded" />
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="h-px bg-border mb-3" />
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-mono text-muted-foreground/40">ready</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
