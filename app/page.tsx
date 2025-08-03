import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Blog } from "@/components/blog"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { FloatingElements } from "@/components/floating-elements"
import { SmoothThemeWrapper } from "@/components/smooth-theme-wrapper"

export default function Home() {
  return (
    <SmoothThemeWrapper>
      <main className="min-h-screen bg-white dark:bg-gray-900 relative transition-all duration-300 ease-in-out">
        <FloatingElements />
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        {/* <Blog /> */}
        <Achievements />
        <Contact />
      </main>
    </SmoothThemeWrapper>
  )
}
