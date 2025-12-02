import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import CTASection from "@/app/components/CTASection";
import ContactSection from "@/app/components/ContactForm";

interface PageProps {
  params: { slug: string };
}

export default async function ServiceDetail({ 
   params,
}: {
  params: Promise<{ slug: string }>;  // Updated: params is now a Promise
}) {
  const { slug } = await params;

  const query = `*[_type == "service" && slug.current == $slug][0]{
    title,
    description,
    detail,
    image { asset->{ url } },
    extraImage { asset->{ url } }
  }`;

  const service = await client.fetch(query, { slug });

  if (!service) {
    return (
      <div className="p-10 text-center text-white">Service not found.</div>
    );
  }

  return (
    <div className="bg-[#081527] ">

<div className="absolute inset-0">
        <div className="absolute top-[-80%] left-[-10%] w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-primary-500/0 rounded-full blur-[120px]" />
      </div>

      {/* 🔥 HERO SECTION WITH BACKGROUND IMAGE + BLUR CARD */}
      <section className="relative h-[85vh] w-full">
        {/* Background Image */}
        <Image
          src={service.image?.asset?.url}
          alt={service.title}
          fill
          className="object-cover opacity-70"
        />

        {/* Overlay Blur Box */}
        <div className="absolute inset-0 flex justify-center items-center px-10">
  <div className="backdrop-blur-xl bg-white/20 rounded-3xl p-10 w-[95vw]">
            

          <h1 className="text-4xl md:text-5xl text-white font-bold my-3">
              {service.title}
            </h1>
            <p className="text-lg leading-relaxed text-white mb-6">
            {service.description}
          </p>


            <button className="mt-6 px-8 py-3 bg-primary-700 text-white font-semibold rounded-full hover:bg-white hover:text-black  transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* 🔥 OVERVIEW SECTION (Black Background, White Text) */}
      <section className="px-10 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="uppercase tracking-[4px] text-primary-500 text-3xl font-extrabold mb-3">
            Overview:
          </p>

          
          <div className="prose prose-invert prose-lg max-w-none text-white text-2xl leading-relaxed">
            <PortableText value={service.detail} />
          </div>
        </div>

        {/* SIDE BIG IMAGE */}
        {service.extraImage?.asset?.url && (
          <Image
            src={service.extraImage.asset.url}
            alt="Service Extra"
            width={700}
            height={600}
            className="rounded-2xl shadow-xl"
          />
        )}
      </section>
    <CTASection/>
    <ContactSection/>
    </div>
  );
}
