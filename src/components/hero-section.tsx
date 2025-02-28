import { Play } from "lucide-react"
import Link from "next/link"

interface HeroSectionProps {
  title: string
  subtitle?: string
  buttonText?: string
  buttonLink?: string
  showPlayButton?: boolean
  backgroundImage?: string
}

export function HeroSection({
  title,
  subtitle,
  buttonText = "+ INFORMACIÓN",
  buttonLink = "#",
  showPlayButton = true,
  backgroundImage = "/placeholder.svg?height=1080&width=1920",
}: HeroSectionProps) {
  return (
    <div className="relative h-[70vh] flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-8 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">{title}</h1>

          {subtitle && <p className="text-lg md:text-xl mb-8 text-gray-200">{subtitle}</p>}

          <div className="flex items-center gap-8">
            <Link
              href={buttonLink}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full flex items-center"
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
      </div>
    </div>
  )
}

