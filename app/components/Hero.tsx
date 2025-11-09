"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const y = useTransform(scrollY, [0, 200], [0, -50]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0F2C] via-[#111E4C] to-[#1E2A78] text-white px-6 sm:px-10 md:px-16 lg:px-24">
      
      {/* 🧠 Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between w-full max-w-7xl gap-10"
      >
        {/* Left Text */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-[90px] font-extrabold leading-tight tracking-tight">
            EMPOWERING THE{" "}
            <span className="text-indigo-500">FUTURE</span>
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-[90px] font-extrabold leading-tight tracking-tight mt-1 sm:mt-[-10px]">
            OF TECHNOLOGY
          </h2>
        </div>

        {/* Right Info Block */}
        <div className="flex-1 max-w-md md:text-left md:ml-auto">
          <div className="h-[3px] w-10 bg-indigo-400 mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold mb-3">Scaling AI</h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            We help clients prioritize business strategy, technology readiness,
            and organizational readiness to get to value faster.
          </p>
          <button className="mt-6 inline-flex items-center text-indigo-400 font-semibold hover:underline">
            See what we do
            <span className="ml-2 text-indigo-400">{">"}</span>
          </button>
        </div>
      </motion.div>

      {/* 🌊 Floating animation keyframes */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-fast {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
