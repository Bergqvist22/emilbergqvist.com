import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ChatInterface from "@/components/ChatInterface";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Index.css";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [initialMessage, setInitialMessage] = useState("");

  const handleSendMessage = (message: string) => {
    setInitialMessage(message);
    setIsChatOpen(true);
  };

  const handleBack = () => {
    setIsChatOpen(false);
  };

  return (
    <main className="index-page">
      <AnimatePresence mode="wait">
        {!isChatOpen ? (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <Hero onSendMessage={handleSendMessage} />
          </motion.div>
        ) : (
          <ChatInterface
            key="chat"
            initialMessage={initialMessage}
            onBack={handleBack}
          />
        )}
      </AnimatePresence>
    </main>
  );
};

export default Index;
