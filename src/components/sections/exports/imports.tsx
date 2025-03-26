import { Button } from "@/src/components/buttons/button"
import Image from "next/image"
import Title from "@/src/components/titles/title"
export default function Imports() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-slate-800 to-amber-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          <div className="relative h-64 md:h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/plane-money.webp"
                alt="Globe with logistics imagery"
                width={900}
                height={900}
                className="object-contain"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <Title text1="IMPORTACIÓN" text2="Asteria" text3="" color="#f6b737" />
            </div>

            <Button className="inline-flex items-center text-white hover:bg-orange-500 bg-[#f7c50f]" style={{ backgroundColor: "#f7c50f" }}>
              PARTIDA #85.25
            </Button>

            <p className="text-sm md:text-base">Aparatos emisores de radiotelefonía, radiotelegrafía, radiodifusión o televisión; cámaras de televisión, cámaras fotográficas digitales y videocámaras.</p>

            <Button className="inline-flex items-center text-white hover:bg-orange-500 bg-[#f7c50f]" style={{ backgroundColor: "#f7c50f" }}>
              INCOTERMS
            </Button>

            <p className="text-xs md:text-sm max-w-md">
              Los INCOTERMS (Términos Internacionales de Comercio) definen las responsabilidades de compradores y
              vendedores en transacciones internacionales.
            </p>

            <Button className="inline-flex items-center bg-orange-400 text-white hover:bg-orange-500">
              CLIENTES POTENCIALES
            </Button>

            <p className="text-xs md:text-sm max-w-md">(Todo lo que debemos saber de los impuestos)</p>
          </div>


        </div>
      </div>

      {/* Orange accent bar on the right */}
      <div className="absolute top-0 right-0 h-full w-8 md:w-16 bg-orange-400"></div>
    </section>
  )
}