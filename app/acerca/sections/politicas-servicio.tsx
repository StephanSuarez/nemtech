export default function PoliticaServicio() {
    return (
      <div className="max-w-5xl mx-auto py-16 px-4 relative z-10 bg-black text-white">
        <h2 className="text-4xl font-normal mb-8 uppercase">POLITICAS</h2>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <img src="/politica-servicio-icon.png" alt="Servicio" className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-green-400">Política de Servicio</h3>
              <p className="mb-2">
                La excelencia en el servicio es un eje clave en <span className="font-bold">NEMTECH</span>, donde nos comprometemos a brindar 
                soluciones tecnológicas de seguridad con altos estándares de atención al cliente, soporte técnico 
                especializado y un enfoque en la satisfacción de nuestros usuarios. Nuestra política de servicio se 
                basa en los siguientes principios:
              </p>
              <ul className="space-y-2 list-none pl-4">
                <li className="flex items-start">
                  <span className="text-cyan-400 font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Asesoría y consultoría personalizada:</span> Analizamos las necesidades de cada cliente para ofrecer 
                    soluciones de seguridad ajustadas a sus requerimientos específicos.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Soporte técnico especializado:</span> Brindamos asistencia técnica 24/7 para garantizar el correcto 
                    funcionamiento de nuestros sistemas, con soporte en múltiples idiomas.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Capacitación y entrenamiento:</span> Ofrecemos formación integral a nuestros clientes y usuarios sobre 
                    la operación, mantenimiento y optimización de nuestros productos.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Compromiso con la seguridad operativa:</span> Garantizamos que nuestras tecnologías sean 
                    implementadas con los más altos estándares de seguridad y confiabilidad.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Cumplimiento de tiempos y procesos:</span> Nos aseguramos de que cada entrega e implementación 
                    se realice de manera eficiente y en los plazos acordados.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Escalabilidad y actualización:</span> Brindamos mejoras y actualizaciones constantes en nuestros 
                    productos, asegurando que las soluciones evolucionen con los desafíos del entorno de seguridad.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }