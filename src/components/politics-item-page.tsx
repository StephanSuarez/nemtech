import Image from 'next/image';

interface PoliticsItemProps {
  title: string;
  description: string;
  image: string;
  items: string[];
}

const PoliticsItemPage = ({ title, description, image, items }: PoliticsItemProps) => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Política de Calidad</h2>
        <div className="flex justify-center mb-8">
          <Image 
            src="/star-colorful.png" 
            alt="Estrella colorida" 
            width={80} 
            height={80}
            className="object-contain"
          />
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          En [Nombre de la Empresa], estamos comprometidos con la excelencia y la mejora continua en todos nuestros procesos. Nos esforzamos por superar las expectativas de nuestros clientes, ofreciendo productos y servicios de alta calidad que cumplan con los más altos estándares.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Nuestra política de calidad se basa en los siguientes principios:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
          <li>Enfoque en el cliente: Priorizamos las necesidades y expectativas de nuestros clientes.</li>
          <li>Mejora continua: Buscamos constantemente oportunidades para mejorar nuestros procesos y servicios.</li>
          <li>Compromiso con la calidad: Mantenemos altos estándares de calidad en todo lo que hacemos.</li>
          <li>Trabajo en equipo: Fomentamos la colaboración y el trabajo en equipo para lograr nuestros objetivos.</li>
          <li>Cumplimiento normativo: Cumplimos con todas las leyes y regulaciones aplicables.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Estamos dedicados a proporcionar productos y servicios que satisfagan las necesidades de nuestros clientes y contribuyan a su éxito.
        </p>
      </div>
    </section>
  );
};

export default PoliticsItemPage;