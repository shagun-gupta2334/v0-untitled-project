import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Calendar, Clock, Mail, Users } from 'lucide-react'

export default function GlobalIndia() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Spark for STEM India</h1>
            <p className="text-xl opacity-90">
              Bringing hands-on STEM education to young learners across India through student-led initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">STEM Education in India</h2>
                <p className="text-lg text-gray-700 mb-6">
                  India's rich tradition of mathematics and science provides the perfect foundation for our STEM
                  initiatives. Our program in India focuses on making advanced STEM concepts accessible to students from
                  diverse backgrounds.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="h-6 w-6 text-orange-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">Dates</h4>
                      <p className="text-gray-700">Coming Soon</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-orange-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">Time</h4>
                      <p className="text-gray-700">To be announced</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-8 w-8 text-orange-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">Location</h4>
                      <p className="text-gray-700">
                        Online via Google Meet (A link will be emailed to you before the event.)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/stem-chemistry-illustration.png"
                  alt="STEM education in India"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner with us Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner with us - Organizations/Non-Profits</h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700">
                We're looking for passionate organizations and non-profits in India to collaborate with us in bringing
                quality STEM education to young learners.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Mission</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    If you are an organization or non-profit that wants to work with us to expand STEM education in
                    India, we'd love to connect with you. Together, we can create meaningful impact and inspire the next
                    generation of innovators and problem-solvers.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">
                        Collaborate on curriculum development and educational resources
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">Share expertise and best practices in STEM education</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">Co-host workshops and educational events for students</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">Expand our reach to underserved communities across India</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <div className="flex">
                      <div className="ml-3">
                        <p className="text-sm text-blue-700">
                          <strong>Ready to Partner?</strong> We believe in the power of collaboration to create lasting
                          change in STEM education. Let's work together to make a difference!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-orange-100 p-6 rounded-lg">
                    <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Connect With Us</h4>
                    <p className="text-gray-700 mb-6">
                      Reach out to us through our email to discuss partnership opportunities and how we can work
                      together to bring quality STEM education to more students in India.
                    </p>
                    <div className="space-y-4">
                      <a
                        href="mailto:Sparkforstem@gmail.com?subject=Partnership Inquiry - India Program"
                        className="inline-flex items-center justify-center w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                      >
                        <Mail className="mr-2 h-5 w-5" />
                        Email Us for Partnership
                      </a>
                      <p className="text-sm text-gray-600">
                        Please include "Partnership Inquiry - India Program" in your subject line
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Programs in India</h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Coding & Robotics Workshops</h3>
                <p className="text-gray-700 mb-4">
                  Introduction to programming using local languages and culturally relevant examples, making technology
                  education more accessible.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Python programming basics</li>
                  <li>• Block-based coding</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Science & Engineering Projects</h3>
                <p className="text-gray-700 mb-4">
                  Hands-on projects addressing local challenges including chemistry experiments and engineering challenges.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Devils Toothpaste (elephant toothpaste)</li>
                  <li>• Cabbage ph indicator</li>
                  <li>• Bridge building challenge</li>
                  <li>• Inflatable balloon experiment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Support STEM Education in India</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Help us expand our reach and impact more young minds across India.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
