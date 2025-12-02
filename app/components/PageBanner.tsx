export default function PageBanner({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="bg-primary-900 text-white py-20 text-center">
      <h1 className="text-4xl font-bold text-primary-500">{title}</h1>
      {subtitle && <p className="mt-2 text-indigo-100">{subtitle}</p>}
    </div>
  )
}
