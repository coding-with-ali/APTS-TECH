import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Sliders, MapPin, Eye, Atom } from "lucide-react";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#081527] text-white py-20 md:py-28 px-6 md:px-10 lg:px-20">

      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-80px] w-[350px] h-[350px] bg-primary-700/40 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-100px] right-[-80px] w-[350px] h-[350px] bg-primary-500/20 blur-[140px] rounded-full" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* About Heading */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-primary-500 bg-clip-text text-transparent">
            About <span className="text-white">APTS TECH</span>
          </h1>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed px-2">
            Founded in <strong>2022</strong>, 
            <span className="text-primary-500 font-semibold"> APTS TECH </span> 
            delivers cutting-edge software, AI, and cybersecurity solutions that 
            empower businesses to achieve digital transformation with innovative, 
            secure, and high-performance technologies.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 mt-14">
          {[
            { label: "Global Clients", value: "120+" },
            { label: "Projects Delivered", value: "350+" },
            { label: "Countries Served", value: "15+" },
            { label: "Team Members", value: "50+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur-md rounded-2xl py-6 md:py-8 text-center hover:bg-white/10 transition-all"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-primary-500">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base text-gray-300 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="w-full py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Our <span className="text-primary-500">Mission</span>
          </h2>

          <div className="relative border border-gray-700 rounded-3xl p-8 md:p-14">
            <div className="absolute -top-10 right-10 bg-primary-500 w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center shadow-lg">
              <FaQuoteLeft className="text-white text-3xl md:text-5xl" />
            </div>

            <p className="text-base md:text-xl leading-relaxed text-gray-200 mt-10">
              To empower businesses with cutting-edge technology solutions,
              unlocking their growth potential by connecting them with passionate
              and skilled engineers.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="w-full py-10 md:py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Our <span className="text-primary-500">Vision</span>
          </h2>

          <div className="relative border border-gray-700 rounded-3xl p-8 md:p-14">
            <div className="absolute -top-10 right-10 bg-primary-500 w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center shadow-lg">
              <FaQuoteLeft className="text-white text-3xl md:text-5xl" />
            </div>

            <p className="text-base md:text-xl leading-relaxed text-gray-200 mt-10">
              We envision transforming IT systems into smart, agile,
              AI-driven digital assets. With years of expertise, we empower
              global clients through innovative and adaptive solutions that
              meet the demands of a connected digital world.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="w-full py-16">
          <p className="text-center text-primary-500 tracking-[0.3em] text-xs md:text-sm mb-3">
            OUR VALUES
          </p>

          <h2 className="text-center text-3xl md:text-5xl font-bold mb-14">
            We Believe in Providing Value.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Sliders size={50} className="mx-auto mb-5" />,
                title: "Ship & Iterate",
                text: "We move swiftly, refining our approach with every step.",
              },
              {
                icon: <MapPin size={50} className="mx-auto mb-5" />,
                title: "Trusted Pair of Hands",
                text: "Dependable and steadfast — always there when it matters.",
              },
              {
                icon: <Eye size={50} className="mx-auto mb-5" />,
                title: "Overdeliver the Promise",
                text: "Exceeding expectations is our standard.",
              },
              {
                icon: <Atom size={50} className="mx-auto mb-5" />,
                title: "Clear is Kind",
                text: "Transparent communication keeps everyone aligned.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 text-center shadow-md"
              >
                {card.icon}
                <h3 className="text-2xl font-semibold mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-200">{card.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Presence Section */}
        <div className="w-full py-20">
          <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-5">
            Our Global Presence
          </h2>

          <p className="text-center text-gray-300 text-base md:text-lg mb-12 max-w-2xl mx-auto">
            We support clients in 23+ countries and continue to grow through innovation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { name: "Pakistan", img: "/services/pakistan.webp" },
              { name: "United States of America", img: "/services/usa.webp" },
              { name: "United Arab Emirates", img: "/services/uae.webp" },
              { name: "Kingdom of Saudi Arabia", img: "/services/saudia.webp" },
              { name: "United Kingdom", img: "/services/uk.webp" },
            ].map((country) => (
              <div key={country.name}>
                <div className="relative w-full h-[280px] md:h-[350px] rounded-xl overflow-hidden">
                  <Image
                    src={country.img}
                    alt={country.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-lg text-center mt-3">{country.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
