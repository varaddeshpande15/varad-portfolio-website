"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface WidgetAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "rotateIn"
}

export function WidgetAnimation({ children, className = "", delay = 0, animation = "fadeInUp" }: WidgetAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (animation) {
        case "fadeInLeft":
          return "opacity-0 -translate-x-10"
        case "fadeInRight":
          return "opacity-0 translate-x-10"
        case "scaleIn":
          return "opacity-0 scale-75"
        case "rotateIn":
          return "opacity-0 rotate-12 scale-90"
        default:
          return "opacity-0 translate-y-10"
      }
    }
    return "opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0"
  }

  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out ${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}
