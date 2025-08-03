"use client"

import type React from "react"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface SmoothThemeWrapperProps {
  children: React.ReactNode
}

export function SmoothThemeWrapper({ children }: SmoothThemeWrapperProps) {
  const { theme } = useTheme()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [prevTheme, setPrevTheme] = useState(theme)

  useEffect(() => {
    if (theme !== prevTheme) {
      setIsTransitioning(true)

      // Add smooth transition class to body
      document.body.classList.add("theme-transitioning")

      // Create a subtle fade effect
      const fadeOverlay = document.createElement("div")
      fadeOverlay.className = "theme-transition-overlay"
      fadeOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${theme === "dark" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)"};
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.15s ease-in-out;
      `

      document.body.appendChild(fadeOverlay)

      // Trigger fade in
      requestAnimationFrame(() => {
        fadeOverlay.style.opacity = "1"
      })

      // Complete transition
      setTimeout(() => {
        fadeOverlay.style.opacity = "0"
        setTimeout(() => {
          document.body.removeChild(fadeOverlay)
          document.body.classList.remove("theme-transitioning")
          setIsTransitioning(false)
        }, 150)
      }, 150)

      setPrevTheme(theme)
    }
  }, [theme, prevTheme])

  return (
    <div className={`transition-all duration-300 ease-in-out ${isTransitioning ? "theme-changing" : ""}`}>
      {children}
    </div>
  )
}
