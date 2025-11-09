export default function Stats() {
  const stats = [
    { number: '150+', label: 'Projects Delivered' },
    { number: '40+', label: 'Team Members' },
    { number: '10+', label: 'Industries Served' }
  ]
  return (
    <section className="bg-gray-50 py-16">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map(s => (
          <div key={s.label}>
            <h3 className="text-4xl font-bold text-indigo-700">{s.number}</h3>
            <p className="text-gray-600">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
