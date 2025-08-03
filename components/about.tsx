"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Code, Cpu, Brain, Zap } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { WidgetAnimation } from "./widget-animation"

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                About Me
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm a passionate full-stack developer and final year engineering student with a strong foundation in
              modern web technologies and a keen interest in AI and embedded systems.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={200}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Zap className="h-6 w-6 text-yellow-500 mr-2 animate-pulse" />
                My Journey
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Currently pursuing{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">
                    Electronics & Telecommunication Engineering
                  </span>{" "}
                  at University of Pune (2022-2026) with a CGPA of{" "}
                  <span className="text-green-600 font-bold">8.37</span>. I've gained valuable industry experience
                  working as a Jr. Product Developer at Vulnuris and Full Stack Web Developer at Existence.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  My passion lies in creating{" "}
                  <span className="text-cyan-600 dark:text-cyan-400 font-semibold">innovative solutions</span> that
                  bridge the gap between technology and real-world problems. I specialize in building scalable web
                  applications using modern frameworks and have a particular interest in AI-powered applications.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, participating in hackathons, or
                  working on projects that combine my interests in{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">web development</span>,
                  <span className="text-purple-600 dark:text-purple-400 font-semibold"> AI</span>, and
                  <span className="text-green-600 dark:text-green-400 font-semibold"> embedded systems</span>.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <WidgetAnimation delay={400}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          {
            icon: GraduationCap,
            title: 'Education',
            content: 'B.E. Electronics & Telecommunication\nUniversity of Pune\nCGPA: 8.37',
            color: 'text-blue-500',
            bgColor: 'from-blue-500/10 to-cyan-500/10',
          },
          {
            icon: Code,
            title: 'Web Development',
            content: 'Full Stack Developer\nReact, Next.js, Node.js\n2+ Years Experience',
            color: 'text-green-500',
            bgColor: 'from-green-500/10 to-emerald-500/10',
          },
          {
            icon: Brain,
            title: 'AI & ML',
            content: 'LLM Integration\nFastAPI, Python\nAI-Powered Applications',
            color: 'text-purple-500',
            bgColor: 'from-purple-500/10 to-pink-500/10',
          },
          {
            icon: Cpu,
            title: 'Embedded Systems',
            content: 'Electronics Engineering\nC/C++ Programming\nHardware Integration',
            color: 'text-orange-500',
            bgColor: 'from-orange-500/10 to-red-500/10',
          },
        ].map((item, index) => (
          <WidgetAnimation key={index} delay={index * 100} animation="scaleIn">
            <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 group">
              <CardContent className="pt-6">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.bgColor} flex items-center justify-center group-hover:animate-pulse`}
                >
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm whitespace-pre-line">{item.content}</p>
              </CardContent>
            </Card>
          </WidgetAnimation>
        ))}
      </div>
    </WidgetAnimation>
        </div>
      </div>
    </section>
  )
}
