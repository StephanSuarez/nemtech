import React from 'react';

export default function NuestrosAsesores() {
  const asesores = [
    {
      id: 1,
      nombre: 'Ana María',
      apellidos: 'Barrera Romero',
      imagen: '/images/ana.webp'
    },
    {
      id: 2,
      nombre: 'Zarah',
      apellidos: 'Suarez Perez',
      imagen: '/images/zarah.webp'
    },
    {
      id: 3,
      nombre: 'Lina María',
      apellidos: 'Gaitan Montoya',
      imagen: '/images/lina.jpeg'
    },
    {
      id: 4,
      nombre: 'Yenny Tatiana',
      apellidos: 'Torres Huérfano',
      imagen: '/images/yenny.webp'
    }
  ];

  return (
    <div className="w-full min-h-fit md:h-screen bg-gray-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Efecto de gradiente en la esquina superior izquierda */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-red-900/30 to-transparent rounded-full blur-3xl"></div>
      
      {/* Efecto de gradiente en la esquina inferior derecha */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-900/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-12">NUESTROS ASESORES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 sm:mt-12 md:mt-20 lg:mt-[140px] justify-items-center mx-auto max-w-4xl">
          {asesores.map((asesor) => (
            <div key={asesor.id} className="flex items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 overflow-hidden rounded-full mr-4">
                <img 
                  src={asesor.imagen} 
                  alt={`${asesor.nombre} ${asesor.apellidos}`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-lg">{asesor.nombre}</p>
                <p className="text-gray-300">{asesor.apellidos}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}