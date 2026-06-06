  "use client"

  import { useState } from "react"
  import { motion } from "framer-motion"
  import Image from "next/image"
  import { Navigation } from "@/components/navigation"
  import { Footer } from "@/components/footer"
  import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"
  import { MapPin, Phone, Clock, Mail, Send, CheckCircle } from "lucide-react"
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
  import { WhatsAppButton } from "@/components/whatsapp-button"

  export default function ContactPage() {
    const [formState, setFormState] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setIsSubmitting(true)
      
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: "", email: "", phone: "", message: "" })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }))
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
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium uppercase tracking-wider">Contact Us</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif text-5xl md:text-7xl font-bold mb-6"
              >
                Get in <span className="text-primary">Touch</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-white sm:text-muted-foreground text-lg max-w-2xl mx-auto"
              >
                We&apos;d love to hear from you. Whether it&apos;s a reservation, question, or feedback, we&apos;re here to help.
              </motion.p>
            </div>
          </section>

          {/* Contact Cards */}
          <section className="py-16 border-b border-border">
            <div className="container mx-auto px-6">
              <StaggerContainer className="grid md:grid-cols-3 gap-6">
                <StaggerItem>
                  <motion.a
                    href="tel:096501744"
                    whileHover={{ y: -5 }}
                    className="block bg-card p-8 rounded-lg border border-border text-center hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-2">Call Us</h3>
                    <p className="text-primary font-medium">09 650 1744</p>
                    <p className="text-muted-foreground text-sm mt-2">For reservations & enquiries</p>
                  </motion.a>
                </StaggerItem>

                <StaggerItem>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-card p-8 rounded-lg border border-border text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-2">Visit Us</h3>
                    <p className="text-foreground">5/190 Stoddard Road</p>
                    <p className="text-muted-foreground text-sm mt-2">Mount Roskill, Auckland 1041</p>
                  </motion.div>
                </StaggerItem>

                <StaggerItem>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-card p-8 rounded-lg border border-border text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-2">Opening Hours</h3>
                    <p className="text-foreground">Mon - Sun</p>
                    <p className="text-muted-foreground text-sm mt-2">11:00 AM - 9:00 PM</p>
                  </motion.div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-24">
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
              

                {/* Location Details */}
                <FadeIn direction="right" delay={0.2}>
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Restaurant Location */}
                    <div className="bg-card p-8 rounded-lg border border-border">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-serif text-2xl font-semibold">Madras Kitchen Restaurant</h3>
                          <span className="text-sm text-green-500 font-medium">Open Now</span>
                        </div>
                      </div>
                      <div className="space-y-4 text-muted-foreground mb-6">
                        <p className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>
                            5/190 Stoddard Road<br />
                            Mount Roskill, Auckland 1041
                          </span>
                        </p>
                        <p className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                          <a href="tel:096501744" className="hover:text-primary transition-colors">
                            +64 09 650 1744
                          </a>
                        </p>
                      </div>
                      <a
                        href="https://maps.google.com/?q=5/190+Stoddard+Road+Mount+Roskill+Auckland+1041"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300"
                      >
                        <MapPin className="w-4 h-4" />
                        Get Directions
                      </a>
                    </div>

                    {/* Food Truck Location */}
                    <div className="bg-card p-8 rounded-lg border border-border opacity-75">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-serif text-2xl font-semibold">Madras Kitchen Food Truck</h3>
                          <span className="text-sm text-secondary font-medium">Temporarily Closed</span>
                        </div>
                      </div>
                      <div className="space-y-4 text-muted-foreground mb-6">
                        <p className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span>
                            24 Manuroa Road<br />
                            Takanini, Auckland 2110
                          </span>
                        </p>
                        <p className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                          <a href="tel:+64273498859" className="hover:text-secondary transition-colors">
                            +64 27 349 8859
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
          

          {/* CTA Section */}
          <section className="py-24">
            <div className="container mx-auto px-6">
              <FadeIn className="text-center max-w-2xl mx-auto">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                  Ready to <span className="text-primary">Dine</span> With Us?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Call us now to make a reservation or simply walk in. We look forward to serving you authentic South Indian cuisine.
                </p>
                <a
                  href="tel:096501744"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:bg-primary/90 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now: +64 273498859</span>
                </a>
              </FadeIn>
            </div>
          </section>
        </main>
        <Footer />
        <WhatsAppButton />
      </>
    )
  }
