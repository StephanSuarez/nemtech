import { DocumentItem } from "@/src/components/documentos-page";
import { Navbar } from "@/src/components/navbar";
import Politica from "@/src/components/Politica";
import { TextPolitics } from "@/src/utils/utilsInterface";

export default function incotermsPage() {

    const whatAreIncoterms: TextPolitics = {
        title: "¿Qué son?",
        description: "Los Incoterms son un conjunto de reglas que establecen las responsabilidades y los costos de las partes involucradas en una transacción comercial internacional. Se usan en los contratos de compraventa de mercancías.",
        image: "/images/diamond.webp"
    }

    const whoEstablishIncoterms: TextPolitics = {
        title: "¿Quién los establece?",
        list: [
            "La Cámara de Comercio Internacional (CCI) es la encargada de elaborar y actualizar los Incoterms.",
            "La última versión, Incoterms 2020, entró en vigor el 1 de enero de 2020. ",
        ],
        image: "/images/cristals.png"
    }
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="max-w-5xl mx-auto py-16 px-4 relative z-10 bg-black text-white">
                <h2 className="text-4xl font-normal mb-8 uppercase">INCOTERMS</h2>
                <Politica politics={whatAreIncoterms} />
                <Politica politics={whoEstablishIncoterms} />
                <div className="mt-8">
                    <DocumentItem title="https://masam.cuautitlan.unam.mx/remadics/materiales/pdfs/Incoterms_2020.pdf" url="https://masam.cuautitlan.unam.mx/remadics/materiales/pdfs/Incoterms_2020.pdf" />
                </div>
            </div>
        </div>
    )
}