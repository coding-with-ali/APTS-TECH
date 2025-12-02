import Hero from './components/Hero'
import ServicesGrid from './components/ServicesGrid'
import Testimonial from './components/Testimonial'
import CTASection from './components/CTASection'
import PostCard from './components/PostCard'
import Awards from './components/Award'
import ContactForm from './components/ContactForm'
import RobotOverlay from './components/RobotOverlay'

export default function Home() {
  return (
    <>
      <div className="">
      <Hero />
      <RobotOverlay/>
        <Awards/>
        <ServicesGrid />
        <Testimonial />
        <ContactForm/>
        <CTASection />
        <PostCard/>
      </div>
    </>
  )
}
