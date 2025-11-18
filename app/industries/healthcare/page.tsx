"use client";
import PageBanner from "../../components/PageBanner";
import { FaHospitalAlt, FaHeartbeat, FaRobot, FaUserMd, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import CTASection from "@/app/components/CTASection";

export default function Healthcare() {
  const features = [
    {
      icon: <FaHospitalAlt className="text-indigo-600 text-3xl" />,
      title: "Electronic Health Record (EHR) Systems",
      desc: "Secure, cloud-based EHR platforms designed for multi-branch hospitals with fast patient data retrieval and role-based access.",
    },
    {
      icon: <FaRobot className="text-indigo-600 text-3xl" />,
      title: "AI-based Imaging Analysis",
      desc: "Leverage AI for medical image processing—detect anomalies faster with machine learning-powered diagnostic tools.",
    },
    {
      icon: <FaUserMd className="text-indigo-600 text-3xl" />,
      title: "Patient Portals & Appointment Systems",
      desc: "Simplify patient engagement with intuitive appointment scheduling, online billing, and real-time status updates.",
    },
    {
      icon: <FaShieldAlt className="text-indigo-600 text-3xl" />,
      title: "Data Security & Compliance",
      desc: "HIPAA-compliant infrastructure, end-to-end encryption, and continuous monitoring ensure complete data protection.",
    },
    {
      icon: <FaHeartbeat className="text-indigo-600 text-3xl" />,
      title: "IoT Health Monitoring",
      desc: "Integrate wearable data and IoT medical devices for continuous remote patient monitoring and health insights.",
    },
  ];

  return (
    <>
      <PageBanner
        title="Healthcare Solutions"
        subtitle="Empowering hospitals with secure, intelligent digital systems"
      />

      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-primary-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Transforming Healthcare Through Technology
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            APTS TECH designs end-to-end healthcare ecosystems — from digital hospitals to
            AI-powered diagnostics and patient engagement platforms. Our mission is to make
            healthcare smarter, faster, and more secure.
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

        {/* Call to Action */}
        <motion.div
          className="mt-20 bg-primary-900 text-white text-center "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
        <CTASection/>
        </motion.div>
      </section>
    </>
  );
}
