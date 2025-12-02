"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const y = useTransform(scrollY, [0, 200], [0, -50]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#081527] text-[#f7fbff] px-6 sm:px-10 md:px-16 lg:px-24">

      {/* BACKGROUND SHAPES (Reference Style) */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Circular Cyan Glow */}
        <div className="absolute right-[8%] top-[20%] w-[450px] h-[450px] bg-[#00E5FF33] rounded-full blur-[100px] animate-float-slow" />

        {/* Mesh Grid Pattern */}
        <div className="absolute left-0 top-0 opacity-[0.05]">
          <svg width="350" height="350">
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ffffff" strokeWidth="1" />
            </pattern>
            <rect width="350" height="350" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* MAIN CONTENT — Your Same Text */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between w-full max-w-7xl gap-10"
      >
        
        {/* Text Left — SAME AS YOUR TEXT */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-[90px] font-extrabold leading-tight tracking-tight">
            EMPOWERING THE <span className="text-[#00E5FF]">FUTURE</span>
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-[90px] font-extrabold leading-tight tracking-tight mt-1 sm:mt-[-10px]">
            OF TECHNOLOGY & INNOVATION
          </h2>
        </div>

        {/* Paragraph + Button — SAME AS YOUR TEXT */}
        <div className="block justify-around items-center">
          <p className="mt-6 text-lg sm:text-xl leading-relaxed max-w-lg">
            Accelerating Digital Transformation with AI, Web & Software Solutions. 
            We help businesses scale faster by prioritizing strategy, technology readiness, 
            and operational excellence.
          </p>

          <button className="mt-8 bg-[#00E5FF] text-[#0A1A2F] px-8 py-3 rounded-xl font-bold shadow-[0_0_20px_#00E5FF66] hover:opacity-90 transition">
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
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
