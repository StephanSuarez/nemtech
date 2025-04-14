import Link from "next/link"
import Image from "next/image"

interface PoliticsItemProps {
  title: string
  description: string
  image: string
  link?: string
}

const PoliticsItem = ({ title, description, image, link = "/politics" }: PoliticsItemProps) => {
  return (
    <div className="flex items-start gap-4 bg-black text-white">
      {image && (
        <div className="flex-shrink-0 w-20 h-20">
          <Image src={image || "/placeholder.svg"} alt="" width={80} height={80} className="object-contain" />
        </div>
      )}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-[#c8ff00]">{title}</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
        <Link href={link}>
          <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-6 py-2 rounded-full">
            + INFORMACIÓN
          </button>
        </Link>
      </div>
    </div>
  )
}

export default PoliticsItem
