"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, ShoppingBag, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "./mobile-menu"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black shadow-lg" : "bg-black/80 backdrop-blur-md",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">
              FL<span className="text-red-600">NY</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/men"
              className={cn(
                "text-sm font-medium relative py-2 transition-colors",
                isActive("/men") ? "text-red-600" : "text-white hover:text-red-400",
              )}
            >
              MEN
              {isActive("/men") && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"></span>}
            </Link>
            <Link
              href="/women"
              className={cn(
                "text-sm font-medium relative py-2 transition-colors",
                isActive("/women") ? "text-red-600" : "text-white hover:text-red-400",
              )}
            >
              WOMEN
              {isActive("/women") && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"></span>}
            </Link>
            <Link
              href="/help"
              className={cn(
                "text-sm font-medium relative py-2 transition-colors",
                isActive("/help") ? "text-red-600" : "text-white hover:text-red-400",
              )}
            >
              HELP
              {isActive("/help") && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"></span>}
            </Link>
            <Link
              href="/summer"
              className={cn(
                "text-sm font-medium relative py-2 transition-colors",
                isActive("/summer") ? "text-red-600" : "text-white hover:text-red-400",
              )}
            >
              SUMMER 25&apos;
              {isActive("/summer") && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"></span>}
            </Link>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex text-white hover:text-red-400">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-red-400">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative text-white hover:text-red-400">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
                0
              </span>
            </Button>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-red-400"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  )
}
