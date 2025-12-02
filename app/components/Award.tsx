"use client";

import { motion } from "framer-motion";

export default function Achievements() {
  const stats = [
    { label: "Global Clients", number: "120+" },
    { label: "Projects Delivered", number: "350+" },
    { label: "Countries Served", number: "15+" },
    { label: "Team Members", number: "50+" },
  ];

  return (
    <section className="relative py-20 px-6 sm:px-12 lg:px-20 bg-[#fff] overflow-hidden">

      {/* BACKGROUND SHAPES */}
      <div className="absolute inset-0">
        {/* <div className="absolute right-[5%] top-[10%] w-[400px] h-[400px] bg-[#00E5FF33] rounded-full blur-[100px]" /> */}
        <div className="absolute left-[10%] bottom-[15%] w-[350px] h-[350px] bg-[#00E5FF22] rounded-full blur-[120px]" />
        <div className="absolute right-[30%] top-[40%] w-4 h-4 rounded-full border-2 border-[#00E5FF]" />
        <div className="absolute left-0 top-0 opacity-[0.05]">
          <svg width="380" height="380">
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ffffff" strokeWidth="1" />
            </pattern>
            <rect width="380" height="380" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-20 max-w-6xl mx-auto text-center">

        <p className="text-[#00E5FF] font-bold tracking-wide uppercase mb-2">
          Driving Innovation & Excellence
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-10">
          Our Key Achievements
        </h2>
        <p className="max-w-2xl mx-auto mb-12">
          We empower businesses worldwide with tailored digital solutions. From custom websites & software, we deliver projects that make a real impact.
        </p>

        {/* STATS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#081527] backdrop-blur-md border border-[#00E5FF33] rounded-2xl p-6 shadow-[0_0_20px_#00E5FF22] hover:shadow-[0_0_30px_#00E5FF44] transition"
            >
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#00E5FF]">{stat.number}</h3>
              <p className="text-gray-200 font-semibold mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <button className="mt-12 bg-[#00E5FF] text-[#0A1A2F] px-8 py-3 rounded-xl font-bold shadow-[0_0_20px_#00E5FF66] hover:opacity-90 transition">
          Get In Touch
        </button>
      </div>

    </section>
  );
}
