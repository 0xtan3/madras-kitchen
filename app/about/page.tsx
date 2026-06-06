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
    position: { left: "12%", top: "65%" },
  },
  {
    title: "Growing Community",
    description: "Built a loyal following through quality food and genuine hospitality during challenging times.",
    color: "#f77f00",
    icon: UsersRound,
    position: { left: "30%", top: "45%" },
  },
  {
    title: "Expanding Horizons",
    description: "Introduced new dishes and expanded our menu based on customer feedback and family recipes.",
    color: "#2a9d8f",
    icon: Sprout,
    position: { left: "50%", top: "55%" },
  },
  {
    title: "Restaurant Opens",
    description: "Opened our doors at Mount Roskill, bringing the food truck experience to a comfortable dining space.",
    color: "#1d4ed8",
    icon: Presentation,
    position: { left: "70%", top: "30%" },
  },
  {
    title: "Continuing the Legacy",
    description: "Serving the Auckland community with the same passion and authenticity that started our journey.",
    color: "#7b2cbf",
    icon: Rocket,
    position: { left: "88%", top: "15%" },
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

        {/* Roadmap Journey Section - COMPACT */}
        <section className="py-12 bg-gradient-to-b from-slate-100 to-slate-200 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <FadeIn className="text-center mb-6">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                Our <span className="text-primary">Journey</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm">
                From a food truck dream to a thriving restaurant, every step has been a labour of love.
              </p>
            </FadeIn>

            {/* Roadmap Visual */}
            <div ref={roadmapRef} className="relative w-full max-w-3xl mx-auto h-48 sm:h-56 md:h-64">
              {/* Road Background */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl bg-white"
              >
                {/* Dotted Road Path SVG */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  {/* Road path connecting all phases - winding with loop */}
                  <motion.path
                    d="M 10 70 C 25 50, 35 80, 45 60 S 60 20, 70 40 C 75 50, 80 30, 90 20"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.6"
                    strokeDasharray="1.5, 1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  {/* Animated car icon on the path */}
                  {isRoadmapInView && (
                    <motion.g
                      initial={{ offsetDistance: "0%" }}
                      animate={{ offsetDistance: "100%" }}
                      transition={{ duration: 5, ease: "easeInOut" }}
                      style={{
                        offsetPath: "path('M 10 70 C 25 50, 35 80, 45 60 S 60 20, 70 40 C 75 50, 80 30, 90 20')",
                      }}
                    >
                      {/* Car icon */}
                      <g transform="translate(-1.5, -1)">
                        <rect x="0" y="0.5" width="3" height="1.5" rx="0.3" fill="#D4AF37" />
                        <rect x="0.5" y="-0.3" width="2" height="0.8" rx="0.2" fill="#D4AF37" />
                        <circle cx="0.6" cy="2" r="0.3" fill="#D4AF37" />
                        <circle cx="2.4" cy="2" r="0.3" fill="#D4AF37" />
                      </g>
                    </motion.g>
                  )}
                </svg>
              </motion.div>

              {/* Animated Pins along the road */}
              {roadmap.map((step, index) => {
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.15, y: -8 }}
                    className="absolute z-20 cursor-pointer"
                    style={{
                      left: step.position.left,
                      top: step.position.top,
                      transform: "translate(-50%, -100%)",
                    }}
                  >
                    <div
                      className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center
                       text-white font-bold text-xs sm:text-sm md:text-base shadow-xl
                       transition-all duration-300 hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, #D4AF37, #B8960C)`,
                        border: "2px solid white",
                      }}
                    >
                      {index + 1}
                    </div>
                  </motion.div>
                )
              })}

              {/* Animated road progress line */}
              <motion.div
                className="absolute top-0 left-0 right-0 bottom-0 z-10 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                  opacity: roadProgress,
                }}
              />
            </div>

            {/* Numbered Cards Below Road */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mt-8 max-w-5xl mx-auto">
              {roadmap.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="relative bg-white rounded-xl p-4 sm:p-5 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
                  >
                    {/* Number badge */}
                    <div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, #D4AF37 0%, #B8960C 100%)`,
                        border: "2px solid white",
                      }}
                    >
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center mx-auto mb-3 mt-2"
                      style={{
                        background: `#D4AF3715`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "#D4AF37" }} strokeWidth={2} />
                    </div>

                    {/* Content */}
                    <h3 className="font-serif text-xs sm:text-sm md:text-base font-bold text-slate-900 text-center mb-1.5 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-[10px] sm:text-xs text-center leading-relaxed line-clamp-2">
                      {step.description}
                    </p>

                    {/* Bottom accent line */}
                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full"
                      style={{ backgroundColor: "#D4AF37" }}
                    />
                  </motion.div>
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