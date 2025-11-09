import { client } from '../../../sanity/lib/client'
import { servicesQuery } from '../../../sanity/lib/queries'
import { Service } from '../../../types/service'
import Image from 'next/image'

interface Params {
  params: { slug: string }
}

export default async function ServiceDetail({ params }: Params) {
  const { slug } = params
  const query = `*[_type == "service" && slug.current == $slug][0]{title, description, icon}`
  const service: Service = await client.fetch(query, { slug })

  if (!service) return <div className="p-10 text-center">Service not found.</div>

  return (
    <section className="container mx-auto px-6 py-16">
  <h1 className="text-4xl font-bold text-indigo-700">{service.title}</h1>
  <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
    {service.icon?.asset?.url && (
      <Image
        src={service.icon.asset.url}
        alt={service.title}
        width={500}
        height={400}
        className="rounded-lg border"
      />
    )}
    <p className="text-gray-700 leading-relaxed">{service.description}</p>
  </div>
</section>

  )
}
