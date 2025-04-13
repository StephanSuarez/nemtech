export default function RegulationsSection() {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <img 
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60"
        src="/images/regulations-background.jpg" 
        alt="Nemtech" 
      />
      
      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 h-full flex flex-col justify-center">
        <h2 className="text-7xl font-bold text-white uppercase mb-10 tracking-wide">REGULACIÓNES</h2>
        
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-1.5 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <a href="#" className="text-white hover:text-blue-300 transition-colors text-base md:text-lg uppercase tracking-wide">
              ARTÍCULO 172 DEL DECRETO-LEY 444/67
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-1.5 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <a href="#" className="text-white hover:text-blue-300 transition-colors text-base md:text-lg uppercase tracking-wide">
              LEY MARCO DE COMERCIO INTERNACIONAL (LEY 7/1991)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  }