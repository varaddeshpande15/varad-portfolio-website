"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Wrench } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { WidgetAnimation } from "./widget-animation"

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "C", "C++", "Python"],
      color: "text-blue-600",
    },
    {
      title: "Frontend",
      icon: Globe,
      skills: ["React.js", "Next.js", "Tailwind CSS", "Zustand", "ElectronJS"],
      color: "text-green-600",
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["FastAPI", "Node.js", "Docker", "Apache Pulsar", "MongoDB"],
      color: "text-purple-600",
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      skills: ["Git", "PostgreSQL", "EasyOCR", "WebKit API", "Home Assistant OS"],
      color: "text-orange-600",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Technical Skills
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and the tools I use to build amazing applications
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <WidgetAnimation key={index} delay={index * 150} animation="scaleIn">
                <Card className="hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border-0 bg-white dark:bg-gray-900 shadow-lg dark:shadow-white/5 group">
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-3">
                      <div
                        className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 ${category.color} group-hover:animate-pulse`}
                      >
                        <IconComponent className="h-8 w-8" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </WidgetAnimation>
            )
          })}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16">
          <WidgetAnimation delay={600}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">Areas of Expertise</h3>
          </WidgetAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Full Stack Development",
                description: "End-to-end web application development with modern frameworks and best practices",
                color: "text-blue-600",
                bgColor: "bg-blue-100 dark:bg-blue-900/30",
              },
              {
                icon: Code,
                title: "AI Integration",
                description: "Implementing LLM-based solutions and AI-powered features in web applications",
                color: "text-purple-600",
                bgColor: "bg-purple-100 dark:bg-purple-900/30",
              },
              {
                icon: Database,
                title: "System Architecture",
                description: "Designing scalable backend systems with microservices and cloud technologies",
                color: "text-green-600",
                bgColor: "bg-green-100 dark:bg-green-900/30",
              },
            ].map((item, index) => (
              <WidgetAnimation key={index} delay={700 + index * 100} animation="fadeInUp">
                <div className="text-center group">
                  <div
                    className={`${item.bgColor} rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className={`h-8 w-8 ${item.color}`} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </WidgetAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
