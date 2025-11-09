import type { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, resumeUrl } = await req.json()
    if (!name || !email) return new Response('Missing fields', { status: 400 })
    // TODO: store in Sanity
    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch {
    return new Response(JSON.stringify({ error: 'Failed' }), { status: 500 })
  }
}
