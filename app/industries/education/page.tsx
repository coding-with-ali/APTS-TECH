"use client";
import PageBanner from "../../components/PageBanner";
import { motion } from "framer-motion";
import { FaLaptopCode, FaChalkboardTeacher, FaUserGraduate, FaCloud, FaBrain, FaLock } from "react-icons/fa";

export default function Education() {
  const features = [
    {
      icon: <FaChalkboardTeacher className="text-primary-500 text-3xl" />,
      title: "Learning Management Systems (LMS)",
      desc: "Custom-built LMS platforms with role-based dashboards, assignments, and performance tracking for schools and universities.",
    },
    {
      icon: <FaUserGraduate className="text-primary-500 text-3xl" />,
      title: "Student & Faculty Portals",
      desc: "Secure, centralized systems for managing admissions, attendance, grades, and student communication.",
    },
    {
      icon: <FaBrain className="text-primary-500 text-3xl" />,
      title: "AI-Powered Assessments",
      desc: "AI-driven test creation and grading tools that analyze learning patterns and provide personalized feedback to students.",
    },
    {
      icon: <FaLaptopCode className="text-primary-500 text-3xl" />,
      title: "E-Learning Platforms",
      desc: "Seamless virtual classrooms, live lectures, video streaming, and gamified learning experiences.",
    },
    {
      icon: <FaCloud className="text-primary-500 text-3xl" />,
      title: "Cloud-Based Infrastructure",
      desc: "Highly scalable architecture hosted on AWS & Azure with 99.9% uptime and global accessibility.",
    },
    {
      icon: <FaLock className="text-primary-500 text-3xl" />,
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

      <section className="container mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24">
        {/* Intro Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-700 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Shaping the Future of Learning
          </motion.h2>
          <motion.p
            className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            APTS TECH partners with educational institutions worldwide to build next-generation digital learning ecosystems — uniting innovation, analytics, and accessibility for a smarter classroom experience.
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
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Digitize Your Campus Today</h3>
          <p className="max-w-2xl mx-auto text-primary-100 mb-6 text-base sm:text-lg md:text-xl">
            Whether you’re a school, university, or EdTech startup, APTS TECH helps you build intelligent platforms that elevate learning outcomes and engagement.
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
