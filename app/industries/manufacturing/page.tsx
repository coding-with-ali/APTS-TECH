"use client";
import PageBanner from "../../components/PageBanner";
import { motion } from "framer-motion";
import { FaIndustry, FaRobot, FaCogs, FaChartLine, FaCloud, FaShieldAlt } from "react-icons/fa";

export default function Manufacturing() {
  const features = [
    {
      icon: <FaIndustry className="text-indigo-600 text-3xl" />,
      title: "Smart Factory Solutions",
      desc: "IoT-driven automation and intelligent monitoring systems to enhance factory efficiency and real-time performance tracking.",
    },
    {
      icon: <FaRobot className="text-indigo-600 text-3xl" />,
      title: "AI & Robotics Integration",
      desc: "Deploy AI-driven robots and automated production lines for precision manufacturing and predictive maintenance.",
    },
    {
      icon: <FaCogs className="text-indigo-600 text-3xl" />,
      title: "ERP & Supply Chain Systems",
      desc: "Custom ERP solutions for end-to-end management of inventory, production, logistics, and suppliers.",
    },
    {
      icon: <FaChartLine className="text-indigo-600 text-3xl" />,
      title: "Data Analytics & Insights",
      desc: "Leverage real-time dashboards and BI analytics to optimize workflows and reduce downtime.",
    },
    {
      icon: <FaCloud className="text-indigo-600 text-3xl" />,
      title: "Cloud Manufacturing Platforms",
      desc: "Centralized cloud solutions for multi-location factories with secure data sharing and collaboration tools.",
    },
    {
      icon: <FaShieldAlt className="text-indigo-600 text-3xl" />,
      title: "Cybersecurity & Compliance",
      desc: "Protect industrial control systems (ICS) with strong cybersecurity protocols and compliance management.",
    },
  ];

  return (
    <>
      <PageBanner
        title="Manufacturing Solutions"
        subtitle="Empowering industries with smart automation and digital transformation"
        
      />

      <section className="container mx-auto px-6 py-20">
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-primary-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Revolutionizing Modern Manufacturing
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            At APTS TECH, we help manufacturers embrace Industry 4.0 through AI, IoT, automation, and real-time data systems — unlocking efficiency and global competitiveness.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-50 rounded-xl">{item.icon}</div>
                <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 bg-primary-900 text-white text-center rounded-2xl py-12 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold mb-3">Build the Factory of the Future</h3>
          <p className="max-w-2xl mx-auto text-indigo-100 mb-6">
            From robotics to predictive analytics, APTS TECH delivers the technology that powers smarter manufacturing.
            Start your digital transformation journey with us today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-50 transition"
          >
            Get Started
          </a>
        </motion.div>
      </section>
    </>
  );
}
