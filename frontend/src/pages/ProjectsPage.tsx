import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  return (
    <main className="projects-page">
      <Navbar />
      <div className="projects-page-content">
        <Projects />
      </div>
    </main>
  );
};

export default ProjectsPage;
