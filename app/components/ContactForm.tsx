"use client";
import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = e.target;

    const formData = {
      fullName: form.fullName.value,
      email: form.email.value,
      country: form.country.value,
      phone: form.phone.value,
      companyName: form.companyName.value,
      companyUrl: form.companyUrl.value,
      region: form.region.value,
      projectDetails: form.projectDetails.value,
      lookingForJob: form.lookingForJob.value,
      services: Array.from(
        form.querySelectorAll("input[type=checkbox]:checked")
      ).map((cb: any) => cb.value),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("API Error");

      setMessage("✔ Your message has been submitted!");
      form.reset();
    } catch (err) {
      setMessage("❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#081527] text-white py-24 px-6 sm:px-12 lg:px-20"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-[#00E5FF22] rounded-full blur-[160px]" />
        <div className="absolute top-[20%] right-[15%] w-[250px] h-[250px] bg-[#00E5FF11] rounded-full blur-[80px]" />
      </div>

      {/* Page Heading */}
      <header className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl text-primary-500 font-bold mb-4">
          Ready To Get Started
        </h1>
        <p className="text-lg md:text-xl leading-relaxed">
          Connect with us to explore how we can deliver exceptional IT solutions
          tailored to your business needs.
        </p>
      </header>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-14">

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-slate-100 p-8 sm:p-10 rounded-2xl shadow-xl text-black"
        >
          <div>
            <label className="font-medium">Full Name *</label>
            <input
              name="fullName"
              required
              className="w-full mt-1 p-3 border rounded-lg"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="font-medium">Email *</label>
            <input
              name="email"
              type="email"
              required
              className="w-full mt-1 p-3 border rounded-lg"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <select name="country" className="p-3 border rounded-lg">
              <option value="">Select Country</option>
              <option>Afghanistan</option>
              <option>Albania</option>
              <option>Algeria</option>
              <option>Andorra</option>
              <option>Angola</option>
              <option>Antigua and Barbuda</option>
              <option>Argentina</option>
              <option>Armenia</option>
              <option>Australia</option>
              <option>Austria</option>
              <option>Azerbaijan</option>
              <option>Bahamas</option>
              <option>Bahrain</option>
              <option>Bangladesh</option>
              <option>Barbados</option>
              <option>Belarus</option>
              <option>Belgium</option>
              <option>Belize</option>
              <option>Benin</option>
              <option>Bhutan</option>
              <option>Bolivia</option>
              <option>Bosnia and Herzegovina</option>
              <option>Botswana</option>
              <option>Brazil</option>
              <option>Brunei</option>
              <option>Bulgaria</option>
              <option>Burkina Faso</option>
              <option>Burundi</option>
              <option>Cabo Verde</option>
              <option>Cambodia</option>
              <option>Cameroon</option>
              <option>Canada</option>
              <option>Central African Republic</option>
              <option>Chad</option>
              <option>Chile</option>
              <option>China</option>
              <option>Colombia</option>
              <option>Comoros</option>
              <option>Congo (Congo-Brazzaville)</option>
              <option>Costa Rica</option>
              <option>Croatia</option>
              <option>Cuba</option>
              <option>Cyprus</option>
              <option>Czechia (Czech Republic)</option>
              <option>Denmark</option>
              <option>Djibouti</option>
              <option>Dominica</option>
              <option>Dominican Republic</option>
              <option>Ecuador</option>
              <option>Egypt</option>
              <option>El Salvador</option>
              <option>Equatorial Guinea</option>
              <option>Eritrea</option>
              <option>Estonia</option>
              <option>Eswatini</option>
              <option>Ethiopia</option>
              <option>Fiji</option>
              <option>Finland</option>
              <option>France</option>
              <option>Gabon</option>
              <option>Gambia</option>
              <option>Georgia</option>
              <option>Germany</option>
              <option>Ghana</option>
              <option>Greece</option>
              <option>Grenada</option>
              <option>Guatemala</option>
              <option>Guinea</option>
              <option>Guinea-Bissau</option>
              <option>Guyana</option>
              <option>Haiti</option>
              <option>Honduras</option>
              <option>Hungary</option>
              <option>Iceland</option>
              <option>India</option>
              <option>Indonesia</option>
              <option>Iran</option>
              <option>Iraq</option>
              <option>Ireland</option>
              <option>Israel</option>
              <option>Italy</option>
              <option>Jamaica</option>
              <option>Japan</option>
              <option>Jordan</option>
              <option>Kazakhstan</option>
              <option>Kenya</option>
              <option>Kiribati</option>
              <option>Kuwait</option>
              <option>Kyrgyzstan</option>
              <option>Laos</option>
              <option>Latvia</option>
              <option>Lebanon</option>
              <option>Lesotho</option>
              <option>Liberia</option>
              <option>Libya</option>
              <option>Liechtenstein</option>
              <option>Lithuania</option>
              <option>Luxembourg</option>
              <option>Madagascar</option>
              <option>Malawi</option>
              <option>Malaysia</option>
              <option>Maldives</option>
              <option>Mali</option>
              <option>Malta</option>
              <option>Marshall Islands</option>
              <option>Mauritania</option>
              <option>Mauritius</option>
              <option>Mexico</option>
              <option>Micronesia</option>
              <option>Moldova</option>
              <option>Monaco</option>
              <option>Mongolia</option>
              <option>Montenegro</option>
              <option>Morocco</option>
              <option>Mozambique</option>
              <option>Myanmar (Burma)</option>
              <option>Namibia</option>
              <option>Nauru</option>
              <option>Nepal</option>
              <option>Netherlands</option>
              <option>New Zealand</option>
              <option>Nicaragua</option>
              <option>Niger</option>
              <option>Nigeria</option>
              <option>North Korea</option>
              <option>North Macedonia</option>
              <option>Norway</option>
              <option>Oman</option>
              <option>Pakistan</option>
              <option>Palau</option>
              <option>Panama</option>
              <option>Papua New Guinea</option>
              <option>Paraguay</option>
              <option>Peru</option>
              <option>Philippines</option>
              <option>Poland</option>
              <option>Portugal</option>
              <option>Qatar</option>
              <option>Romania</option>
              <option>Russia</option>
              <option>Rwanda</option>
              <option>Saint Kitts and Nevis</option>
              <option>Saint Lucia</option>
              <option>Saint Vincent and the Grenadines</option>
              <option>Samoa</option>
              <option>San Marino</option>
              <option>Sao Tome and Principe</option>
              <option>Saudi Arabia</option>
              <option>Senegal</option>
              <option>Serbia</option>
              <option>Seychelles</option>
              <option>Sierra Leone</option>
              <option>Singapore</option>
              <option>Slovakia</option>
              <option>Slovenia</option>
              <option>Solomon Islands</option>
              <option>Somalia</option>
              <option>South Africa</option>
              <option>South Korea</option>
              <option>South Sudan</option>
              <option>Spain</option>
              <option>Sri Lanka</option>
              <option>Sudan</option>
              <option>Suriname</option>
              <option>Sweden</option>
              <option>Switzerland</option>
              <option>Syria</option>
              <option>Tajikistan</option>
              <option>Tanzania</option>
              <option>Thailand</option>
              <option>Timor-Leste</option>
              <option>Togo</option>
              <option>Tonga</option>
              <option>Trinidad and Tobago</option>
              <option>Tunisia</option>
              <option>Turkey</option>
              <option>Turkmenistan</option>
              <option>Tuvalu</option>
              <option>Uganda</option>
              <option>Ukraine</option>
              <option>United Arab Emirates</option>
              <option>United Kingdom</option>
              <option>United States</option>
              <option>Uruguay</option>
              <option>Uzbekistan</option>
              <option>Vanuatu</option>
              <option>Vatican City</option>
              <option>Venezuela</option>
              <option>Vietnam</option>
              <option>Yemen</option>
              <option>Zambia</option>
              <option>Zimbabwe</option>
            </select>

            <input
              name="phone"
              required
              placeholder="+92"
              className="sm:col-span-2 p-3 border rounded-lg"
            />
          </div>

          <div>
            <label className="font-medium">Company Name *</label>
            <input
              name="companyName"
              required
              className="w-full mt-1 p-3 border rounded-lg"
              placeholder="Tech Solutions"
            />
          </div>

          <div>
            <label className="font-medium">Company URL</label>
            <input
              name="companyUrl"
              className="w-full mt-1 p-3 border rounded-lg"
              placeholder="https://company.com"
            />
          </div>

          <div>
            <label className="font-medium">Region *</label>
            <select
              name="region"
              required
              className="w-full mt-1 p-3 border rounded-lg"
            >
              <option value="">Please Select</option>
              <option>Africa</option>
              <option>Antarctica</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>North America</option>
              <option>Oceania</option>
              <option>South America</option>
            </select>
          </div>

          <div>
            <label className="font-medium">Services *</label>
            <div className="space-y-2 mt-2">
              {[

                "Custom Software Development",
                "Web Development",
                "Mobile App Development",
                "UI/UX Design",
                "Graphic Design",
                "Cyber Security",
                "Website Maintenance",
                "Ai & Machine Learning",
                "Cloud",
              ].map((srv) => (
                <label key={srv} className="flex gap-2 items-center">
                  <input type="checkbox" value={srv} />
                  {srv}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="font-medium">Project Details *</label>
            <textarea
              name="projectDetails"
              required
              className="w-full mt-1 p-3 border rounded-lg h-28"
              placeholder="Tell us about your project..."
            />
          </div>

          <div>
            <label className="font-medium">Looking for a Job?</label>
            <select name="lookingForJob" className="w-full mt-1 p-3 border rounded-lg">
              <option>Please Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          {message && (
            <p className="text-center text-green-600 font-semibold">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="bg-primary-500 text-primary-900 py-3 px-6 rounded-lg font-bold w-full mt-4"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {/* RIGHT SIDE — GLOBAL PRESENCE & VISION */}
        <aside className="relative flex flex-col gap-16">

          {/* Global Presence */}
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-10">
              Global <span className="text-[#00E5FF]">Presence</span>
            </h2>

            <div className="w-full border border-gray-700 rounded-[40px] p-6 relative">
              {/* Floating Quote */}
              <div className="absolute -top-10 right-10 bg-[#00E5FF] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                <FaQuoteLeft className="text-white text-4xl" />
              </div>

              <p className="text-xl leading-relaxed mt-14">
                We're across 5 continents—explore our office nearest to you.
              </p>

              <button className="text-primary-500 mt-6 font-semibold">
                Learn More →
              </button>
            </div>
          </div>

          {/* Vision */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-10">
              Our <span className="text-[#00E5FF]">Vision</span>
            </h2>

            <div className="w-full border border-gray-700 rounded-[40px] p-6 relative">
              <div className="absolute -top-10 right-10 bg-[#00E5FF] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                <FaQuoteLeft className="text-white text-4xl" />
              </div>

              <p className="text-xl leading-relaxed mt-14">
                Our capabilities are backed by diverse global leadership.
              </p>

              <button className="text-primary-500 mt-6 font-semibold">
                Learn More →
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
