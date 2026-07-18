import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { HalalBadge } from '@/components/halal-badge'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Madras Kitchen ',
  description: 'Experience authentic South Indian flavours crafted with passion. From humble food truck beginnings to a beloved Auckland restaurant.',
  keywords: ['South Indian food', 'Auckland restaurant', 'Indian cuisine', 'Madras Kitchen', 'Mount Roskill', 'authentic Indian food'],
  authors: [{ name: 'Madras Kitchen' }],
  icons: {
    icon: [
      { url: '/MK.png', sizes: 'any' },
      { url: '/MK.png', type: 'image/png', sizes: '192x192' },
      { url: '/MK.png', type: 'image/png', sizes: '512x512' }
    ],
    shortcut: '/MK.png',
    apple: '/MK.png',
  },
  openGraph: {
    title: 'Madras Kitchen | Authentic South Indian Cuisine',
    description: 'Experience authentic South Indian flavours crafted with passion.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        <HalalBadge />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
