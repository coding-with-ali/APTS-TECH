

"use client";
import { client } from "@/sanity/lib/client";
import { Career } from "../../types/career";
import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function CareersList() {
  const [careers, setCareers] = useState<Career[]>([]);
  const [filteredCareers, setFilteredCareers] = useState<Career[]>([]);
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCareers = async () => {
      const data: Career[] = await client.fetch(`
        *[_type == "career"] | order(_createdAt desc){
          _id,
          title,
          slug,
          location,
          type,
          description
        }
      `);
      setCareers(data);
      setFilteredCareers(data);
    };
    fetchCareers();
  }, []);

  useEffect(() => {
    let temp = [...careers];
    if (locationFilter) temp = temp.filter(c => c.location === locationFilter);
    if (typeFilter) temp = temp.filter(c => c.type === typeFilter);
    if (searchQuery)
      temp = temp.filter(c =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    setFilteredCareers(temp);
  }, [locationFilter, typeFilter, searchQuery, careers]);

  return (
    <section className="py-24 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-primary-700 bg-clip-text text-transparent">
          Current Openings
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Be part of a team building innovative technology solutions. Explore
          our open positions below.
        </p>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-6 mb-12 flex flex-wrap gap-4 justify-center">
        <input
          type="text"
          placeholder="Search by keyword..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="px-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
        />
        <select
          value={locationFilter}
          onChange={e => setLocationFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
        >
          <option value="">All Locations</option>
          {[...new Set(careers.map(c => c.location))].map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
        <select
          value={typeFilter}
          onChange={e => setTypeFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
        >
          <option value="">All Job Types</option>
          {[...new Set(careers.map(c => c.type))].map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Careers Grid */}
      <div className="container mx-auto px-6 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredCareers.map(c => (
          <div
            key={c._id}
            className="group relative bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 overflow-hidden"
          >
            <div className="p-6 flex flex-col justify-between">
              {/* Job Info */}
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-3  transition-colors">
                  {c.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
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
                  {c.description || "Exciting opportunity to grow and innovate."}
                </p>
              </div>

              {/* Apply Button */}
              <a
                href={`mailto:careers@yourdomain.com?subject=Application for ${encodeURIComponent(
                  c.title
                )}`}
                className="mt-6 w-full text-center bg-primary-700 text-white font-semibold px-5 py-3 rounded-2xl hover:bg-primary-500 transition-all"
              >
                Apply Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
