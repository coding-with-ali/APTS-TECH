



"use client";

export default function Achievements() {
  const stats = [
     { label: "Global Clients", number: "120+" },
            { label: "Projects Delivered", number: "350+" },
            { label: "Countries Served", number: "15+" },
            { label: "Team Members", number: "50+" },
  ];

  return (
    <section className="bg-[#f7fbff] py-20 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto text-center md:text-left flex flex-col md:flex-row md:justify-between md:items-center gap-10">
        
        {/* Text Section */}
        <div className="flex-1">
          <p className="text-[#1f6fbf] font-bold uppercase tracking-wide mb-2">
            Driving Innovation & Excellence
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-black mb-4">
            Our Key Achievements
          </h2>
          <p className="text-black max-w-md">
            We empower businesses worldwide with tailored digital solutions. From custom websites & custom software, we deliver projects that make an impact.
          </p>
          <button className="mt-6 hover:bg-[#1f6fbf] bg-[#113b65] text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition">
            Get in Touch
          </button>
        </div>

        {/* Stats Section */}
        <div className="flex-1 grid grid-cols-2 gap-8 md:grid-cols-2 text-center md:text-left">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl font-extrabold text-[#113b65]">{stat.number}</h3>
              <p className="text-black font-semibold mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
