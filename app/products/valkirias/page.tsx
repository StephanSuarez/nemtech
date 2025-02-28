import { Navbar } from "@/src/components/navbar"
import Image from "next/image"

export default function ValkiriaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative min-h-screen">
        {/* Background with circuit pattern */}
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="container mx-auto px-4 md:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-8">Las Valkirias</h1>
              <p className="text-lg mb-6">
                Drones de intercepción, si se detecta una amenaza en movimiento, las valkirias tienen la capacidad de:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span> Lanzar red de detención
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span> Emitir alerta sonora o visual para advertir a civiles
                  y autoridades
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span> Enviar en tiempo real las coordenadas a un equipo de
                  seguridad para intervención inmediata
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span> Microcargas disruptivas
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span> Sustancias químicas neutralizadoras
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span> Interferencia electromagnética
                </li>
              </ul>
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
                src="/images/dron.webp"
                alt="Drone Valkiria"
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

