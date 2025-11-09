export default function PageBanner({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="bg-gradient-to-br from-[#0A0F2C] via-[#101B46] to-[#1E2A78] text-white py-20 text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      {subtitle && <p className="mt-2 text-indigo-100">{subtitle}</p>}
    </div>
  )
}
