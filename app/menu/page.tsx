"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"
import { MenuItemCard } from "@/components/menu-item-card"
import { vegSections, nonVegSections, drinksSections, briyanSections, type MenuSection } from "@/lib/menu-data"
import { Leaf, Drumstick, ChefHat, IceCream, Utensils } from "lucide-react"

// ─── Shared section renderer ────────────────────────────────────────────────
function MenuSections({ sections }: { sections: MenuSection[] }) {
  return (
    <StaggerContainer>
      <div className="max-w-6xl mx-auto space-y-14">
        {sections.map((section) => (
          <StaggerItem key={section.title}>
            {/* Section header image */}
            <div className="relative h-32 sm:h-40 rounded-xl overflow-hidden mb-6">
              <Image
                src={section.sectionImage}
                alt={section.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
              <div className="absolute inset-0 flex items-center px-5 sm:px-7 gap-4">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {section.title}
                </h3>
                {section.comingSoon && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-red-600/90 backdrop-blur-sm border border-red-400/40 tracking-wider uppercase">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>

            {/* Card grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {section.items.map((item) => (
                <MenuItemCard
                  key={item.name}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  imageQuery={item.imageQuery}
                  localFallback={item.localFallback}
                />
              ))}
            </div>
          </StaggerItem>
        ))}
      </div>
    </StaggerContainer>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<"veg" | "nonveg" | "drinks" | "briyani">("veg")

  return (
    <>
      <Navigation />
      <main className="pt-[96px] sm:pt-[100px]">

        {/* Category Toggle */}
        <section className="py-6 sm:py-8 sticky top-[96px] sm:top-[100px] bg-background/95 backdrop-blur-md z-30 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <motion.button
                onClick={() => { setActiveCategory("veg"); window.scrollTo({ top: 0, behavior: "smooth" }) }}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeCategory === "veg" ? "bg-green-600 text-white shadow-lg" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
              >
                <Leaf className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Veg</span>
              </motion.button>
              <motion.button
                onClick={() => { setActiveCategory("nonveg"); window.scrollTo({ top: 0, behavior: "smooth" }) }}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeCategory === "nonveg" ? "bg-secondary text-white shadow-lg" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
              >
                <Drumstick className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Non-Veg</span>
              </motion.button>
              <motion.button
                onClick={() => { setActiveCategory("drinks"); window.scrollTo({ top: 0, behavior: "smooth" }) }}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeCategory === "drinks" ? "bg-purple-600 text-white shadow-lg" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
              >
                <IceCream className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Drinks &amp; Desserts</span>
              </motion.button>
              <motion.button
                onClick={() => { setActiveCategory("briyani"); window.scrollTo({ top: 0, behavior: "smooth" }) }}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeCategory === "briyani" ? "bg-amber-600 text-white shadow-lg" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
              >
                <Utensils className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Roti &amp; Naan</span>
              </motion.button>
            </div>
          </div>
        </section>

        {/* Menu Content */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">

            {/* VEG */}
            {activeCategory === "veg" && (
              <FadeIn>
                <div className="relative h-48 sm:h-64 rounded-lg sm:rounded-xl overflow-hidden mb-10 sm:mb-12">
                  <Image src="/images/dosa.jpeg" alt="South Indian Vegetarian" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                  <div className="absolute inset-0 flex items-center px-6 sm:px-8">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 mb-3">
                        <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                        <span className="text-xs sm:text-sm text-green-300 font-medium">Vegetarian</span>
                      </div>
                      <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2">South Indian Vegetarian</h2>
                      <p className="text-green-100/80 text-sm sm:text-base">Traditional vegetarian delicacies</p>
                    </div>
                  </div>
                </div>
                <MenuSections sections={vegSections} />
              </FadeIn>
            )}

            {/* NON-VEG */}
            {activeCategory === "nonveg" && (
              <FadeIn>
                <div className="relative h-48 sm:h-64 rounded-lg sm:rounded-xl overflow-hidden mb-10 sm:mb-12">
                  <Image src="/images/chicken.jpeg" alt="South Indian Non-Vegetarian" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                  <div className="absolute inset-0 flex items-center px-6 sm:px-8">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 mb-3">
                        <Drumstick className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
                        <span className="text-xs sm:text-sm text-red-300 font-medium">Non-Vegetarian</span>
                      </div>
                      <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2">South Indian Non-Veg</h2>
                      <p className="text-red-100/80 text-sm sm:text-base">Succulent meats &amp; seafood</p>
                    </div>
                  </div>
                </div>
                <MenuSections sections={nonVegSections} />
              </FadeIn>
            )}

            {/* DRINKS & DESSERTS */}
            {activeCategory === "drinks" && (
              <FadeIn>
                <div className="relative h-48 sm:h-64 rounded-lg sm:rounded-xl overflow-hidden mb-10 sm:mb-12">
                  <Image src="/images/kesar.jpeg" alt="Indian Drinks and Desserts" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                  <div className="absolute inset-0 flex items-center px-6 sm:px-8">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 mb-3">
                        <IceCream className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                        <span className="text-xs sm:text-sm text-purple-300 font-medium">Sweet &amp; Refreshing</span>
                      </div>
                      <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2">Drinks &amp; Desserts</h2>
                      <p className="text-purple-100/80 text-sm sm:text-base">Traditional beverages and sweet delights</p>
                    </div>
                  </div>
                </div>
                <MenuSections sections={drinksSections} />
              </FadeIn>
            )}

            {/* ROTI & NAAN */}
            {activeCategory === "briyani" && (
              <FadeIn>
                <div className="relative h-48 sm:h-64 rounded-lg sm:rounded-xl overflow-hidden mb-10 sm:mb-12">
                  <Image src="/images/naan.jpeg" alt="Roti and Naan" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                  <div className="absolute inset-0 flex items-center px-6 sm:px-8">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 mb-3">
                        <Utensils className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                        <span className="text-xs sm:text-sm text-amber-300 font-medium">Aromatic Breads</span>
                      </div>
                      <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2">Roti &amp; Naan</h2>
                      <p className="text-amber-100/80 text-sm sm:text-base">Freshly baked breads from the tandoor</p>
                    </div>
                  </div>
                </div>
                <MenuSections sections={briyanSections} />
              </FadeIn>
            )}

          </div>
        </section>

        {/* Note Section */}
        <section className="py-12 sm:py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6">
            <FadeIn className="text-center max-w-2xl mx-auto">
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                All prices are in NZD and inclusive of GST. Menu items and prices may vary.
                Please inform our staff of any dietary requirements or allergies.
                We are happy to accommodate special requests where possible.
              </p>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}