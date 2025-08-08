import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Calendar, Clock, MapPin, Users, CheckCircle, AlertCircle, Globe } from 'lucide-react'

export default function SummerSTEMCamp2025() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link href="/events" className="inline-flex items-center text-white hover:text-yellow-400 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Events
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mr-4">FEATURED EVENT</span>
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">FREE</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Summer STEM Camp 2025</h1>
                <p className="text-xl opacity-90 mb-6">
                  Join us for two exciting days of hands-on STEM learning featuring chemistry experiments, coding challenges, engineering projects, and a science fair showcase!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/register">
                    <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6">
                      Register Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/stem-activities-group.png"
                  alt="Students engaged in STEM activities"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Quick Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Event Details</h2>
                <div className="bg-blue-50 rounded-lg p-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Calendar className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900">Dates</h4>
                        <p className="text-gray-700">August 9-10, 2025 (Saturday & Sunday)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900">Time</h4>
                        <p className="text-gray-700">11:00 AM - 1:00 PM daily</p>
                        <p className="text-sm text-gray-600">Drop-off starts at 10:30 AM</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-8 w-8 text-blue-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900">Location</h4>
                        <p className="text-gray-700">The Roudenbush Community Center</p>
                        <p className="text-gray-700">65 Main Street, Westford, MA 01886</p>
                        <p className="text-gray-700">Room 105</p>
                        <a
                          href="https://www.google.com/maps/place/The+Roudenbush+Community+Center,+Inc/@42.5831587,-71.438312,17z/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline text-sm"
                        >
                          View on Google Maps →
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900">Age Group</h4>
                        <p className="text-gray-700">Ages 8-14 (Elementary & Middle School)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                  <div className="flex">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm text-green-700">
                        <strong>Completely Free!</strong> All materials, activities, and snacks are provided at no cost to families.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Expect</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Day 1: Science & Coding (August 9)</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Welcome & Introduction to STEM</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Cabbage pH Indicator Chemistry Experiment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Hands-on Coding with Micro:bit</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Interactive STEM Quiz & Games</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Day 2: Engineering & Science Fair (August 10)</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Engineering Principles & Building Challenges</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Science Fair Project Creation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Student Presentations & Show-and-Tell</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Closing Ceremony with Certificates & Freebies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules and Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Rules & Requirements</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* What to Bring */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What to Bring</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Curiosity and enthusiasm for learning!</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Comfortable clothes that can get a little messy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Completed registration form and waiver</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <strong>Note:</strong> All materials for activities will be provided by Spark for STEM.
                  </p>
                </div>
              </div>

              {/* Camp Rules */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Camp Rules</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                    <span>Follow safety instructions during all experiments</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                    <span>Respect fellow campers and instructors</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                    <span>Stay with your assigned group at all times</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                    <span>Ask questions and participate actively</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                    <span>Clean up after activities</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-700">
                    <strong>Parent/Guardian:</strong> Must remain on-site or be available by phone during camp hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Registration</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Registration is first-come, first-served</li>
                    <li>• Limited to 30 participants</li>
                    <li>• Registration closes 2 weeks before camp or when full</li>
                    <li>• Waitlist available if camp fills up</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Safety & Photos</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• All activities supervised by trained instructors</li>
                    <li>• Parent volunteers welcome (up to 3 spots)</li>
                    <li>• Photos may be taken for website/social media with permission </li>
                    <li>• No names will be posted with photos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our STEM Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Spaces are limited and filling up fast. Register today to secure your spot in our exciting Summer STEM Camp 2025!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6">
                Register Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
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
