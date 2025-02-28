import { textPolitics } from "@/src/utils/utils"
import Politica from "@/src/components/Politica"

export default function Politics() {
    return (
        <div className="max-w-5xl mx-auto py-16 px-4 relative z-10 bg-black text-white">
            
        <h2 className="text-4xl font-normal mb-8 uppercase">POLITICAS</h2>
            {textPolitics.map((politics) => (
        <Politica key={politics.title} politics={politics} />
      ))}
        </div>
    )
}