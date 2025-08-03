"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Download, Sparkles, Code, Zap } from "lucide-react"
import Image from "next/image"
import { AnimatedText } from "./animated-text"
import { ScrollReveal } from "./scroll-reveal"
import { useEffect, useState } from "react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-400/10 dark:to-purple-400/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        ></div>
        <div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 dark:from-purple-400/10 dark:to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
          }}
        ></div>

        {/* Floating code symbols */}
        <div className="absolute top-20 left-20">
          <Code className="h-8 w-8 text-blue-400/60 dark:text-blue-400/40" />
        </div>
        <div className="absolute top-40 right-32">
          <Zap className="h-6 w-6 text-purple-400/60 dark:text-purple-400/40" />
        </div>
        <div className="absolute bottom-40 left-32">
          <Sparkles className="h-7 w-7 text-cyan-400/60 dark:text-cyan-400/40" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal className="text-center lg:text-left">
            <div className="mb-6">
              <p className="text-lg text-blue-600 dark:text-cyan-400 font-medium mb-2 animate-fade-in">👋 Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                <AnimatedText
                  text="Varad Deshpande"
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
                  delay={100}
                  startDelay={500}
                />
              </h1>
              <div className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4">
                <AnimatedText text="Full Stack Web Developer" delay={80} startDelay={2000} />
              </div>
            </div>

            <ScrollReveal delay={500}>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-6 flex items-center justify-center lg:justify-start group">
                <MapPin className="h-5 w-5 mr-2 text-red-500" />
                Pune, Maharashtra, India
              </p>
            </ScrollReveal>

            <ScrollReveal delay={700}>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Final year Electronics & Telecommunication Engineering student passionate about building
                <span className="text-blue-600 dark:text-cyan-400 font-semibold"> innovative web applications</span>{" "}
                with expertise in <span className="text-purple-600 dark:text-purple-400 font-semibold">AI</span> and
                <span className="text-green-600 dark:text-green-400 font-semibold"> Embedded Systems</span>.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={900}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="mailto:varaddeshpande81@gmail.com"
                  target="_blank">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <Mail className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                  Get In Touch
                </Button>
                </a>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400 hover:bg-blue-600 dark:hover:bg-cyan-400 hover:text-white dark:hover:text-gray-900 transform hover:scale-110 transition-all duration-300 group bg-white dark:bg-gray-900"
                  onClick={() => window.open("https://drive.google.com/file/d/1-cxIgcvFxUvJC-MBnMhiflKPytqp4N8h/view", "_blank")}
                >
                  <Download className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                  View Resume
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1100}>
              <div className="flex gap-4 justify-center lg:justify-start">
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-blue-600/10 dark:hover:from-cyan-500/10 dark:hover:to-cyan-600/10 transform hover:scale-110 transition-all duration-300 group"
                >
                  <a href="https://www.linkedin.com/in/varaddeshpande15/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-10 w-10 text-blue-600 dark:text-cyan-400 group-hover:animate-pulse" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-gradient-to-r hover:from-gray-500/10 hover:to-gray-600/10 dark:hover:from-gray-400/10 dark:hover:to-gray-500/10 transform hover:scale-110 transition-all duration-300 group"
                >
                  <a href="https://github.com/varaddeshpande15" target="_blank" rel="noopener noreferrer">
                    <Github className="h-10 w-10 text-gray-700 dark:text-gray-300 group-hover:animate-pulse" />
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          <ScrollReveal delay={300} className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 animate-pulse"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl dark:shadow-white/10 transform group-hover:scale-105 transition-all duration-500">
                <Image
                  src="/varad-photo.png"
                  alt="Varad Deshpande"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg dark:shadow-white/10">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 "></div>
                  Available for Work
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-600 dark:border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-600 dark:bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
