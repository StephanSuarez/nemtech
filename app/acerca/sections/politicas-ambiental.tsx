export default function PoliticaAmbiental() {
    return (
      <div className="max-w-5xl mx-auto py-16 px-4 relative z-10 bg-black text-white">
        <h2 className="text-4xl font-normal mb-8 uppercase">POLITICAS</h2>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <img src="/politica-ambiental-icon.png" alt="Ambiental" className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-green-400">Política Ambiental</h3>
              <p className="mb-2">
                En <span className="font-bold">NEMTECH</span>, comprendemos la responsabilidad de minimizar el impacto ambiental de nuestras 
                actividades. Nuestra política ambiental se fundamenta en el desarrollo sostenible, asegurando la 
                compatibilidad entre la innovación tecnológica y la protección del medio ambiente. Para ello, 
                adoptamos los siguientes principios:
              </p>
              <ul className="space-y-2 list-none pl-4">
                <li className="flex items-start">
                  <span className="text-cyan-400 font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Diseño ecológico de productos:</span> Implementamos materiales reciclables y tecnologías de bajo 
                    consumo energético en el desarrollo de nuestros sistemas de seguridad.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Gestión eficiente de residuos:</span> Aplicamos estrategias de reducción, reutilización y reciclaje de 
                    residuos generados en el desarrollo y prueba de nuestros productos.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Uso responsable de recursos:</span> Optimizamos el consumo de energía, agua y materias primas en 
                    nuestros procesos operativos, promoviendo la eficiencia en el uso de recursos naturales.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Cumplimiento normativo:</span> Nos alineamos con regulaciones ambientales nacionales e 
                    internacionales, asegurando que nuestras operaciones cumplan con estándares ecológicos y de 
                    sostenibilidad.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Conciencia y formación ambiental:</span> Fomentamos una cultura ambiental dentro de la empresa, 
                    promoviendo prácticas sostenibles entre nuestros empleados, clientes y socios estratégicos.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Compromiso:</span> Nos esforzamos por integrar soluciones tecnológicas que no solo brinden seguridad 
                    avanzada, sino que también sean responsables con el medio ambiente, contribuyendo a un futuro 
                    más sostenible.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }