export default function MisionVision() {
     return (
      <div className="max-w-7xl mx-auto relative z-10 mt-10">
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
                  src="https://media.canva.com/v2/image-resize/format:PNG/height:272/quality:100/uri:ifs%3A%2F%2F%2F91681e7c-7df1-4e9b-b73b-68156bf2fbf5/watermark:F/width:240?csig=AAAAAAAAAAAAAAAAAAAAAEMMG781LOe56IXEcg1__czPVgaC1F5WPBNhOXYZkf0N&exp=1740648145&osig=AAAAAAAAAAAAAAAAAAAAAAxSYCAb6Rb3mDuWlZU_wZ9gCqqlkaM4__VlKBadW0Y3&signer=media-rpc&x-canva-quality=screen" 
                  alt="Robot" 
                  className="w-3/4 md:w-full relative z-10"
                />
                <div className="absolute top-[20px] right-[15px] h-[85%] w-16 bg-blue-600 flex flex-col items-center justify-start z-[5]">
                  <div className="flex flex-col items-center gap-6 mt-40">
                    <img 
                      src="https://media.canva.com/v2/image-resize/format:PNG/height:94/quality:100/uri:ifs%3A%2F%2F%2Fbf3b3240-8e4f-42ea-98d2-644874498d99/watermark:F/width:101?csig=AAAAAAAAAAAAAAAAAAAAAPTkdNSXikh3zPOooMxcNtzHNvHfaAL-g7nkZ0hnHpoM&exp=1740649455&osig=AAAAAAAAAAAAAAAAAAAAAKv4hgQEW4R3WYtsJIDAU3pGEHyJBuH1yROcLkl8L_u3&signer=media-rpc&x-canva-quality=thumbnail" 
                      alt="Nemtech Logo" 
                      className="w-10 h-10 mb-4"
                    />
                    <p className="text-white font-bold text-xl transform -rotate-90 whitespace-nowrap tracking-widest">NEMTECH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
     )
}