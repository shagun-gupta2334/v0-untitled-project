"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, MapPin, Instagram, Globe } from "lucide-react"

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90">Have questions about our STEM programs? We're here to help!</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                Whether you have questions about our programs, want to learn more about partnerships, or are interested
                in our global initiatives, we're here to help. Fill out the form or reach out to us directly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                    <p className="text-gray-700">Sparkforstem@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Global Programs (International)</h3>
                    <p className="text-gray-700">Online via Google Meet (Invite will be scheduled)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Instagram className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Instagram</h3>
                    <a
                      href="https://www.instagram.com/sparkforstem/followers/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      @sparkforstem
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Us</h3>
                <p className="text-gray-700 mb-6">
                  The best way to reach us is by sending an email to{" "}
                  <a href="mailto:Sparkforstem@gmail.com" className="text-blue-600 hover:underline">
                    Sparkforstem@gmail.com
                  </a>
                </p>
                <p className="text-gray-700 mb-6">
                  You can also follow us on social media for updates and announcements about our programs.
                </p>
                <div className="flex flex-col space-y-4">
                  <a
                    href="https://www.instagram.com/sparkforstem/followers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    <Instagram className="mr-2 h-5 w-5" />
                    Follow us on Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">How can I stay updated about upcoming events?</h3>
                <p className="text-gray-700">
                  Follow us on Instagram @sparkforstem or email us to be added to our updates list. We announce new
                  programs and events regularly.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Do you offer programs outside the USA?</h3>
                <p className="text-gray-700">
                  Yes! We have global programs for students in India and Africa. These are conducted online via Google
                  Meet and are completely free.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Can parents volunteer for programs?</h3>
                <p className="text-gray-700 mb-3">
                  We accept a limited number of parent volunteers to help support our student-led programs with
                  logistics and safety supervision.
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeP_JtPWP6WAIVN5_7N7GOSWZOJZ_6FLAG0yoXxhJDWs-cDVQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Apply to be a parent volunteer →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">How can I support Spark for STEM?</h3>
                <p className="text-gray-700">
                  We're grateful for any support! You can support us by donating supplies, sponsoring materials, or
                  connecting us with potential sponsors. Contact us via email to discuss how you can help keep our
                  programs free and accessible!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Volunteer Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Parent Volunteer Opportunities</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700">
                We welcome a limited number of parent volunteers to help support our student-led programs.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Volunteer Team</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    While Spark for STEM is primarily student-led, we accept up to 3 parent volunteers to help with
                    logistics, safety supervision, and supporting our high school instructors during activities.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">Help with activity setup and cleanup</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">Assist with safety supervision during experiments</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">Support student instructors with materials and logistics</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">Help with registration and check-in/check-out</span>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <div className="flex">
                      <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                          <strong>Limited Spots:</strong> We only accept 3 parent volunteers to maintain our student-led
                          focus. Applications will be reviewed on a first-come, first-served basis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-blue-100 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Ready to Volunteer?</h4>
                    <p className="text-gray-700 mb-6">
                      Fill out our volunteer application form to be considered for one of our 3 parent volunteer
                      positions.
                    </p>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeP_JtPWP6WAIVN5_7N7GOSWZOJZ_6FLAG0yoXxhJDWs-cDVQ/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      Apply to Volunteer
                    </a>
                    <p className="text-sm text-gray-600 mt-3">Application deadline: Before each program starts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to join our STEM adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch to learn about our programs and how you can get involved in bringing STEM education to young
            learners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:Sparkforstem@gmail.com">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6">
                Email Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link href="/global/about">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-blue-600 font-bold text-lg px-8 py-6 bg-transparent"
              >
                Partner with us - Globally <Globe className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
