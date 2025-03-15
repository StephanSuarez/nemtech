"use client"
import { useState } from "react";
import NicePage from "./nicePage";
import SliderCardComponent from "@/src/components/card/sliderCard";
import { CardSelectedProvider } from "@/src/context/CardSelectedContext";

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
    <CardSelectedProvider>
      <div>
      <NicePage />
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
    </CardSelectedProvider>
  )
}

