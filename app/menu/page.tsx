"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"
import { Leaf, Drumstick, ChefHat, IceCream, Utensils } from "lucide-react"

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<"veg" | "nonveg" | "drinks" | "briyani">("veg")

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/restaurant-interior.png"
              alt="South Indian Spices"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-background/20 backdrop-blur-xs" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center py-6 sm:py-10 max-w-3xl sm:bg-background/85 sm:backdrop-blur-md sm:rounded-3xl sm:border sm:border-primary/20 sm:shadow-2xl my-4 sm:my-8 text-white sm:text-foreground">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6"
            >
              <ChefHat className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-xs sm:text-sm text-primary font-medium uppercase tracking-wider">Our Menu</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-balance"
            >
              Culinary <span className="text-primary">Excellence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white sm:text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto px-4"
            >
              Discover our carefully curated selection of authentic South Indian dishes
            </motion.p>
          </div>
        </section>

        {/* Category Toggle */}
        <section className="py-6 sm:py-8 sticky top-[64px] sm:top-[72px] bg-background/95 backdrop-blur-md z-30 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <motion.button
                onClick={() => {
                  setActiveCategory("veg")
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeCategory === "veg"
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
              >
                <Leaf className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Veg</span>
              </motion.button>
              <motion.button
                onClick={() => {
                  setActiveCategory("nonveg")
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeCategory === "nonveg"
                  ? "bg-secondary text-white shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
              >
                <Drumstick className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Non-Veg</span>
              </motion.button>
              <motion.button
                onClick={() => {
                  setActiveCategory("drinks")
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeCategory === "drinks"
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
              >
                <IceCream className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Drinks & Desserts</span>
              </motion.button>
              <motion.button
                onClick={() => {
                  setActiveCategory("briyani")
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeCategory === "briyani"
                  ? "bg-amber-600 text-white shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
              >
                <Utensils className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Roti & Naan</span>
              </motion.button>
            </div>
          </div>
        </section>

        {/* Menu Content */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">

            {/* VEG CATEGORY */}
            {activeCategory === "veg" && (
              <FadeIn>
                {/* South Indian Starters Section Image */}
                <div className="relative h-48 sm:h-64 rounded-lg sm:rounded-xl overflow-hidden mb-10 sm:mb-12">
                  <Image
                    src="/images/dosa.jpeg"
                    alt="South Indian Vegetarian Starters"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent" />
                  <div className="absolute inset-0 flex items-center">
                    <div className="px-6 sm:px-8">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 mb-3">
                        <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                        <span className="text-xs sm:text-sm text-green-300 font-medium">Vegetarian</span>
                      </div>
                      <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2">
                        South Indian Vegetarian
                      </h2>
                      <p className="text-green-100/80 text-sm sm:text-base">
                        Traditional vegetarian delicacies
                      </p>
                    </div>
                  </div>
                </div>

                <StaggerContainer>
                  <div className="max-w-4xl mx-auto space-y-12">

                    {/* Soup Section */}
                    <StaggerItem>
                      <div className="mb-8">
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-primary mb-6 pb-2 border-b border-primary/20">Soup</h3>
                        <div className="space-y-4">
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Milagu Rasam (Pepper)</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Spicy South Indian pepper soup infused with aromatic herbs and spices.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$11.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Moringa Saru (Drumstick)</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Flavorful South Indian drumstick soup cooked with traditional spices and herbs.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$12.99</span>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </StaggerItem>

                    {/* Starters Section with Image */}
                    <StaggerItem>
                      <div className="relative h-32 sm:h-40 rounded-lg overflow-hidden mb-6">
                        <Image
                          src="/images/menu-vada.png"
                          alt="South Indian Starters - Vada"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                        <div className="absolute inset-0 flex items-center px-4 sm:px-6">
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                            South Indian Snacks
                            <span className="block text-sm sm:text-base font-normal text-red-500">
                              Coming soon !!!
                            </span>
                          </h3>                        </div>
                      </div>
                      <div className="space-y-4">
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Methu Vada</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Crispy golden urad dal fritters, soft inside and served fresh.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$9.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Masala Vada (3 Nos)</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Crunchy lentil fritters blended with traditional South Indian spices.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$9.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Aloo Bonda (3 Nos)</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Crispy potato masala coated in a flavorful golden gram flour batter.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$9.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Banana Baji (3 Nos)</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Crispy ripe banana fritters coated in a light spiced batter.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$9.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Sambar Vada (2 Nos)</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Soft medu vadai soaked in flavorful traditional sambar.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$11.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Rasam Vada (2 Nos)</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Soft medu vadai dipped in spicy and tangy rasam.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$11.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Dahi Vada (2 Nos)</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Soft lentil dumplings topped with chilled creamy curd and spices.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$11.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Onion Samosa (5 Nos)</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Crispy mini pastries stuffed with spiced onion filling.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$9.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Onion Pakoda</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Crispy onion fritters tossed with aromatic spices and herbs.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$9.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Paneer 65 (Dry or Semi)</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Spicy crispy paneer tossed in bold South Indian flavors.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$17.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Gobi 65 (Dry or Semi)</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Crispy cauliflower bites tossed in spicy South Indian seasoning.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$16.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Mirchi Bhaji (2 Nos)</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Crispy fried green chilli coated in spiced gram flour batter.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$9.99</span>
                          </div>
                        </motion.div>
                      </div>
                    </StaggerItem>

                    {/* Idly Section with Image */}
                    <StaggerItem>
                      <div className="relative h-32 sm:h-40 rounded-lg overflow-hidden mb-6">
                        <Image
                          src="/images/featured-idli.png"
                          alt="South Indian Idly"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                        <div className="absolute inset-0 flex items-center px-4 sm:px-6">
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Idly</h3>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Plain Idly (4 Nos)</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Soft fluffy steamed rice cakes served with sambar and chutneys.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$14.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Mini Idly (with sambar)</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Bite-sized steamed rice cakes soaked in hot flavorful sambar.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$15.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Podi Idly (4 pcs)</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Soft idly tossed in roasted lentil powder and spices.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$16.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Ghee Podi Idly</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Steamed rice cakes coated in aromatic ghee and podi.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$17.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Ghee Podi Mini Idly</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Mini idlies tossed in aromatic ghee and roasted lentil powder.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$16.99</span>
                          </div>
                        </motion.div>
                      </div>
                    </StaggerItem>

                    {/* Dosa Section with Image */}
                    <StaggerItem>
                      <div className="relative h-32 sm:h-40 rounded-lg overflow-hidden mb-6">
                        <Image
                          src="/images/hero-dosa.png"
                          alt="South Indian Dosa"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                        <div className="absolute inset-0 flex items-center px-4 sm:px-6">
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Dosa</h3>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Plain Dosa</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Classic crispy rice crepe served with sambar and chutneys.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$11.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Set Dosa</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Soft spongy dosas served with sambar and chutneys.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$12.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Podi Dosa</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Crispy dosa coated with aromatic podi powder.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$14.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Podi Masala Dosa</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Podi dosa filled with spiced potato masala.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$15.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Masala Dosa</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Crispy dosa filled with spiced potato masala.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$15.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Mysore Masala Dosa</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Spicy dosa with red chutney and potato masala.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$16.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Cheese Dosa</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Crispy dosa topped with melted cheese.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$15.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Cheese Masala Dosa</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Cheese dosa filled with spiced potato masala.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$16.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Ghee Roast Dosa</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Extra crispy dosa roasted in pure ghee.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$14.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Ghee Roast Masala Dosa</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Ghee roast dosa with spiced potato masala.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$16.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Ghee Roast Podi Masala</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Ghee dosa with podi and potato masala.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$17.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Onion Dosa</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Crispy dosa topped with caramelized onions.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$15.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Paneer Dosa</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Dosa filled with spiced paneer filling.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$18.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Paneer Cheese Dosa</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Paneer dosa topped with melted cheese.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$19.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Onion Uthappam (2 pcs)</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Thick rice pancakes topped with onions.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$17.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Mix Veg Uthappam (2 pcs)</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Thick rice pancakes with mixed vegetables.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$18.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Family Paper Dosa</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Extra large crispy paper thin dosa.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$22.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Rava Dosa</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Crispy semolina crepe with a unique texture.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$15.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Rava Masala Dosa</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Rava dosa filled with spiced potato masala.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$17.99</span>
                          </div>
                        </motion.div>
                      </div>
                    </StaggerItem>

                    {/* Indo Chinese */}
                    <StaggerItem>
                      <div className="relative h-32 sm:h-40 rounded-lg overflow-hidden mb-6">
                        <Image
                          src="/images/Paneer65.jpeg"
                          alt="South Indian Dosa"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                        <div className="absolute inset-0 flex items-center px-4 sm:px-6">
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Indo Chinese</h3>
                        </div>
                      </div>
                      <div className="mb-8">
                        <div className="space-y-4">
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Chilly Paneer</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Paneer tossed in spicy Indo-Chinese sauce.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$17.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Veg Manchurian</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Vegetable balls in tangy Manchurian sauce.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$15.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Gobi Manchurian</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Crispy cauliflower in Manchurian sauce.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$16.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Veg Fried Rice</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Wok-tossed rice with mixed vegetables.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$15.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Schezwan Fried Rice</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Spicy Schezwan style fried rice.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$16.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Veg Noodles</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Stir-fried noodles with fresh vegetables.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$15.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Veg Schezwan Noodles</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Spicy Schezwan noodles with vegetables.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$16.99</span>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </StaggerItem>

                    {/* Mains */}
                    <StaggerItem>
                      <div className="relative h-32 sm:h-40 rounded-lg overflow-hidden mb-6">
                        <Image
                          src="/images/menu-curry.png"
                          alt="South Indian Dosa"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                        <div className="absolute inset-0 flex items-center px-4 sm:px-6">
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Mains</h3>
                        </div>
                      </div>
                      <div className="mb-8">
                        <div className="space-y-4">
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Paneer Curry</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Cottage cheese in rich South Indian curry.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$19.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Okra Fry</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Crispy okra stir-fried with spices.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$18.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Ennai Kathirikai Kulambu</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Stuffed brinjal in tangy tamarind gravy.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$18.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Potato Kara Curry</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Spicy potato curry South Indian style.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$17.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Veg Kuruma / Curry</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Mixed vegetables in coconut curry.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$17.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">SI Style Dhal Tadka</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Lentils tempered with South Indian spices.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$17.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Mango Dhal</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Lentils cooked with raw mango.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$18.99</span>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </StaggerItem>

                    {/* Rice Dishes */}
                    <StaggerItem>
                      <div className="relative h-32 sm:h-40 rounded-lg overflow-hidden mb-6">
                        <Image
                          src="/images/coconut.jpeg"
                          alt="South Indian Dosa"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                        <div className="absolute inset-0 flex items-center px-4 sm:px-6">
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Rice Dishes</h3>
                        </div>
                      </div>
                      <div className="mb-8">
                        <div className="space-y-4">
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Plain Rice</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Steamed basmati rice.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$4.00</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Lemon Rice</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Tangy rice with lemon and spices.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$12.00</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Tamarind Rice</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Rice with tangy tamarind paste.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$12.00</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Curd Rice</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Cooling rice mixed with yogurt.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$11.00</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Coconut Rice</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Fragrant rice with coconut.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$12.00</span>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </StaggerItem>

                    {/*Naan */}
                    <StaggerItem>
                      <div className="relative h-32 sm:h-40 rounded-lg overflow-hidden mb-6">
                        <Image
                          src="/images/vegg.jpeg"
                          alt="South Indian Dosa"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                        <div className="absolute inset-0 flex items-center px-4 sm:px-6">
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Veg Briyani</h3>
                        </div>
                      </div>
                      <div className="mb-8">
                        <div className="space-y-4">
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Veg Briyani</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Aromatic basmati rice with spices and veges.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$16.99</span>
                            </div>
                          </motion.div>
                           <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Family Pack Briyani</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Aromatic basmati rice with spices and veges.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$45.99</span>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </StaggerItem>

                  </div>
                </StaggerContainer>
              </FadeIn>
            )}

            {/* NON-VEG CATEGORY */}
            {activeCategory === "nonveg" && (
              <FadeIn>
                {/* Non-Veg Hero Banner */}
                <div className="relative h-48 sm:h-64 rounded-lg sm:rounded-xl overflow-hidden mb-10 sm:mb-12">
                  <Image
                    src="/images/chicken66.jpeg"
                    alt="South Indian Non-Vegetarian Cuisine"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-transparent" />
                  <div className="absolute inset-0 flex items-center">
                    <div className="px-6 sm:px-8">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/30 border border-secondary/40 mb-3">
                        <Drumstick className="w-3 h-3 sm:w-4 sm:h-4 text-orange-300" />
                        <span className="text-xs sm:text-sm text-orange-200 font-medium">Premium Non-Veg</span>
                      </div>
                      <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2">
                        South Indian Non-Vegetarian
                      </h2>
                      <p className="text-orange-100/80 text-sm sm:text-base">
                        Succulent meat and seafood dishes
                      </p>
                    </div>
                  </div>
                </div>

                <StaggerContainer>
                  <div className="max-w-4xl mx-auto space-y-12">

                    {/* Soup */}
                    <StaggerItem>
                      <div className="mb-8">
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-primary mb-6 pb-2 border-b border-primary/20">Soup</h3>
                        <div className="space-y-4">
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Kozhi Saru (Chicken)</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Traditional South Indian chicken soup.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$14.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Crab (Nandu) Saru</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Spicy South Indian crab soup enriched with coastal flavors.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$16.99</span>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </StaggerItem>

                    {/* Appetizers */}
                    <StaggerItem>
                      <div className="relative h-32 sm:h-40 rounded-lg overflow-hidden mb-6">
                        <Image
                          src="/images/chicken.jpeg"
                          alt="South Indian Idly"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                        <div className="absolute inset-0 flex items-center px-4 sm:px-6">
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Appetizers</h3>
                        </div>
                      </div>
                      <div className="mb-8">
                        <div className="space-y-4">
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Chicken 65</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Spicy deep-fried chicken with South Indian spices.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$18.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Chicken Lollipop (5 Nos)</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Crispy chicken winglets shaped like lollipops.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$17.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Chicken Lollipop Tossed</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Chicken lollipop tossed in spicy sauce.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$18.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Chicken Pepper Fry</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Chicken pieces stir-fried with black pepper.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$17.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Goat Pepper Fry</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Tender goat meat with aromatic pepper.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$21.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Prawn Pepper Fry</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Prawns stir-fried with crushed pepper.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$21.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Mutton Kola Urundai (6 pcs)</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Deep-fried mutton meatballs.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$18.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Nethili Fry</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Crispy fried anchovies with spices.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$18.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Tawa Fish</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Pan-seared fish with Indian spices.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$19.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Chicken Tikka</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Marinated chicken grilled in tandoor.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$19.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Malai Tikka</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Creamy marinated chicken tikka.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$19.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Tandoori Chicken 65</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Tandoori style chicken 65.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$21.99</span>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </StaggerItem>

                    {/* Non Veg Dosa */}
                    <StaggerItem>
                      <div className="relative h-32 sm:h-40 rounded-lg overflow-hidden mb-6">
                        <Image
                          src="/images/chicken.jpeg"
                          alt="South Indian Idly"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                        <div className="absolute inset-0 flex items-center px-4 sm:px-6">
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Non Veg Dosa</h3>
                        </div>
                      </div>
                      <div className="mb-8">
                        <div className="space-y-4">
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Chicken 65 Dosa</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Crispy dosa topped with chicken 65.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$19.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Tandoori 65 Dosa</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Dosa with tandoori chicken 65.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$21.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Chicken Kheema Dosa</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Dosa filled with minced chicken.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$19.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Egg Dosa</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Dosa topped with scrambled egg.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$16.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Mutton Dosa</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Dosa with spiced mutton filling.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$19.99</span>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </StaggerItem>

                    {/* Parotta */}
                    <StaggerItem>
                      <div className="relative h-32 sm:h-40 rounded-lg overflow-hidden mb-6">
                        <Image
                          src="/images/hero-parotta.jpg"
                          alt="South Indian Idly"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                        <div className="absolute inset-0 flex items-center px-4 sm:px-6">
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Parotta</h3>
                        </div>
                      </div>
                      <div className="mb-8">
                        <div className="space-y-4">
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Parotta with Salna</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Layered flatbread with vegetable curry.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$15.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Egg Kothu Parotta</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Shredded parotta with egg.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$16.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Chicken Kothu Parotta</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Shredded parotta with chicken.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$19.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Parotta with Chicken 65</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Parotta served with chicken 65.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$25.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Parotta with Goat 65</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Parotta served with goat 65.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$27.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Parotta with Chicken/Lamb/Goat/Mutton Paya</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Parotta with rich meat trotters curry.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$27.99</span>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </StaggerItem>

                    {/* Indo Chinese */}
                    <StaggerItem>
                      <div className="relative h-32 sm:h-40 rounded-lg overflow-hidden mb-6">
                        <Image
                          src="/images/fried.jpeg"
                          alt="South Indian Idly"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                        <div className="absolute inset-0 flex items-center px-4 sm:px-6">
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Indo Chinese</h3>
                        </div>
                      </div>
                      <div className="mb-8">
                        <div className="space-y-4">
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Chilly Chicken</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Chicken in spicy Indo-Chinese sauce.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$17.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Chicken Dragon</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Crispy chicken in dragon sauce.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$19.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Chicken Manchurian</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Chicken balls in Manchurian sauce.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$19.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Chicken Fried Rice</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Wok-tossed rice with chicken.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$17.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Egg Fried Rice</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Fried rice with scrambled egg.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$15.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Schezwan Chicken Fried Rice</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Spicy Schezwan rice with chicken.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$18.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Schezwan Egg Fried Rice</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Spicy Schezwan rice with egg.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$16.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Chicken Noodles</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Stir-fried noodles with chicken.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$18.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Chicken Schezwan Noodles</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Spicy Schezwan noodles with chicken.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$19.99</span>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </StaggerItem>

                    {/* Mains */}
                    <StaggerItem>
                      <div className="relative h-32 sm:h-40 rounded-lg overflow-hidden mb-6">
                        <Image
                          src="/images/goat.jpeg"
                          alt="South Indian Idly"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                        <div className="absolute inset-0 flex items-center px-4 sm:px-6">
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Mains</h3>
                        </div>
                      </div>
                      <div className="mb-8">
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-primary mb-6 pb-2 border-b border-primary/20">Mains</h3>
                        <div className="space-y-4">
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Chicken Tikka Masala</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Tikka chicken in rich tomato gravy.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$19.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Butter Chicken</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Creamy tomato-based chicken curry.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$17.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Butter Prawn</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Prawns in rich butter sauce.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$21.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Chettinad Chicken</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Spicy Chettinad style chicken curry.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$18.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Chettinad Prawn</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Prawns in Chettinad masala.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$21.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Andhra Chicken</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Fiery Andhra style chicken curry.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$18.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Andhra Lamb</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Spicy Andhra lamb curry.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$21.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Gongura Chicken</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Chicken with tangy sorrel leaves.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$19.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Gongura Lamb</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Lamb with gongura leaves.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$21.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Gongura Mutton</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Mutton cooked with gongura.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$22.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">SI Style Goat Curry</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Traditional South Indian goat curry.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$22.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Puli Kulambu Chicken</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Chicken in tangy tamarind gravy.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$18.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Puli Kulambu Fish</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Fish in tamarind curry.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$21.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Kuruma Chicken</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Chicken in coconut kurma.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$18.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Kuruma Lamb</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Lamb in creamy kurma sauce.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$21.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Vindaloo Chicken</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Spicy vinegar-based chicken curry.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$18.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Vindaloo Lamb</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Fiery lamb vindaloo.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$21.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Rogan Gose Chicken</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Aromatic chicken rogan josh.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$18.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Rogan Gose Lamb</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Classic lamb rogan josh.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$21.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Malabar Fish</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Fish in Malabar coconut curry.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$21.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Malabar Prawn</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Prawns in Malabar style gravy.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$21.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Mutton Paya</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Rich mutton trotters curry.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$20.99</span>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </StaggerItem>

                    
                    {/* Briyani */}
                    <StaggerItem>
                      <div className="relative h-32 sm:h-40 rounded-lg overflow-hidden mb-6">
                        <Image
                          src="/images/Prawn-Biryani.jpeg"
                          alt="South Indian Dosa"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                        <div className="absolute inset-0 flex items-center px-4 sm:px-6">
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Non Veg Briyani</h3>
                        </div>
                      </div>
                      <div className="mb-8">
                        <div className="space-y-4">
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Chicken Briyani</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Aromatic basmati rice with spices and juicy.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$17.99</span>
                            </div>
                          </motion.div>
                           <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Goat Briyani</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Aromatic jeera samba rice with tender juicy meat.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$19.99</span>
                            </div>
                          </motion.div>
                           <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Prawn Briyani</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Fragment basmati rice cooked with tender spiced prwans.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$21.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Family pack Chicken Briyani</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Aromatic basmati rice with spices and juicy.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$55.99</span>
                            </div>
                          </motion.div>
                           <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Family pack Goat Briyani</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Aromatic jeera samba rice with tender juicy meat.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$65.99</span>
                            </div>
                          </motion.div>
                           <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Family pack Prawn Briyani</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Fragment basmati rice cooked with tender spiced prwans.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$69.99</span>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </StaggerItem>

                  </div>
                </StaggerContainer>
              </FadeIn>
            )}

            {/* DRINKS & DESSERTS CATEGORY */}
            {activeCategory === "drinks" && (
              <FadeIn>
                {/* Drinks & Desserts Hero Banner */}
                <div className="relative h-48 sm:h-64 rounded-lg sm:rounded-xl overflow-hidden mb-10 sm:mb-12">
                  <Image
                    src="/images/kesar.jpeg"
                    alt="Indian Drinks and Desserts"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-transparent" />
                  <div className="absolute inset-0 flex items-center">
                    <div className="px-6 sm:px-8">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 mb-3">
                        <IceCream className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                        <span className="text-xs sm:text-sm text-purple-300 font-medium">Sweet & Refreshing</span>
                      </div>
                      <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2">
                        Drinks & Desserts
                      </h2>
                      <p className="text-purple-100/80 text-sm sm:text-base">
                        Traditional beverages and sweet delights
                      </p>
                    </div>
                  </div>
                </div>

                <StaggerContainer>
                  <div className="max-w-4xl mx-auto space-y-12">

                    {/* Drinks Section with Image */}
                    <StaggerItem>
                      <div className="relative h-32 sm:h-40 rounded-lg overflow-hidden mb-6">
                        <Image
                          src="/images/tea.jpeg"
                          alt="Indian Drinks - Lassi and Chai"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                        <div className="absolute inset-0 flex items-center px-4 sm:px-6">
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Drinks</h3>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Masala Tea</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Spiced Indian tea with aromatic herbs.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$4.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Filter Coffee</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Traditional South Indian filter coffee.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$5.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Mango Lassi</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Creamy mango yogurt drink.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$7.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Sweet Lassi</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Sweet yogurt drink.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$6.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Salt Lassi</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Savory salted yogurt drink.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$6.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Buttermilk</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Spiced churned buttermilk.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$8.99</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Jigarthanda</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Traditional Madurai cold drink.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$9.99</span>
                          </div>
                        </motion.div>
                      </div>
                    </StaggerItem>

                    {/* Desserts Section with Image */}
                    <StaggerItem>
                      <div className="relative h-32 sm:h-40 rounded-lg overflow-hidden mb-6">
                        <Image
                          src="/images/kesari.jpeg"
                          alt="Indian Desserts"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                        <div className="absolute inset-0 flex items-center px-4 sm:px-6">
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Desserts</h3>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Rava Kesari</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Sweet semolina pudding with saffron.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$7.00</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Rice Kheer</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Creamy rice pudding with cardamom.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$7.00</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Semiya Payasam</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Vermicelli pudding with milk and nuts.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$8.00</span>
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Bread Halwa</h4>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Sweet bread dessert with ghee.</p>
                            </div>
                            <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$6.00</span>
                          </div>
                        </motion.div>
                      </div>
                    </StaggerItem>

                  </div>
                </StaggerContainer>
              </FadeIn>
            )}

            {/* BRIYANI CATEGORY */}
            {activeCategory === "briyani" && (
              <FadeIn>
                {/* Briyani Hero Banner */}
                <div className="relative h-48 sm:h-64 rounded-lg sm:rounded-xl overflow-hidden mb-10 sm:mb-12">
                  <Image
                    src="/images/naan.jpeg"
                    alt="Authentic Briyani"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-transparent" />
                  <div className="absolute inset-0 flex items-center">
                    <div className="px-6 sm:px-8">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 mb-3">
                        <Utensils className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                        <span className="text-xs sm:text-sm text-amber-300 font-medium">Aromatic dish</span>
                      </div>
                      <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2">
                        Roti & Naan
                      </h2>
                      <p className="text-amber-100/80 text-sm sm:text-base">
                        crispy and sponge batter
                      </p>
                    </div>
                  </div>
                </div>

                <StaggerContainer>
                  <div className="max-w-4xl mx-auto space-y-12">

                    {/* Briyani Items */}
                    {/* Roti Section */}
                    <StaggerItem>
                      <div className="relative h-32 sm:h-40 rounded-lg overflow-hidden mb-6">
                        <Image
                          src="/images/na.jpeg"
                          alt="Indian Roti and Paratha"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                        <div className="absolute inset-0 flex items-center px-4 sm:px-6">
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Roti & Paratha</h3>
                        </div>
                      </div>
                      <div className="mb-8">
                        <div className="space-y-4">
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Plain Roti / Chapati</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Whole wheat flatbread cooked on tawa.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$3.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Butter Roti</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Soft whole wheat bread brushed with butter.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$4.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Tandoori Roti</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Whole wheat bread baked in tandoor oven.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$4.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Plain Parotta</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Layered flaky flatbread from Kerala.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$5.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Butter Parotta</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Flaky parotta brushed with butter.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$6.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Aloo Paratha</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Whole wheat bread stuffed with spiced potato.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$8.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Paneer Paratha</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Paratha stuffed with spiced cottage cheese.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$9.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Rumali Roti</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Thin handkerchief-style bread.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$6.99</span>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </StaggerItem>

                    {/* Naan Section */}
                    <StaggerItem>
                      <div className="relative h-32 sm:h-40 rounded-lg overflow-hidden mb-6">
                        <Image
                          src="/images/naan.jpeg"
                          alt="Indian Naan Breads"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                        <div className="absolute inset-0 flex items-center px-4 sm:px-6">
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Naan</h3>
                        </div>
                      </div>
                      <div className="mb-8">
                        <div className="space-y-4">
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Plain Naan</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Leavened bread baked in tandoor oven.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$4.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Butter Naan</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Naan brushed with butter.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$5.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Garlic Naan</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Naan topped with fresh garlic and coriander.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$6.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Cheese Naan</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Naan stuffed with melted cheese.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$7.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Kulcha</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Leavened bread stuffed with spiced potato and peas.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$7.99</span>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </StaggerItem>

                  </div>
                </StaggerContainer>
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