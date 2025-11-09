import Hero from './components/Hero'
import ServicesGrid from './components/ServicesGrid'
import Testimonial from './components/Testimonial'
import CTASection from './components/CTASection'
import PostCard from './components/PostCard'
import Awards from './components/Award'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container py-16 space-y-20">
        <Testimonial />
        <Awards/>
        <ServicesGrid />
        <CTASection />
        <PostCard/>
      </div>
    </>
  )
}
