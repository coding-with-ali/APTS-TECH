'use client'

import Image from "next/image";
import NewsletterForm from "./NewsletterForm";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-black pt-20 pb-10">
      
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-[#00E5FF22] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* 🧭 Company Info + Locations */}
        <div className="flex flex-col gap-6">
          <Image
            src="/Logoo.png"
            alt="APTS Tech Logo"
            width={160}
            height={80}
            className="rounded-lg transition-transform duration-300 group-hover:scale-105"
          />

          {/* Pakistan */}
          <div className="flex flex-col gap-2">
            <p className="font-bold text-lg flex items-center gap-2">
              <Image src="/pakistan.jpeg" alt="Pakistan Flag" width={24} height={16} />
              Pakistan
            </p>
            <p className="text-sm leading-relaxed">
              Plot B, 281 Ghazi Rd, Khuda Buksh Colony KB Society,<br />
              Karachi, Sindh
            </p>
          </div>

          {/* Canada */}
          <div className="flex flex-col gap-2">
            <p className="font-bold text-lg flex items-center gap-2">
              <Image src="/canada.jpeg" alt="Canada Flag" width={24} height={16} />
              Canada
            </p>
            <p className="text-sm leading-relaxed">
              128 City Road London <br />
              EC1V 2NX, Ottawa
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-2xl font-bold mb-4 text-primary-700">Quick Links</h4>
          <ul className="space-y-2 text-md font-semibold text-black">
            {[
              { name: "Services", href: "/services" },
              { name: "Careers", href: "/careers" },
              { name: "Contact", href: "/contact" },
              { name: "Privacy Policy", href: "/privacy-policy" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-indigo-800 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-2xl font-bold mb-4 text-primary-700">Stay Updated</h4>
          <p className="text-md font-semibold text-black mb-3">
            Subscribe to our newsletter to get the latest updates and insights.
          </p>
          <NewsletterForm />
        </div>

      </div>

      {/* Email */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mt-10 text-black font-bold text-lg">
        <a href="mailto:global.business@devsinc.com" className="hover:text-[#00E5FF] transition-colors">
          support@apts.com
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 border-t border-[#00E5FF33] pt-4 gap-2 md:gap-0">
        <div>
          Terms and Conditions &nbsp; | &nbsp; Privacy Policy
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-[#00E5FF]">Facebook</a>
          <a href="#" className="hover:text-[#00E5FF]">LinkedIn</a>
          <a href="#" className="hover:text-[#00E5FF]">Instagram</a>
          <a href="#" className="hover:text-[#00E5FF]">X</a>
        </div>
      </div>

    </footer>
  )
}
