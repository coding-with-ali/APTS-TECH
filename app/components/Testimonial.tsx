"use client";

import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section className="relative bg-white text-text py-20 px-6 md:px-20 overflow-hidden">
      

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-8"
        >
          What Our Clients Say
        </motion.h3>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
          className="italic text-lg md:text-xl leading-relaxed text-black max-w-3xl mx-auto"
        >
          “APTS TECH helped us modernize our healthcare management system. Their
          AI solution reduced processing time by <span className="text-indigo-600 font-semibold">70%</span>.
          Exceptional team!”
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: true }}
          className="mt-6 text-indigo-600 font-semibold text-lg"
        >
          — CTO, Global Health Systems
        </motion.p>
      </div>

      {/* Floating animation styles */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow { animation: float-slow 14s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
