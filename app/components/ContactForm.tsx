'use client'
import { useState } from 'react'
import axios from 'axios'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await axios.post('/api/contact', form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg space-y-6  transition-all"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">Contact Us</h2>
        <p className="text-gray-500 text-center text-sm">We’ll get back to you as soon as possible.</p>

        <div className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message..."
            className="p-3 border border-gray-300 rounded-lg w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition disabled:opacity-50"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 text-sm text-center mt-2">✅ Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-sm text-center mt-2">⚠️ Something went wrong. Try again later.</p>
        )}
      </form>
    </div>
  )
}
