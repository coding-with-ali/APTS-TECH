

"use client";
import PageBanner from "../../components/PageBanner";
import { motion } from "framer-motion";
import { FaIndustry, FaRobot, FaCogs, FaChartLine, FaCloud, FaShieldAlt } from "react-icons/fa";

export default function Manufacturing() {
  const features = [
    {
      icon: <FaIndustry className="text-primary-500 text-3xl" />,
      title: "Smart Factory Solutions",
      desc: "IoT-driven automation and intelligent monitoring systems to enhance factory efficiency and real-time performance tracking.",
    },
    {
      icon: <FaRobot className="text-primary-500 text-3xl" />,
      title: "AI & Robotics Integration",
      desc: "Deploy AI-driven robots and automated production lines for precision manufacturing and predictive maintenance.",
    },
    {
      icon: <FaCogs className="text-primary-500 text-3xl" />,
      title: "ERP & Supply Chain Systems",
      desc: "Custom ERP solutions for end-to-end management of inventory, production, logistics, and suppliers.",
    },
    {
      icon: <FaChartLine className="text-primary-500 text-3xl" />,
      title: "Data Analytics & Insights",
      desc: "Leverage real-time dashboards and BI analytics to optimize workflows and reduce downtime.",
    },
    {
      icon: <FaCloud className="text-primary-500 text-3xl" />,
      title: "Cloud Manufacturing Platforms",
      desc: "Centralized cloud solutions for multi-location factories with secure data sharing and collaboration tools.",
    },
    {
      icon: <FaShieldAlt className="text-primary-500 text-3xl" />,
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

      <section className="container mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24">
        {/* Intro Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-700 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Revolutionizing Modern Manufacturing
          </motion.h2>
          <motion.p
            className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            At APTS TECH, we help manufacturers embrace Industry 4.0 through AI, IoT, automation, and real-time data systems — unlocking efficiency and global competitiveness.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="bg-primary-50 shadow-md rounded-2xl p-6 sm:p-8 border border-primary-100 hover:shadow-primary-700/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary-100 rounded-xl">{item.icon}</div>
                <h3 className="font-semibold text-lg sm:text-xl text-primary-900">{item.title}</h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 md:mt-24 bg-primary-900 text-primary-50 text-center rounded-2xl py-10 sm:py-16 px-6 sm:px-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Build the Factory of the Future</h3>
          <p className="max-w-2xl mx-auto text-primary-100 mb-6 text-base sm:text-lg md:text-xl">
            From robotics to predictive analytics, APTS TECH delivers the technology that powers smarter manufacturing.
            Start your digital transformation journey with us today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary-500 text-primary-900 font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:shadow-lg hover:bg-primary-500 transition"
          >
            Get Started
          </a>
        </motion.div>
      </section>
    </>
  );
}
