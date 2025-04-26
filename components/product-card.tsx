"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Heart } from "lucide-react"

interface ProductCardProps {
  product: {
    id: number
    name: string
    image?: string
    originalPrice: number
    salePrice: number
    onSale: boolean
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square w-full overflow-hidden rounded-md bg-zinc-800 group-hover:opacity-90 transition-all duration-300">
        <Link href={`/products/${product.id}`}>
          <div className="relative h-full w-full">
            {product.image ? (
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover object-center"
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-zinc-800 to-zinc-900"></div>
            )}
            {product.onSale && (
              <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-medium px-2 py-1">Sale</div>
            )}
          </div>
        </Link>
      </div>

      {/* Quick actions overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center gap-2 bg-black/60 opacity-0 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : ""
        }`}
      >
        <Button
          size="sm"
          className="bg-white text-black hover:bg-red-600 hover:text-white transition-colors"
          onClick={(e) => {
            e.preventDefault()
            console.log("Add to cart:", product.name)
          }}
        >
          <ShoppingBag className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
        <Button
          size="icon"
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-black transition-colors"
          onClick={(e) => {
            e.preventDefault()
            setIsFavorite(!isFavorite)
          }}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-600 text-red-600" : ""}`} />
        </Button>
      </div>

      <div className="mt-4">
        <h3 className="text-sm text-white group-hover:text-red-400 transition-colors">
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <div className="mt-1 flex items-center">
          <p className="text-sm font-medium text-red-600">₹{product.salePrice.toFixed(2)}</p>
          {product.onSale && (
            <p className="ml-2 text-sm text-zinc-500 line-through">₹{product.originalPrice.toFixed(2)}</p>
          )}
        </div>
      </div>
    </motion.div>
  )
}
