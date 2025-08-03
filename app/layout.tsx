import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Varad Deshpande - Full Stack Developer",
  description:
    "Portfolio of Varad Deshpande, a Full Stack Web Developer from Pune, India, specializing in React, Next.js, AI integration, and modern web technologies.",
  keywords: "Varad Deshpande, Full Stack Developer, Web Developer, React, Next.js, AI, Pune, India",
  authors: [{ name: "Varad Deshpande" }],
  openGraph: {
    title: "Varad Deshpande - Full Stack Developer",
    description: "Portfolio of Varad Deshpande, a Full Stack Web Developer from Pune, India",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
