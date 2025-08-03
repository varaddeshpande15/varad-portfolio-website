"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Target } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { WidgetAnimation } from "./widget-animation"

export function Achievements() {
  const achievements = [
    {
      title: "Smart India Hackathon 2024 - Finalist",
      description:
        "Developed Project Vaayu, an AI system for segmenting buildings, roads, and water bodies from drone orthophotos.",
      icon: Trophy,
      category: "National Competition",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
    },
    {
      title: "COEP MindSpark Hackathon 2024 - Finalist",
      description:
        "Developed MediMitra, a voice-enabled medicine reminder system for senior citizens during a 24-hour hackathon.",
      icon: Award,
      category: "Hackathon",
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
  ]

  const stats = [
    {
      number: "8.37",
      label: "CGPA",
      description: "Current academic performance",
    },
    {
      number: "2+",
      label: "Years Experience",
      description: "In web development",
    },
    {
      number: "4+",
      label: "Major Projects",
      description: "Successfully completed",
    },
    {
      number: "2",
      label: "Hackathon Finals",
      description: "National level competitions",
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-purple-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Achievements 
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Milestones and accomplishments that showcase my dedication to excellence in technology and innovation
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <WidgetAnimation key={index} delay={index * 100} animation="scaleIn">
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg p-6 shadow-lg dark:shadow-white/5 hover:shadow-xl dark:hover:shadow-white/10 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{stat.description}</div>
                </div>
              </div>
            </WidgetAnimation>
          ))}
        </div>

        {/* Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <WidgetAnimation key={index} delay={400 + index * 200} animation="fadeInUp">
                <Card className="hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border-0 bg-white dark:bg-gray-900 shadow-lg dark:shadow-white/5 group">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-full ${achievement.bgColor} ${achievement.color} group-hover:animate-pulse`}
                      >
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <Badge className="mb-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                          {achievement.category}
                        </Badge>
                        <CardTitle className="text-xl text-gray-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                          {achievement.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              </WidgetAnimation>
            )
          })}
        </div>

        {/* Additional Recognition */}
        <WidgetAnimation delay={800}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 shadow-lg dark:shadow-white/5 border border-gray-100 dark:border-gray-800">
              <Target className="h-12 w-12 text-blue-600 dark:text-cyan-400 mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Academic Excellence</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Maintaining a strong academic record with a CGPA of 8.37 while actively participating in competitive
                programming and hackathons.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-700">
                  Electronics Engineering
                </Badge>
                <Badge className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-700">
                  Data Structures & Algorithms
                </Badge>
                <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-700">
                  Object Oriented Programming
                </Badge>
                <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                  Database Management
                </Badge>
              </div>
            </div>
          </div>
        </WidgetAnimation>
      </div>
    </section>
  )
}
