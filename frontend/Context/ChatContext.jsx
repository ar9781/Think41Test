import { createContext, useState } from 'react';

export const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]); // For conversation history

  const sendMessage = (text) => {
    const newMessage = { text, sender: 'user' };
    setMessages((prev) => [...prev, newMessage]);

    // Simulate AI response
    setLoading(true);
    setTimeout(() => {
      const botResponse = { text: "AI response to: " + text, sender: 'ai' };
      setMessages((prev) => [...prev, botResponse]);
      setLoading(false);
    }, 1000);
  };

  const saveCurrentConversation = () => {
    const timestamp = new Date().toLocaleString();
    setHistory((prev) => [...prev, { id: Date.now(), timestamp, messages }]);
    setMessages([]); // Clear current chat
  };

  const loadConversation = (msgs) => {
    setMessages(msgs);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage, loading, history, saveCurrentConversation, loadConversation }}>
      {children}
    </ChatContext.Provider>
  );
}
