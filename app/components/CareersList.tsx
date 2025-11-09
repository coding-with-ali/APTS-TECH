import { client } from "../../sanity/lib/client";
import Link from "next/link";
import { Career } from "@/types/career";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default async function CareersList() {
  const careers: Career[] = await client.fetch(
    `*[_type == "career"] | order(_createdAt desc)`
  );

  if (!careers.length)
    return (
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">
          No Openings Available
        </h2>
        <p className="text-gray-500 max-w-md mx-auto">
          We're not hiring right now, but feel free to check back later or send
          your resume to{" "}
          <a
            href="mailto:careers@aptstech.com"
            className="text-indigo-600 font-medium hover:underline"
          >
            careers@aptstech.com
          </a>
          .
        </p>
      </section>
    );

  return (
    <section className="relative py-24 overflow-hidden">
      {/* 🌈 Subtle Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-indigo-50" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full animate-pulse" />

      {/* Centered Header */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-linear-to-r from-indigo-700 via-indigo-600 to-indigo-500 bg-clip-text text-transparent">
          Join Our Team
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Be part of a team that’s building innovative technology solutions for
          tomorrow’s industries. Explore our open positions below.
        </p>
      </div>

      {/* Careers Grid */}
      <div className="relative z-10 container mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {careers.map((c) => (
          <div
            key={c._id}
            className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition">
                {c.title}
              </h3>
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt className="text-indigo-500" />
                  {c.location}
                </span>
                <span className="flex items-center gap-1">
                  <FaClock className="text-indigo-500" />
                  {c.type}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                {c.description ||
                  "Exciting opportunity to grow and innovate with APTS TECH."}
              </p>
            </div>

            <Link
              href={`/careers/${c._id}`}
              className="mt-6 inline-block text-center bg-indigo-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
