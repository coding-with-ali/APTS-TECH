

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const y = useTransform(scrollY, [0, 200], [0, -50]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1A2F] text-[#f7fbff] px-6 sm:px-10 md:px-16 lg:px-24">
      

      {/* ✨ Background Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-purple-500/20 rounded-full blur-[120px]" />
      </div>
      
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between w-full max-w-7xl gap-10"
      >
        {/* Left Text */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-[90px] font-extrabold leading-tight tracking-tight">
            EMPOWERING THE <span className="text-[#1f6fbf]">FUTURE</span>
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-[90px] font-extrabold leading-tight tracking-tight mt-1 sm:mt-[-10px]">
            OF TECHNOLOGY & INNOVATION
          </h2>
        </div>
          <div className="block justify-around items-center">
          <p className="mt-6 text-lg sm:text-xl leading-relaxed max-w-lg">
            Accelerating Digital Transformation with AI, Web & Software Solutions. We help businesses scale faster by prioritizing strategy, technology readiness, and operational excellence.
          </p>
          <button className="mt-6 bg-[#1f6fbf] hover:bg-[#113b65] px-6 py-3 rounded-xl font-semibold shadow-lg transition">
            Explore Our Solutions &gt;
          </button>
          </div>
      </motion.div>

      {/* Floating animation keyframes */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
