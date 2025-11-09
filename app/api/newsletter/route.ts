import type { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()
    if (!email) return new Response(JSON.stringify({ error: 'Email required' }), { status: 400 })
    // TODO: push to Mailchimp/SendGrid
    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch {
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
