"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Briefcase, TrendingUp } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { WidgetAnimation } from "./widget-animation"

export function Experience() {
  const experiences = [
    {
      company: "Vulnuris",
      position: "Jr. Product Developer",
      duration: "Apr 2025 – Jun 2025",
      location: "Pune, India",
      achievements: [
        "Developed email scheduler using Apache Pulsar & PostgreSQL that improved delivery reliability by 35%",
        "Contributed to development of enhanced analytics dashboard of various applications leading to increased user engagement by 20%",
        "Migrated codebase from JavaScript to TypeScript alongwith integrating Zustand increasing the code efficiency & improving performance of applications by 40%",
        "Developed a conference website which was used by the organizing team to manage 100+ registrations, session schedules, enhancing attendee experience & operational efficiency by 40%",
      ],
      technologies: [
        "TypeScript",
        "Zustand",
        "Apache Pulsar",
        "Docker",
        "MongoDB",
        "JavaScript",
        "React.js",
        "Next.js",
      ],
      gradient: "from-blue-500 to-purple-500",
    },
    {
      company: "Existence",
      position: "Full Stack Web Developer",
      duration: "Mar 2024 – Jan 2025",
      location: "Pune, India",
      achievements: [
        "Developed Full Stack Applications using Next.js & Tailwind CSS enhancing the UI/UX & overall performance by 40%",
        "Integrated FastAPI with MongoDB for backend logic, reducing API response time by 20%",
        "Collaborated with diverse team on 3+ product development features and drove 25% increase in early user engagement",
      ],
      technologies: ["Next.js", "Tailwind CSS", "FastAPI", "MongoDB", "React.js"],
      gradient: "from-purple-500 to-cyan-500",
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
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
                Work Experience
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My professional journey in software development and product engineering
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <WidgetAnimation key={index} delay={index * 200} animation="fadeInUp">
              <Card className="hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-white/10 transition-all duration-500 transform hover:scale-[1.02] border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm group shadow-lg dark:shadow-white/5">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg`}
                ></div>
                <CardHeader className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        {exp.position}
                      </CardTitle>
                      <p
                        className={`text-lg font-semibold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent mt-1`}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <div className="flex items-center text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">{exp.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
                      Key Achievements:
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start group/item">
                          <span className="text-blue-600 dark:text-cyan-400 mr-3 mt-1 group-hover/item:animate-pulse">
                            •
                          </span>
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 animate-pulse"></span>
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 hover:scale-105 transition-transform duration-200 cursor-default border border-blue-200 dark:border-blue-700"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </WidgetAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
