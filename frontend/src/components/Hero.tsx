import { motion } from "framer-motion";
import { ArrowRight, Mic } from "lucide-react";
import "./Hero.css";
import { useState, useEffect } from "react";

// SVG Arrow Component for the hand-drawn look
const HandDrawnArrow = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10 50 C 30 40, 60 40, 90 50 M 90 50 L 75 40 M 90 50 L 75 60"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface HeroProps {
  onSendMessage?: (message: string) => void;
}

const STATIC_PREFIX = "Ask me about ";
const PLACEHOLDER_SUFFIXES = [
  "UX",
  "AI",
  "football",
  "what I am studying",
  "my hobbies",
];

const Hero = ({ onSendMessage }: HeroProps) => {
  const [inputValue, setInputValue] = useState("");
  const [dynamicText, setDynamicText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentSuffix = PLACEHOLDER_SUFFIXES[textIndex];

    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1500); // Wait 1.5s before deleting
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDynamicText(currentSuffix.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % PLACEHOLDER_SUFFIXES.length);
        }
      } else {
        setDynamicText(currentSuffix.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === currentSuffix.length) {
          setIsPaused(true);
        }
      }
    }, isDeleting ? 30 : 60); // Faster typing speed

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, isPaused, textIndex]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (inputValue.trim() && onSendMessage) {
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Side: Text & Input */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-content"
        >
          <h1 className="hero-title">
            Den mest pratsamma portfolio du någonsin kommer att träffa
          </h1>
          <p className="hero-subtitle">
            Det är som att ta del av mina tankar om design och ledarskap, fast utan
            kalendargymnastiken.
          </p>

          <div className="hero-input-container">
            <form
              className="hero-chat-input-wrapper"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder={`${STATIC_PREFIX}${dynamicText}|`}
                className="hero-chat-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="button" className="hero-chat-action-btn" aria-label="Voice input">
                <Mic size={20} />
              </button>
              <button type="submit" className="hero-chat-submit-btn" aria-label="Send">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </motion.div>

        {/* Right Side: Image & Annotation */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-image-container"
        >
          <div className="hero-image-wrapper">
            <img
              src="/emil-4.png"
              alt="Emil Bergqvist"
              className="hero-image-img"
            />

            <div className="hero-annotation">
              <HandDrawnArrow className="hero-annotation-arrow" />
              <div className="hero-annotation-text">
                <span className="hero-annotation-title">Hi! This is me</span>
                <span className="hero-annotation-subtitle">
                  MSc Student in IT/Management
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
