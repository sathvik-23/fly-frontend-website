"use client"

import { useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { X, Search, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname()

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [open])

  // Close menu when pathname changes
  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-zinc-800">
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:text-red-400">
            <X className="h-5 w-5" />
          </Button>
          <h2 className="text-xl font-bold text-white">
            FL<span className="text-red-600">NY</span>
          </h2>
          <Button variant="ghost" size="icon" className="text-white hover:text-red-400">
            <Search className="h-5 w-5" />
          </Button>
        </div>
        <nav className="flex-1 overflow-auto py-6">
          <ul className="space-y-6 px-6">
            <li>
              <Link
                href="/men"
                className="flex items-center justify-between text-xl font-medium text-white hover:text-red-400 transition-colors"
              >
                MEN
                <ChevronRight className="h-5 w-5 text-zinc-500" />
              </Link>
              <ul className="mt-3 ml-4 space-y-3 border-l border-zinc-800 pl-4">
                <li>
                  <Link href="/men/oversized-t-shirts" className="text-sm text-zinc-400 hover:text-red-400">
                    Oversized T-Shirts
                  </Link>
                </li>
                <li>
                  <Link href="/men/best-sellers" className="text-sm text-zinc-400 hover:text-red-400">
                    Best Sellers
                  </Link>
                </li>
                <li>
                  <Link href="/men/premium-solids" className="text-sm text-zinc-400 hover:text-red-400">
                    Premium Solids
                  </Link>
                </li>
                <li>
                  <Link href="/men/newest-arrivals" className="text-sm text-zinc-400 hover:text-red-400">
                    Newest Arrivals
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/women"
                className="flex items-center justify-between text-xl font-medium text-white hover:text-red-400 transition-colors"
              >
                WOMEN
                <ChevronRight className="h-5 w-5 text-zinc-500" />
              </Link>
              <ul className="mt-3 ml-4 space-y-3 border-l border-zinc-800 pl-4">
                <li>
                  <Link href="/women/oversized-t-shirts" className="text-sm text-zinc-400 hover:text-red-400">
                    Oversized T-Shirts
                  </Link>
                </li>
                <li>
                  <Link href="/women/puff-printed" className="text-sm text-zinc-400 hover:text-red-400">
                    Puff Printed
                  </Link>
                </li>
                <li>
                  <Link href="/women/graphic" className="text-sm text-zinc-400 hover:text-red-400">
                    Graphic
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/help"
                className="flex items-center justify-between text-xl font-medium text-white hover:text-red-400 transition-colors"
              >
                HELP
                <ChevronRight className="h-5 w-5 text-zinc-500" />
              </Link>
              <ul className="mt-3 ml-4 space-y-3 border-l border-zinc-800 pl-4">
                <li>
                  <Link href="/help/login" className="text-sm text-zinc-400 hover:text-red-400">
                    Members Login
                  </Link>
                </li>
                <li>
                  <Link href="/help/support" className="text-sm text-zinc-400 hover:text-red-400">
                    Customer Support
                  </Link>
                </li>
                <li>
                  <Link href="/help/return-policy" className="text-sm text-zinc-400 hover:text-red-400">
                    Return/Refund Policy
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/summer"
                className="flex items-center justify-between text-xl font-medium text-white hover:text-red-400 transition-colors"
              >
                SUMMER 25&apos;
                <ChevronRight className="h-5 w-5 text-zinc-500" />
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-6 border-t border-zinc-800">
          <Button className="w-full bg-red-600 hover:bg-red-700 text-white">SIGN IN</Button>
        </div>
      </div>
    </div>
  )
}
