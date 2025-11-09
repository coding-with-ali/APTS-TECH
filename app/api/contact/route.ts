import type { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'All fields required' }), { status: 400 })
    }

    // TODO: integrate email/Sanity
    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
