"use client"

import Image from "next/image"

interface DocumentItemProps {
  title: string;
  image?: string;
  url: string;
}

const DocumentItem = ({ title, image = "", url = "" }: DocumentItemProps) => {
    const Wrapper = url && url.trim() !== "" ? "a" : "div";
  
    return (
      <Wrapper
        {...(url && url.trim() !== "" ? {
          href: url,
          target: "_blank",
          rel: "noopener noreferrer",
        } : {})}
        className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/20 transition-all cursor-pointer"
      >
        {image && image !== "" && image !== "#" && (
          <div className="w-12 h-12 flex-shrink-0">
            <Image 
              src={image}
              alt={title}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
        )}
        <span className="text-lg text-white tracking-wide">{title}</span>
      </Wrapper>
    );
  };

export default function DocumentosPage() {
  return (
    <div className="relative w-full flex items-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-50">
            <Image 
                src="/images/background-documents.webp" 
                alt="Documentos" 
                fill
                style={{ objectFit: 'cover', opacity: 0.5 }}
                className="object-cover w-full h-full"
                priority
            />
        </div>
      <div className="container mx-auto px-6 py-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 style={{fontSize: '70px'}} className="sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-12">DOCUMENTOS</h1>
            <div className="space-y-4">
              <DocumentItem 
                title="INCOTERMS Nemtech" 
                image="/images/link.png"
                url="https://drive.google.com/file/d/10RW9JdAddSlO-U0Eb896-gx_O8hzDADw/view?usp=sharing"
              />
              <DocumentItem 
                title="BancoIdex" 
                image="/images/link.png"
                url="https://drive.google.com/file/d/1gB5brn_FfAd0UcgCaSMiMQ3lgugJpinj/view?usp=sharing"
              />
              <DocumentItem 
                title="TLC Nemtech" 
                image="/images/link.png"
                url="https://drive.google.com/file/d/1MZ-pOWx9J_0ldJ8IcgE4Mfc9Hm70nxxg/view?usp=sharing"
              />
              <DocumentItem 
                title="Segmentación de mercados" 
                image="/images/link.png"
                url="https://drive.google.com/file/d/1gb1aETnfV9EnDmNItM6zgNA9lJSyZL7K/view?usp=sharing"
              />
              <DocumentItem 
                title="Tendencias del mercado" 
                image="/images/link.png"
                url=""
              />
            </div>
          </div>

          <div className="hidden md:block">
            <Image 
              src="/images/hand.webp" 
              alt="Light bulb" 
              width={500} 
              height={500} 
              style={{ transform: 'scaleX(-1)' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
