import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProductsGrid } from "@/components/products-grid"

export default function Home() {
  // Datos de ejemplo para los servicios
  const services = [
    {
      title: "Regulación",
      iconSrc: "/placeholder.svg?height=60&width=60",
      borderColor: "border-cyan-400",
    },
    {
      title: "Productos",
      iconSrc: "/placeholder.svg?height=60&width=60",
      borderColor: "border-pink-500",
    },
    {
      title: "Exportación",
      iconSrc: "/placeholder.svg?height=60&width=60",
      borderColor: "border-cyan-400",
    },
  ]

  // Datos de ejemplo para los productos destacados
  const featuredProducts = [
    {
      title: "Las Valkirias",
      description: "Drones de Intercepción",
      imageSrc:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-26%20at%2011.36.01%E2%80%AFpm-BixVAbSD63nnQz7eBTTp4JpIYIwZFq.png",
      buttonText: "+ información",
      buttonLink: "/productos/valkirias",
    },
    {
      title: "Asteria",
      description: "Sistema de seguridad con capacidad de reacción",
      imageSrc:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-26%20at%2011.36.54%E2%80%AFpm-aB1CLwjmKd3LHyzjkMCzW8xXPuMbWx.png",
      buttonText: "+ información",
      buttonLink: "/productos/asteria",
    },
    {
      title: "Nanotecnología",
      description: "Soluciones avanzadas de nanotecnología para seguridad",
      imageSrc:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-26%20at%2011.37.13%E2%80%AFpm-0wa5vgAX3BWvswAkMP52A2Wge38pqo.png",
      buttonText: "+ información",
      buttonLink: "/productos/nanotecnologia",
    },
  ]

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
          src="https://video-private-assets.canva.com/VAGAb_jkkcc/v/395d8ef459.mp4?exp=1740702420000&cf-ck=EC0YOj55xzSaMScPQiBH6VpxiabH5CHDgDh3pRkgQ7E&cf-sig=qlZ14gUV-EOhfbLsDgb6ou46BMaPOvu5BXxU0zN1lAo&cf-sig-kid=CO7cCjZ_YiI=&sig=705voOr8p8uA5qIlh4QUXL5gyXg2TsHriBv3XX-u5gc&sig-kid=GzFgFdhXD-Q=" 
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

