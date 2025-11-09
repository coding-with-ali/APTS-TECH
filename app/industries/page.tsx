"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const industries = [
  {
    name: "Healthcare",
    slug: "healthcare",
    desc: "Transforming healthcare with AI diagnostics, telemedicine, and secure patient systems.",
    icon: "💉",
  },
  {
    name: "Education",
    slug: "education",
    desc: "Empowering learning through e-learning platforms and smart campus automation.",
    icon: "🎓",
  },
  {
    name: "Manufacturing",
    slug: "manufacturing",
    desc: "Smart factories, IoT integration, and predictive maintenance for efficiency.",
    icon: "🏭",
  },
  {
    name: "Hotel & Hospitality",
    slug: "hotel",
    desc: "AI-driven booking, guest analytics, and automation for world-class service.",
    icon: "🏨",
  },
  {
    name: "Fleet Management",
    slug: "fleet",
    desc: "Real-time tracking, analytics, and AI route optimization for logistics excellence.",
    icon: "🚛",
  },
];

export default function Industries() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A0F2C] via-[#101B46] to-[#1E2A78] text-white py-24 px-6 md:px-12 lg:px-20">
      {/* 🌫️ Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 left-0 w-72 h-72 bg-indigo-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto text-center">
        {/* 🧠 Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-300 to-blue-400 bg-clip-text text-transparent">
          Industries <span className="text-white">We Serve</span>
        </h1>
        <p className="text-indigo-100/80 text-lg max-w-3xl mx-auto mb-16">
          We empower global industries through cutting-edge software, AI, and cloud transformation
          — designed for innovation and scale.
        </p>

        {/* 🏗️ Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, index) => (
            <motion.div
              key={ind.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/industries/${ind.slug}`}
                className="group relative block rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:bg-white/10 transition-all duration-500 shadow-lg hover:shadow-indigo-600/30"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative z-10 text-left">
                  <div className="text-4xl mb-4">{ind.icon}</div>
                  <h2 className="text-2xl font-semibold mb-3 text-indigo-200 group-hover:text-white transition-colors">
                    {ind.name}
                  </h2>
                  <p className="text-sm text-indigo-100/80 leading-relaxed">
                    {ind.desc}
                  </p>

                  <span className="inline-block mt-5 text-indigo-300 text-sm font-medium group-hover:text-white transition-all">
                    Learn More →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
