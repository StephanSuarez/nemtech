import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import Image from "next/image"
import Politicas from "./sections/policies"
import Objetivos from "./sections/objetives"
import PoliticasDef from "./sections/politicas-calidad"
import PoliticasCalidad from "./sections/politicas-calidad"
import PoliticaAmbiental from "./sections/politicas-ambiental"
import PoliticaServicio from "./sections/politicas-servicio"
import Regulaciones from "./sections/regulations"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="flex flex-row items-center justify-center">
      <HeroSection
        title="¿QUE ES NEMTECH?"
        subtitle="En NEMTECH, creamos sistemas inteligentes con capacidad de respuesta en tiempo real, diseñados para detectar, prevenir y neutralizar amenazas antes de que sea demasiado tarde."
        buttonText="IR A COMPRAR"
        buttonLink="/productos"
        showPlayButton={false}
      />
        <img src="https://media.canva.com/v2/image-resize/format:PNG/height:511/quality:100/uri:ifs%3A%2F%2F%2F112042b9-004b-4d77-8e77-a5fc43457401/watermark:F/width:736?csig=AAAAAAAAAAAAAAAAAAAAAAU3AiwlDmVJXAjvFxezG3qNm1PZgZtcyklpISGdtwsb&exp=1740649385&osig=AAAAAAAAAAAAAAAAAAAAAKxbo2BalSRibk_gATKDYG4T-3ZN_4U2VhoZYvAwOh70&signer=media-rpc&x-canva-quality=screen" alt="" />

      </div>

      {/* Misión y Visión */}
        <section>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Nuestra misión</h2>
                <p className="text-gray-300">
                  En NEMTECH diseñamos e implementamos sistemas de seguridad avanzada con capacidad de reacción. Nuestro
                  compromiso es garantizar la protección de comunidades y entornos estratégicos, brindando soluciones
                  innovadoras que transformen la seguridad en escenarios de alto riesgo.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Nuestra visión</h2>
                <p className="text-gray-300">
                  Ser la empresa líder en tecnología de seguridad con respuesta autónoma, revolucionando la protección
                  contra amenazas con sistemas inteligentes y automatizados. Buscamos que NEMTECH se convierta en un
                  referente global en seguridad avanzada, contribuyendo a la construcción de un mundo más seguro mediante
                  la innovación y el desarrollo tecnológico.
                </p>
              </div>
            </div>
            <div>
              <img src="https://media.canva.com/v2/image-resize/format:PNG/height:272/quality:100/uri:ifs%3A%2F%2F%2F91681e7c-7df1-4e9b-b73b-68156bf2fbf5/watermark:F/width:240?csig=AAAAAAAAAAAAAAAAAAAAAEMMG781LOe56IXEcg1__czPVgaC1F5WPBNhOXYZkf0N&exp=1740648145&osig=AAAAAAAAAAAAAAAAAAAAAAxSYCAb6Rb3mDuWlZU_wZ9gCqqlkaM4__VlKBadW0Y3&signer=media-rpc&x-canva-quality=screen" alt="" />
            </div>
          </div>
      </div>
        </section>

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
        <Politicas />ß

        {/* POLITICAS DE CALIDAD */}
        <PoliticasCalidad />

        {/* POLITICAS AMBIENTALES */}
        <PoliticaAmbiental />

        {/* POLITICAS DE SERVICIO */}
        <PoliticaServicio />

        {/* REGULACIONES */}
        <Regulaciones />
    </main>
  )
}

