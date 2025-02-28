export default function Objetivos() {
  return (
    <div className="relative h-screen overflow-hidden">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80"
        autoPlay
        muted
        loop
        playsInline
      >
        <source 
          src="/videos/rosado.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      <div className="max-w-5xl mx-auto relative z-10 h-full flex flex-col justify-center p-4">
        <h2 className="text-3xl font-normal mb-6">Nuestros objetivos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="list-disc pl-5 space-y-3">
            <li>
              Posicionar a NEMTECH como líder en seguridad avanzada global.
            </li>
            <li>
              Expandir operaciones en mercados estratégicos de alto riesgo.
            </li>
            <li>
              Establecer alianzas con gobiernos y empresas de seguridad.
            </li>
            <li>
              Usar marketing digital para atraer clientes en defensa y seguridad.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}