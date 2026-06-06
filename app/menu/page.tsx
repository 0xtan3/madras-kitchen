"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"
import { Leaf, Drumstick, ChefHat } from "lucide-react"

export default function MenuPage() {
  const [activeSection, setActiveSection] = useState<"veg" | "nonveg">("veg")

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/spices.png"
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
              Discover our carefully curated selection of authentic South Indian dishes, each crafted with traditional recipes and the finest ingredients.
            </motion.p>
          </div>
        </section>

        {/* Menu Type Toggle */}
        <section className="py-6 sm:py-8 sticky top-[64px] sm:top-[72px] bg-background/95 backdrop-blur-md z-30 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex justify-center gap-3 sm:gap-4">
              <motion.button
                onClick={() => {
                  setActiveSection("veg")
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-4 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeSection === "veg"
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <Leaf className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Vegetarian</span>
              </motion.button>
              <motion.button
                onClick={() => {
                  setActiveSection("nonveg")
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-4 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeSection === "nonveg"
                    ? "bg-secondary text-white shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <Drumstick className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Non-Vegetarian</span>
              </motion.button>
            </div>
          </div>
        </section>

        {/* Menu Content */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            {activeSection === "veg" ? (
              <FadeIn>
                {/* Veg Hero Banner */}
                <div className="relative h-48 sm:h-64 md:h-80 rounded-lg sm:rounded-xl overflow-hidden mb-10 sm:mb-16">
                  <Image
                    src="/images/featured-idli.png"
                    alt="South Indian Vegetarian Cuisine"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent" />
                  <div className="absolute inset-0 flex items-center">
                    <div className="px-6 sm:px-8 md:px-12">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 mb-3 sm:mb-4">
                        <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                        <span className="text-xs sm:text-sm text-green-300 font-medium">100% Vegetarian</span>
                      </div>
                      <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3">
                        South Indian Vegetarian
                      </h2>
                      <p className="text-green-100/80 text-sm sm:text-base max-w-md">
                        Traditional vegetarian delicacies crafted with authentic recipes
                      </p>
                    </div>
                  </div>
                </div>

                {/* Veg Menu Categories - HARDCODED */}
                <div className="max-w-4xl mx-auto">
                  <StaggerContainer>
                    
                    {/* Soup */}
                    <StaggerItem>
                      <div className="mb-12">
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-primary mb-6 pb-2 border-b border-primary/20">Soup</h3>
                        <div className="space-y-4">
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Milagu Rasam (Pepper)</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 line-clamp-2">Spicy South Indian pepper soup infused with aromatic herbs and spices.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$11.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.03 }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Moringa Saru (Drumstick)</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 line-clamp-2">Flavorful South Indian drumstick soup cooked with traditional spices and herbs.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$12.99</span>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </StaggerItem>

                    {/* Starters */}
                    <StaggerItem>
                      <div className="mb-12">
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-primary mb-6 pb-2 border-b border-primary/20">Starters</h3>
                        <div className="space-y-4">
                          {[
                            { name: "Methu Vada", price: "$9.99", desc: "Crispy golden urad dal fritters, soft inside and served fresh." },
                            { name: "Masala Vada (3 Nos)", price: "$9.99", desc: "Crunchy lentil fritters blended with traditional South Indian spices." },
                            { name: "Aloo Bonda (3 Nos)", price: "$9.99", desc: "Crispy potato masala coated in a flavorful golden gram flour batter." },
                            { name: "Banana Baji (3 Nos)", price: "$9.99", desc: "Crispy ripe banana fritters coated in a light spiced batter." },
                            { name: "Sambar Vada (2 Nos)", price: "$11.99", desc: "Soft medu vadai soaked in flavorful traditional sambar." },
                            { name: "Rasam Vada (2 Nos)", price: "$11.99", desc: "Soft medu vadai dipped in spicy and tangy rasam." },
                            { name: "Dahi Vada (2 Nos)", price: "$11.99", desc: "Soft lentil dumplings topped with chilled creamy curd and spices." },
                            { name: "Onion Samosa (5 Nos)", price: "$9.99", desc: "Crispy mini pastries stuffed with spiced onion filling." },
                            { name: "Onion Pakoda", price: "$9.99", desc: "Crispy onion fritters tossed with aromatic spices and herbs." },
                            { name: "Paneer 65 (Dry or Semi)", price: "$17.99", desc: "Spicy crispy paneer tossed in bold South Indian flavors." },
                            { name: "Gobi 65 (Dry or Semi)", price: "$16.99", desc: "Crispy cauliflower bites tossed in spicy South Indian seasoning." },
                            { name: "Mirchi Bhaji (2 Nos)", price: "$9.99", desc: "Crispy fried green chilli coated in spiced gram flour batter." },
                          ].map((item, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="group">
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">{item.name}</h4>
                                  <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 line-clamp-2">{item.desc}</p>
                                </div>
                                <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">{item.price}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </StaggerItem>

                    {/* Idly */}
                    <StaggerItem>
                      <div className="mb-12">
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-primary mb-6 pb-2 border-b border-primary/20">Idly</h3>
                        <div className="space-y-4">
                          {[
                            { name: "Plain Idly (4 Nos)", price: "$14.99", desc: "Soft fluffy steamed rice cakes served with sambar and chutneys." },
                            { name: "Mini Idly (with sambar)", price: "$15.99", desc: "Bite-sized steamed rice cakes soaked in hot flavorful sambar." },
                            { name: "Podi Idly (4 pcs)", price: "$16.99", desc: "Soft idly tossed in roasted lentil powder and spices." },
                            { name: "Ghee Podi Idly", price: "$17.99", desc: "Steamed rice cakes coated in aromatic ghee and podi." },
                            { name: "Ghee Podi Mini Idly", price: "$16.99", desc: "Mini idlies tossed in aromatic ghee and roasted lentil powder." },
                          ].map((item, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="group">
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">{item.name}</h4>
                                  <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 line-clamp-2">{item.desc}</p>
                                </div>
                                <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">{item.price}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </StaggerItem>

                    {/* Dosa */}
                    <StaggerItem>
                      <div className="mb-12">
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-primary mb-6 pb-2 border-b border-primary/20">Dosa</h3>
                        <div className="space-y-4">
                          {[
                            { name: "Plain Dosa", price: "$11.99", desc: "Classic crispy rice crepe served with sambar and chutneys." },
                            { name: "Set Dosa", price: "$12.99", desc: "Soft spongy dosas served with sambar and chutneys." },
                            { name: "Podi Dosa", price: "$14.99", desc: "Crispy dosa coated with aromatic podi powder." },
                            { name: "Podi Masala Dosa", price: "$15.99", desc: "Podi dosa filled with spiced potato masala." },
                            { name: "Masala Dosa", price: "$15.99", desc: "Crispy dosa filled with spiced potato masala." },
                            { name: "Mysore Masala Dosa", price: "$16.99", desc: "Spicy dosa with red chutney and potato masala." },
                            { name: "Cheese Dosa", price: "$15.99", desc: "Crispy dosa topped with melted cheese." },
                            { name: "Cheese Masala Dosa", price: "$16.99", desc: "Cheese dosa filled with spiced potato masala." },
                            { name: "Ghee Roast Dosa", price: "$14.99", desc: "Extra crispy dosa roasted in pure ghee." },
                            { name: "Ghee Roast Masala Dosa", price: "$16.99", desc: "Ghee roast dosa with spiced potato masala." },
                            { name: "Ghee Roast Podi Masala", price: "$17.99", desc: "Ghee dosa with podi and potato masala." },
                            { name: "Onion Dosa", price: "$15.99", desc: "Crispy dosa topped with caramelized onions." },
                            { name: "Paneer Dosa", price: "$18.99", desc: "Dosa filled with spiced paneer filling." },
                            { name: "Paneer Cheese Dosa", price: "$19.99", desc: "Paneer dosa topped with melted cheese." },
                            { name: "Onion Uthappam (2 pcs)", price: "$17.99", desc: "Thick rice pancakes topped with onions." },
                            { name: "Mix Veg Uthappam (2 pcs)", price: "$18.99", desc: "Thick rice pancakes with mixed vegetables." },
                            { name: "Family Paper Dosa", price: "$22.99", desc: "Extra large crispy paper thin dosa." },
                            { name: "Rava Dosa", price: "$15.99", desc: "Crispy semolina crepe with a unique texture." },
                            { name: "Rava Masala Dosa", price: "$17.99", desc: "Rava dosa filled with spiced potato masala." },
                          ].map((item, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="group">
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">{item.name}</h4>
                                  <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 line-clamp-2">{item.desc}</p>
                                </div>
                                <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">{item.price}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </StaggerItem>

                    {/* Indo Chinese */}
                    <StaggerItem>
                      <div className="mb-12">
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-primary mb-6 pb-2 border-b border-primary/20">Indo Chinese</h3>
                        <div className="space-y-4">
                          {[
                            { name: "Chilly Paneer", price: "$17.99", desc: "Paneer tossed in spicy Indo-Chinese sauce." },
                            { name: "Veg Manchurian", price: "$15.99", desc: "Vegetable balls in tangy Manchurian sauce." },
                            { name: "Gobi Manchurian", price: "$16.99", desc: "Crispy cauliflower in Manchurian sauce." },
                            { name: "Veg Fried Rice", price: "$15.99", desc: "Wok-tossed rice with mixed vegetables." },
                            { name: "Schezwan Fried Rice", price: "$16.99", desc: "Spicy Schezwan style fried rice." },
                            { name: "Veg Noodles", price: "$15.99", desc: "Stir-fried noodles with fresh vegetables." },
                            { name: "Veg Schezwan Noodles", price: "$16.99", desc: "Spicy Schezwan noodles with vegetables." },
                          ].map((item, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="group">
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">{item.name}</h4>
                                  <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 line-clamp-2">{item.desc}</p>
                                </div>
                                <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">{item.price}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </StaggerItem>

                    {/* Mains */}
                    <StaggerItem>
                      <div className="mb-12">
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-primary mb-6 pb-2 border-b border-primary/20">Mains</h3>
                        <div className="space-y-4">
                          {[
                            { name: "Paneer Curry", price: "$19.99", desc: "Cottage cheese in rich South Indian curry." },
                            { name: "Okra Fry", price: "$18.99", desc: "Crispy okra stir-fried with spices." },
                            { name: "Ennai Kathirikai Kulambu", price: "$18.99", desc: "Stuffed brinjal in tangy tamarind gravy." },
                            { name: "Potato Kara Curry", price: "$17.99", desc: "Spicy potato curry South Indian style." },
                            { name: "Veg Kuruma / Curry", price: "$17.99", desc: "Mixed vegetables in coconut curry." },
                            { name: "SI Style Dhal Tadka", price: "$17.99", desc: "Lentils tempered with South Indian spices." },
                            { name: "Mango Dhal", price: "$18.99", desc: "Lentils cooked with raw mango." },
                          ].map((item, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="group">
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">{item.name}</h4>
                                  <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 line-clamp-2">{item.desc}</p>
                                </div>
                                <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">{item.price}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </StaggerItem>

                    {/* Rice Dishes */}
                    <StaggerItem>
                      <div className="mb-12">
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-primary mb-6 pb-2 border-b border-primary/20">Rice Dishes</h3>
                        <div className="space-y-4">
                          {[
                            { name: "Plain Rice", price: "$4.00", desc: "Steamed basmati rice." },
                            { name: "Lemon Rice", price: "$12.00", desc: "Tangy rice with lemon and spices." },
                            { name: "Tamarind Rice", price: "$12.00", desc: "Rice with tangy tamarind paste." },
                            { name: "Curd Rice", price: "$11.00", desc: "Cooling rice mixed with yogurt." },
                            { name: "Coconut Rice", price: "$12.00", desc: "Fragrant rice with coconut." },
                          ].map((item, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="group">
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">{item.name}</h4>
                                  <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 line-clamp-2">{item.desc}</p>
                                </div>
                                <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">{item.price}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </StaggerItem>

                    {/* Desserts */}
                    <StaggerItem>
                      <div className="mb-12">
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-primary mb-6 pb-2 border-b border-primary/20">Desserts</h3>
                        <div className="space-y-4">
                          {[
                            { name: "Rava Kesari", price: "$7.00", desc: "Sweet semolina pudding with saffron." },
                            { name: "Rice Kheer", price: "$7.00", desc: "Creamy rice pudding with cardamom." },
                            { name: "Semiya Payasam", price: "$8.00", desc: "Vermicelli pudding with milk and nuts." },
                            { name: "Bread Halwa", price: "$6.00", desc: "Sweet bread dessert with ghee." },
                          ].map((item, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="group">
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">{item.name}</h4>
                                  <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 line-clamp-2">{item.desc}</p>
                                </div>
                                <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">{item.price}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </StaggerItem>

                    {/* Drinks */}
                    <StaggerItem>
                      <div className="mb-12">
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-primary mb-6 pb-2 border-b border-primary/20">Drinks</h3>
                        <div className="space-y-4">
                          {[
                            { name: "Masala Tea", price: "$4.99", desc: "Spiced Indian tea with aromatic herbs." },
                            { name: "Filter Coffee", price: "$5.99", desc: "Traditional South Indian filter coffee." },
                            { name: "Mango Lassi", price: "$7.99", desc: "Creamy mango yogurt drink." },
                            { name: "Sweet Lassi", price: "$6.99", desc: "Sweet yogurt drink." },
                            { name: "Salt Lassi", price: "$6.99", desc: "Savory salted yogurt drink." },
                            { name: "Buttermilk", price: "$8.99", desc: "Spiced churned buttermilk." },
                            { name: "Jigarthanda", price: "$9.99", desc: "Traditional Madurai cold drink." },
                          ].map((item, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="group">
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">{item.name}</h4>
                                  <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 line-clamp-2">{item.desc}</p>
                                </div>
                                <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">{item.price}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </StaggerItem>

                  </StaggerContainer>
                </div>
              </FadeIn>
            ) : (
              <FadeIn>
                {/* Non-Veg Hero Banner */}
                <div className="relative h-48 sm:h-64 md:h-80 rounded-lg sm:rounded-xl overflow-hidden mb-10 sm:mb-16">
                  <Image
                    src="/images/featured-biryani.png"
                    alt="South Indian Non-Vegetarian Cuisine"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-transparent" />
                  <div className="absolute inset-0 flex items-center">
                    <div className="px-6 sm:px-8 md:px-12">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/30 border border-secondary/40 mb-3 sm:mb-4">
                        <Drumstick className="w-3 h-3 sm:w-4 sm:h-4 text-orange-300" />
                        <span className="text-xs sm:text-sm text-orange-200 font-medium">Premium Non-Veg</span>
                      </div>
                      <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3">
                        South Indian Non-Vegetarian
                      </h2>
                      <p className="text-orange-100/80 text-sm sm:text-base max-w-md">
                        Succulent meat and seafood dishes with bold South Indian flavors
                      </p>
                    </div>
                  </div>
                </div>

                {/* Non-Veg Menu Categories - HARDCODED */}
                <div className="max-w-4xl mx-auto">
                  <StaggerContainer>
                    
                    {/* Soup */}
                    <StaggerItem>
                      <div className="mb-12">
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-primary mb-6 pb-2 border-b border-primary/20">Soup</h3>
                        <div className="space-y-4">
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Kozhi Saru (Chicken)</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 line-clamp-2">Traditional South Indian chicken soup.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$14.99</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.03 }} className="group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">Crab (Nandu) Saru</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 line-clamp-2">Spicy South Indian crab soup enriched with coastal flavors.</p>
                              </div>
                              <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">$16.99</span>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </StaggerItem>

                    {/* Appetizers */}
                    <StaggerItem>
                      <div className="mb-12">
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-primary mb-6 pb-2 border-b border-primary/20">Appetizers</h3>
                        <div className="space-y-4">
                          {[
                            { name: "Chicken 65", price: "$18.99", desc: "Spicy deep-fried chicken with South Indian spices." },
                            { name: "Chicken Lollipop (5 Nos)", price: "$17.99", desc: "Crispy chicken winglets shaped like lollipops." },
                            { name: "Chicken Lollipop Tossed", price: "$18.99", desc: "Chicken lollipop tossed in spicy sauce." },
                            { name: "Chicken Pepper Fry", price: "$17.99", desc: "Chicken pieces stir-fried with black pepper." },
                            { name: "Goat Pepper Fry", price: "$21.99", desc: "Tender goat meat with aromatic pepper." },
                            { name: "Prawn Pepper Fry", price: "$21.99", desc: "Prawns stir-fried with crushed pepper." },
                            { name: "Mutton Kola Urundai (6 pcs)", price: "$18.99", desc: "Deep-fried mutton meatballs." },
                            { name: "Nethili Fry", price: "$18.99", desc: "Crispy fried anchovies with spices." },
                            { name: "Tawa Fish", price: "$19.99", desc: "Pan-seared fish with Indian spices." },
                            { name: "Chicken Tikka", price: "$19.99", desc: "Marinated chicken grilled in tandoor." },
                            { name: "Malai Tikka", price: "$19.99", desc: "Creamy marinated chicken tikka." },
                            { name: "Tandoori Chicken 65", price: "$21.99", desc: "Tandoori style chicken 65." },
                          ].map((item, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="group">
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">{item.name}</h4>
                                  <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 line-clamp-2">{item.desc}</p>
                                </div>
                                <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">{item.price}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </StaggerItem>

                    {/* Non Veg Dosa */}
                    <StaggerItem>
                      <div className="mb-12">
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-primary mb-6 pb-2 border-b border-primary/20">Non Veg Dosa</h3>
                        <div className="space-y-4">
                          {[
                            { name: "Chicken 65 Dosa", price: "$19.99", desc: "Crispy dosa topped with chicken 65." },
                            { name: "Tandoori 65 Dosa", price: "$21.99", desc: "Dosa with tandoori chicken 65." },
                            { name: "Chicken Kheema Dosa", price: "$19.99", desc: "Dosa filled with minced chicken." },
                            { name: "Egg Dosa", price: "$16.99", desc: "Dosa topped with scrambled egg." },
                            { name: "Mutton Dosa", price: "$19.99", desc: "Dosa with spiced mutton filling." },
                          ].map((item, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="group">
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">{item.name}</h4>
                                  <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 line-clamp-2">{item.desc}</p>
                                </div>
                                <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">{item.price}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </StaggerItem>

                    {/* Parotta */}
                    <StaggerItem>
                      <div className="mb-12">
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-primary mb-6 pb-2 border-b border-primary/20">Parotta</h3>
                        <div className="space-y-4">
                          {[
                            { name: "Parotta with Salna", price: "$15.99", desc: "Layered flatbread with vegetable curry." },
                            { name: "Egg Kothu Parotta", price: "$16.99", desc: "Shredded parotta with egg." },
                            { name: "Chicken Kothu Parotta", price: "$19.99", desc: "Shredded parotta with chicken." },
                            { name: "Parotta with Chicken 65", price: "$25.99", desc: "Parotta served with chicken 65." },
                            { name: "Parotta with Goat 65", price: "$27.99", desc: "Parotta served with goat 65." },
                            { name: "Parotta with Chicken/Lamb/Goat/Mutton Paya", price: "$27.99", desc: "Parotta with rich meat trotters curry." },
                          ].map((item, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="group">
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">{item.name}</h4>
                                  <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 line-clamp-2">{item.desc}</p>
                                </div>
                                <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">{item.price}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </StaggerItem>

                    {/* Indo Chinese */}
                    <StaggerItem>
                      <div className="mb-12">
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-primary mb-6 pb-2 border-b border-primary/20">Indo Chinese</h3>
                        <div className="space-y-4">
                          {[
                            { name: "Chilly Chicken", price: "$17.99", desc: "Chicken in spicy Indo-Chinese sauce." },
                            { name: "Chicken Dragon", price: "$19.99", desc: "Crispy chicken in dragon sauce." },
                            { name: "Chicken Manchurian", price: "$19.99", desc: "Chicken balls in Manchurian sauce." },
                            { name: "Chicken Fried Rice", price: "$17.99", desc: "Wok-tossed rice with chicken." },
                            { name: "Egg Fried Rice", price: "$15.99", desc: "Fried rice with scrambled egg." },
                            { name: "Schezwan Chicken Fried Rice", price: "$18.99", desc: "Spicy Schezwan rice with chicken." },
                            { name: "Schezwan Egg Fried Rice", price: "$16.99", desc: "Spicy Schezwan rice with egg." },
                            { name: "Chicken Noodles", price: "$18.99", desc: "Stir-fried noodles with chicken." },
                            { name: "Chicken Schezwan Noodles", price: "$19.99", desc: "Spicy Schezwan noodles with chicken." },
                          ].map((item, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="group">
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">{item.name}</h4>
                                  <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 line-clamp-2">{item.desc}</p>
                                </div>
                                <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">{item.price}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </StaggerItem>

                    {/* Mains */}
                    <StaggerItem>
                      <div className="mb-12">
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-primary mb-6 pb-2 border-b border-primary/20">Mains</h3>
                        <div className="space-y-4">
                          {[
                            { name: "Chicken Tikka Masala", price: "$19.99", desc: "Tikka chicken in rich tomato gravy." },
                            { name: "Butter Chicken", price: "$17.99", desc: "Creamy tomato-based chicken curry." },
                            { name: "Butter Prawn", price: "$21.99", desc: "Prawns in rich butter sauce." },
                            { name: "Chettinad Chicken", price: "$18.99", desc: "Spicy Chettinad style chicken curry." },
                            { name: "Chettinad Prawn", price: "$21.99", desc: "Prawns in Chettinad masala." },
                            { name: "Andhra Chicken", price: "$18.99", desc: "Fiery Andhra style chicken curry." },
                            { name: "Andhra Lamb", price: "$21.99", desc: "Spicy Andhra lamb curry." },
                            { name: "Gongura Chicken", price: "$19.99", desc: "Chicken with tangy sorrel leaves." },
                            { name: "Gongura Lamb", price: "$21.99", desc: "Lamb with gongura leaves." },
                            { name: "Gongura Mutton", price: "$22.99", desc: "Mutton cooked with gongura." },
                            { name: "SI Style Goat Curry", price: "$22.99", desc: "Traditional South Indian goat curry." },
                            { name: "Puli Kulambu Chicken", price: "$18.99", desc: "Chicken in tangy tamarind gravy." },
                            { name: "Puli Kulambu Fish", price: "$21.99", desc: "Fish in tamarind curry." },
                            { name: "Kuruma Chicken", price: "$18.99", desc: "Chicken in coconut kurma." },
                            { name: "Kuruma Lamb", price: "$21.99", desc: "Lamb in creamy kurma sauce." },
                            { name: "Vindaloo Chicken", price: "$18.99", desc: "Spicy vinegar-based chicken curry." },
                            { name: "Vindaloo Lamb", price: "$21.99", desc: "Fiery lamb vindaloo." },
                            { name: "Rogan Gose Chicken", price: "$18.99", desc: "Aromatic chicken rogan josh." },
                            { name: "Rogan Gose Lamb", price: "$21.99", desc: "Classic lamb rogan josh." },
                            { name: "Malabar Fish", price: "$21.99", desc: "Fish in Malabar coconut curry." },
                            { name: "Malabar Prawn", price: "$21.99", desc: "Prawns in Malabar style gravy." },
                            { name: "Mutton Paya", price: "$20.99", desc: "Rich mutton trotters curry." },
                          ].map((item, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="group">
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">{item.name}</h4>
                                  <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 line-clamp-2">{item.desc}</p>
                                </div>
                                <span className="text-primary font-semibold whitespace-nowrap text-sm sm:text-base">{item.price}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </StaggerItem>

                  </StaggerContainer>
                </div>
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