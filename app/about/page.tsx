import Image from "next/image";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A0F2C] via-[#111E4C] to-[#1E2A78] text-white py-24 px-6 md:px-12 lg:px-20">
      {/* 🌫️ Background Glow */}
      <div className="absolute top-[-100px] left-[-80px] w-[400px] h-[400px] bg-indigo-600/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-100px] right-[-80px] w-[400px] h-[400px] bg-blue-500/20 blur-[140px] rounded-full" />

      {/* 🧠 Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-300 to-blue-400 bg-clip-text text-transparent">
          About <span className="text-white">APTS TECH</span>
        </h1>
        <p className="text-indigo-100/80 text-lg max-w-3xl mx-auto leading-relaxed">
          Founded in <strong>2022</strong>, <span className="text-indigo-300 font-semibold">APTS TECH</span> is a next-generation technology company
          delivering cutting-edge software, AI, and cybersecurity solutions for global enterprises.
          <br />
          We empower businesses to achieve <span className="text-indigo-200 font-medium">digital transformation</span> through
          innovation, performance, and security.
        </p>

        {/* 📈 Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-12">
          {[
            { label: "Global Clients", value: "120+" },
            { label: "Projects Delivered", value: "350+" },
            { label: "Countries Served", value: "15+" },
            { label: "Team Members", value: "50+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur-md rounded-2xl py-6 hover:bg-white/10 transition-all shadow-md"
            >
              <h3 className="text-3xl font-bold text-indigo-300">{stat.value}</h3>
              <p className="text-sm text-indigo-100 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* 💡 Mission & Vision */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-white/5 hover:bg-white/10 transition-all p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-indigo-200 mb-4">Our Mission</h3>
            <p className="text-indigo-100/80 leading-relaxed">
              To empower organizations with advanced digital technologies that enhance efficiency,
              scalability, and security — driving innovation for a smarter world.
            </p>
          </div>
          <div className="bg-white/5 hover:bg-white/10 transition-all p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-indigo-200 mb-4">Our Vision</h3>
            <p className="text-indigo-100/80 leading-relaxed">
              To be a global leader in software innovation, shaping the future through AI-driven,
              sustainable, and human-centered technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
