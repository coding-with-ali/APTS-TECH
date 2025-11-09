import Link from "next/link";
import NewsletterForm from "./NewsletterForm";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden  text-black pt-20 pb-10">
      

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* 🧭 Company Info */}
        <div>
          <Image
                      src="/Logoo.png"
                      alt="APTS Tech Logo"
                      width={160}
                      height={80}
                      className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
          <p className="mt-4 text-black text-sm leading-relaxed">
            Innovation Tower, Shahrah-e-Faisal, Karachi – Pakistan
            <br />
            <span className="block mt-2">
              <a
                href="mailto:support@aptstech.com"
                className="text-black hover:text-indigo-800 transition-colors duration-300"
              >
                support@aptstech.com
              </a>
            </span>
          </p>
        </div>

        {/* ⚡ Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-black">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-black">
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

        {/* 📨 Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-black">
            Stay Updated
          </h4>
          <p className="text-sm text-black mb-3">
            Subscribe to our newsletter to get the latest updates and insights.
          </p>
          <NewsletterForm />
        </div>
      </div>

      {/* 🌐 Divider & Bottom Bar */}
      <div className="relative z-10 border-t border-white/10 mt-14 pt-6 text-center text-xs text-black">
        © {new Date().getFullYear()} <span className="font-semibold">APTS TECH</span>. All Rights Reserved.
      </div>
    </footer>
  );
}
