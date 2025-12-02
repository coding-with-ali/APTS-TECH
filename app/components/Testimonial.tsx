

"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jason Keys",
    location: "Chicago",
    quote:
      "They built a complete website for our business, and the final result exceeded expectations. Clean design, fast loading, and fully mobile-friendly — exactly what we needed.",
    rating: 5,
  },
  {
    name: "Donald Leary",
    location: "New York",
    quote:
      "We hired them to develop a custom software solution for our team, and it has transformed the way we work. The workflow automation alone saves us hours every single week.",
    rating: 5,
  },
  {
    name: "Kenneth Led",
    location: "Washington DC",
    quote:
      "Our company website was redesigned from scratch, and it looks incredibly professional now. The UI/UX, page speed, and overall functionality are top-tier.",
    rating: 5,
  },
  {
    name: "Vernon Leavell",
    location: "Los Angeles",
    quote:
      "They developed a custom application for our startup, and the quality was outstanding. Secure, scalable, and very easy for our team to manage.",
    rating: 5,
  },
  {
    name: "Sophia Williams",
    location: "San Francisco",
    quote:
      "Absolutely brilliant work! Their AI-powered solution saved us countless hours and improved our workflow efficiency dramatically.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    location: "Seattle",
    quote:
      "High-quality, responsive, and visually stunning. The team exceeded our expectations on every front.",
    rating: 5,
  },
];

export default function TestimonialGrid() {
  return (
    <section className="relative py-24 px-6 sm:px-12 lg:px-20 bg-[#fff] overflow-hidden">
      
      {/* Floating background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] bg-[#00E5FF33] rounded-full blur-[140px]" />
        <div className="absolute bottom-[5%] right-[10%] w-[450px] h-[450px] bg-[#00E5FF22] rounded-full blur-[160px]" />
        <div className="absolute top-[20%] right-[10%] w-[250px] h-[250px] bg-[#00E5FF11] rounded-full blur-[80px]" />
      </div>

      {/* Section header */}
      <div className="relative z-10 text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          What Our Customers Are Saying
        </h2>
        <p className="text-lg">
          Lumirex empowers teams to automate tasks, visualize data, and make better business decisions. Here’s what our customers love about it:
        </p>
      </div>

      {/* Pinterest-style Masonry Grid */}
      <div className="relative z-10 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="break-inside-avoid bg-[#0A2A4F] backdrop-blur-md border border-[#00E5FF33] rounded-3xl p-6 mb-6 shadow-[0_0_20px_#00E5FF22] hover:shadow-[0_0_30px_#00E5FF44] hover:-translate-y-2 transform transition-all duration-500"
          >
            {/* Quote */}
            <p className="text-white italic mb-4">"{t.quote}"</p>

            {/* Customer info */}
            <div className="flex justify-between items-center mb-2">
              <div>
                <h4 className="text-[#00E5FF] font-semibold">{t.name}</h4>
                <p className="text-white text-sm">{t.location}</p>
              </div>
              <div className="flex space-x-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400">&#9733;</span>
                ))}
              </div>
            </div>

            {/* Floating neon accent */}
            <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-[#00E5FF] animate-pulse" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
