export interface CardProps {
    country: string
    image: string
    terms: string[]
    isActive: boolean
  }
  
  export default function CardLarge({ country, image, terms, isActive }: CardProps) {
    return (
      <div
        className={`bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${isActive ? "scale-100 opacity-100" : "scale-95 opacity-90"}`}
        style={{ width: "280px" }}
      >
        <div className="relative h-40">
          <img src={image || "/placeholder.svg"} alt={country} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white text-xl font-semibold">{country}</h3>
          </div>
        </div>
        <div className="p-4">
          <ul className="space-y-1">
            {terms.map((term, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <span className="text-emerald-500 font-bold">•</span>
                {term}
              </li>
            ))}
          </ul>
          <button className="mt-4 w-full bg-emerald-600 text-white py-2 rounded-md text-sm uppercase font-medium hover:bg-emerald-700 transition-colors">
            {country === "El Salvador" ? "EXPORTACIÓN" : "IMPORTACIÓN"}
          </button>
        </div>
      </div>
    )
  }
  