import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  title: string
  description: string
  imageSrc: string
  buttonText?: string
  buttonLink?: string
}

export function ProductCard({
  title,
  description,
  imageSrc,
  buttonText = "+ información",
  buttonLink = "#",
}: ProductCardProps) {
  return (
    <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden flex flex-col">
      <div className="h-48 relative bg-black">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-contain p-2" />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-4 flex-grow">{description}</p>
        <Link
          href={buttonLink}
          className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-1 rounded-full self-start flex items-center"
        >
          {buttonText.startsWith("+") ? (
            <>
              <span className="mr-1">+</span>
              {buttonText.substring(1).trim()}
            </>
          ) : (
            buttonText
          )}
        </Link>
      </div>
    </div>
  )
}

