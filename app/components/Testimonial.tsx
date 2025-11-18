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
];


export default function TestimonialGrid() {
  return (
    <section className="relative bg-primary-50 py-20 px-6 md:px-20 overflow-hidden">
      {/* Subtle background shapes */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-[700px] h-[700px] bg-gradient-to-r from-indigo-100 to-purple-200 rounded-full opacity-50 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-pink-100 to-orange-100 rounded-full opacity-30 blur-2xl pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-gradient-to-r from-yellow-100 to-green-100 rounded-full opacity-20 blur-xl pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          What Our Customers Are Saying
        </h2>
        <p className="text-gray-500 mb-12">
          Lumirex empowers teams to automate tasks, visualize data, and make better business decisions. Here’s what our customers love about it:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-gray-700 italic mb-4">{`"${t.quote}"`}</p>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-primary-500 font-semibold">{t.name}</h4>
                  <p className="text-gray-400 text-sm">{t.location}</p>
                </div>
                <div className="flex space-x-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400">&#9733;</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
