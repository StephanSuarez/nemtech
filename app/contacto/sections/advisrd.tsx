import React from 'react';

export default function NuestrosAsesores() {
  const asesores = [
    {
      id: 1,
      nombre: 'Ana María',
      apellidos: 'Barrera Romero',
      imagen: 'https://media.canva.com/v2/image-resize/format:JPG/height:200/quality:75/uri:ifs%3A%2F%2F%2F7874067a-58e4-433d-adaf-a6e9d73c4feb/watermark:F/width:112?csig=AAAAAAAAAAAAAAAAAAAAAD9NLAc6kh5eW5pmCgLQMe6bJC4vUtNaQ0dsFV1tMhJ8&exp=1740691743&osig=AAAAAAAAAAAAAAAAAAAAALDqTPbtKu1MFI9FEaIo-bldTECnJmQAKNifvak7YQNv&signer=media-rpc&x-canva-quality=thumbnail'
    },
    {
      id: 2,
      nombre: 'Zarah Suarez',
      apellidos: 'Perez',
      imagen: 'https://media.canva.com/v2/image-resize/format:JPG/height:200/quality:75/uri:ifs%3A%2F%2F%2F2ac2280e-f69b-460d-b051-cd7a78670576/watermark:F/width:90?csig=AAAAAAAAAAAAAAAAAAAAAM0eV0zmhpo9STv9XZSEJPznsB0t3C4WMN9XVm-THO5G&exp=1740691971&osig=AAAAAAAAAAAAAAAAAAAAALkOgDzsA9zR7WnNV957CHg1NZsIhVLTmYH4MvWEgZ6T&signer=media-rpc&x-canva-quality=thumbnail'
    },
    {
      id: 3,
      nombre: 'Lina María',
      apellidos: 'Gaitan Montoya',
      imagen: 'https://media.canva.com/v2/image-resize/format:JPG/height:200/quality:75/uri:ifs%3A%2F%2F%2Ff170a0dc-dce6-4fe5-abd4-c952ae926919/watermark:F/width:150?csig=AAAAAAAAAAAAAAAAAAAAACzvmKPs6JMXNGFI3KcWO7C7-1vWJdQWv0pbFeMbBYRd&exp=1740691936&osig=AAAAAAAAAAAAAAAAAAAAACqt7azz08QLaUeXm-TLm-94g7XmZ3nLaXNBaH-hGYDT&signer=media-rpc&x-canva-quality=thumbnail'
    },
    {
      id: 4,
      nombre: 'Yenny Tatiana Torres',
      apellidos: 'Huérfano',
      imagen: 'https://media.canva.com/v2/image-resize/format:JPG/height:200/quality:75/uri:ifs%3A%2F%2F%2F3638d01b-df7a-400c-ada1-5649d695abdb/watermark:F/width:159?csig=AAAAAAAAAAAAAAAAAAAAACTvrmsCdvkJ4wbYby_18foRnvpyXvdiA9KhbPeNJl51&exp=1740688867&osig=AAAAAAAAAAAAAAAAAAAAADSLFtuIaBf6zDHfKhClo8s697uVEO-DeYoBudqw8ph4&signer=media-rpc&x-canva-quality=thumbnail'
    }
  ];

  return (
    <div className="w-full bg-gray-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Efecto de gradiente en la esquina superior izquierda */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-red-900/30 to-transparent rounded-full blur-3xl"></div>
      
      {/* Efecto de gradiente en la esquina inferior derecha */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-900/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-12">NUESTROS ASESORES</h2>
        
        <div className="grid grid-cols-2 gap-x-16 gap-y-8">
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
        
        <div className="mt-12 flex justify-center">
          <a 
            href="#contacto" 
            className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full text-sm font-medium tracking-wide uppercase transition-colors"
          >
            Contactar a un asesor
          </a>
        </div>
      </div>
    </div>
  );
}