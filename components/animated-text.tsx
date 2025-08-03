"use client"

import { useEffect, useState } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  startDelay?: number
}

export function AnimatedText({ text, className = "", delay = 80, startDelay = 0 }: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isStarted, setIsStarted] = useState(false)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsStarted(true)
    }, startDelay)

    return () => clearTimeout(startTimeout)
  }, [startDelay])

  useEffect(() => {
    if (isStarted && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, delay, isStarted])

  return (
    <span className={className}>
      {displayedText}
      {isStarted && currentIndex < text.length && (
        <span className="animate-pulse text-blue-500 dark:text-cyan-400">|</span>
      )}
    </span>
  )
}
