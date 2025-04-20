import { TextPolitics } from "@/src/utils/utilsInterface";
import React from 'react';
import Image from 'next/image';

export default function Politica({politics}: {politics: TextPolitics}) {
    return (
      <div className="max-w-5xl mx-auto py-8 px-4 relative z-10 bg-black text-white">        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div style={{ 
              width: '100px', 
              height: '100px',
              flexShrink: 0
            }}>
              <img 
                src={politics.image} 
                alt={politics.title}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain'
                }}
              />
            </div>
            <div style={{
              marginLeft: '10px'
            }}>
              <h3 className="text-lg font-bold text-[#eefb03]">{politics.title}</h3>
              <div className="mb-2">
                {typeof politics.description === 'function' ? politics.description() : politics.description}
              </div>
              <ul className="space-y-2 list-none pl-4">
                {politics.list && politics.list.map((item, index) => {
                  return (
                    <li key={index} className="flex items-start">
                      <span className="text-cyan-400 font-bold mr-2">•</span>
                      <div>
                        {typeof item === 'function' ? item() : item}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }