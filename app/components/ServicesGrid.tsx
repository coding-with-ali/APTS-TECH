// // 'use client'

// // import Image from "next/image"
// // import Link from "next/link"

// // const services = [
// //   {
// //     title: "Software Development",
// //     desc: "Custom enterprise-grade software solutions engineered for scalability, performance, and security.",
// //     img: "/services/software.jpg",
// //   },
// //   {
// //     title: "Mobile App Development",
// //     desc: "Seamless iOS and Android experiences designed for users, built for business growth.",
// //     img: "/services/app.jpeg",
// //   },
// //   {
// //     title: "AI & Machine Learning",
// //     desc: "Intelligent automation and data-driven solutions that transform businesses through predictive insights.",
// //     img: "/services/Ai.jpeg",
// //   },
// //   {
// //     title: "Cybersecurity Solutions",
// //     desc: "Comprehensive protection through proactive monitoring, SOC setup, and zero-trust architecture.",
// //     img: "/services/Cybersecurity.jpeg",
// //   },
// //   {
// //     title: "Cloud & DevOps",
// //     desc: "Empowering agility with cloud-native CI/CD pipelines, Kubernetes orchestration, and infrastructure automation.",
// //     img: "/services/cloud.jpeg",
// //   },
// //   {
// //     title: "Data & Business Intelligence",
// //     desc: "Unlock actionable insights with real-time analytics dashboards and BI ecosystems.",
// //     img: "/services/data.jpeg",
// //   },
// // ]

// // export default function ServicesGrid() {
// //   return (
// //     <section className="py-20 bg-gradient-to-br from-[#0A0F2C] via-[#111E4C] to-[#1E2A78] text-gray-100">
// //       <div className="text-center mb-16">
// //         <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Core Services</h2>
// //         <p className="text-gray-300 max-w-2xl mx-auto text-lg">
// //           Transforming ideas into digital excellence — crafting solutions that drive innovation, security, and success.
// //         </p>
// //       </div>

// //       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
// //         {services.map((service, index) => (
// //           <div
// //             key={index}
// //             className="bg-white rounded-3xl border-2 border-white overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 flex flex-col"
// //           >
// //             {/* Image with overlay */}
// //             <div className="relative w-full h-64 group overflow-hidden">
// //               <Image
// //                 src={service.img}
// //                 alt={service.title}
// //                 fill
// //                 className="object-cover group-hover:scale-110 transition-transform duration-500"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
// //             </div>

// //             {/* Content */}
// //             <div className="p-6 flex flex-col flex-1">
// //               <h3 className="text-2xl font-bold mb-2 text-indigo-700 group-hover:text-indigo-500 transition-colors duration-300">
// //                 {service.title}
// //               </h3>
// //               <p className="text-gray-600 text-sm mb-4 flex-1">{service.desc}</p>
// //               <Link
// //                 href="#"
// //                 className="mt-auto inline-block bg-indigo-600 text-white font-semibold py-2 px-5 rounded-xl hover:bg-indigo-500 transition-colors duration-300 text-center"
// //               >
// //                 Read More
// //               </Link>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   )
// // }




// 'use client'

// import Image from "next/image"
// import Link from "next/link"

// const services = [
//   {
//     title: "Software Development",
//     slug: "software-development",
//     desc: "Custom enterprise-grade software solutions engineered for scalability, performance, and security.",
//     img: "/services/software.jpg",
//   },
//   {
//     title: "Mobile App Development",
//     slug: "mobile-app-development",
//     desc: "Seamless iOS and Android experiences designed for users, built for business growth.",
//     img: "/services/app.jpeg",
//   },
//   {
//     title: "AI & Machine Learning",
//     slug: "ai-machine-learning",
//     desc: "Intelligent automation and data-driven solutions that transform businesses through predictive insights.",
//     img: "/services/Ai.jpeg",
//   },
//   {
//     title: "Cybersecurity Solutions",
//     slug: "cybersecurity-solutions",
//     desc: "Comprehensive protection through proactive monitoring, SOC setup, and zero-trust architecture.",
//     img: "/services/Cybersecurity.jpeg",
//   },
//   {
//     title: "Cloud & DevOps",
//     slug: "cloud-devops",
//     desc: "Empowering agility with cloud-native CI/CD pipelines, Kubernetes orchestration, and infrastructure automation.",
//     img: "/services/cloud.jpeg",
//   },
//   {
//     title: "Data & Business Intelligence",
//     slug: "data-business-intelligence",
//     desc: "Unlock actionable insights with real-time analytics dashboards and BI ecosystems.",
//     img: "/services/data.jpeg",
//   },
// ]

// export default function ServicesGrid() {
//   return (
//     <section className="py-20 bg-gradient-to-br from-[#0A0F2C] via-[#111E4C] to-[#1E2A78] text-gray-100">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Core Services</h2>
//         <p className="text-gray-300 max-w-2xl mx-auto text-lg">
//           Transforming ideas into digital excellence — crafting solutions that drive innovation, security, and success.
//         </p>
//       </div>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-3xl border-2 border-white overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 flex flex-col"
//           >
//             {/* Image */}
//             <div className="relative w-full h-64 group overflow-hidden">
//               <Image
//                 src={service.img}
//                 alt={service.title}
//                 fill
//                 className="object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//             </div>

//             {/* Content */}
//             <div className="p-6 flex flex-col flex-1">
//               <h3 className="text-2xl font-bold mb-2 text-indigo-700">{service.title}</h3>
//               <p className="text-gray-600 text-sm mb-4 flex-1">{service.desc}</p>

//               {/* 👇 Dynamic Route Link */}
//               <Link
//                 href={`/services/${service.slug}`}
//                 className="mt-auto inline-block bg-indigo-600 text-white font-semibold py-2 px-5 rounded-xl hover:bg-indigo-500 transition-colors duration-300 text-center"
//               >
//                 Read More
//               </Link>

//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }





'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { allServicesQuery } from "@/sanity/lib/queries"

interface Service {
  title: string
  slug: { current: string }
  description: string
  icon?: { asset?: { url: string } }
  image?: { asset?: { url: string } }
}

export default function ServicesGrid() {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    async function load() {
      const data = await client.fetch(allServicesQuery)
      setServices(data)
    }
    load()
  }, [])

  return (
    <section className="py-20 bg-primary-900 text-primary-50">

      {/* ✨ Background Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-purple-500/20 rounded-full blur-[120px]" />
      </div>
      
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4"><span className="text-primary-500">Our</span> Core Services</h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Transforming ideas into digital excellence — crafting solutions that drive innovation, security, and success.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-primary-50 rounded-3xl border-2 border-white overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center p-8"
          >
            {/* ICON Display */}
            <div className="w-24 h-24 mb-6 flex items-center justify-center bg-primary-50 ">
              {service.icon?.asset?.url ? (
                <Image
                  src={service.icon.asset.url}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              ) : (
                <span className="text-gray-400">No Icon</span>
              )}
            </div>

            <h3 className="text-2xl font-bold mb-2 text-primary-700">{service.title}</h3>

            <p className="text-gray-600 text-sm mb-6">
              {service.description}
            </p>

            <Link
              href={`/services/${service.slug.current}`}
              className="mt-auto inline-block bg-primary-700 text-white font-semibold py-2 px-5 rounded-xl hover:bg-primary-500 transition-colors duration-300"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
