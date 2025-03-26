import { Button } from "@/src/components/buttons/button"
import Image from "next/image"
import Link from 'next/link';
import Title from "../../titles/title";
export default function SectionOne() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-slate-800 to-amber-900 text-white overflow-hidden">
      <img 
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60"
        src="/images/buildings.webp" 
        alt="Nemtech" 
      />
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
                <Title text1="EXPORTACIÓN" text2="Asteria" text3="" color="#f6b737"/>
            </div>

            <Link href="/politics">
            <button className=" mt-8 hover:bg-red-700 text-white text-sm px-6 py-1 rounded-full" style={{ backgroundColor: "#f7c50f" }}>
                PARTIDA #85.25
              </button>
            </Link>

            <p className="text-sm md:text-base">Aparatos emisores de radiotelefonía, radiotelegrafía, radiodifusión o televisión; cámaras de televisión, cámaras fotográficas digitales y videocámaras.</p>

            <Link href="/politics">
            <button className=" mt-8 hover:bg-red-700 text-white text-sm px-6 py-1 rounded-full" style={{ backgroundColor: "#f7c50f" }}>
                INCOTERMS
              </button>
            </Link>


            <p className="text-xs md:text-sm max-w-md">
              Los INCOTERMS (Términos Internacionales de Comercio) definen las responsabilidades de compradores y
              vendedores en transacciones internacionales.
            </p>

            <Link href="/politics">
                <button className=" mt-8 hover:bg-red-700 text-white text-sm px-6 py-1 rounded-full" style={{ backgroundColor: "#f7c50f" }}>
                CLIENTES POTENCIALES
              </button>
            </Link>

            <p className="text-xs md:text-sm max-w-md">(Todo lo que debemos saber de los impuestos)</p>
          </div>

          <div className="relative h-64 md:h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/plane.webp"
                alt="Globe with logistics imagery"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Orange accent bar on the right */}
      <div className="absolute top-0 right-0 h-full w-8 md:w-16 bg-orange-400"></div>
    </section>
  )
}

