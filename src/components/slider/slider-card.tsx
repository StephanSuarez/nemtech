"use client"

import { useState } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"
import CardLarge from "../card/card-large"

export interface CountryData {
  name: string
  image: string
  terms: string[]
}

export interface SliderCardProps {
  countries: CountryData[]
}

export default function SliderCard({ countries }: SliderCardProps) {
  const [activeIndex, setActiveIndex] = useState(1)

  const handleNext = () => {
    setActiveIndex((prev) => (prev < countries.length - 1 ? prev + 1 : 0))
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : countries.length - 1))
  }

  // Calcular qué tarjetas mostrar y en qué orden
  const visibleCards = () => {
    const cards = []
    for (let i = 0; i < countries.length; i++) {
      // Calcular la posición relativa al índice activo
      let position = i - activeIndex

      // Si la posición es negativa, ajustar para el ciclo
      if (position < 0) position += countries.length

      cards.push({
        country: countries[i],
        position,
      })
    }

    // Ordenar por posición para el z-index correcto
    return cards.sort((a, b) => a.position - b.position)
  }

  return (
    <div className="relative h-[450px]">
      <div className="relative w-full h-full">
        {visibleCards().map((item, index) => {
          // Calcular la posición horizontal basada en la posición
          const leftPosition = `${30 + item.position * 20}%`
          const zIndex = countries.length - item.position

          return (
            <div
              key={index}
              className="absolute transition-all duration-500 ease-in-out"
              style={{
                left: leftPosition,
                zIndex,
                transform: item.position === 0 ? "scale(1)" : "scale(0.95)",
                opacity: item.position === 0 ? 1 : 0.9,
              }}
            >
              <CardLarge
                country={item.country.name}
                image={item.country.image}
                terms={item.country.terms}
                isActive={item.position === 0}
              />
            </div>
          )
        })}
      </div>

      {/* Controles de navegación */}
      <button
        onClick={handlePrev}
        className="absolute left-[20%] top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-lg hover:bg-white transition-colors z-50"
      >
        <ChevronLeft className="h-6 w-6 text-emerald-800" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-[20%] top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-lg hover:bg-white transition-colors z-50"
      >
        <ChevronRight className="h-6 w-6 text-emerald-800" />
      </button>
    </div>
  )
}

