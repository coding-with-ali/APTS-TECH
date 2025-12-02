"use client";

import PageBanner from "../../components/PageBanner";
import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaTruckMoving, FaSatelliteDish, FaChartLine, FaCloud, FaShieldAlt } from "react-icons/fa";

export default function Fleet() {
  const features = [
    {
      icon: <FaMapMarkedAlt className="text-primary-500 text-3xl" />,
      title: "Real-Time GPS Tracking",
      desc: "Monitor your entire fleet in real time with advanced GPS and geofencing alerts for optimized routing.",
    },
    {
      icon: <FaTruckMoving className="text-primary-500 text-3xl" />,
      title: "Fleet Operations Automation",
      desc: "Automate dispatching, driver allocation, and maintenance schedules with AI-driven systems.",
    },
    {
      icon: <FaSatelliteDish className="text-primary-500 text-3xl" />,
      title: "IoT & Telematics Integration",
      desc: "Leverage IoT sensors for fuel efficiency, predictive maintenance, and vehicle health monitoring.",
    },
    {
      icon: <FaChartLine className="text-primary-500 text-3xl" />,
      title: "Data & Analytics Dashboards",
      desc: "Gain actionable insights with real-time dashboards for fuel, performance, and route optimization.",
    },
    {
      icon: <FaCloud className="text-primary-500 text-3xl" />,
      title: "Cloud-Based Fleet Platform",
      desc: "Access your entire fleet ecosystem anytime, anywhere — powered by secure cloud infrastructure.",
    },
    {
      icon: <FaShieldAlt className="text-primary-500 text-3xl" />,
      title: "Cybersecurity & Data Protection",
      desc: "Protect your fleet’s data with end-to-end encryption, access controls, and compliance-ready systems.",
    },
  ];

  return (
    <>
      {/* Page Banner */}
      <PageBanner
        title="Fleet Management Solutions"
        subtitle="Driving efficiency with AI, IoT, and intelligent logistics platforms"
      />

      {/* Main Content */}
      <section className="container mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-700 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Smarter Fleets, Stronger Performance
          </motion.h2>
          <motion.p
            className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            APTS TECH delivers end-to-end fleet solutions that integrate telematics, AI, and predictive analytics — helping logistics companies maximize uptime and minimize costs.
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
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Accelerate Your Fleet Digitally
          </h3>
          <p className="max-w-2xl mx-auto text-primary-100 mb-6 text-base sm:text-lg md:text-xl">
            From GPS tracking to AI-driven logistics, APTS TECH empowers your business to run smoother, faster, and smarter.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary-500 text-primary-900 font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:shadow-lg hover:bg-primary-500 transition"
          >
            Schedule a Demo
          </a>
        </motion.div>
      </section>
    </>
  );
}
