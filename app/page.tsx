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
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <HeroSection
        title="¿Y si la seguridad pudiera reaccionar antes que ocurra el peligro?"
        buttonText="+ INFORMACIÓN"
      />

      <div className="flex justify-center items-center">
        <img src="/images/home-page.png" alt="Nemtech" className="w-1/2" />
      </div>
    </main>
  )
}

