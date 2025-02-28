import { Navbar } from "@/src/components/navbar"
import { HeroSection } from "@/src/components/hero-section"
import { ServicesSection } from "@/src/components/services-section"
import { ProductsGrid } from "@/src/components/products-grid"

export default function Home() {

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden bg-black">
      {/* Background video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80"
        autoPlay
        muted
        loop
        playsInline
      >
        <source 
          src="/videos/video-inicio.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      
      {/* Content with higher z-index to appear above the video */}
      <div className="relative z-10">
        <Navbar />

        <HeroSection
          title="¿Y si la seguridad pudiera reaccionar antes que ocurra el peligro?"
          buttonText="+ INFORMACIÓN"
        />

        {/* Ensure this container matches any padding in HeroSection */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-8">
          <div className="flex justify-start">
            <img 
              src="/images/home-page.png" 
              alt="Nemtech" 
              className="w-2/4 sm:w-1/2 md:w-2/3 lg:w-2/5" 
              style={{ marginLeft: '0' }} // Force left alignment
            />
          </div>
        </div>
      </div>
    </main>
  )
}

