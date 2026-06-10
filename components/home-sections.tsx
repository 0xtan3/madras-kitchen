"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, MapPin, Clock, Utensils } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem, FloatingElement, TextReveal } from "@/components/animations"

export function HeroSection() {
  const heroSlides = [
    {
      image: "/images/hero-dosa.png",
      title1: "Authentic",
      title2: "South Indian",
      title3: "Flavours",
      description:
        "Crafted with passion, served with love. Experience the rich heritage of South Indian cuisine in the heart of Auckland.",
    },
    {
      image: "/images/featured-biryani.png",
      title1: "Traditional",
      title2: "Family Recipes",
      title3: "Since Generations",
      description:
        "Prepared using authentic techniques and handpicked spices inspired by South Indian culinary traditions.",
    },
    {
      image: "/images/featured-idli.png",
      title1: "Freshly Made",
      title2: "Idly & Dosa",
      title3: "Specials",
      description:
        "Enjoy freshly prepared breakfast favourites served with traditional chutneys and aromatic sambar.",
    },
    {
      image: "/images/menu-vada.png",
      title1: "Crispy South ",
      title2: "Indian Snacks",
      title3: "Coming Soon",
      description:
        "Taste our signature vadas, bajjis, and authentic snacks prepared fresh every day.",
    },
    {
      image: "/images/spices.png",
      title1: "Experience",
      title2: "South Indian",
      title3: "Hospitality",
      description:
        "Warm hospitality, rich spices, and unforgettable flavours in every meal we serve.",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [heroSlides.length])

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            animate={{
              opacity: currentSlide === index ? 1 : 0,
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
          >
            <Image
              src={slide.image}
              alt={slide.title2}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </motion.div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 min-h-screen flex items-center justify-center pt-24 sm:pt-24">
        <div className="max-w-4xl text-center text-white">


          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          >
            {heroSlides[currentSlide].title1}
            <br />
            <span className="text-primary">
              {heroSlides[currentSlide].title2}
            </span>
            <br />
            {heroSlides[currentSlide].title3}
          </motion.h1>

          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10"
          >
            {heroSlides[currentSlide].description}
          </motion.p>

          <motion.div
            key={`buttons-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/menu"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:scale-105 transition-all duration-300"
            >
              Explore Menu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white font-medium text-lg hover:bg-white/20 transition-all duration-300"
            >
              Reserve a Table
            </Link>
          </motion.div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-8 sm:mt-12 md:mt-16 pb-20 sm:pb-24">
            <div>
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-white/80">
                Signature Dishes
              </div>
            </div>

            <div>
              <div className="text-4xl font-bold text-primary">10K+</div>
              <div className="text-sm text-white/80">
                Happy Customers
              </div>
            </div>

            <div>
              <div className="text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-white/80">
                Authentic Taste
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${currentSlide === index
              ? "w-8 h-2 bg-primary"
              : "w-2 h-2 bg-white/60"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export function StoryPreviewSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-card overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <FadeIn direction="left" className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-primary/10 shadow-lg">
              <Image
                src="/images/food-truck.jpeg"
                alt="Madras Kitchen Food Truck"
                fill
                className="object-cover"
              />
            </div>
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 right-4 sm:-bottom-8 sm:right-8 bg-primary text-primary-foreground p-4 sm:p-6 rounded-lg shadow-2xl"
            >
              <div className="text-2xl sm:text-4xl font-serif font-bold">2019</div>
              <div className="text-xs sm:text-sm opacity-80">Where it all began</div>
            </motion.div> */}
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm text-primary font-medium uppercase tracking-wider">Our Story</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
              From Humble <span className="text-primary">Food Truck</span> to Beloved Restaurant
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Madras Kitchen began as a passionate dream on wheels – a food truck serving authentic South Indian cuisine to the streets of Auckland. Through dedication, quality food, and the incredible support of our community, we&apos;ve grown into a full restaurant.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              Every dish we serve carries the same love and authenticity that started our journey. Our recipes have been passed down through generations, bringing the true taste of South India to New Zealand.
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300 text-sm sm:text-base"
            >
              <span>Read Our Full Story</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export function FeaturedDishesSection() {
  const dishes = [
    {
      name: "Masala Dosa",
      description: "Crispy rice crepe filled with spiced potato masala, served with sambar and chutneys",
      image: "/images/hero-dosa.png",
      price: "$15.99",
      tag: "Signature",
    },
    {
      name: "Chicken Biryani",
      description: "Fragrant basmati rice layered with tender meat, saffron, and aromatic spices",
      image: "/images/featured-biryani.png",
      price: "$17.99",
      tag: "Chef's Special",
    },
    {
      name: "Mini Idli",
      description: "Soft steamed rice cakes served with flavorful lentil curry and coconut chutney",
      image: "/images/featured-idli.png",
      price: "$15.99",
      tag: "Traditional",
    },
    {
      name: "Methu Vada",
      description: "Crispy donut-shaped fritters made from lentil batter, deep-fried until golden brown",
      image: "/images/menu-vada.png",
      price: "$9.99",
      tag: "Must Try",
    },
  ]

  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
            <Utensils className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm text-primary font-medium uppercase tracking-wider">Featured Dishes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            Taste the <span className="text-primary">Authentic</span> Flavours
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Discover our most beloved dishes, each crafted with traditional recipes and the finest ingredients
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {dishes.map((dish) => (
            <StaggerItem key={dish.name}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-primary text-primary-foreground text-[10px] sm:text-xs font-medium rounded-full">
                      {dish.tag}
                    </span>
                  </div>
                </div>
                <div className="p-3 sm:p-6">
                  <div className="flex items-start justify-between mb-1 sm:mb-2">
                    <h3 className="font-serif text-sm sm:text-xl font-semibold line-clamp-1">{dish.name}</h3>
                    <span className="text-primary font-semibold text-xs sm:text-base">{dish.price}</span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2 hidden sm:block">{dish.description}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="text-center mt-8 sm:mt-12">
          <Link
            href="/menu"
            className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-full font-medium text-sm sm:text-base hover:bg-primary/90 transition-all duration-300"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}

export function TestimonialsPreviewSection() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      text: "The most authentic South Indian food I&apos;ve had outside of India. The dosas are absolutely perfect!",
      rating: 5,
    },
    {
      name: "Raj Patel",
      text: "Reminds me of my grandmother&apos;s cooking. True flavors of Madras in every bite.",
      rating: 5,
    },
    {
      name: "Emma Wilson",
      text: "A hidden gem in Auckland! The biryani is out of this world. Highly recommend!",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-primary fill-primary" />
            <span className="text-xs sm:text-sm text-primary font-medium uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            What Our <span className="text-primary">Guests</span> Say
          </h2>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-background p-5 sm:p-8 rounded-lg border border-border h-full"
              >
                <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">&quot;{testimonial.text}&quot;</p>
                <p className="font-semibold text-primary text-sm sm:text-base">{testimonial.name}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="text-center mt-8 sm:mt-12">
          <Link
            href="/testimonials"
            className="group inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300 text-sm sm:text-base"
          >
            <span>Read More Reviews</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}

export function LocationsSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm text-primary font-medium uppercase tracking-wider">Visit Us</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            Find Us in <span className="text-primary">Auckland</span>
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
          <FadeIn direction="left">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-card p-5 sm:p-8 rounded-lg border border-border"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold">Madras Kitchen Restaurant</h3>
                  <span className="text-xs sm:text-sm text-green-500 font-medium">Open Now</span>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                <p>5/190 Stoddard Road<br />Mount Roskill, Auckland 1041</p>
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span>Mon - Sun: 11am - 10pm</span>
                </div>
                <a href="tel:096501744" className="inline-flex items-center gap-2 text-primary font-medium">
                 +64 09 650 1744
                </a>
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-card p-5 sm:p-8 rounded-lg border border-border"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold">Madras Kitchen Food Truck</h3>
                  <span className="text-xs sm:text-sm text-secondary font-medium">Temporarily Closed</span>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                <p>24 Manuroa Road<br />Takanini, Auckland 2110</p>
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
                  <span>Check back for updates</span>
                </div>
                <a href="tel:+64273498859" className="inline-flex items-center gap-2 text-secondary font-medium">
                  +64 27 349 8859
                </a>
              </div>
            </motion.div>
          </FadeIn>
        </div>

      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/restaurant-interior.png"
          alt="Madras Kitchen Interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/30 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn className="max-w-3xl mx-auto text-center bg-background/85 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-primary/20 shadow-2xl">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">
            Ready to Experience <span className="text-primary">Authentic</span> South Indian Cuisine?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Join us for an unforgettable culinary journey. Reserve your table today and discover the true taste of Madras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:096501744"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:bg-primary/90 transition-all duration-300"
            >
              <span>Call to Reserve</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary/30 text-foreground rounded-full font-medium text-lg hover:bg-primary/10 transition-all duration-300"
            >
              <span>Browse Menu</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
