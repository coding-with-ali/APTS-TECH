"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#fff] py-24 px-6 sm:px-12 lg:px-20 text-center">
      
      {/* Floating neon/glow shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] bg-[#00E5FF33] rounded-full blur-[140px]" /> */}
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-[#00E5FF22] rounded-full blur-[160px]" />
        <div className="absolute top-[20%] right-[15%] w-[250px] h-[250px] bg-[#00E5FF11] rounded-full blur-[80px]" />
      </div>

      {/* CTA content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Ready to Build Your Next Big Idea?
        </h2>

        <p className="mt-4 text-lg md:text-xl leading-relaxed">
          Let’s turn your vision into reality with innovative, scalable, and future-ready technology solutions.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-[#00E5FF] px-10 py-4 text-lg font-bold text-[#0A1A2F] shadow-[0_0_20px_#00E5FF66] hover:shadow-[0_0_30px_#00E5FF88] transition-all duration-500"
          >
            <span className="relative">Get in Touch →</span>
            {/* Floating neon effect */}
            <span className="absolute w-3 h-3 bg-[#00E5FF] rounded-full top-0 right-0 animate-pulse"></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
