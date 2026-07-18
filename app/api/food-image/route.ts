import { NextRequest, NextResponse } from 'next/server'

// In-memory cache so the same query is only fetched once per server session
const imageCache = new Map<string, string>()

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('query') || 'south indian food'
  const accessKey = process.env.UNSPLASH_ACCESS_KEY

  // Return cached result immediately
  if (imageCache.has(query)) {
    return NextResponse.json({ url: imageCache.get(query) })
  }

  if (!accessKey || accessKey === 'your_unsplash_access_key_here') {
    return NextResponse.json({ url: null })
  }

  try {
    const res = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=squarish&client_id=${accessKey}`,
      { next: { revalidate: 86400 } } // cache for 24 hours at Next.js level
    )

    if (!res.ok) return NextResponse.json({ url: null })

    const data = await res.json()
    const url: string = data?.urls?.regular ?? null

    if (url) imageCache.set(query, url)

    return NextResponse.json({ url })
  } catch {
    return NextResponse.json({ url: null })
  }
}
