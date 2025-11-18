'use client'
import { useState } from 'react'
import axios from 'axios'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios.post('/api/newsletter', { email })
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        placeholder="Your email"
        className="p-2 rounded-l border-amber-50 border text-white w-full"
      />
      <button type="submit" className="bg-primary-700 hover:bg-primary-500 border px-4 rounded-lg text-white font-medium">
        Subscribe
      </button>
      {status === 'success' && <p className="text-green-400 text-sm mt-2">Subscribed!</p>}
      {status === 'error' && <p className="text-red-400 text-sm mt-2">Error — try again.</p>}
    </form>
  )
}
