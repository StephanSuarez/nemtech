"use client"

import Image from "next/image"

interface DocumentItemProps {
  title: string;
  image?: string;
  url: string;
}

export const DocumentItem = ({ title, image = "", url = "" }: DocumentItemProps) => {
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
      <div className="bg-blue-600 p-1.5 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      </div>
      <span className="text-lg text-white tracking-wide">{title}</span>
    </Wrapper>
  );
};

export default function DocumentosPage() {
  return (
    <div className="relative w-full min-h-screen flex items-center">
      <div className="absolute inset-0 w-full h-full opacity-50">
        <Image
          src="/images/background-documents.webp"
          alt="Documentos"
          fill
          style={{ objectFit: 'cover', opacity: 0.5 }}
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24 py-8 md:py-16 lg:py-24 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" style={{padding: "20px"}}>
          <div>
            <h1 style={{ fontSize: '70px' }} className="sm:text-7xl md:text-6xl lg:text-9xl font-bold text-white mb-12">DOCUMENTOS</h1>
            <div className="space-y-2">
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
                url="https://drive.google.com/file/d/1YK6Vp-9rI3AaPu9H0aO3nq5DGTbDLfcw/view?usp=drive_link"
              />
              <DocumentItem
                title="Estrategias de Marketing"
                image="/images/link.png"
                url="https://drive.google.com/file/d/1EfpUJ1ZY_TUdPVX5pVydz3rqGnQIIFpn/view?usp=drive_link"
              />
              <DocumentItem
                title="Legiscomex, Requisitos"
                image="/images/link.png"
                url="https://drive.google.com/file/d/1pJcuzS90nR5AE_xstkRZQxRp5gdiVgNE/view?usp=drive_link"
              />
              <DocumentItem
                title="Oportunidades de Mercado"
                image="/images/link.png"
                url="https://drive.google.com/file/d/1h3qEHCEELv3SGskFImcsR7IyVgpziWxT/view"
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
