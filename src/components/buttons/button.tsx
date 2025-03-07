import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"


export interface ButtonProps{
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button className={cn(className)} onClick={onClick}>
      {children}
    </button>
  )
}