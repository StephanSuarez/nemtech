import React, { useContext, useState } from 'react';
import { CardSelectedContext } from '@/src/context/CardSelectedContext';

interface SliderCardComponentProps {
    title: string
    image: string
    terms: string[]
    width: string
    height: string
}

export default function SliderCardComponent({ title, image, terms, width, height }: SliderCardComponentProps) {
    const context = useContext(CardSelectedContext);

if (!context) {
  throw new Error("SliderCardComponent debe usarse dentro de CardSelectedProvider");
    }

    const { setCardSelected } = context;

    const [isHovering, setIsHovering] = useState(false);
    


    return (
        <div 
          className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
          style={{ width, height, boxShadow: '2px 2px 10px 0px rgba(0, 0, 0, 0.74)', minWidth: width }}
        >
          {/* Image Container - Using percentage of height */}
          <div className="w-full" style={{ height: '40%' }}>
            <img 
              src={image || "/api/placeholder/400/300"} 
              alt={title} 
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          {/* Content Container - Fixed layout */}
          <div className="p-6 flex flex-col justify-between" style={{ height: '60%', padding: '10px' }}>
            {/* Title */}
            <h2 className="text-xs font-bold text-center text-black mb-1">{title}</h2>
            
            {/* Terms List - Fixed height with overflow */}
            <div className="overflow-y-auto" style={{ height: 'calc(100% - 60px)' }}>
              <ul className="list-disc pl-4 space-y-0.5">
                {terms.map((term, index) => (
                  <li key={index} style={{ fontSize: '0.8rem' }} className="text-black">{term}</li>
                ))}
              </ul>
            </div>
            
            {/* Export Button - Fixed position at bottom */}
            <div className="flex justify-center mt-1 mb-2">
              <button 
                className="text-white py-1 px-4 rounded-full uppercase text-xs font-medium"
                style={{ 
                  backgroundColor: isHovering ? '#4b5563' : '#000000',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={() => setCardSelected({ name: title, image: image, terms: terms })}
              >
                Exportación
              </button>
            </div>
          </div>
        </div>
      );
}