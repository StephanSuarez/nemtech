import { Navbar } from "@/src/components/navbar"
import Image from "next/image"

export default function NanotecnologiaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative min-h-screen">
        {/* Background with circuit board pattern */}
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
            <div className="flex justify-center md:order-1 order-2">
              <Image
                src="https://media.canva.com/v2/image-resize/format:PNG/height:273/quality:100/uri:ifs%3A%2F%2F%2F174a0afe-1fd4-48bc-8956-64da48ae0b4a/watermark:F/width:273?csig=AAAAAAAAAAAAAAAAAAAAAK1ud-TpQlCxlGVXmzYruL_GSL8srNrRTz1aN0mVUqrT&exp=1740647653&osig=AAAAAAAAAAAAAAAAAAAAALBq1oh9hpqAZjx3ii8NUyRfi0uQDa6XYeNEphjvpOHE&signer=media-rpc&x-canva-quality=screen"
                alt="Nanotecnología"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
            <div className="md:order-2 order-1">
              <h1 className="text-5xl font-bold mb-8">Nanotecnología</h1>
              <p className="text-lg mb-8 max-w-lg">
                En Nemtech, entendemos que la seguridad del futuro requiere tecnología avanzada y sistemas con capacidad
                de reacción en tiempo real. Para ello, importamos y desarrollamos tecnología de última generación,
                garantizando soluciones de seguridad avanzadas, inteligencia artificial y nanotecnología.
              </p>
              <div className="flex gap-4">
                <button className="border border-white px-6 py-2 rounded-sm hover:bg-white/10 transition-colors">
                  Contactar un asesor
                </button>
              </div>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-12">
            <span className="w-2 h-2 rounded-full bg-gray-500"></span>
            <span className="w-2 h-2 rounded-full bg-gray-500"></span>
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="w-2 h-2 rounded-full bg-gray-500"></span>
            <span className="w-2 h-2 rounded-full bg-gray-500"></span>
          </div>
        </div>
      </div>
    </main>
  )
}

