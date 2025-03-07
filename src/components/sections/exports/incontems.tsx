"use client"

import Title from "@/src/components/titles/title"
import SliderCard from "@/src/components/slider/slider-card"

export default function IncotermsComponent() {
  const countries = [
    {
      name: "El Salvador",
      image: "/images/el-salvador.webp",
      terms: [
        "EXW (Ex Works)",
        "FCA (Free Carrier)",
        "FOB (Free On Board)",
        "CFR (Cost and Freight)",
        "CIF (Cost, Insurance and Freight)",
        "DAP (Delivered At Place)",
        "DDP (Delivered Duty Paid)",
      ],
    },
    {
      name: "China",
      image: "/images/china.webp",
      terms: [
        "FOB (Free On Board)",
        "CIF (Cost, Insurance and Freight)",
        "CFR (Cost and Freight)",
        "DAP (Delivered At Place)",
        "DDP (Delivered Duty Paid)",
      ],
    },
    {
      name: "China",
      image: "/images/china.webp",
      terms: [
        "FOB (Free On Board)",
        "CIF (Cost, Insurance and Freight)",
        "CFR (Cost and Freight)",
        "DAP (Delivered At Place)",
        "DDP (Delivered Duty Paid)",
      ],
    },
    {
      name: "China",
      image: "/images/china.webp",
      terms: [
        "FOB (Free On Board)",
        "CIF (Cost, Insurance and Freight)",
        "CFR (Cost and Freight)",
        "DAP (Delivered At Place)",
        "DDP (Delivered Duty Paid)",
      ],
    },
    {
        name: "El Salvador",
        image: "/images/el-salvador.webp",
        terms: [
          "EXW (Ex Works)",
          "FCA (Free Carrier)",
          "FOB (Free On Board)",
          "CFR (Cost and Freight)",
          "CIF (Cost, Insurance and Freight)",
          "DAP (Delivered At Place)",
          "DDP (Delivered Duty Paid)",
        ],
      }
  ]

  return (
    <div className="relative w-full p-8 min-h-screen overflow-hidden">
      {/* Background image */}
      <img 
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60"
        src="/images/landscape.jpg" 
        alt="Nemtech" 
      />

      {/* Contenido principal */}
      <div className="relative z-10">
        {/* Título */}
        <Title text1="INCOTERMS" text2="EXPORTACIÓN" text3="E IMPORTACIÓN" color="#98FB98" />

        {/* Slider con tarjetas */}
        <div className="mt-12">
          <SliderCard countries={countries} />
        </div>
      </div>
    </div>
  )
}

