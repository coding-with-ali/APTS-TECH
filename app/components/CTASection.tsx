import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary-900 text-white py-24 px-6 md:px-12 lg:px-20 text-center  shadow-[0_0_40px_-10px_rgba(99,102,241,0.4)]">
      {/* ✨ Background Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      {/* 💬 Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight bg-primary-500 bg-clip-text text-transparent drop-shadow-md">
          Ready to Build Your Next Big Idea?
        </h2>

        <p className="mt-8 text-primary-50 text-base md:text-lg leading-relaxed">
          Let’s turn your vision into reality with innovative, scalable, and future-ready technology solutions.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary-500 px-8 py-4 text-lg font-semibold text-primary-50 transition-all duration-300 hover:bg-primary-700"
          >
            <span className="relative  transition-colors duration-300">
              Get in Touch →
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
