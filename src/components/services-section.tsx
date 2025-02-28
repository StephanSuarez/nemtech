import { ServiceIcon } from "./service-icon"

interface Service {
  title: string
  iconSrc: string
  borderColor?: string
}

interface ServicesSectionProps {
  services: Service[]
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        {services.map((service, index) => (
          <ServiceIcon key={index} title={service.title} iconSrc={service.iconSrc} borderColor={service.borderColor} />
        ))}
      </div>
    </div>
  )
}

