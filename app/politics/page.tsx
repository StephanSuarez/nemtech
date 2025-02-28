import { textPolitics } from "@/src/utils/utils"
import Politica from "@/src/components/Politica"
import { Navbar } from "@/src/components/navbar"

export default function Politics() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />
        <div className="max-w-5xl mx-auto py-16 px-4 relative z-10 bg-black text-white">
            
        <h2 className="text-4xl font-normal mb-8 uppercase">POLITICAS</h2>
            {textPolitics.map((politics) => (
        <Politica key={politics.title} politics={politics} />
      ))}
        </div>
        </main>
    )
}