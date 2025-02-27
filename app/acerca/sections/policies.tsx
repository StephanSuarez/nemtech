export default function Politicas() {
    return (
      <div className="bg-black text-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-16">POLITICAS</h1>
  
          <div className="grid md:grid-cols-2 gap-8">
            {/* Columna Izquierda */}
            <div className="space-y-16">
              {/* Política de Calidad */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-[#98FB98]">Política de Calidad</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  En <span className="text-white">NEMTECH</span> la calidad es el pilar fundamental de nuestro compromiso
                  con la seguridad avanzada. Nos aseguramos de que cada solución y sistema cumpla con los más altos
                  estándares de precisión, eficiencia y fiabilidad.
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-6 py-1 rounded-full">
                  + INFORMACIÓN
                </button>
              </div>
  
              {/* Política de Servicio */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-[#98FB98]">Política de Servicio</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  La excelencia en el servicio es un eje clave en
                  <span className="text-white"> NEMTECH</span>, donde nos comprometemos a brindar soluciones tecnológicas
                  de seguridad con altos estándares de calidad, respaldados por personal especializado y un enfoque en la
                  satisfacción total de nuestros usuarios.
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-6 py-1 rounded-full">
                  + INFORMACIÓN
                </button>
              </div>
            </div>
  
            {/* Columna Derecha - Política Ambiental centrada verticalmente */}
            <div className="flex items-center">
              <div>
                <h2 className="text-xl font-semibold mb-4 text-[#98FB98]">Política Ambiental</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  En <span className="text-white">NEMTECH</span>, comprendemos la responsabilidad de contribuir al impacto
                  ambiental de nuestras actividades. Nuestra política ambiental se fundamenta en el desarrollo sostenible,
                  asegurando la compatibilidad entre la innovación tecnológica y la protección del medio ambiente.
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-6 py-1 rounded-full">
                  + INFORMACIÓN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }