import Image from 'next/image'

const team = [
  { name: 'Ahmed Raza', role: 'CEO & Founder', image: '/images/team/ceo.jpg' },
  { name: 'Sara Khalid', role: 'CTO', image: '/images/team/cto.jpg' },
  { name: 'Bilal Khan', role: 'Lead AI Engineer', image: '/images/team/team1.jpg' }
]

export default function TeamSection() {
  return (
    <section className="container mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-bold mb-10">Leadership Team</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {team.map(t => (
          <div key={t.name}>
            <Image src={t.image} alt={t.name} width={200} height={200} className="mx-auto rounded-full" />
            <h3 className="mt-4 font-semibold text-lg">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
