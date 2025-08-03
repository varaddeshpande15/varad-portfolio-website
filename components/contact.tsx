"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";
import { WidgetAnimation } from "./widget-animation";

// Define the Status type for TypeScript
type Status = {
  type: "success" | "error";
  message: string;
} | null;

export function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setIsSubmitting(true);

    // Basic client-side validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: "error", message: "Please fill out all fields." });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", message: result.message || "Failed to send message." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "An error occurred. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Mail className="h-6 w-6 text-blue-600 animate-bounce" />
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <Send className="h-6 w-6 text-purple-600 animate-bounce delay-200" />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about
              technology.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <WidgetAnimation delay={200} animation="fadeInLeft">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Let's Connect</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4 group">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">varaddeshpande81@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                    <p className="text-gray-600 dark:text-gray-300">+91 9420203956</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                    <p className="text-gray-600 dark:text-gray-300">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mb-8">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:scale-110 transition-all duration-300 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-cyan-400 bg-white dark:bg-gray-900"
                >
                  <a href="https://www.linkedin.com/in/varaddeshpande15/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 text-blue-600" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:scale-110 transition-all duration-300 border-gray-300 dark:border-gray-600 hover:border-gray-500 dark:hover:border-gray-400 bg-white dark:bg-gray-900"
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  </a>
                </Button>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-100 dark:border-blue-800 shadow-lg dark:shadow-white/5">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Currently Available</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  I'm actively looking for new opportunities in full-stack development, AI integration, and innovative
                  tech projects. Let's build something amazing together!
                </p>
              </div>
            </div>
          </WidgetAnimation>

          {/* Contact Form */}
          <WidgetAnimation delay={400} animation="fadeInRight">
            <Card className="shadow-xl dark:shadow-2xl dark:shadow-white/10 border-0 bg-white dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-cyan-400"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-cyan-400"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-cyan-400"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Let's work together!"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-cyan-400"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or just say hello!"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-cyan-400"
                      required
                    />
                  </div>

                  {status && (
                    <p
                      className={`text-sm ${
                        status.type === "success" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {status.message}
                    </p>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                    disabled={isSubmitting}
                  >
                    <Send className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </WidgetAnimation>
        </div>
      </div>
    </section>
  );
}