"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ChatbotWidget from "../components/ChatbotWidget";

export default function RobotOverlay() {
  const [showRobot, setShowRobot] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowRobot(true), 7000); // 7 sec delay
    return () => clearTimeout(timer);
  }, []);

  const openChat = () => {
    setShowRobot(false);
    setShowChat(true);
  };

  return (
    <>
      <AnimatePresence>
        {showRobot && (
         <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="fixed inset-0 z-[9998] flex items-center justify-center backdrop-blur-md bg-black/30 p-4 sm:p-6"
>
            <motion.div
              onClick={openChat}
              className="relative flex flex-col items-center p-4 sm:p-6 rounded-3xl cursor-pointer"
            >
              {/* X Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowRobot(false);
                }}
                className="absolute left-6 sm:-left-12 top-2 sm:top-6 bg-primary-500 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full text-lg sm:text-2xl flex items-center justify-center"
                aria-label="Close chatbot overlay"
              >
                ✕
              </button>

              {/* Bubble */}
              <div
                role="dialog"
                aria-live="polite"
                aria-label="Chatbot greeting"
                className="relative bg-white px-3 sm:px-5 py-2 sm:py-3 rounded-2xl shadow-xl mb-4 text-center max-w-[90vw] sm:max-w-[350px]"
              >
                <p className="text-sm sm:text-base font-semibold text-[#0b1b36]">
                  Hello! May I help you?
                </p>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-white rotate-45" />
              </div>

              {/* Robot */}
              <motion.div
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-[120vw] max-w-[350px] sm:max-w-[450px] md:max-w-[600px]"
              >
                <DotLottieReact
                  src="/Robot Automation Gif.lottie"
                  loop
                  autoplay
                  aria-label="Animated robot assisting user"
                  role="img"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Opens Here */}
      {showChat && <ChatbotWidget autoOpen={true} />}
    </>
  );
}
