// "use client";

// import PageBanner from "../../components/PageBanner";
// import { motion } from "framer-motion";
// import {
//   FaConciergeBell,
//   FaHotel,
//   FaMobileAlt,
//   FaWifi,
//   FaCloud,
//   FaShieldAlt,
// } from "react-icons/fa";

// export default function Hotel() {
//   const features = [
//     {
//       icon: <FaConciergeBell className="text-indigo-600 text-3xl" />,
//       title: "Smart Guest Management",
//       desc: "Digital check-in, personalized booking systems, and AI-powered concierge services to enhance guest experience.",
//     },
//     {
//       icon: <FaHotel className="text-indigo-600 text-3xl" />,
//       title: "Hotel Operations Software",
//       desc: "Integrated ERP solutions for reservations, room service, billing, and housekeeping automation.",
//     },
//     {
//       icon: <FaMobileAlt className="text-indigo-600 text-3xl" />,
//       title: "Mobile Hospitality Apps",
//       desc: "Custom iOS and Android apps that connect guests with hotel facilities, offers, and feedback systems.",
//     },
//     {
//       icon: <FaWifi className="text-indigo-600 text-3xl" />,
//       title: "IoT & Smart Rooms",
//       desc: "IoT-enabled lighting, climate control, and keyless entry for a seamless, tech-driven guest experience.",
//     },
//     {
//       icon: <FaCloud className="text-indigo-600 text-3xl" />,
//       title: "Cloud Property Management",
//       desc: "Centralized cloud platforms to manage multi-location hotels, inventory, and data analytics.",
//     },
//     {
//       icon: <FaShieldAlt className="text-indigo-600 text-3xl" />,
//       title: "Cybersecurity & Data Privacy",
//       desc: "Protect guest information with GDPR-compliant encryption and secure data management systems.",
//     },
//   ];

//   return (
//     <>
//       {/* 🏨 Page Banner */}
//       <PageBanner
//         title="Hotel & Hospitality Solutions"
//         subtitle="Empowering the hospitality industry through innovation and technology"
        
//       />

//       {/* 💡 Main Content */}
//       <section className="container mx-auto px-6 py-20">
//         {/* Header */}
//         <div className="max-w-4xl mx-auto text-center mb-16">
//           <motion.h2
//             className="text-4xl md:text-5xl font-bold text-primary-700"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             Revolutionizing Guest Experiences
//           </motion.h2>
//           <motion.p
//             className="mt-4 text-gray-600 text-lg"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             APTS TECH transforms traditional hotels into smart hospitality hubs with AI, IoT, and mobile-first experiences — designed to enhance efficiency and guest satisfaction.
//           </motion.p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {features.map((item, index) => (
//             <motion.div
//               key={index}
//               className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="p-3 bg-indigo-50 rounded-xl">{item.icon}</div>
//                 <h3 className="font-semibold text-lg text-gray-800">
//                   {item.title}
//                 </h3>
//               </div>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {item.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <motion.div
//           className="mt-20 bg-primary-900 text-white text-center rounded-2xl py-12 px-6 shadow-lg"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.7 }}
//         >
//           <h3 className="text-2xl font-bold mb-3">
//             Redefine the Future of Hospitality
//           </h3>
//           <p className="max-w-2xl mx-auto text-indigo-100 mb-6">
//             From smart rooms to data-driven guest engagement, APTS TECH helps hotels embrace digital excellence and operational efficiency.
//           </p>
//           <a
//             href="/contact"
//             className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-50 transition"
//           >
//             Talk to Our Experts
//           </a>
//         </motion.div>
//       </section>
//     </>
//   );
// }






"use client";

import PageBanner from "../../components/PageBanner";
import { motion } from "framer-motion";
import {
  FaConciergeBell,
  FaHotel,
  FaMobileAlt,
  FaWifi,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa";

export default function Hotel() {
  const features = [
    {
      icon: <FaConciergeBell className="text-primary-500 text-3xl" />,
      title: "Smart Guest Management",
      desc: "Digital check-in, personalized booking systems, and AI-powered concierge services to enhance guest experience.",
    },
    {
      icon: <FaHotel className="text-primary-500 text-3xl" />,
      title: "Hotel Operations Software",
      desc: "Integrated ERP solutions for reservations, room service, billing, and housekeeping automation.",
    },
    {
      icon: <FaMobileAlt className="text-primary-500 text-3xl" />,
      title: "Mobile Hospitality Apps",
      desc: "Custom iOS and Android apps that connect guests with hotel facilities, offers, and feedback systems.",
    },
    {
      icon: <FaWifi className="text-primary-500 text-3xl" />,
      title: "IoT & Smart Rooms",
      desc: "IoT-enabled lighting, climate control, and keyless entry for a seamless, tech-driven guest experience.",
    },
    {
      icon: <FaCloud className="text-primary-500 text-3xl" />,
      title: "Cloud Property Management",
      desc: "Centralized cloud platforms to manage multi-location hotels, inventory, and data analytics.",
    },
    {
      icon: <FaShieldAlt className="text-primary-500 text-3xl" />,
      title: "Cybersecurity & Data Privacy",
      desc: "Protect guest information with GDPR-compliant encryption and secure data management systems.",
    },
  ];

  return (
    <>
      {/* 🏨 Page Banner */}
      <PageBanner
        title="Hotel & Hospitality Solutions"
        subtitle="Empowering the hospitality industry through innovation and technology"
      />

      {/* 💡 Main Content */}
      <section className="container mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-700 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Revolutionizing Guest Experiences
          </motion.h2>
          <motion.p
            className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            APTS TECH transforms traditional hotels into smart hospitality hubs with AI, IoT, and mobile-first experiences — designed to enhance efficiency and guest satisfaction.
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
                <h3 className="font-semibold text-lg sm:text-xl text-primary-900">
                  {item.title}
                </h3>
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
            Redefine the Future of Hospitality
          </h3>
          <p className="max-w-2xl mx-auto text-primary-100 mb-6 text-base sm:text-lg md:text-xl">
            From smart rooms to data-driven guest engagement, APTS TECH helps hotels embrace digital excellence and operational efficiency.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary-500 text-primary-900 font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:shadow-lg hover:bg-primary-500 transition"
          >
            Talk to Our Experts
          </a>
        </motion.div>
      </section>
    </>
  );
}
