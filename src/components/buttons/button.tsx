import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"


export interface ButtonProps{
  children: React.ReactNode
  className?: string
  onClick?: () => void
  style?: React.CSSProperties
}

export const Button = ({ children, className, onClick, style }: ButtonProps) => {
  return (
    <button className={cn("rounded-md px-4 py-2", className)} onClick={onClick} style={{ backgroundColor: "#f7c50f", borderRadius: "20px" }}>
      {children}
    </button>
  )
}