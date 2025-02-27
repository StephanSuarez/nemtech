export default function Regulaciones() {
    return (
      <div className="max-w-5xl mx-auto py-16 px-4 relative z-10 bg-black text-white">
        <div className="relative">
          {/* Fondo con efecto de red/nodos digitales */}
          <div className="absolute inset-0 z-0">
            {/* Esta imagen de fondo debe ser reemplazada por tu imagen real de fondo con nodos/red */}
            <img 
              src="/background-network.jpg" 
              alt="" 
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          
          {/* Contenido principal */}
          <div className="relative z-10">
            <h2 className="text-7xl font-bold mb-12 uppercase tracking-wider">REGULACIÓNES</h2>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <a href="#" className="text-white hover:text-blue-300 transition-colors text-lg uppercase tracking-wide">
                  ARTÍCULO 172 DEL DECRETO-LEY 444/67
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <a href="#" className="text-white hover:text-blue-300 transition-colors text-lg uppercase tracking-wide">
                  LEY MARCO DE COMERCIO INTERNACIONAL (LEY 7/1991)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }