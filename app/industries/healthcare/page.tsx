"use client";
import PageBanner from "../../components/PageBanner";
import { FaHospitalAlt, FaHeartbeat, FaRobot, FaUserMd, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Healthcare() {
  const features = [
    {
      icon: <FaHospitalAlt className="text-primary-500 text-3xl" />,
      title: "Electronic Health Record (EHR) Systems",
      desc: "Secure, cloud-based EHR platforms designed for multi-branch hospitals with fast patient data retrieval and role-based access.",
    },
    {
      icon: <FaRobot className="text-primary-500 text-3xl" />,
      title: "AI-based Imaging Analysis",
      desc: "Leverage AI for medical image processing—detect anomalies faster with machine learning-powered diagnostic tools.",
    },
    {
      icon: <FaUserMd className="text-primary-500 text-3xl" />,
      title: "Patient Portals & Appointment Systems",
      desc: "Simplify patient engagement with intuitive appointment scheduling, online billing, and real-time status updates.",
    },
    {
      icon: <FaShieldAlt className="text-primary-500 text-3xl" />,
      title: "Data Security & Compliance",
      desc: "HIPAA-compliant infrastructure, end-to-end encryption, and continuous monitoring ensure complete data protection.",
    },
    {
      icon: <FaHeartbeat className="text-primary-500 text-3xl" />,
      title: "IoT Health Monitoring",
      desc: "Integrate wearable data and IoT medical devices for continuous remote patient monitoring and health insights.",
    },
  ];

  return (
    <>
      {/* Page Banner */}
      <PageBanner
        title="Healthcare Solutions"
        subtitle="Empowering hospitals with secure, intelligent digital systems"
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
            Transforming Healthcare Through Technology
          </motion.h2>
          <motion.p
            className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            APTS TECH designs end-to-end healthcare ecosystems — from digital hospitals to AI-powered diagnostics and patient engagement platforms. Our mission is to make healthcare smarter, faster, and more secure.
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
            Modernize Your Healthcare Facility
          </h3>
          <p className="max-w-2xl mx-auto text-primary-100 mb-6 text-base sm:text-lg md:text-xl">
            From AI diagnostics to secure patient portals, APTS TECH empowers hospitals with cutting-edge digital solutions that improve efficiency, security, and patient satisfaction.
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
