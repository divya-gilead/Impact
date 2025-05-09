import { useEffect, useRef, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Button } from "./components/ui/button";
import "./index.css";

function App() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hello, welcome to the Team Impact Bot! How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [messages, isTyping, isDarkMode]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = {
        role: "bot",
        text: `Processing: "${input}"... Data received.`,
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 900);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`app-wrapper ${isDarkMode ? "dark" : "light"}`}>
      <div className="sidebar">
        <div className="logo">TEAM IMPACT</div>
        <ul>
          <li>New Chat</li>
          <li>History</li>
          <li>Settings</li>
        </ul>
        <div className="theme-switcher">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </Button>
        </div>
      </div>

      <div className="main-panel">
        <div className="messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.role}`}>
              <span className="msg-role">
                {msg.role === "user" ? "You:" : "Bot:"}
              </span>{" "}
              {msg.text}
            </div>
          ))}
          {isTyping && <div className="message bot typing">Bot is typing...</div>}
          <div ref={messagesEndRef} />
        </div>

        <div className="input-bar">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button onClick={sendMessage}>Send</Button>
        </div>
      </div>
    </div>
  );
}

export default App;