import { Navbar } from "@/src/components/navbar"
import SectionOne from "@/src/components/sections/exports/section-one"
import SectionTwo from "@/src/components/sections/exports/section-two"
import Imports from "@/src/components/sections/exports/imports"

export default function Regulations() {


  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden bg-black">
      {/* Background video */}
      
      
      {/* Content with higher z-index to appear above the video */}
      <div className="relative z-10">
        <Navbar />

       {/* <RegulationsSection /> */}

       <SectionOne />
       <SectionTwo />

       <Imports />
      </div>
    </main>
  )
}

