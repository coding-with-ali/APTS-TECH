

// ChatbotWidget.jsx - Professional UI/UX
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot } from 'react-icons/fa';

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hello sir, can I help you?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  if (!chatRef.current) return;
  chatRef.current.scrollTop = chatRef.current.scrollHeight;
}, [messages, loading]);


  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    const res = await fetch("/api/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    setLoading(false);

    const botMsg = { role: "assistant", text: data.reply };
    setMessages((prev) => [...prev, botMsg]);
    setInput("");
  };

  return (
    <div>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="fixed bottom-6 right-6 z-[9999] bg-primary-900 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-400/40 hover:scale-110 transition duration-300"
      >
        <FaRobot className="w-5 h-5" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-[9999] w-80 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-primary-900 text-white p-4 flex justify-between items-center shadow-md">
              <h3 className="font-semibold tracking-wide">APTS Techs Support</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-white text-xl hover:text-gray-200"
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div
              ref={chatRef}
              className="p-4 h-96 overflow-y-auto space-y-3 bg-gray-50 custom-scroll"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`p-3 rounded-2xl max-w-[80%] shadow-sm ${
                    msg.role === "assistant"
                      ? "bg-blue-100 text-gray-900 self-start"
                      : "bg-green-100 text-gray-900 self-end ml-auto"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}

              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="bg-blue-100 p-3 rounded-2xl w-fit text-gray-600"
                >
                  Typing...
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 flex gap-2 border-t bg-white">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message..."
              />
              <button
                onClick={sendMessage}
                className="bg-primary-700 text-white px-4 py-2 rounded-xl hover:bg-primary-500 shadow-md"
              >
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
