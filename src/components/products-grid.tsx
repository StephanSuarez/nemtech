import ProductCard from "./product-card"


interface Product {
  title: string
  description: string
  imageSrc: string
  buttonText?: string
  buttonLink?: string
}

interface ProductsGridProps {
  title: string
  products: Product[]
}

export function ProductsGrid({ title, products }: ProductsGridProps) {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 text-center">
      <h2 className="text-4xl font-bold mb-12">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 justify-items-center">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            image={product.imageSrc}
            buttonText={product.buttonText}
            buttonLink={product.buttonLink}
          />
        ))}
      </div>
    </div>
  )
}


