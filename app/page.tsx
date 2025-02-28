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

      <div className="flex flex-row items-center justify-center max-w-7xl mx-auto mt-20">

        <HeroSection
          title="¿Y si la seguridad pudiera reaccionar antes que ocurra el peligro?"
          buttonText="+ INFORMACIÓN"
          buttonLink="/about"
        />
      </div>

        {/* Ensure this container matches any padding in HeroSection */}
        <div className="container mx-auto px-4 max-w-6xl mt-20 md:px-6 lg:px-8 mt-8 cursor-pointer">
          <div className="flex justify-start">
            <a href="/regulations">
            <img 
              src="/images/home-page.png" 
              alt="Nemtech" 
              className="w-3/4 sm:w-3/5 md:w-4/5 lg:w-3/4" 
              style={{ marginLeft: '0' }} // Force left alignment
            />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

