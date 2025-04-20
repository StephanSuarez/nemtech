import { Navbar } from "@/src/components/navbar"
import SectionOne from "@/src/components/sections/exports/section-one"
import SectionTwo from "@/src/components/sections/exports/section-two"
import Imports from "@/src/components/sections/exports/imports"
import IncotermsComponent from "@/src/components/sections/exports/incontems"
import DocumentosPage from "@/src/components/documentos-page"

export default function Regulations() {

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden bg-black flex flex-col">

      <div className="relative z-10">
        <Navbar />
      </div>

      <div className="relative z-10 h-[100vh] flex-1" style={{height: "100vh"}}>
        <DocumentosPage />
      </div>

      {/* <SectionOne />
       <SectionTwo />

       <Imports />

       <IncotermsComponent /> */}
    </main>
  )
}

