import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin, Clock, Users, Globe } from 'lucide-react'

export default function Events() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Events</h1>
            <p className="text-xl opacity-90">
              Discover our exciting STEM events, camps, and programs designed to inspire young learners and foster a love for science and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Events</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Join us for these special STEM events and educational experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Summer STEM Camp 2025 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">Featured Event</span>
                  <span className="font-bold text-lg">FREE</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Summer STEM Camp 2025</h3>
                <p className="opacity-90">Our flagship hands-on STEM experience for elementary students</p>
              </div>
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="h-5 w-5 mr-3 text-blue-600" />
                    <span>August 9-10, 2025</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-5 w-5 mr-3 text-blue-600" />
                    <span>11:00 AM - 1:00 PM daily</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="h-5 w-5 mr-3 text-blue-600" />
                    <span>Roudenbush Community Center, Westford, MA</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users className="h-5 w-5 mr-3 text-blue-600" />
                    <span>Ages 8-14 • Limited spots available</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Join us for two days of exciting STEM activities including chemistry experiments, coding with Micro:bit, engineering challenges, and a science fair showcase.
                </p>
                <Link href="/events/summer-stem-camp-2025">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    View Details & Register <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Global Programs */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">Global Initiative</span>
                  <span className="font-bold text-lg">FREE</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">International STEM Programs</h3>
                <p className="opacity-90">Virtual STEM education for students worldwide</p>
              </div>
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="h-5 w-5 mr-3 text-green-600" />
                    <span>Coming Soon - 2025</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Globe className="h-5 w-5 mr-3 text-green-600" />
                    <span>Online via Google Meet</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="h-5 w-5 mr-3 text-green-600" />
                    <span>India & Africa Programs</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users className="h-5 w-5 mr-3 text-green-600" />
                    <span>Ages 8-14 • Partnership opportunities</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Partner with us to bring quality STEM education to students in India and Africa through our virtual programs and local partnerships.
                </p>
                <Link href="/global/about">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Learn About Global Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-700 mb-8">
              Be the first to know about new events, camps, and STEM programs. Follow us on social media or contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                  Contact Us for Updates
                </Button>
              </Link>
              <a
                href="https://www.instagram.com/sparkforstem/followers/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent px-6 py-3">
                  Follow on Instagram
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Next Event?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't miss out on our exciting STEM programs. Register today or get in touch to learn more!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6">
                Register for Summer Camp <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-blue-600 font-bold text-lg px-8 py-6 bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
