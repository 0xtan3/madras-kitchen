"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"

const featuredTestimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Food Blogger",
    image: "/images/testimonial-1.png",
    text: "The most authentic South Indian food I've had outside of India. The dosas are absolutely perfect - crispy on the outside, soft inside, and the sambar is pure comfort in a bowl. This place is a hidden gem!",
    rating: 5,
  },
  {
    id: 2,
    name: "Raj Patel",
    role: "Regular Customer",
    image: "/images/testimonial-2.png",
    text: "Reminds me of my grandmother's cooking back in Chennai. The flavors are genuine and the spice levels are spot on. I've been coming here every week since they opened their restaurant. True flavors of Madras!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "First-time Visitor",
    image: "/images/testimonial-3.png",
    text: "A hidden gem in Auckland! The biryani is out of this world - perfectly layered, fragrant, and the meat just falls off the bone. The staff are incredibly warm and welcoming. Highly recommend!",
    rating: 5,
  },
]

const allTestimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    text: "The most authentic South Indian food I've had outside of India. The dosas are absolutely perfect!",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Raj Patel",
    text: "Reminds me of my grandmother's cooking. True flavors of Madras in every bite.",
    rating: 5,
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Emma Wilson",
    text: "A hidden gem in Auckland! The biryani is out of this world. Highly recommend!",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "Michael Chen",
    text: "Best idli sambar in town! Soft, fluffy idlis with the most flavorful sambar. Will definitely come back.",
    rating: 5,
    date: "1 week ago",
  },
  {
    id: 5,
    name: "Priya Sharma",
    text: "The thali is incredible value for money. So many dishes, all absolutely delicious. A complete meal experience.",
    rating: 5,
    date: "2 months ago",
  },
  {
    id: 6,
    name: "David Thompson",
    text: "Never knew South Indian food could be this good! The mysore masala dosa has become my go-to order.",
    rating: 4,
    date: "1 month ago",
  },
  {
    id: 7,
    name: "Ananya Krishnan",
    text: "Feels like home away from home. The authentic taste of Chennai in Auckland. Love the traditional preparation.",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    id: 8,
    name: "James Roberts",
    text: "Great food, great service, great atmosphere. What more could you ask for? The lamb biryani is exceptional.",
    rating: 5,
    date: "1 week ago",
  },
  {
    id: 9,
    name: "Lisa Wang",
    text: "The vegetarian options are amazing! So much variety and every dish is packed with flavor.",
    rating: 5,
    date: "2 weeks ago",
  },
]

const stats = [
  { value: "4.9", label: "Average Rating" },
  { value: "500+", label: "Happy Reviews" },
  { value: "98%", label: "Would Recommend" },
  { value: "5+", label: "Years Serving" },
]

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % featuredTestimonials.length)
  }, [])

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/restaurant-interior.png"
              alt="Madras Kitchen Interior"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-background/20 backdrop-blur-xs" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center py-8 sm:py-12 max-w-3xl sm:bg-background/85 sm:backdrop-blur-md sm:rounded-3xl sm:border sm:border-primary/20 sm:shadow-2xl my-4 sm:my-8 text-white sm:text-foreground">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Testimonials</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl font-bold mb-6"
            >
              What Our <span className="text-primary">Guests</span> Say
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white sm:text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Read what our valued customers have to say about their dining experience at Madras Kitchen.
            </motion.p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-6">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <StaggerItem key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Featured Testimonials Carousel */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <FadeIn className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Featured <span className="text-primary">Reviews</span>
              </h2>
            </FadeIn>

            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="bg-background p-8 md:p-12 rounded-lg border border-border"
                  >
                    <Quote className="w-12 h-12 text-primary/30 mb-6" />
                    <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                      &quot;{featuredTestimonials[currentIndex].text}&quot;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-2xl font-serif font-bold text-primary">
                        {featuredTestimonials[currentIndex].name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{featuredTestimonials[currentIndex].name}</h4>
                        <p className="text-muted-foreground text-sm">{featuredTestimonials[currentIndex].role}</p>
                        <div className="flex gap-1 mt-1">
                          {Array.from({ length: featuredTestimonials[currentIndex].rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {featuredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1)
                      setCurrentIndex(index)
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Reviews Grid */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Community <span className="text-primary">Stories</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every review tells a story. Here&apos;s what our community has shared about their Madras Kitchen experience.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allTestimonials.map((testimonial) => (
                <StaggerItem key={testimonial.id}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-card p-6 rounded-lg border border-border h-full flex flex-col"
                  >
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                      ))}
                      {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-muted" />
                      ))}
                    </div>
                    <p className="text-foreground leading-relaxed flex-1 mb-4">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <span className="font-medium">{testimonial.name}</span>
                      </div>
                      <span className="text-muted-foreground text-sm">{testimonial.date}</span>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Rating Breakdown */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <FadeIn className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  Rating <span className="text-primary">Overview</span>
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-background p-8 rounded-lg border border-border">
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="text-6xl font-serif font-bold text-primary">4.9</div>
                    <div>
                      <div className="flex gap-1 mb-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-primary fill-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground text-sm">Based on 500+ reviews</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { stars: 5, percentage: 92 },
                      { stars: 4, percentage: 6 },
                      { stars: 3, percentage: 2 },
                      { stars: 2, percentage: 0 },
                      { stars: 1, percentage: 0 },
                    ].map((item) => (
                      <div key={item.stars} className="flex items-center gap-4">
                        <div className="flex items-center gap-1 w-24">
                          <span className="text-sm text-muted-foreground">{item.stars}</span>
                          <Star className="w-4 h-4 text-primary fill-primary" />
                        </div>
                        <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-primary rounded-full"
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-12 text-right">
                          {item.percentage}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="py-24">
          <div className="container mx-auto px-6">
            <FadeIn className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Share Your <span className="text-primary">Experience</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We&apos;d love to hear about your dining experience at Madras Kitchen. Your feedback helps us serve you better.
              </p>
              <a
                href="https://g.page/r/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300"
              >
                <Star className="w-5 h-5" />
                <span>Leave a Review</span>
              </a>
            </FadeIn>
          </div>
        </section> */}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
