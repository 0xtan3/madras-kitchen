'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Module-level cache shared across all card instances in the session
const clientCache = new Map<string, string | null>()
const pendingRequests = new Map<string, Promise<string | null>>()

async function fetchImage(query: string): Promise<string | null> {
  if (clientCache.has(query)) return clientCache.get(query)!
  if (pendingRequests.has(query)) return pendingRequests.get(query)!

  const promise = fetch(`/api/food-image?query=${encodeURIComponent(query)}`)
    .then(r => r.json())
    .then((data: { url: string | null }) => {
      const url = data.url ?? null
      clientCache.set(query, url)
      pendingRequests.delete(query)
      return url
    })
    .catch(() => {
      clientCache.set(query, null)
      pendingRequests.delete(query)
      return null
    })

  pendingRequests.set(query, promise)
  return promise
}

interface MenuItemCardProps {
  name: string
  description: string
  price: string
  imageQuery: string
  localFallback?: string
}

export function MenuItemCard({ name, description, price, imageQuery, localFallback }: MenuItemCardProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(
    clientCache.has(imageQuery) ? clientCache.get(imageQuery)! : null
  )
  const [isLoading, setIsLoading] = useState(!clientCache.has(imageQuery))
  const mountedRef = useRef(true)

  useEffect(() => {
    if (localFallback) {
      setIsLoading(false)
      return
    }

    mountedRef.current = true
    if (clientCache.has(imageQuery)) {
      setImageUrl(clientCache.get(imageQuery)!)
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    fetchImage(imageQuery).then(url => {
      if (mountedRef.current) {
        setImageUrl(url)
        setIsLoading(false)
      }
    })

    return () => { mountedRef.current = false }
  }, [imageQuery, localFallback])

  const displayImage = localFallback || imageUrl || null

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group flex flex-col bg-card rounded-xl overflow-hidden border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
    >
      {/* Image area */}
      <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-muted flex-shrink-0">
        {isLoading ? (
          <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/60 animate-pulse" />
        ) : displayImage ? (
          <Image
            src={displayImage}
            alt={name}
            fill
            sizes="(max-width: 640px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent flex items-center justify-center">
            <span className="text-5xl opacity-20 select-none">🍽️</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-3 gap-1">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-medium text-foreground text-sm leading-snug group-hover:text-primary transition-colors duration-200 line-clamp-2 flex-1">
            {name}
          </h4>
          <span className="text-primary font-bold text-sm whitespace-nowrap shrink-0">{price}</span>
        </div>
        <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">{description}</p>
      </div>
    </motion.div>
  )
}
