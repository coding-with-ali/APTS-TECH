

"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import TestimonialGrid from "../components/Testimonial";
import CTASection from "../components/CTASection";
import ContactSection from "../components/ContactForm";

const industries = [
  {
    name: "Healthcare",
    slug: "healthcare",
    desc: "AI-powered healthcare solutions for clinics, hospitals, and telemedicine.",
    icon: "💉",
    image: "/images/healthcare.jpg",
    longDesc:
      "We deliver AI diagnostics, telemedicine platforms, and patient management systems. Our solutions ensure compliance with healthcare standards, streamline workflows, and improve patient outcomes.",
    stats: [
      { label: "Projects Delivered", value: "120+" },
      { label: "Patients Impacted", value: "50K+" },
      { label: "AI Models", value: "15" },
    ],
  },
  {
    name: "Education",
    slug: "education",
    desc: "Smart e-learning platforms & campus automation solutions.",
    icon: "🎓",
    image: "/images/education.jpg",
    longDesc:
      "From online learning platforms to campus management automation, we integrate AI and cloud systems to enhance student engagement, administrative efficiency, and global accessibility.",
    stats: [
      { label: "Schools Served", value: "300+" },
      { label: "Students Reached", value: "200K+" },
      { label: "E-learning Courses", value: "450+" },
    ],
  },
  {
    name: "Manufacturing",
    slug: "manufacturing",
    desc: "Smart factories with IoT, AI, and predictive maintenance.",
    icon: "🏭",
    image: "/images/manufacturing.jpg",
    longDesc:
      "We help factories implement Industry 4.0 technologies including IoT sensors, predictive maintenance AI, automated dashboards, and real-time monitoring to improve efficiency and reduce costs.",
    stats: [
      { label: "Factories Optimized", value: "80+" },
      { label: "IoT Devices", value: "1200+" },
      { label: "Efficiency Boost", value: "35%" },
    ],
  },
  {
    name: "Hospitality",
    slug: "hotel",
    desc: "Enhancing guest experiences with AI and automation.",
    icon: "🏨",
    image: "/images/hospitality.jpg",
    longDesc:
      "Our solutions optimize booking systems, guest management, and personalized services using AI analytics, resulting in higher customer satisfaction and operational efficiency.",
    stats: [
      { label: "Hotels Served", value: "50+" },
      { label: "Guests Served", value: "500K+" },
      { label: "Automated Processes", value: "100+" },
    ],
  },
  {
    name: "Fleet Management",
    slug: "fleet",
    desc: "Real-time tracking & AI route optimization for logistics.",
    icon: "🚛",
    image: "/images/fleet.jpg",
    longDesc:
      "We provide fleet tracking, route optimization, predictive maintenance alerts, and performance dashboards that improve delivery efficiency and reduce operational costs.",
    stats: [
      { label: "Vehicles Monitored", value: "2K+" },
      { label: "Routes Optimized", value: "500+" },
      { label: "Fuel Savings", value: "20%" },
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div className="relative overflow-hidden bg-[#081527]">
      {/* Industries Grid */}
      <section id="industries" className="py-24 px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl text-primary-500 md:text-7xl font-bold text-center mb-12">
          Industries <span className="text-white"> We Serve</span>
        </h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
          See how we leverage technology to solve complex challenges and drive growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 shadow-lg hover:shadow-primary-500/20 transition-all duration-500"
            >
              <div className="absolute -top-8 -right-10 text-7xl opacity-100 group-hover:opacity-70 transition-opacity">
                {ind.icon}
              </div>
              <h3 className="text-2xl font-semibold text-primary-500 group-hover:text-white transition-colors">
                {ind.name}
              </h3>
              <p className="text-gray-300 text-sm mt-2">{ind.desc}</p>
              <Link
                href={`/industries/${ind.slug}`}
                className="inline-block mt-5 text-blue-300 text-sm font-medium group-hover:text-white transition-colors"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      <TestimonialGrid/>
      <ContactSection/>
    </div>
  );
}
