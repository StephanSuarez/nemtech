import { Navbar } from "@/src/components/navbar"
import { HeroSection } from "@/src/components/hero-section"
import { ImageText } from "@/src/components/buttons/image-text"
export default function Home() {

  const buttons = [
    {
      text: "REGULACIONES",
      src: "/images/regulations.png",
      alt: "Nemtech",
      link: "/regulations"
    },
    {
      text: "PRODUCTOS",
      src: "/images/products.png",
      alt: "Nemtech",
      link: "/products"
    },
    {
      text: "DOCUMENTOS",
      src: "/images/documents.png",
      alt: "Nemtech",
      link: "/documents"
    }
  ]
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden bg-black">
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

      <div className="relative z-10">
        <Navbar />

        <div className="flex flex-row max-w-7xl mx-auto mt-20">
          <HeroSection
            title="¿Y si la seguridad pudiera reaccionar antes que ocurra el peligro?"
            buttonText="+ INFORMACIÓN"
            buttonLink="/about"
          />
        </div>

        <div className="flex flex-row pl-5 max-w-7xl mx-auto mt-40">
          {buttons.map((button, index) => (
            <ImageText key={index} {...button} />
          ))}
        </div>
      </div>
    </main>
  )
}

