
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
    <section className="relative py-20 bg-primary-900 text-primary-50 overflow-hidden">

      {/* ✨ Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[350px] h-[350px] bg-purple-500/20 rounded-full blur-[140px]" />
      </div>
      
      <div className="relative z-10 text-center mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-primary-500">Our</span> Core Services
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Transforming ideas into digital excellence — crafting solutions that drive innovation, security, and success.
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-primary-50 rounded-3xl border border-white/40 overflow-hidden 
                       shadow-lg hover:shadow-2xl transform hover:-translate-y-2 
                       transition-all duration-500 flex flex-col items-center text-center p-8"
          >
            {/* ICON Display */}
            <div className="w-24 h-24 mb-6 flex items-center justify-center bg-primary-50">
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

            <h3 className="text-2xl font-bold mb-2 text-primary-700">
              {service.title}
            </h3>

            <p className="text-gray-600 text-sm mb-6">
              {service.description}
            </p>

            <Link
              href={`/services/${service.slug.current}`}
              className="mt-auto inline-block bg-primary-700 text-white font-semibold 
                         py-2 px-5 rounded-xl hover:bg-primary-500 transition-colors duration-300"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
