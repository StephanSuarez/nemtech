import Image from "next/image"

interface ServiceIconProps {
  title: string
  iconSrc: string
  borderColor?: string
}

export function ServiceIcon({ title, iconSrc, borderColor = "border-cyan-400" }: ServiceIconProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32 mb-4">
        <div className={`absolute inset-0 rounded-full border-2 ${borderColor} animate-pulse`}></div>
        <div className="absolute inset-2 rounded-full bg-black flex items-center justify-center">
          <Image src={iconSrc || "/placeholder.svg"} alt={title} width={60} height={60} className="object-contain" />
        </div>
      </div>
      <span className="uppercase text-sm tracking-wider">{title}</span>
    </div>
  )
}

