"use client"
import { useState, useContext } from "react";
import NicePage from "./nicePage";
import SliderCardComponent from "@/src/components/card/sliderCard";
import { CardSelectedContext } from "@/src/context/CardSelectedContext";

export default function IncotermsComponent() {
  const context = useContext(CardSelectedContext);

  if (!context) {
    throw new Error("IncotermsComponent debe estar dentro de CardSelectedProvider");
  }

  const { setCardSelected } = context;

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
      <div>
      <div onClick={() => setCardSelected({ name: "Incoterms exportación e importación", image: "/images/landscape.jpg", terms: [] })}>
        <NicePage />
      </div>
      <div className="flex flex-row gap-4 relative z-10 mt-8 overflow-x-auto" 
           style={{ 
             marginRight: '0px', 
             marginTop: '-400px', 
             top: '-150px',
             display: 'flex',
             justifyContent: 'flex-end',
             width: '100%'
           }}>
      {countries.map((country, index) => (
          <SliderCardComponent 
            key={index} 
            title={country.name} 
            image={country.image} 
            terms={country.terms} 
            width="230px" 
            height="400px" 
          />
        ))}
      </div>
    </div>
  )
}

