import Link from "next/link"
import { Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Shop Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white relative inline-block">
              SHOP
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-red-600"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/men" className="text-zinc-400 hover:text-red-400 transition-colors text-sm">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/women" className="text-zinc-400 hover:text-red-400 transition-colors text-sm">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/summer" className="text-zinc-400 hover:text-red-400 transition-colors text-sm">
                  Summer 25&apos;
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-zinc-400 hover:text-red-400 transition-colors text-sm">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/best-sellers" className="text-zinc-400 hover:text-red-400 transition-colors text-sm">
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white relative inline-block">
              HELP
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-red-600"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help/login" className="text-zinc-400 hover:text-red-400 transition-colors text-sm">
                  Members Login
                </Link>
              </li>
              <li>
                <Link href="/help/support" className="text-zinc-400 hover:text-red-400 transition-colors text-sm">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="/help/return-policy" className="text-zinc-400 hover:text-red-400 transition-colors text-sm">
                  Return/Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/help/exchange-policy"
                  className="text-zinc-400 hover:text-red-400 transition-colors text-sm"
                >
                  Exchange Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/help/shipping-policy"
                  className="text-zinc-400 hover:text-red-400 transition-colors text-sm"
                >
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white relative inline-block">
              ABOUT
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-red-600"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-red-400 transition-colors text-sm">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-zinc-400 hover:text-red-400 transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-zinc-400 hover:text-red-400 transition-colors text-sm">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-red-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white relative inline-block">
              CONNECT
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-red-600"></span>
            </h3>
            <div className="flex space-x-4 mb-6">
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-red-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-red-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-red-400 transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
            <p className="text-sm text-zinc-400">
              Stay connected with us for the latest updates, exclusive offers, and behind-the-scenes content.
            </p>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-zinc-400">© 2025 Flny Inc. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy-policy" className="text-sm text-zinc-400 hover:text-red-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-zinc-400 hover:text-red-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
