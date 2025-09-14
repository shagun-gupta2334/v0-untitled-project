import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Calendar, Clock, Globe, Users, CheckCircle, Mail } from "lucide-react"

export default function GlobalAfricaCamp() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-yellow-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link
                href="/events"
                className="inline-flex items-center text-white hover:text-yellow-400 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Events
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mr-4">
                    GLOBAL EVENT
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Global Camp - Africa</h1>
                <p className="text-xl opacity-90 mb-6">
                  Join us for our virtual STEM camp designed specifically for students across Africa! Experience
                  hands-on learning through online activities and connect with fellow young scientists from across the
                  continent.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/global/africa">
                    <Button
                      size="lg"
                      className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6"
                    >
                      Partner with us <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/stem-chemistry-illustration.png"
                  alt="Global STEM education in Africa"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partner</h2>
              <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700">
                We're proud to partner with Africa ICT Rights to bring this program to students across Africa.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/africa-ict-rights-logo.png"
                    alt="Africa ICT Rights Logo"
                    width={200}
                    height={100}
                    className="h-20 w-auto"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Africa ICT Rights</h3>
                  <p className="text-gray-700 mb-4">
                    Africa ICT Rights is dedicated to promoting digital rights and ICT education across Africa. Through
                    this partnership, we're able to reach more students and provide culturally relevant STEM education
                    that addresses local needs and challenges.
                  </p>
                  <a
                    href="https://africaictright.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn more about Africa ICT Rights →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Quick Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Event Details</h2>
                <div className="bg-green-50 rounded-lg p-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Calendar className="h-6 w-6 text-green-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900">Date</h4>
                        <p className="text-gray-700">September 20, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-green-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900">Time</h4>
                        <p className="text-gray-700">8:00 AM - 12:00 PM EST</p>
                        <p className="text-sm text-gray-600">4-hour interactive session</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Globe className="h-8 w-8 text-green-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900">Location</h4>
                        <p className="text-gray-700">Online via Google Meet</p>
                        <p className="text-gray-700">Available across all African countries</p>
                        <p className="text-sm text-gray-600">Meeting link will be emailed to scheduled participants</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-6 w-6 text-green-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900">Age Group</h4>
                        <p className="text-gray-700">Ages 8-14 (Elementary & Middle School)</p>
                        <p className="text-sm text-gray-600">All skill levels welcome</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Expect</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Planned Activities</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Devils Toothpaste (Elephant Toothpaste) Experiment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Cabbage pH Indicator Chemistry Activity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Inflatable Balloon Science Demonstration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Engineering & Bridge Building Challenge</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Python Programming Basics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Interactive STEM Games and Challenges</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Special Features</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        <span>Materials list provided 1 week before camp</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        <span>Step-by-step guided experiments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        <span>Cultural exchange with students across Africa</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        <span>Digital certificates for all participants</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Participate</h2>

            <div className="bg-green-50 rounded-lg shadow-md p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Registration Process</h3>
                <p className="text-lg text-gray-700">
                  Invitations will be sent out to students who have been scheduled with us through our partner
                  organization, Africa ICT Rights.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">For Students & Families</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>All activities use common household items</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Materials list provided in advance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>English instruction with translation support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Interactive online format</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h4>
                  <p className="text-gray-700 mb-4">
                    If you're interested in participating or have questions about the program, please reach out to us.
                  </p>
                  <a
                    href="mailto:Sparkforstem@gmail.com?subject=Interest in Africa Global Camp"
                    className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Express Interest
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Global STEM Initiative!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of our virtual STEM camp for Africa. Whether you're a student, educator, or organization, there's a
            place for you in this exciting initiative.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:Sparkforstem@gmail.com?subject=Partnership Inquiry - Africa Global Camp">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </a>
            <Link href="/global/africa">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-green-600 font-bold text-lg px-8 py-6 bg-transparent"
              >
                Learn More About Africa Program
              </Button>
            </Link>
          </div>
          <div className="mt-6">
            <Link href="/contact" className="text-white hover:text-yellow-400 underline">
              Have questions? Contact us here
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
