import { Navbar } from "@/src/components/navbar"
import { HeroSection } from "@/src/components/hero-section"
import Image from "next/image"
import Politicas from "./sections/policies"
import Objetivos from "./sections/objetives"
import MisionVision from "./sections/mision-vision"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-4 mt-10">
        <HeroSection
          title="¿QUE ES NEMTECH?"
          subtitle="En NEMTECH, creamos sistemas inteligentes con capacidad de respuesta en tiempo real, diseñados para detectar, prevenir y neutralizar amenazas antes de que sea demasiado tarde."
          buttonText="IR A COMPRAR"
          buttonLink="/products"
          showPlayButton={false}
        />
        <img src="/images/about-section-one.webp" alt="Nemtech" className="w-full md:w-auto" />
      </div>

      {/* Misión y Visión */}
      <MisionVision />

      {/* nuestros valores */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 relative z-10">
          <div className="flex items-center mb-10">
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-cyan-400 mr-4 relative">
              {/* The dots would need custom CSS or components */}
            </div>
            <h2 className="text-3xl font-normal mx-2">Nuestros valores</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Each value item */}
            {[
              { icon: "🔆", color: "text-yellow-300", title: "Innovación", description: "Buscamos siempre la vanguardia en tecnología para ofrecer soluciones avanzadas y eficientes." },
              { icon: "🛡️", color: "text-blue-300", title: "Seguridad", description: "Nuestro compromiso es la protección de vidas y la prevención de amenazas en cualquier entorno." },
              { icon: "🎯", color: "text-purple-300", title: "Precisión", description: "Diseñamos sistemas de alta exactitud para minimizar riesgos y maximizar la efectividad." },
              { icon: "⚖️", color: "text-pink-200", title: "Ética", description: "Aplicamos nuestras tecnologías con responsabilidad, asegurando un uso transparente y enfocado en el bienestar común." },
              { icon: "🔄", color: "text-teal-200", title: "Adaptabilidad", description: "Desarrollamos soluciones flexibles que se ajustan a diferentes escenarios de seguridad." },
              { icon: "⚡", color: "text-red-300", title: "Eficiencia", description: "Optimizamos cada proceso para ofrecer respuestas rápidas y efectivas ante cualquier amenaza." },
            ].map((value, index) => (
              <div key={index} className="flex items-start">
                <div className={`w-12 h-12 rounded-full flex justify-center items-center mr-4 flex-shrink-0 bg-white/10 ${value.color}`}>
                  <span className="text-xl">{value.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold inline text-white text-base">{value.title}:</h3>
                  <p className="inline text-white/80"> {value.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="h-[2px] w-36 bg-gradient-to-l from-transparent to-cyan-400 absolute right-5 bottom-5">
              {/* The dots would need custom CSS or components */}
            </div>
          </div>
        </div>

        {/* Background effect */}
        <div className="absolute right-[-150px] bottom-[-150px] w-[400px] h-[400px] rounded-full bg-purple-900/30 blur-3xl -z-0"></div>
      </section>

      {/* OBJETIVOS */}
      <Objetivos />

      {/* POLITICAS */}
      <Politicas />
    </main>
  )
}

