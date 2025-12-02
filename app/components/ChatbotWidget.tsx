"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaPaperPlane } from "react-icons/fa";
import Image from "next/image";

export default function ChatbotWidget({ autoOpen = false }) {
  const [open, setOpen] = useState(autoOpen);
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hello sir, can I help you?", time: new Date() },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll
  useEffect(() => {
    if (!chatRef.current) return;
    const timer = setTimeout(() => {
      chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
    }, 50);
    return () => clearTimeout(timer);
  }, [messages, loading]);

  // Send Message
  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", text: input, time: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    const res = await fetch("/api/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();
    setLoading(false);
    const botMsg = { role: "assistant", text: data.reply, time: new Date() };
    setMessages((prev) => [...prev, botMsg]);
    setInput("");
  };

  return (
    <div>
      {/* Floating Robot Button */}
      {!autoOpen && (
        <motion.button
          onClick={() => setOpen(true)}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="fixed bottom-6 right-6 z-[9999] bg-primary-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300"
        >
          <Image
          src="/robot.png"
          alt="robot icon"
          width="900"
          height="900"
          className="w-12 h-12"
          />
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="
              fixed bottom-24 right-6
              z-[9999] w-80 sm:w-96
              bg-white rounded-3xl 
              shadow-2xl border border-gray-200
              flex flex-col overflow-hidden
            "
          >
            {/* Header */}
            <div className="bg-primary-900 text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FaRobot className="w-6 h-6" />
                <h3 className="font-semibold text-lg">APTS Tech Support</h3>
              </div>
              <button onClick={() => setOpen(false)} className="text-white text-xl font-bold">
                ×
              </button>
            </div>

            {/* Messages */}
            <div
              ref={chatRef}
              className="p-4 h-96 overflow-y-auto bg-gray-50 flex flex-col gap-3 custom-scroll"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${
                    msg.role === "assistant" ? "self-start" : "self-end"
                  } max-w-[80%]`}
                >
                  <div
                    className={`p-3 rounded-2xl relative ${
                      msg.role === "assistant"
                        ? "bg-blue-100 text-gray-800"
                        : "bg-green-200 text-gray-900"
                    }`}
                  >
                    {msg.text}
                    <span className="absolute bottom-0 right-2 text-xs text-gray-500 opacity-70">
                      {msg.time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                </div>
              ))}

              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="self-start bg-blue-100 p-3 rounded-2xl w-fit text-gray-600"
                >
                  Typing...
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 flex gap-2 border-t border-gray-200 bg-white">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="Type your message..."
              />
              <button
                onClick={sendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition"
              >
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
