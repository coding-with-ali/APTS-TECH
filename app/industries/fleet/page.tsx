"use client";

import PageBanner from "../../components/PageBanner";
import { motion } from "framer-motion";
import {
  FaMapMarkedAlt,
  FaTruckMoving,
  FaSatelliteDish,
  FaChartLine,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa";

export default function Fleet() {
  const features = [
    {
      icon: <FaMapMarkedAlt className="text-indigo-600 text-3xl" />,
      title: "Real-Time GPS Tracking",
      desc: "Monitor your entire fleet in real time with advanced GPS and geofencing alerts for optimized routing.",
    },
    {
      icon: <FaTruckMoving className="text-indigo-600 text-3xl" />,
      title: "Fleet Operations Automation",
      desc: "Automate dispatching, driver allocation, and maintenance schedules with AI-driven systems.",
    },
    {
      icon: <FaSatelliteDish className="text-indigo-600 text-3xl" />,
      title: "IoT & Telematics Integration",
      desc: "Leverage IoT sensors for fuel efficiency, predictive maintenance, and vehicle health monitoring.",
    },
    {
      icon: <FaChartLine className="text-indigo-600 text-3xl" />,
      title: "Data & Analytics Dashboards",
      desc: "Gain actionable insights with real-time dashboards for fuel, performance, and route optimization.",
    },
    {
      icon: <FaCloud className="text-indigo-600 text-3xl" />,
      title: "Cloud-Based Fleet Platform",
      desc: "Access your entire fleet ecosystem anytime, anywhere — powered by secure cloud infrastructure.",
    },
    {
      icon: <FaShieldAlt className="text-indigo-600 text-3xl" />,
      title: "Cybersecurity & Data Protection",
      desc: "Protect your fleet’s data with end-to-end encryption, access controls, and compliance-ready systems.",
    },
  ];

  return (
    <>
      {/* 🚛 Page Banner */}
      <PageBanner
        title="Fleet Management Solutions"
        subtitle="Driving efficiency with AI, IoT, and intelligent logistics platforms"
     
      />

      {/* 💡 Main Content */}
      <section className="container mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-indigo-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Smarter Fleets, Stronger Performance
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            APTS TECH delivers end-to-end fleet solutions that integrate telematics, AI, and predictive analytics —
            helping logistics companies maximize uptime and minimize costs.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
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
          className="mt-20 bg-gradient-to-br from-[#0A0F2C] via-[#141E61] to-[#1E2A78] text-white text-center rounded-2xl py-12 px-6 shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold mb-3">Accelerate Your Fleet Digitally</h3>
          <p className="max-w-2xl mx-auto text-indigo-100 mb-6">
            From GPS tracking to AI-driven logistics, APTS TECH empowers your business to run smoother, faster, and smarter.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-50 transition"
          >
            Schedule a Demo
          </a>
        </motion.div>
      </section>
    </>
  );
}
