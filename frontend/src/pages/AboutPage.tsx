import Navbar from "@/components/Navbar";
import About from "@/components/About";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <main className="about-page">
      <Navbar />
      <div className="about-page-content">
        <About />
      </div>
    </main>
  );
};

export default AboutPage;
