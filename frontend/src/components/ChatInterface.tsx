import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Send, User, Bot, Sparkles } from "lucide-react";
import "./ChatInterface.css";

interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}

interface ChatInterfaceProps {
    initialMessage?: string;
    onBack: () => void;
}

const ChatInterface = ({ initialMessage, onBack }: ChatInterfaceProps) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (initialMessage) {
            addMessage(initialMessage, "user");
            // Simulate bot response
            setIsTyping(true);
            setTimeout(() => {
                addMessage("Hej! Kul att du vill prata UX. Vad funderar du på?", "bot");
                setIsTyping(false);
            }, 1500);
        }
    }, [initialMessage]);

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const addMessage = (text: string, sender: "user" | "bot") => {
        const newMessage: Message = {
            id: Date.now().toString(),
            text,
            sender,
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, newMessage]);
    };

    const handleSendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        addMessage(inputValue, "user");
        setInputValue("");
        setIsTyping(true);

        // Simulate bot response
        setTimeout(() => {
            const responses = [
                "Det är en intressant fråga! Inom UX är användarens behov alltid i fokus.",
                "Absolut, designsystem är nyckeln till skalbarhet.",
                "Jag har arbetat mycket med just det på Volvo Group.",
                "Vill du se några case som berör detta?",
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessage(randomResponse, "bot");
            setIsTyping(false);
        }, 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="chat-interface"
        >
            <header className="chat-header">
                <button onClick={onBack} className="chat-back-btn" aria-label="Tillbaka">
                    <ArrowLeft size={20} />
                    <span>Back</span>
                </button>
                <div className="chat-header-title">
                    <Sparkles className="chat-header-icon" size={18} />
                    <span>Emils twin!</span>
                </div>
                <div className="chat-header-spacer" />
            </header>

            <div className="chat-messages">
                <AnimatePresence>
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`chat-message ${msg.sender === "user" ? "user-message" : "bot-message"}`}
                        >
                            <div className="message-avatar">
                                {msg.sender === "user" ? (
                                    <User size={16} />
                                ) : (
                                    <img src="/emil-4.png" alt="Emil AI" className="w-full h-full object-cover rounded-full" />
                                )}
                            </div>
                            <div className="message-content">
                                <p>{msg.text}</p>
                                <span className="message-time">
                                    {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {isTyping && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="chat-message bot-message"
                    >
                        <div className="message-avatar">
                            <img src="/emil-4.png" alt="Emil AI" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div className="message-content typing-indicator">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </motion.div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <footer className="chat-input-area">
                <form onSubmit={handleSendMessage} className="chat-input-form">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Skriv ett meddelande..."
                        className="chat-input-field"
                        autoFocus
                    />
                    <button type="submit" className="chat-send-btn" disabled={!inputValue.trim()}>
                        <Send size={20} />
                    </button>
                </form>
            </footer>
        </motion.div>
    );
};

export default ChatInterface;
