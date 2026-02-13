import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";
import "./Navbar.css";

const navItems = [
  { label: "Hem", path: "/" },
  { label: "LinkedIn", path: "https://www.linkedin.com/in/emilbergqvist/", external: true },
  { label: "Cases", path: "/projects" },
  { label: "Om mig", path: "/about" },
  { label: "CV", path: "/cv" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo flex items-center gap-2">
          Emil Bergqvist
          <span className="text-[10px] uppercase tracking-wider text-accent bg-accent/10 px-1.5 py-0.5 rounded border border-accent/20">
            v1.3.0 Beta
          </span>
        </Link>

        {/* Desktop */}
        <ul className="navbar-desktop-menu">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const linkClass = isActive
              ? "nav-item-link nav-item-link-active"
              : "nav-item-link nav-item-link-inactive";

            if (item.external) {
              return (
                <li key={item.label}>
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-item-link nav-item-link-inactive flex items-center gap-1"
                  >
                    <span className="nav-item-label">{item.label}</span>
                    <ExternalLink size={12} />
                  </a>
                </li>
              );
            }

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={linkClass}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeTab"
                      className="nav-active-indicator"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="nav-item-label">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="navbar-mobile-toggle"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="navbar-mobile-menu"
        >
          <ul className="navbar-mobile-list">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const mobileLinkClass = isActive
                ? "mobile-nav-link mobile-nav-link-active"
                : "mobile-nav-link mobile-nav-link-inactive";

              if (item.external) {
                return (
                  <li key={item.label}>
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mobile-nav-link mobile-nav-link-inactive flex items-center gap-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                      <ExternalLink size={14} />
                    </a>
                  </li>
                );
              }

              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={mobileLinkClass}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
