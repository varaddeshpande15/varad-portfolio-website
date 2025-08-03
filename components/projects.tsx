"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Rocket, Star } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { WidgetAnimation } from "./widget-animation"

export function Projects() {
  const projects = [
    {
      title: "Edustreak",
      subtitle: "AI-Powered Study Plan Generator and Tracker",
      description:
        "Built platform to convert YouTube videos and PDFs into structured study plans for better time management. Integrated LLMs to generate quizzes, flashcards, and summaries — improving retention and reducing manual effort.",
      technologies: ["Next.js", "Tailwind CSS", "FastAPI", "MongoDB", "Python"],
      link: "https://github.com/varaddeshpande15/edustreak",
      category: "AI/ML",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Bloomify",
      subtitle: "AI based exam paper classification, suggestion and generation tool for Universities",
      description:
        "Developed front-end of the website using Next.js and Tailwind CSS along with Mongo DB for database management, and FastAPI for integrating LLM-based AI model. Implemented LLM-based AI model by integrating API using FastAPI.",
      technologies: ["Next.js", "Tailwind CSS", "FastAPI", "MongoDB"],
      link: "https://existence-bloomify.vercel.app/",
      category: "AI/ML",
      gradient: "from-purple-500 to-cyan-500",
    },
    {
      title: "DecodingJS",
      subtitle: "Comprehensive Website to help developers master core JavaScript concepts",
      description:
        "Developed a Comprehensive Website to help developers master complex core JavaScript concepts. The website includes features like In-Depth Explanations, Interactive Flowcharts, Practical Examples and Interview Questions for better understanding.",
      technologies: ["HTML", "CSS", "JavaScript", "Markdown"],
      link: "https://varaddeshpande15.github.io/decoding-js/",
      category: "Education",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "MediMitra",
      subtitle: "Voice-enabled Medicine Reminder for Senior Citizens",
      description:
        "Developed a full-stack web application during a 24-hour hackathon at COEP MindSpark. Integrated OCR for prescription scanning, voice input for manual entries, and Google Home for automated voice reminders. Enabled multi-user management and added a medicine marketplace for convenience.",
      technologies: ["Next.js", "Tailwind CSS", "FastAPI", "Node.js", "EasyOCR", "WebKit API"],
      link: "https://github.com/varaddeshpande15/medimitra",
      category: "Healthcare",
      gradient: "from-orange-500 to-red-600",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/ML":
        return "bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-700"
      case "Education":
        return "bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-700"
      case "Healthcare":
        return "bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 text-orange-800 dark:text-orange-300 border border-orange-200 dark:border-orange-700"
      default:
        return "bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
    }
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-cyan-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Featured Projects
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of my recent work in web development, AI integration, and innovative solutions
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <WidgetAnimation key={index} delay={index * 150} animation="fadeInUp">
              <Card className="hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 group overflow-hidden shadow-lg dark:shadow-white/5">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={`${getCategoryColor(project.category)} dark:text-black hover:scale-105 transition-transform`}>
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <p
                    className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent font-medium text-sm mb-3`}
                  >
                    {project.subtitle}
                  </p>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <span
                        className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full mr-2 animate-pulse`}
                      ></span>
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs hover:scale-105 transition-transform duration-200 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      asChild
                      className={`bg-gradient-to-r ${project.gradient} hover:scale-105 transition-all duration-300 group/btn shadow-lg hover:shadow-xl`}
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:animate-bounce" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover:scale-105 transition-all duration-300 group/btn bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <a href="https://github.com/varaddeshpande15" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2 group-hover/btn:animate-spin" />
                        Code
                      </a>
                    </Button>
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
