export default function PoliticasCalidad() {
    return (
      <div className="max-w-5xl mx-auto py-16 px-4 relative z-10 bg-black text-white">
        <h2 className="text-4xl font-normal mb-8 uppercase">POLITICAS</h2>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <img src="/politica-calidad-icon.png" alt="Calidad" className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-yellow-300">Política de Calidad</h3>
              <p className="mb-2">
                En NEMTECH la calidad es el pilar fundamental de nuestro compromiso con la seguridad avanzada. Nos 
                aseguramos de que cada solución tecnológica cumpla con los más altos estándares de precisión, 
                eficiencia y eficacia. Para ello, implementamos un <span className="font-bold">Sistema de Gestión de Calidad (SGC)</span> basado en 
                normativas internacionales, garantizando:
              </p>
              <ul className="space-y-2 list-none pl-4">
                <li className="flex items-start">
                  <span className="text-cyan-400 font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Diseño y desarrollo innovador:</span> Incorporamos tecnologías de vanguardia, como inteligencia 
                    artificial y nanotecnología, asegurando una evolución constante en nuestras soluciones de 
                    seguridad.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Control de calidad riguroso:</span> Aplicamos procesos de inspección, pruebas de desempeño y 
                    auditorías internas en cada etapa del ciclo de producción, minimizando riesgos y maximizando la 
                    eficacia de nuestras soluciones.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Mejora continua:</span> Fomentamos la retroalimentación de nuestros clientes y aliados estratégicos 
                    para mejorar nuestras soluciones y adaptarlas a las necesidades del mercado.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Capacitación y certificación:</span> Brindamos formación continua a nuestro equipo técnico y de 
                    desarrollo, garantizando la excelencia en cada proyecto.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Compromiso:</span> Nuestra meta es superar las expectativas del sector de seguridad, mejorando la 
                    fiabilidad operativa de nuestros productos y brindando soluciones de alto impacto en la protección 
                    de infraestructuras y comunidades.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }