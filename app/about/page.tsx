import { Navbar } from "@/src/components/navbar"
import { HeroSection } from "@/src/components/hero-section"
import Image from "next/image"
import Politicas from "./sections/policies"
import Objetivos from "./sections/objetives"
import PoliticasDef from "./sections/politicas-calidad"
import PoliticasCalidad from "./sections/politicas-calidad"
import PoliticaServicio from "./sections/politicas-servicio"
import Regulaciones from "./sections/regulations"
import MisionVision from "./sections/mision-vision"
import { textPolitics } from "@/src/utils/utils"
import Politica from "@/src/components/Politica"



export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="flex flex-row items-center justify-center max-w-7xl mx-auto">
        <HeroSection
          title="¿QUE ES NEMTECH?"
          subtitle="En NEMTECH, creamos sistemas inteligentes con capacidad de respuesta en tiempo real, diseñados para detectar, prevenir y neutralizar amenazas antes de que sea demasiado tarde."
          buttonText="IR A COMPRAR"
          buttonLink="/productos"
          showPlayButton={false}
        />
        <img src="/images/about-section-one.webp" alt="Nemtech" />

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
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full flex justify-center items-center mr-4 flex-shrink-0 bg-white/10">
                <span className="text-yellow-300 text-xl">🔆</span>
              </div>
              <div>
                <h3 className="font-bold inline text-white text-base">Innovación:</h3>
                <p className="inline text-white/80"> Buscamos siempre la vanguardia en tecnología para ofrecer soluciones avanzadas y eficientes.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full flex justify-center items-center mr-4 flex-shrink-0 bg-white/10">
                <span className="text-blue-300 text-xl">🛡️</span>
              </div>
              <div>
                <h3 className="font-bold inline text-white text-base">Seguridad:</h3>
                <p className="inline text-white/80"> Nuestro compromiso es la protección de vidas y la prevención de amenazas en cualquier entorno.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full flex justify-center items-center mr-4 flex-shrink-0 bg-white/10">
                <span className="text-purple-300 text-xl">🎯</span>
              </div>
              <div>
                <h3 className="font-bold inline text-white text-base">Precisión:</h3>
                <p className="inline text-white/80"> Diseñamos sistemas de alta exactitud para minimizar riesgos y maximizar la efectividad.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full flex justify-center items-center mr-4 flex-shrink-0 bg-white/10">
                <span className="text-pink-200 text-xl">⚖️</span>
              </div>
              <div>
                <h3 className="font-bold inline text-white text-base">Ética:</h3>
                <p className="inline text-white/80"> Aplicamos nuestras tecnologías con responsabilidad, asegurando un uso transparente y enfocado en el bienestar común.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full flex justify-center items-center mr-4 flex-shrink-0 bg-white/10">
                <span className="text-teal-200 text-xl">🔄</span>
              </div>
              <div>
                <h3 className="font-bold inline text-white text-base">Adaptabilidad:</h3>
                <p className="inline text-white/80"> Desarrollamos soluciones flexibles que se ajustan a diferentes escenarios de seguridad.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full flex justify-center items-center mr-4 flex-shrink-0 bg-white/10">
                <span className="text-red-300 text-xl">⚡</span>
              </div>
              <div>
                <h3 className="font-bold inline text-white text-base">Eficiencia:</h3>
                <p className="inline text-white/80"> Optimizamos cada proceso para ofrecer respuestas rápidas y efectivas ante cualquier amenaza.</p>
              </div>
            </div>
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

      {textPolitics.map((politics) => (
        <Politica key={politics.title} politics={politics} />
      ))}

      {/* REGULACIONES */}
      <Regulaciones />
    </main>
  )
}

