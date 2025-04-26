import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import CategoryCircle from "@/components/category-circle"
import NewsletterSignup from "@/components/newsletter-signup"
import { ArrowRight } from "lucide-react"

export default function Home() {
  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Classic White Oversized T-Shirt",
      image: "/images/products/men-tee-1.jpg",
      originalPrice: 1599,
      salePrice: 999,
      onSale: true,
    },
    {
      id: 2,
      name: "Stan Smith Edition Oversized T-Shirt",
      image: "/images/products/men-tee-2.jpg",
      originalPrice: 2499,
      salePrice: 1199,
      onSale: true,
    },
    {
      id: 10,
      name: "Urban Black Crop Top",
      image: "/images/products/women-tee-1.jpg",
      originalPrice: 1599,
      salePrice: 999,
      onSale: true,
    },
    {
      id: 11,
      name: "Comfort White Hoodie",
      image: "/images/products/women-tee-2.jpg",
      originalPrice: 2799,
      salePrice: 1899,
      onSale: true,
    },
  ]

  // Categories data
  const categories = [
    { id: 1, name: "Oversized T-Shirts" },
    { id: 2, name: "Graphic Printed" },
    { id: 3, name: "Puff Printed" },
    { id: 4, name: "Hoodies" },
    { id: 5, name: "Sweatshirts" },
    { id: 6, name: "Best Sellers" },
  ]

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      {/* Promotional Banner */}
      <div className="bg-red-600 text-white py-2 text-center text-sm font-medium">
        Gifting Season Sale Live! Free Shipping on Orders Above ₹999
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[700px] bg-gradient-to-br from-black to-zinc-900 overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl ml-auto">
              <h1 className="text-7xl md:text-9xl font-bold text-white mb-6 relative">
                SHOP <span className="text-red-600">Men</span>
                <span className="absolute -bottom-4 left-0 w-24 h-1 bg-red-600"></span>
              </h1>
              <p className="text-zinc-400 mb-8 text-lg">
                Elevate your style with our premium oversized streetwear collection.
              </p>
              <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 group">
                SHOP NOW
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12 relative inline-block mx-auto">
            ALL CATEGORIES
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-red-600"></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <CategoryCircle key={category.id} name={category.name} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 relative inline-block">
            FEATURED PRODUCTS
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-600"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 group">
              VIEW ALL PRODUCTS
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Women's Collection Banner */}
      <section className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-zinc-900 to-black overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl">
              <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 relative">
                SHOP <span className="text-red-600">Women</span>
                <span className="absolute -bottom-4 left-0 w-24 h-1 bg-red-600"></span>
              </h2>
              <p className="text-zinc-400 mb-8 text-lg">
                Discover our exclusive women's collection designed for comfort and style.
              </p>
              <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 group">
                EXPLORE NOW
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <NewsletterSignup />
        </div>
      </section>
    </main>
  )
}
