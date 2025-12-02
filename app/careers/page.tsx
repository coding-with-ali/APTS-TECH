'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from "../components/ContactForm";

const steps = [
  { id: 1, title: 'Submit Application', src: '/services/submit.jpg' },
  { id: 2, title: 'Expert Evaluation', src: '/services/expert.webp' },
  { id: 3, title: 'Personal Interview', src: '/services/associate.jpg' },
  { id: 4, title: 'Seamless Onboarding', src: '/services/seamless.webp' },
];

export default function DevsincCareer() {
  return (
    <section className="bg-[#081527] text-white">

      {/* ================== HERO SECTION ================== */}
      <section className="relative min-h-[85vh] flex flex-col md:flex-row items-center justify-center overflow-hidden bg-[#081527] text-[#f7fbff] px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">

        {/* BG SHAPES */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute right-[8%] top-[20%] w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-[#00E5FF33] rounded-full blur-[100px] animate-float-slow" />
        </div>

        {/* CONTENT CONTAINER */}
        <div className="relative z-10 flex flex-col md:flex-row items-start gap-10 w-full max-w-7xl">

          {/* LEFT TEXT */}
          <div className="flex-1 text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-[70px] font-extrabold leading-tight tracking-tight">
              Where People <span className="text-[#00E5FF]">Drive Innovation</span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold mt-4 text-gray-200">
              Join Our People-First Community
            </h2>
          </div>

          {/* RIGHT PARAGRAPH + BUTTON */}
          <div className="flex-1 max-w-xl">
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-300">
              At APTS Tech, we’re more than a workplace—we’re a thriving community where innovation meets growth. 
              We empower individuals to achieve their professional aspirations.
            </p>

            <Link href="/carrerDetail">
            <button className="mt-6 bg-[#00E5FF] text-[#0A1A2F] px-6 sm:px-8 py-3 rounded-xl font-bold shadow-[0_0_20px_#00E5FF66] hover:opacity-90 transition text-base sm:text-lg">
              Apply at APTS
            </button>
          </Link>
          </div>

        </div>
      </section>

      {/* ================== YOUR PATH SECTION ================== */}
      <div className="relative py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-white text-black overflow-hidden">

        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-12 text-center">
          Your Path to Joining <span className="text-primary-500">APTS TECH</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 text-center">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 border-4 sm:border-8 border-black">
                <Image src={step.src} alt={step.title} width={300} height={300} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary-500">
                {step.id}. <span className="text-black">{step.title}</span>
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* ================== CAREER PATHWAYS ================== */}
      <div className="relative py-16 sm:py-24 px-4 sm:px-8 text-white">

        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4">
            Career <span className="text-primary-500">Pathways</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-200 mb-12">
            Explore structured growth and leadership opportunities.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Associate Software Engineer", desc: "Kickstart your career", img: "/services/associate.webp" },
              { title: "Software Engineer", desc: "Build world-class solutions", img: "/services/junior.webp" },
              { title: "Senior Software Engineer", desc: "Lead technical excellence", img: "/services/senior.webp" },
              { title: "Associate Team Lead", desc: "Guide and mentor teams", img: "/services/team.webp" },
              { title: "Team Lead", desc: "Drive high-performing teams", img: "/services/leader.webp" },
            ].map((item, idx) => (
              <div key={idx} className="relative group rounded-2xl overflow-hidden shadow-xl cursor-pointer">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={500}
                  className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <h4 className="text-lg sm:text-xl font-extrabold">{item.title}</h4>
                </div>
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition">
                  <p className="text-white text-sm sm:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/carrerDetail">
            <button className="mt-6 bg-[#00E5FF] text-[#0A1A2F] px-6 sm:px-8 py-3 rounded-xl font-bold shadow-[0_0_20px_#00E5FF66] hover:opacity-90 transition text-base sm:text-lg">
              Explore opportunities
            </button>
          </Link>
          </div>
        </div>
      </div>

      {/* ================== GLOBAL CAREER ================== */}
      <div className="relative bg-white py-16 sm:py-24 px-4 text-black">

        <h2 className="text-center text-primary-500 text-base sm:text-lg font-semibold mb-3">
          GLOBAL CAREER
        </h2>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-center mb-6">
          Connecting Talent Across the World
        </h2>

        <p className="max-w-2xl mx-auto text-center text-gray-700 text-sm sm:text-base mb-12">
          At APTS TECH, talent knows no boundaries.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "A Global Workforce", desc: "Engineers from around the world.", img: "/services/1.jpeg" },
            { title: "Diverse Perspectives", desc: "Innovation from global cultures.", img: "/services/2.jpg" },
            { title: "Seamless Collaboration", desc: "Unified teamwork worldwide.", img: "/services/3.webp" },
            { title: "Unlimited Opportunities", desc: "Grow globally with us.", img: "/services/4.webp" },
          ].map((item, idx) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src={item.img}
                alt={item.title}
                width={600}
                height={600}
                className="w-full h-60 sm:h-72 md:h-[420px] object-cover"
              />

              <div className="absolute bottom-4 left-4">
                <h4 className="font-bold text-lg sm:text-xl lg:text-3xl text-white">{item.title}</h4>
              </div>

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center p-4 transition">
                <p className="text-white text-sm sm:text-base md:text-lg">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT SECTION */}
      <ContactSection />
    </section>
  );
}
