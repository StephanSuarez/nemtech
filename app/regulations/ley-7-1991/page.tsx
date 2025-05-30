import { Navbar } from "@/src/components/navbar"
import Politica from "@/src/components/Politica"
import { TextPolitics } from "@/src/utils/utilsInterface"
import { DocumentItem } from "@/src/components/documentos-page"
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function LeySeven(){

    const whatAreLeySeven: TextPolitics = {
        title: "¿Qué son?",
        description: "Determinar las normas que regulen el ingreso temporal a territorio aduanero nacional de materias primas y bienes intermedios para procesos industriales complementarios y de partes, piezas y equipos de los usuarios industriales para su reparación y mantenimiento.",
        image: "/images/cristal-ley.webp"
    }

    const whoEstablishLeySeven: TextPolitics = {
        title: "¿Quién los establece?",
        description: "El Congreso de Colombia creó la Ley 7 de 1991. Esta ley establece normas generales para el comercio exterior del país.",
        image: "/images/transparent-ley.png"
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
                    <h2 className="text-4xl font-normal uppercase">LEY 7/1991</h2>
                </div>
                <Politica politics={whatAreLeySeven} />
                <Politica politics={whoEstablishLeySeven} />
                <div className="mt-8">
                    <DocumentItem title="Información de la Ley 7/1991" url="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=67199" />
                </div>
            </div>
        </div>
    )
}