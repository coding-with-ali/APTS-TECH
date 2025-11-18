
'use client'

import Image from 'next/image'
import Link from 'next/link'

const steps = [
  {
    id: 1,
    title: 'Submit Application',
    src: '/services/submit.jpg',
  },
  {
    id: 2,
    title: 'Expert Evaluation',
    src: '/services/expert.webp',
  },
  {
    id: 3,
    title: 'Personal Interview',
    src: '/services/associate.jpg',
  },
  {
    id: 4,
    title: 'Seamless Onboarding',
    src: '/services/seamless.webp',
  },
]

export default function DevsincCareer() {
  return (
    <section className="bg-primary-900 text-white">

      {/* HERO SECTION */}
      <section className="relative h-[60vh] md:h-[85vh] w-full">
        <Image
          src="/services/carrer.jpeg"
          alt="carrer image"
          fill
          quality={100}
          className="object-cover opacity-90"
        />

        <div className="absolute inset-0 top-32 md:top-48 flex justify-center items-start px-4 md:px-10">
          <div className="backdrop-blur-xl bg-white/20 rounded-3xl p-6 md:p-10 w-full max-w-5xl mx-auto text-center">
            <h1 className="text-2xl md:text-5xl font-bold my-3">
              Where People Drive Innovation
            </h1>
            <p className="text-sm md:text-lg leading-relaxed text-gray-200">
              We’re more than a workplace—we’re a people-first community that grows stronger together.
            </p>

            <button className="mt-6 px-6 md:px-8 py-3 bg-primary-700 text-white font-semibold rounded-full hover:bg-white hover:text-black transition">
              Apply at APTS
            </button>
          </div>
        </div>
      </section>

      {/* YOUR PATH SECTION */}
      <div className="container mx-auto py-16 md:py-20 px-4 md:px-6 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Your Path to Joining <span className="text-primary-500"> APTS TECH</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-4 border-4 border-white">
                <Image
                  src={step.src}
                  alt={step.title}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="text-xl md:text-2xl font-bold">
                {step.id}. {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* CAREER PATHWAYS */}
      <div className="relative py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-full mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Career Pathways</h2>
          <p className="mb-10 md:mb-16 text-base md:text-lg max-w-2xl mx-auto">
            At Devsinc, we provide a clear path to help you achieve your professional aspirations.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Associate Software Engineer", desc: "Hone your skills with impactful projects.", img: "/services/associate.webp" },
              { title: "Software Engineer", desc: "Deliver innovative solutions with confidence.", img: "/services/junior.webp" },
              { title: "Senior Software Engineer", desc: "Lead by expertise and technical mastery.", img: "/services/senior.webp" },
              { title: "Associate Team Lead", desc: "Mentor peers and manage workflows.", img: "/services/team.webp" },
              { title: "Team Lead", desc: "Drive team success with vision.", img: "/services/leader.webp" },
            ].map((item, idx) => (
              <div key={idx} className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={500}
                  className="w-full h-64 md:h-80 object-cover"
                />

                <div className="absolute top-4 p-4 text-left z-20">
                  <h4 className="font-extrabold text-xl md:text-2xl text-white">{item.title}</h4>
                </div>

                <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm md:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 md:mt-16">
            <Link
              href="/carrerDetail"
              className="inline-block px-6 md:px-8 py-3 bg-primary-700 text-lg font-bold text-white rounded-full hover:bg-primary-500 transition"
            >
              Explore Opportunities
            </Link>
          </div>
        </div>
      </div>

      {/* GLOBAL TALENT SECTION */}
      <div className="relative py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-full mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Connecting Talent Across the World
          </h2>

          <p className="mb-10 md:mb-16 text-base md:text-lg max-w-2xl mx-auto">
            At APTS TECH, we take pride in our global presence, bringing together talented individuals from diverse cultures and regions to create impactful solutions.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "A Truly Global Workforce", desc: "Our engineers span the globe.", img: "/services/1.jpeg" },
              { title: "Diverse Perspectives", desc: "Creativity from cultural diversity.", img: "/services/2.jpg" },
              { title: "Seamless Collaboration", desc: "Unified solutions across borders.", img: "/services/3.webp" },
              { title: "Opportunities Without Limits", desc: "Grow globally with APTS.", img: "/services/4.webp" },
            ].map((item, idx) => (
              <div key={idx} className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={600}
                  className="w-full h-72 md:h-[500px] object-cover"
                />

                <div className="absolute top-4 p-4 text-left z-20">
                  <h4 className="font-extrabold text-xl md:text-2xl lg:text-4xl text-white">{item.title}</h4>
                </div>

                <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm md:text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  )
}
