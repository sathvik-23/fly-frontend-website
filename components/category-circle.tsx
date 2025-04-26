"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface CategoryCircleProps {
  name: string
}

export default function CategoryCircle({ name }: CategoryCircleProps) {
  // Convert category name to URL-friendly format
  const slug = name.toLowerCase().replace(/\s+/g, "-")

  return (
    <Link href={`/category/${slug}`} className="block text-center">
      <motion.div
        className="relative mx-auto w-32 h-32 rounded-full overflow-hidden border-2 border-zinc-800 bg-gradient-to-br from-zinc-800 to-zinc-900 hover:border-red-600 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      ></motion.div>
      <h3 className="mt-3 text-sm font-medium text-white hover:text-red-400 transition-colors">{name}</h3>
    </Link>
  )
}
