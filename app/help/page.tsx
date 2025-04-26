"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Headphones, RefreshCw, Truck, User, CreditCard } from "lucide-react"
import { motion } from "framer-motion"

export default function HelpPage() {
  const helpCategories = [
    {
      title: "Members Login",
      description: "Access your account to track orders and manage your profile",
      icon: <User className="h-8 w-8" />,
      link: "/help/login",
    },
    {
      title: "Customer Support",
      description: "Get help with your orders, products, or general inquiries",
      icon: <Headphones className="h-8 w-8" />,
      link: "/help/support",
    },
    {
      title: "Return/Refund Policy",
      description: "Learn about our return and refund process",
      icon: <RefreshCw className="h-8 w-8" />,
      link: "/help/return-policy",
    },
    {
      title: "Exchange Policy",
      description: "Information about exchanging products",
      icon: <RefreshCw className="h-8 w-8" />,
      link: "/help/exchange-policy",
    },
    {
      title: "Shipping Policy",
      description: "Details about shipping methods, times, and costs",
      icon: <Truck className="h-8 w-8" />,
      link: "/help/shipping-policy",
    },
    {
      title: "Payment Methods",
      description: "Learn about accepted payment methods and security",
      icon: <CreditCard className="h-8 w-8" />,
      link: "/help/payment-methods",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4 relative inline-block">
            How Can We Help You?
            <span className="absolute -bottom-2 left-0 right-0 mx-auto w-24 h-1 bg-red-600"></span>
          </h1>
          <p className="text-zinc-400 mt-6">
            Find answers to frequently asked questions and get support for your Flny shopping experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={category.link} className="block h-full">
                <Card className="h-full bg-zinc-900 border-zinc-800 hover:border-red-600 transition-colors">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-black p-3 rounded-full text-red-600">{category.icon}</div>
                    <CardTitle className="text-white">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zinc-400">{category.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-2xl mx-auto mt-16 bg-zinc-900 p-8 rounded-lg text-center border border-zinc-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4 text-white">Still Need Help?</h2>
          <p className="text-zinc-400 mb-6">
            Our customer support team is available to assist you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-600 text-white hover:bg-red-700">Contact Support</Button>
            <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
              Live Chat
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
