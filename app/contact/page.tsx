"use client"

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);
    setSuccess(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-white text-black">
      {/* Top Section */}
      <div className="bg-primary-900 text-white py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Get in Touch</h1>
        <p className="text-lg mt-4 opacity-70 max-w-2xl mx-auto">
          We’d love to hear from you! Whether you have a project in mind or just
          want to ask a question.
        </p>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
          <p className="text-gray-600 mb-6">
            Fill out the form and our team will get back to you within 24 hours.
          </p>

          <div className="space-y-6 text-primary-700 text-lg">
            <p>
              <strong>Email:</strong> contact@apts.com
            </p>
            <p>
              <strong>Phone:</strong> +92 300 1234567
            </p>
            <p>
              <strong>Address:</strong> Lahore, Pakistan
            </p>
          </div>
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-4 rounded-2xl shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-4 border rounded-xl w-full"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="p-4 border rounded-xl w-full"
              required
            />
          </div>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="p-4 border rounded-xl w-full mb-6"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-4 border rounded-xl w-full h-40 mb-6"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary-700 text-white py-4 rounded-xl text-lg font-semibold hover:bg-primary-500 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="mt-4 text-green-600 font-semibold text-center">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
