export default function MisionVision() {
     return (
      <div className="max-w-6xl mx-auto relative z-10 mt-10 p-6 m-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
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
            <div className="flex items-center justify-center">
              <div className="relative">
                <img 
                  src="/images/robot.webp" 
                  alt="Robot" 
                  className="w-3/4 md:w-full relative z-10"
                />
                <div className="absolute top-[15px] right-[15px] h-[90%] w-11 bg-blue-600 flex flex-col items-center justify-center z-[5]">
                  <div>
                    <img 
                      src="/images/logo.webp" 
                      alt="Nemtech Logo" 
                      className="w-10 h-10 m-1.5 mb-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
     )
}