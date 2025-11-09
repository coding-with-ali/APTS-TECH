import { client } from "@/sanity/lib/client";
import { Career } from "../../types/career";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default async function CareersList() {
  const careers: Career[] = await client.fetch(`
    *[_type == "career"] | order(_createdAt desc){
      _id,
      title,
      slug,
      location,
      type,
      description
    }
  `);

  if (!careers.length)
    return (
      <section className="text-center py-24 px-6">
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
    <section className="relative py-24 overflow-hidden bg-gray-50">
      <div className="relative z-10 flex flex-col items-center text-center px-6 mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-700 bg-clip-text text-transparent">
          Join Our Team
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl">
          Be part of a team building innovative technology solutions. Explore
          our open positions below.
        </p>
      </div>

      <div className="relative z-10 container mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {careers.map((c) => (
          <div
            key={c._id}
            className="group bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-indigo-600 transition">
                {c.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                {c.location && (
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-indigo-500" />
                    {c.location}
                  </span>
                )}
                {c.type && (
                  <span className="flex items-center gap-1">
                    <FaClock className="text-indigo-500" />
                    {c.type}
                  </span>
                )}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                {c.description ||
                  "Exciting opportunity to grow and innovate with APTS TECH."}
              </p>
            </div>

            <a
              href={`mailto:careers@aptstech.com?subject=Application for ${encodeURIComponent(
                c.title
              )}`}
              className="mt-6 w-full text-center bg-indigo-600 text-white font-semibold px-5 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
