"use client"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"
import { Heart, Leaf, Award, Users, ChefHat, Flame, Target, UsersRound, Sprout, Presentation, Rocket } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"

const roadmap = [
  {
    title: "The Dream Begins",
    description: "Started as a humble food truck, serving authentic South Indian cuisine to the streets of Auckland.",
    color: "#e63946",
    icon: Target,
    position: { left: "10%", top: "70%" },
  },
  {
    title: "Growing Community",
    description: "Built a loyal following through quality food and genuine hospitality during challenging times.",
    color: "#f77f00",
    icon: UsersRound,
    position: { left: "30%", top: "66%" },
  },
  {
    title: "Expanding Horizons",
    description: "Introduced new dishes and expanded our menu based on customer feedback and family recipes.",
    color: "#2a9d8f",
    icon: Sprout,
    position: { left: "50%", top: "48%" },
  },
  {
    title: "Restaurant Opens",
    description: "Opened our doors at Mount Roskill, bringing the food truck experience to a comfortable dining space.",
    color: "#1d4ed8",
    icon: Presentation,
    position: { left: "70%", top: "40%" },
  },
  {
    title: "Continuing the Legacy",
    description: "Serving the Auckland community with the same passion and authenticity that started our journey.",
    color: "#7b2cbf",
    icon: Rocket,
    position: { left: "90%", top: "20%" },
  },
]

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "Every dish is prepared with love and dedication to authentic flavours.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "We source the finest ingredients to ensure quality in every bite.",
  },
  {
    icon: Award,
    title: "Authenticity",
    description: "Traditional recipes passed down through generations of South Indian cooking.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building connections through food, one meal at a time.",
  },
]

export default function AboutPage() {
  const { scrollYProgress } = useScroll()
  const roadProgress = useTransform(scrollYProgress, [0.2, 0.6], [0, 1])
  const roadmapRef = useRef(null)

  const isRoadmapInView = useInView(roadmapRef, {
    once: true,
    amount: 0.4,
  })

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
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
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Our Story</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl font-bold mb-6"
            >
              A Journey of <span className="text-primary">Flavour</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white sm:text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              From the vibrant streets of Chennai to the heart of Auckland, discover the story behind Madras Kitchen.
            </motion.p>
          </div>
        </section>

        {/* Founder Story Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn direction="left">
                <div className="relative">
                  <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                    <Image
                      src="/images/chef-cooking.png"
                      alt="Chef cooking authentic South Indian food"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg"
                  >
                    <ChefHat className="w-8 h-8 mb-2" />
                    <div className="text-2xl font-serif font-bold">5+ Years</div>
                    <div className="text-sm opacity-80">of Culinary Excellence</div>
                  </motion.div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.2}>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                  Where <span className="text-primary">Tradition</span> Meets Passion
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Madras Kitchen was born from a simple dream – to bring the authentic flavours of South India to New Zealand. What started as a modest food truck has blossomed into a beloved culinary destination in Auckland.
                  </p>
                  <p>
                    Our founder&apos;s journey began in the bustling kitchens of Chennai, where the art of South Indian cooking was passed down through generations. These cherished family recipes, perfected over decades, now form the heart of our menu.
                  </p>
                  <p>
                    Every dish at Madras Kitchen tells a story – of grandmother&apos;s secret spice blends, of early morning preparations at the food truck, and of the countless smiles from satisfied customers who&apos;ve become family.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Roadmap Journey Section - VERTICAL TIMELINE */}
        <section className="py-20 bg-gradient-to-b from-slate-100 to-slate-200 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">
                Our <span className="text-primary">Journey</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
                From a food truck dream to a thriving restaurant, every step has been a labour of love.
              </p>
            </FadeIn>

            {/* Timeline wrapper */}
            <div className="relative max-w-4xl mx-auto px-2 sm:px-4">
              {/* Vertical line connecting nodes */}
              <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-slate-300 -translate-x-1/2" />

              {/* Steps */}
              {roadmap.map((step, index) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.title}
                    className={`relative flex flex-col md:flex-row items-start justify-between w-full mb-12 last:mb-0 ${
                      index % 2 === 0 ? '' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Circle badge */}
                    <div
                      className="absolute left-6 md:left-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-md z-10 -translate-x-1/2 -translate-y-1/2 top-8 md:top-1/2"
                      style={{
                        background: `linear-gradient(135deg, #D4AF37 0%, #B8960C 100%)`,
                        border: "3px solid white",
                      }}
                    >
                      {index + 1}
                    </div>

                    {/* Timeline card */}
                    <div className="w-full md:w-[calc(50%-2.5rem)] pl-12 md:pl-0">
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, y: 15 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -4 }}
                        className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-slate-200/60 relative hover:shadow-xl transition-all duration-300"
                      >
                        {/* Accent border stripe */}
                        <div
                          className={`absolute top-0 bottom-0 w-1 bg-primary rounded-full ${
                            index % 2 === 0 ? 'left-0 md:left-auto md:right-0' : 'left-0'
                          }`}
                        />

                        {/* Icon */}
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                          style={{
                            background: `#D4AF3715`,
                          }}
                        >
                          <Icon className="w-5 h-5" style={{ color: "#D4AF37" }} strokeWidth={2} />
                        </div>

                        {/* Text Content */}
                        <span className="text-[10px] font-bold text-primary tracking-wider uppercase">
                          Phase {index + 1}
                        </span>
                        <h3 className="font-serif text-lg md:text-xl font-bold text-slate-900 mt-1 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Spacer for desktop layout */}
                    <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-primary">Values</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at Madras Kitchen.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-background p-8 rounded-lg border border-border text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn direction="left">
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                  Our Cooking <span className="text-primary">Philosophy</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Flame className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Traditional Techniques</h3>
                      <p className="text-muted-foreground">We honour time-tested cooking methods that bring out the deepest flavours in every dish.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Leaf className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Fresh Daily</h3>
                      <p className="text-muted-foreground">Our chutneys, batters, and spice blends are prepared fresh every day, never compromising on quality.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Made with Love</h3>
                      <p className="text-muted-foreground">Every dish is crafted with the same care and attention as if we were cooking for our own family.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.2}>
                <div className="relative aspect-square rounded-lg overflow-hidden border border-primary/10 shadow-lg">
                  <Image
                    src="/images/spices.png"
                    alt="Authentic South Indian spices"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>


        {/* Our Gallery Section */}
        <section className="py-24 bg-background border-t border-border">
          <div className="container mx-auto px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-primary">Space</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Take a look inside Madras Kitchen. A warm, inviting atmosphere designed to complement our authentic flavours.
              </p>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {/* Image 1 - Large Feature */}
              <div className="relative aspect-square md:aspect-auto md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden shadow-md group border border-border/80">
                <Image
                  src="/restaurant_images/rest_imgs (1).jpeg"
                  alt="Madras Kitchen counter and front service area"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Image 3 */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md group border border-border/80">
                <Image
                  src="/restaurant_images/rest_imgs (3).jpeg"
                  alt="Madras Kitchen dining setup and table settings"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Image 4 */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md group border border-border/80">
                <Image
                  src="/restaurant_images/rest_imgs (4).jpeg"
                  alt="Madras Kitchen interior dining room seating"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Image 5 */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md group border border-border/80">
                <Image
                  src="/restaurant_images/rest_imgs (5).jpeg"
                  alt="Madras Kitchen storefront glass doors and seating"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Image 6 */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md group border border-border/80">
                <Image
                  src="/restaurant_images/rest_imgs (6).jpeg"
                  alt="Madras Kitchen restaurant lighting and environment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-background p-10 rounded-lg border border-border h-full"
                >
                  <h3 className="font-serif text-3xl font-bold text-primary mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To share the rich culinary heritage of South India with Auckland, one authentic dish at a time. We strive to create memorable dining experiences that transport our guests to the vibrant streets of Chennai and beyond.
                  </p>
                </motion.div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-background p-10 rounded-lg border border-border h-full"
                >
                  <h3 className="font-serif text-3xl font-bold text-primary mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become New Zealand&apos;s most beloved South Indian restaurant, recognized not just for our food, but for the warmth, hospitality, and community connections we foster through every meal we serve.
                  </p>
                </motion.div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}