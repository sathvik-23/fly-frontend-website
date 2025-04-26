"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send this to your API
    console.log("Subscribing email:", email)
    setSubmitted(true)
    setEmail("")
  }

  return (
    <motion.div
      className="text-center max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold mb-4 text-white">JOIN OUR NEWSLETTER</h2>
      <p className="text-zinc-400 mb-6">
        Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
      </p>

      {submitted ? (
        <motion.div
          className="bg-zinc-800 border border-red-600 text-white px-4 py-3 rounded"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Thanks for subscribing! Check your email for confirmation.
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-zinc-800 border-zinc-700 text-white focus:border-red-600 focus:ring-red-600"
          />
          <Button type="submit" className="bg-red-600 text-white hover:bg-red-700">
            SUBSCRIBE
          </Button>
        </form>
      )}
    </motion.div>
  )
}
