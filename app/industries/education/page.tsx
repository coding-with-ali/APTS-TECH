"use client";
import PageBanner from "../../components/PageBanner";
import { motion } from "framer-motion";
import { FaLaptopCode, FaChalkboardTeacher, FaUserGraduate, FaCloud, FaBrain, FaLock } from "react-icons/fa";

export default function Education() {
  const features = [
    {
      icon: <FaChalkboardTeacher className="text-indigo-600 text-3xl" />,
      title: "Learning Management Systems (LMS)",
      desc: "Custom-built LMS platforms with role-based dashboards, assignments, and performance tracking for schools and universities.",
    },
    {
      icon: <FaUserGraduate className="text-indigo-600 text-3xl" />,
      title: "Student & Faculty Portals",
      desc: "Secure, centralized systems for managing admissions, attendance, grades, and student communication.",
    },
    {
      icon: <FaBrain className="text-indigo-600 text-3xl" />,
      title: "AI-Powered Assessments",
      desc: "AI-driven test creation and grading tools that analyze learning patterns and provide personalized feedback to students.",
    },
    {
      icon: <FaLaptopCode className="text-indigo-600 text-3xl" />,
      title: "E-Learning Platforms",
      desc: "Seamless virtual classrooms, live lectures, video streaming, and gamified learning experiences.",
    },
    {
      icon: <FaCloud className="text-indigo-600 text-3xl" />,
      title: "Cloud-Based Infrastructure",
      desc: "Highly scalable architecture hosted on AWS & Azure with 99.9% uptime and global accessibility.",
    },
    {
      icon: <FaLock className="text-indigo-600 text-3xl" />,
      title: "Data Privacy & Security",
      desc: "Compliant with GDPR and FERPA standards to protect student and institutional data.",
    },
  ];

  return (
    <>
      <PageBanner
        title="Education Technology"
        subtitle="Transforming classrooms through digital learning"
      
      />

      <section className="container mx-auto px-6 py-20">
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-indigo-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Shaping the Future of Learning
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            APTS TECH partners with educational institutions worldwide to build next-generation
            digital learning ecosystems — uniting innovation, analytics, and accessibility for a smarter classroom experience.
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
          className="mt-20 bg-gradient-to-br from-[#0A0F2C] via-[#141E61] to-[#1E2A78] text-white text-center rounded-2xl py-12 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold mb-3">Digitize Your Campus Today</h3>
          <p className="max-w-2xl mx-auto text-indigo-100 mb-6">
            Whether you’re a school, university, or EdTech startup, APTS TECH helps you build
            intelligent platforms that elevate learning outcomes and engagement.
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
