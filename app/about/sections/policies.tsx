import Link from 'next/link';
import Image from 'next/image';

interface PolicyItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

const PolicyCard = ({ title, description, image, link }: PolicyItem) => (
  <div className="flex items-start gap-6 bg-black text-white">
    <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center">
      <Image 
        src={image} 
        alt={`${title} icon`}
        width={96} 
        height={96} 
        className="object-contain w-full h-full"
        priority
      />
    </div>
    <div>
      <h2 className="text-xl font-semibold mb-4 text-[#eefb03]">{title}</h2>
      <p className="text-gray-300 mb-4 leading-relaxed">
        {description.includes("NEMTECH") ? (
          <>
            En <span className="text-white">NEMTECH</span> {description.split("NEMTECH")[1]}
          </>
        ) : description}
      </p>
      <Link href={link}>
        <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-6 py-2 rounded-full">
          + INFORMACIÓN
        </button>
      </Link>
    </div>
  </div>
);

export default function Politicas() {
  const policies: PolicyItem[] = [
    {
      title: "Política de Calidad",
      description: "En NEMTECH la calidad es el pilar fundamental de nuestro compromiso con la seguridad avanzada. Nos aseguramos de que cada solución y sistema cumpla con los más altos estándares de precisión, eficiencia y fiabilidad.",
      image: "/images/pcalidad.webp",
      link: "/politics/quiality"
    },
    {
      title: "Política de Seguridad",
      description: "La excelencia en el servicio es un eje clave en NEMTECH, donde nos comprometemos a brindar soluciones tecnológicas de seguridad con altos estándares de atención al cliente, soporte técnico especializado y un enfoque en la satisfacción total de nuestros usuarios",
      image: "/images/pservicio.webp",
      link: "/politics/service"
    },
    {
      title: "Política Ambiental",
      description: "En NEMTECH, comprendemos la responsabilidad de minimizar el impacto ambiental de nuestras actividades. Nuestra política ambiental se fundamenta en el desarrollo sostenible, asegurando la compatibilidad entre la innovación tecnológica y la protección del medio ambiente. ",
      image: "/images/pambiental.webp",
      link: "/politics/environmental"
    }
  ];

  return (
    <div className="bg-black text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-16">POLITICAS</h1>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Columna Izquierda */}
          <div className="space-y-16">
            <PolicyCard {...policies[0]} />
            <PolicyCard {...policies[1]} />
          </div>

          {/* Columna Derecha */}
          <div className="flex items-center justify-center h-full">
            <PolicyCard {...policies[2]} />
          </div>
        </div>
      </div>
    </div>
  );
}