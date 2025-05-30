"use client"
import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Mail } from "lucide-react"

export function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [hamMenu, setHamMenu] = useState(false);

  return (
    <nav className="flex items-center justify-end px-4 py-3 md:px-8 bg-black" style={{justifyContent: "space-between", height: "75px"}}>
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.webp"
            alt="Nemtech Logo"
            width={40}
            height={10}
          /> <span className="text-white">Nemtech</span>
        </Link>
        {hamMenu && (
          <div className="md:hidden flex">
          <button className="text-white p-2" onClick={() => setHamMenu(!hamMenu)}>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        )}
      </div>

      <div className="hidden flex gap-12 items-center">
        <NavLink href="/about" className="mr-8">NOSOTROS</NavLink>
        <NavLink href="/products" className="mr-8 flex">
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
        <Mail className="h-5 w-5 text-white" />
      </div>
    </nav>
  )
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
  active?: boolean
  className?: string
}

function NavLink({ href, children, active, className = "" }: NavLinkProps) {
  return (
    <Link 
      href={href} 
      className={`${active ? "font-bold border-b-2 border-purple-500 pb-1" : "hover:text-gray-300"} ${className} text-white`}
    >
      {children}
    </Link>
  )
}

