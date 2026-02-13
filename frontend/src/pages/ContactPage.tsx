import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <main className="contact-page">
      <Navbar />
      <div className="contact-page-content">
        <Contact />
      </div>

    </main>
  );
};

export default ContactPage;
