import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-indigo-700">Contact Us</h1>
      <p className="mb-8 text-gray-600">We’d love to hear from you. Fill out the form and our team will get back shortly.</p>
      <ContactForm />
    </section>
  )
}
