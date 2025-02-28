import { Navbar } from "@/src/components/navbar"
import { HeroSection } from "@/src/components/hero-section"
import { ServicesSection } from "@/src/components/services-section"
import { ProductsGrid } from "@/src/components/products-grid"
import RegulationsSection from "./regulation"

export default function Regulations() {

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden bg-black">
      {/* Background video */}
      <img 
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60"
        src="/images/regulations-background.jpg" 
        alt="Nemtech" 
      />
      
      {/* Content with higher z-index to appear above the video */}
      <div className="relative z-10">
        <Navbar />

       <RegulationsSection />
      </div>
    </main>
  )
}

