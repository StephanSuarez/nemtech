import { Navbar } from "@/src/components/navbar"
import Image from "next/image"

export default function AsteriaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative min-h-screen">
        {/* Background with network pattern */}
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            background: "linear-gradient(to right, #000, #0a0a2e)",
          }}
        ></div>

        <div className="container mx-auto px-4 md:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-8">Asteria</h1>
              <p className="text-lg mb-8 max-w-lg">
                El sistema de seguridad Asteria, es un sistema de vigilancia avanzada con capacidad de reacción diseñada
                para identificar, rastrear, y neutralizar amenazas, a través de cámaras inteligentes con reconocimiento
                facial, interconectadas con inteligencia artificial y sistemas de respuesta automatizados
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-black px-6 py-2 rounded-sm hover:bg-gray-200 transition-colors">
                  Añadir al carrito
                </button>
                <a href="/contact" className="border border-white px-6 py-2 rounded-sm hover:bg-white/10 transition-colors">
                  Contactar un asesor
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:ifs%3A%2F%2F%2F0344820d-bd6f-4259-aac6-ce18e0dadef6/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAHJjo2NsZW6hkfNYvN0TBGACBwFxzekF70s0HGEaPpS2&exp=1740649103&osig=AAAAAAAAAAAAAAAAAAAAAHykcebRzw2q8lo51GxZXLYV0Rh6hTkSk3u7l22gBrnR&signer=media-rpc&x-canva-quality=thumbnail"
                alt="Sistema Asteria"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div> 
        </div>
      </div>
    </main>
  )
}

