"use client"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function SummerPage() {
  // Summer collection products
  const summerProducts = [
    {
      id: 20,
      name: "Summer Vibes Oversized T-Shirt",
      originalPrice: 1799,
      salePrice: 1099,
      onSale: true,
    },
    {
      id: 21,
      name: "Beach Day Graphic T-Shirt",
      originalPrice: 1599,
      salePrice: 999,
      onSale: true,
    },
    {
      id: 22,
      name: "Sunset Dreams Oversized T-Shirt",
      originalPrice: 1899,
      salePrice: 1199,
      onSale: true,
    },
    {
      id: 23,
      name: "Tropical Print Oversized T-Shirt",
      originalPrice: 1699,
      salePrice: 1099,
      onSale: true,
    },
    {
      id: 24,
      name: "Summer Nights Graphic T-Shirt",
      originalPrice: 1599,
      salePrice: 999,
      onSale: true,
    },
    {
      id: 25,
      name: "Coastal Breeze Oversized T-Shirt",
      originalPrice: 1799,
      salePrice: 1199,
      onSale: true,
    },
  ]

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      {/* Hero Banner */}
      <section className="relative w-full h-[500px] bg-gradient-to-br from-black to-zinc-900">
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-red-600 font-medium mb-2 block">LIMITED EDITION</span>
              <h1 className="text-6xl font-bold text-white mb-6 relative">
                SUMMER 25&apos; COLLECTION
                <span className="absolute -bottom-2 left-0 w-24 h-1 bg-red-600"></span>
              </h1>
              <p className="text-zinc-400 text-lg mb-6">
                Discover our exclusive summer collection designed for style and comfort in the heat.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white group">
                EXPLORE NOW
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Summer Highlights */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 relative inline-block">
              SUMMER HIGHLIGHTS
              <span className="absolute -bottom-2 left-0 right-0 mx-auto w-16 h-1 bg-red-600"></span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mt-6">
              Our Summer 25&apos; collection features breathable fabrics, vibrant designs, and the perfect oversized fit
              for the season.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-zinc-800 p-8 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Fabrics</h3>
              <p className="text-zinc-400">
                Lightweight, breathable materials perfect for hot summer days while maintaining our signature oversized
                fit.
              </p>
            </motion.div>

            <motion.div
              className="bg-zinc-800 p-8 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Exclusive Designs</h3>
              <p className="text-zinc-400">
                Limited edition graphics and prints inspired by summer vibes and urban culture.
              </p>
            </motion.div>

            <motion.div
              className="bg-zinc-800 p-8 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainable Production</h3>
              <p className="text-zinc-400">
                Eco-friendly manufacturing processes and materials that reduce environmental impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 relative inline-block">
            SUMMER COLLECTION
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-600"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {summerProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 group">
              VIEW ALL
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
