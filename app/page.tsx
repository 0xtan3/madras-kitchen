import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import {
  HeroSection,
  StoryPreviewSection,
  FeaturedDishesSection,
  TestimonialsPreviewSection,
  LocationsSection,
  CTASection,
} from "@/components/home-sections"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <StoryPreviewSection />
        <FeaturedDishesSection />
        <TestimonialsPreviewSection />
        <LocationsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
