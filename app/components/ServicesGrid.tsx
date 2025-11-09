'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { useMotionValue, useTransform } from "framer-motion"
import { useState } from "react"

const services = [
  {
    title: "Software Development",
    desc: "Custom enterprise-grade software solutions engineered for scalability, performance, and security.",
    img: "/services/software.jpg",
  },
  {
    title: "Mobile App Development",
    desc: "Seamless iOS and Android experiences designed for users, built for business growth.",
    img: "/services/app.jpeg",
  },
  {
    title: "AI & Machine Learning",
    desc: "Intelligent automation and data-driven solutions that transform businesses through predictive insights.",
    img: "/services/Ai.jpeg",
  },
  {
    title: "Cybersecurity Solutions",
    desc: "Comprehensive protection through proactive monitoring, SOC setup, and zero-trust architecture.",
    img: "/services/Cybersecurity.jpeg",
  },
  {
    title: "Cloud & DevOps",
    desc: "Empowering agility with cloud-native CI/CD pipelines, Kubernetes orchestration, and infrastructure automation.",
    img: "/services/cloud.jpeg",
  },
  {
    title: "Data & Business Intelligence",
    desc: "Unlock actionable insights with real-time analytics dashboards and BI ecosystems.",
    img: "/services/data.jpeg",
  },
]

// 🎮 3D Tilt Card Component
function TiltCard({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [0, 1], [10, -10])
  const rotateY = useTransform(x, [0, 1], [-10, 10])

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const xVal = (e.clientX - rect.left) / rect.width
        const yVal = (e.clientY - rect.top) / rect.height
        x.set(xVal)
        y.set(yVal)
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        rotateX: hovered ? rotateX : 0,
        rotateY: hovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      className="transform-gpu"
    >
      {children}
    </motion.div>
  )
}

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="relative py-28 overflow-hidden bg-white text-gray-900"
    >
      {/* ✨ Shimmer title effect */}
      <style>{`
        .shimmer {
          background: linear-gradient(90deg, #4f46e5, #9333ea, #4f46e5);
          background-size: 200%;
          animation: shimmerMove 3s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @keyframes shimmerMove {
          0% { background-position: 0% }
          100% { background-position: 200% }
        }
      `}</style>

      {/* ✨ Section Heading */}
      <div className="relative z-10 text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl text-indigo-800 md:text-6xl font-extrabold tracking-tight shimmer"
        >
          Our Core Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Transforming ideas into digital excellence — crafting solutions that
          drive innovation, security, and success.
        </motion.p>
      </div>

      {/* 🧱 Services Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <TiltCard>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
                className="group relative bg-gray-50 border border-gray-200 rounded-3xl overflow-hidden hover:shadow-[0_0_60px_-15px_rgba(99,102,241,0.4)] transition-all duration-700"
              >
                {/* 🖼️ Image */}
                <motion.div
                  className="relative w-full h-64 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </motion.div>

                {/* 🧠 Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {service.desc}
                  </p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-indigo-600 font-medium group-hover:text-purple-600 transition-colors duration-300"
                  >
                    Learn More →
                  </motion.button>
                </div>
              </motion.div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
