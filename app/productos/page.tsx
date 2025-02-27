import { Navbar } from "@/components/navbar"
import { ProductsGrid } from "@/components/products-grid"

export default function ProductsPage() {
  // Datos de ejemplo para los productos
  const products = [
    {
      title: "Las Valkirias",
      description: "Drones de Intercepción",
      imageSrc:
        "https://media-public.canva.com/gd_UQ/MAELMvgd_UQ/1/s.png",
      buttonText: "+ información",
      buttonLink: "/productos/valkirias",
    },
    {
      title: "Asteria",
      description: "Sistema de seguridad con capacidad de reacción",
      imageSrc:
        "https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:ifs%3A%2F%2F%2F0344820d-bd6f-4259-aac6-ce18e0dadef6/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAHJjo2NsZW6hkfNYvN0TBGACBwFxzekF70s0HGEaPpS2&exp=1740649103&osig=AAAAAAAAAAAAAAAAAAAAAHykcebRzw2q8lo51GxZXLYV0Rh6hTkSk3u7l22gBrnR&signer=media-rpc&x-canva-quality=thumbnail",
      buttonText: "+ información",
      buttonLink: "/productos/asteria",
    },
    {
      title: "Nanotecnología",
      description: "Soluciones avanzadas de nanotecnología para seguridad",
      imageSrc:
        "https://media.canva.com/v2/image-resize/format:PNG/height:273/quality:100/uri:ifs%3A%2F%2F%2F174a0afe-1fd4-48bc-8956-64da48ae0b4a/watermark:F/width:273?csig=AAAAAAAAAAAAAAAAAAAAAK1ud-TpQlCxlGVXmzYruL_GSL8srNrRTz1aN0mVUqrT&exp=1740647653&osig=AAAAAAAAAAAAAAAAAAAAALBq1oh9hpqAZjx3ii8NUyRfi0uQDa6XYeNEphjvpOHE&signer=media-rpc&x-canva-quality=screen",
      buttonText: "+ información",
      buttonLink: "/productos/nanotecnologia",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="py-8">
        <ProductsGrid title="NUESTROS PRODUCTOS" products={products} />
      </div>
    </main>
  )
}

