"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isTransitioning, setIsTransitioning] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeToggle = () => {
    setIsTransitioning(true)

    // Add a subtle page transition effect
    document.documentElement.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"

    // Toggle theme
    setTheme(theme === "light" ? "dark" : "light")

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
      document.documentElement.style.transition = ""
    }, 300)
  }

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleThemeToggle}
      disabled={isTransitioning}
      className={`
        relative overflow-hidden group 
        hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 
        transition-all duration-300 
        ${isTransitioning ? "animate-pulse" : ""}
      `}
    >
      <div className="relative w-[1.2rem] h-[1.2rem]">
        <Sun
          className={`
            absolute inset-0 h-[1.2rem] w-[1.2rem] 
            transition-all duration-500 ease-in-out
            ${theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}
            text-amber-500 group-hover:text-amber-400
          `}
        />
        <Moon
          className={`
            absolute inset-0 h-[1.2rem] w-[1.2rem] 
            transition-all duration-500 ease-in-out
            ${theme === "light" ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}
            text-blue-400 group-hover:text-blue-300
          `}
        />
      </div>

      {/* Animated background effect */}
      <div
        className={`
        absolute inset-0 rounded-md
        transition-all duration-300 ease-in-out
        ${
          theme === "dark"
            ? "bg-gradient-to-r from-blue-500/5 to-purple-500/5"
            : "bg-gradient-to-r from-amber-500/5 to-orange-500/5"
        }
        opacity-0 group-hover:opacity-100
      `}
      />

      {/* Ripple effect on click */}
      {isTransitioning && (
        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-ping" />
      )}

      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
