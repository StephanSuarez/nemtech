import { Navbar } from "@/src/components/navbar"
import { ProductsGrid } from "@/src/components/products-grid"

export default function ProductsPage() {
  // Datos de ejemplo para los productos
  const products = [
    {
      title: "Las Valkirias",
      description: "Drones de Intercepción",
      imageSrc:
        "/images/dron.webp",
      buttonText: "+ información",
      buttonLink: "/products/valkirias",
    },
    {
      title: "Asteria",
      description: "Sistema de seguridad con capacidad de reacción",
      imageSrc:
        "/images/camara.webp",
      buttonText: "+ información",
      buttonLink: "/products/asteria",
    },
    {
      title: "Nanotecnología",
      description: "Soluciones avanzadas de nanotecnología para seguridad",
      imageSrc:
        "/images/astro.webp",
      buttonText: "+ información",
      buttonLink: "/products/nanotecnologia",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="py-8 max-w-6xl mx-auto">
        <ProductsGrid title="NUESTROS PRODUCTOS" products={products} />
      </div>
    </main>
  )
}

