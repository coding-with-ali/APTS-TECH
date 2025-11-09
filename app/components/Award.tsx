
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Awards() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // Fade-in/out opacity for background text
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.9, 1], [0, 1, 1, 0])

  // Parallax-style slow upward movement for boxes
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -300])

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-br from-[#0A0F2C] via-[#111E4C] to-[#1E2A78] text-white overflow-hidden min-h-[350vh] sm:min-h-[500vh] md:min-h-[700vh]"
    >
      {/* ✅ Fixed Background Text */}
      <div className="fixed inset-0 flex items-center justify-center text-center pointer-events-none px-4">
        <motion.h1
          style={{ opacity }}
          className="text-[14vw] sm:text-[9vw] md:text-[7vw] font-extrabold uppercase leading-tight text-indigo-500 tracking-tight"
        >
          Global Recognition
          <br /> & Awards
        </motion.h1>
      </div>

      {/* ✅ Scrollable Boxes */}
      <motion.div
        style={{ y: ySlow }} // <-- this slows the vertical scroll movement
        className="relative z-10 flex flex-col gap-[40vh] sm:gap-[50vh] mt-[60vh] sm:mt-[100vh] pb-[60vh] sm:pb-[100vh] px-4 sm:px-8 md:px-20"
      >
        {/* Reusable Box component */}
        {[
          {
            title:
              "Ranked No. 6 on the Great Place To Work® World's Best Workplaces™ list.",
            desc: "This recognition is based on feedback from our people — measuring their level of trust, pride, and camaraderie at work.",
            color: '#e50914',
            align: 'self-start',
            btn: 'See related awards →',
          },
          {
            title: 'A Leader in Reinvention and Digital Transformation',
            desc: 'Recognized globally for driving innovation, leveraging AI, and transforming businesses through next-gen solutions.',
            color: '#0056FF',
            align: 'self-end',
            btn: 'Learn more →',
          },
          {
            title: 'Top Innovator in AI and Cloud Technologies',
            desc: 'Honored for excellence in developing scalable, secure, and intelligent enterprise solutions worldwide.',
            color: '#8000FF',
            align: 'self-start',
            btn: 'Explore innovation →',
          },
          {
            title: 'Sustainability Award for Tech Impact',
            desc: 'Celebrated for building sustainable, energy-efficient tech solutions that reduce carbon footprint.',
            color: '#FF7A00',
            align: 'self-end',
            btn: 'Discover how →',
          },
        ].map((box, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: box.align === 'self-start' ? -150 : 150, y: 100 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
            className={`max-w-full sm:max-w-lg md:max-w-xl w-full ${box.align}`}
          >
            <motion.div
              className="p-6 sm:p-10 rounded-2xl shadow-2xl text-white"
              style={{
                backgroundColor: box.color,
                boxShadow: `0 10px 30px ${box.color}60`,
              }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{box.title}</h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-gray-100">
                {box.desc}
              </p>
              <button className="mt-5 sm:mt-6 inline-flex items-center font-semibold hover:underline text-sm sm:text-base">
                {box.btn}
              </button>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
