import Image from "next/image"

interface ProductCardProps {
  image: string
  title: string
  description: string
  buttonText?: string
  buttonLink?: string
}

export default function CustomProductCard({
  image,
  title,
  description,
  buttonText = "+ información",
  buttonLink,
}: ProductCardProps) {
  return (
    <div className="relative w-64 h-96 mx-auto bg-white rounded-3xl shadow-md overflow-hidden flex flex-col items-center justify-between" style={{borderRadius: "20px"}}>
      {/* Imagen en la parte superior, flotando */}
      <div className="absolute -top-6">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={250}
          height={250}
          className="object-contain"
        />
      </div>

      {/* Contenido textual */}
      <div className="mt-10"></div>
      <div className="mt-20 p-4 text-center flex flex-col items-center">
        <h2 className="text-lg mt-20 font-bold text-black">{title}</h2>

        {/* Ícono + descripción (opcional) */}
        <div className="flex flex-col items-center justify-center w-full mt-2">
          <span style={{fontSize: "14px", textAlign: "center", marginTop: "10px"}} className="text-sm text-black text-center w-full">{description}</span>
        </div>
      </div>

      {/* Botón al fondo */}
      <div className="mt-auto mb-4">
        <a
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded-full text-base font-bold flex items-center justify-center transition-colors duration-200 w-[200px] inline-block"
          style={{width: "200px"}}
          href={buttonLink || "#"}
        >
          {buttonText}
        </a>
      </div>
    </div>
  )
}
