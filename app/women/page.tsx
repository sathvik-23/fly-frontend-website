"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function WomenPage() {
  // Women's products data
  const womenProducts = [
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
    {
      id: 12,
      name: "Lavender Oversized T-Shirt",
      originalPrice: 1499,
      salePrice: 1499,
      onSale: false,
    },
    {
      id: 13,
      name: "Cozy Beige Hoodie",
      originalPrice: 2799,
      salePrice: 1899,
      onSale: true,
    },
    {
      id: 14,
      name: "Pastel Blue Sweatshirt",
      originalPrice: 2299,
      salePrice: 1599,
      onSale: true,
    },
    {
      id: 15,
      name: "Floral Print Oversized T-Shirt",
      originalPrice: 1799,
      salePrice: 1099,
      onSale: true,
    },
  ]

  // Women's categories
  const womenCategories = [
    { name: "Oversized T-Shirts", slug: "oversized-t-shirts" },
    { name: "Puff Printed", slug: "puff-printed" },
    { name: "Graphic", slug: "graphic" },
    { name: "Best Sellers", slug: "best-sellers" },
    { name: "Hoodies", slug: "hoodies" },
    { name: "Sweatshirts", slug: "sweatshirts" },
  ]

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      {/* Hero Banner */}
      <section className="relative w-full h-[500px]">
        <Image
          src="/images/women-hero.jpg"
          alt="Women's Collection"
          fill
          className="object-cover object-center opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-6xl font-bold text-white mb-6 relative">
                WOMEN&apos;S COLLECTION
                <span className="absolute -bottom-2 left-0 w-24 h-1 bg-red-600"></span>
              </h1>
              <p className="text-zinc-300 text-lg mb-6">Discover our luxury oversized streetwear for women</p>
              <Button className="bg-red-600 hover:bg-red-700 text-white group">
                SHOP NOW
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-6 bg-zinc-900">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex gap-4 pb-2">
            {womenCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/women/${category.slug}`}
                className="px-4 py-2 bg-black rounded-full text-sm border border-zinc-800 hover:border-red-600 hover:text-red-400 whitespace-nowrap transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 relative inline-block">
            WOMEN&apos;S PRODUCTS
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-600"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {womenProducts.map((product, index) => (
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
              LOAD MORE
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
