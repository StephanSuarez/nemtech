import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, ShoppingCart, Mail } from "lucide-react"

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 md:px-8 bg-black">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://media.canva.com/v2/image-resize/format:PNG/height:94/quality:100/uri:ifs%3A%2F%2F%2Fbf3b3240-8e4f-42ea-98d2-644874498d99/watermark:F/width:101?csig=AAAAAAAAAAAAAAAAAAAAAPTkdNSXikh3zPOooMxcNtzHNvHfaAL-g7nkZ0hnHpoM&exp=1740649455&osig=AAAAAAAAAAAAAAAAAAAAAKv4hgQEW4R3WYtsJIDAU3pGEHyJBuH1yROcLkl8L_u3&signer=media-rpc&x-canva-quality=thumbnail"
            alt="Nemtech Logo"
            width={40}
            height={10}
          /> <span className="text-white">Nemtech</span>
        </Link>
        <div className="md:hidden flex">
          <button className="text-white p-2">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-6">
        <NavLink href="/about">NOSOTROS</NavLink>
        <NavLink href="/products">
          PRODUCTOS
          <span className="inline-block ml-1">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 0L11.1962 4.5L6 9L0.803848 4.5L6 0Z" fill="#9333ea" />
            </svg>
          </span>
        </NavLink>
        <NavLink href="/contact">CONTACTO</NavLink>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex items-center">
          <input
            type="text"
            className="bg-transparent border border-gray-700 rounded-full px-4 py-1 pr-10 w-32 md:w-48 focus:outline-none focus:border-purple-500"
            placeholder="Buscar..."
          />
          <Search className="absolute right-3 h-4 w-4 text-gray-400" />
        </div>
        <ShoppingCart className="h-5 w-5 text-white" />
        <Mail className="h-5 w-5 text-white" />
      </div>
    </nav>
  )
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
  active?: boolean
}

function NavLink({ href, children, active }: NavLinkProps) {
  return (
    <Link href={href} className={`${active ? "font-bold border-b-2 border-purple-500 pb-1" : "hover:text-gray-300"}`}>
      {children}
    </Link>
  )
}

