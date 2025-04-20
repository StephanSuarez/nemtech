import { Navbar } from "@/src/components/navbar";
import Politica from "@/src/components/Politica";
import { TextPolitics } from "@/src/utils/utilsInterface";
import { DocumentItem } from "@/src/components/documentos-page";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PlanVallejo(){
   
    const whatAreLeySeven: TextPolitics = {
        title: "¿Qué son?",
        description: "El Plan Vallejo es una política económica de Colombia que permite la importación temporal de materias primas, insumos, bienes de capital y repuestos.",
        image: "/images/what-are-vallejo.webp"
    }

    const whoEstablishLeySeven: TextPolitics = {
        title: "¿Quién los establece?",
        list: [
            "Fue creado por Joaquín Vallejo Arbeláez, quien fue Ministro de Fomento en 1957",
            "En 2020 se expidió el Decreto 285, el cual modificó el Plan Vallejo para promover y facilitar su acceso. ",
        ],
        image: "/images/establish-vallejo.png"
    }
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="max-w-5xl mx-auto py-16 px-4 relative z-10 bg-black text-white">

                <div className="flex items-center gap-4 mb-8">
                    <Link 
                        href="/regulations" 
                        className="text-white hover:text-gray-300 transition-colors"
                    >
                        <ArrowLeft size={24} />
                    </Link>
                    <h2 className="text-4xl font-normal uppercase">Plan Vallejo</h2>
                </div>
                <Politica politics={whatAreLeySeven} />
                <Politica politics={whoEstablishLeySeven} />
                <div className="mt-8">
                    <DocumentItem title="Información del Plan Vallejo" url="https://www.mincit.gov.co/getattachment/5fe79cfc-7b43-442a-b9ee-13b7bf58506c/13-04-2016-plan-vallejo.aspx" />
                </div>
            </div>
        </div>
    )
}