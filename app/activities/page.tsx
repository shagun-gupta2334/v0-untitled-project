import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Lightbulb, PuzzleIcon as PuzzlePiece, Globe, Beaker } from "lucide-react"

export default function Activities() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-green-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our STEM Activities</h1>
            <p className="text-xl opacity-90">
              Explore our exciting hands-on activities designed to make learning science, technology, engineering, and
              math fun and engaging.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Activity */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Activities</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our camp offers a variety of engaging STEM activities designed to inspire curiosity and develop critical
              thinking skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Science Experiments */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="h-48 bg-blue-600 flex items-center justify-center">
                <Beaker className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Science Experiments</h3>
                <p className="text-gray-700 mb-4">
                  Safe and exciting experiments that demonstrate chemical reactions and properties. Students will create
                  colorful reactions and learn about scientific principles!
                </p>
                <ul className="text-gray-700 mb-4">
                  <li className="flex items-start mb-2">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Devils Toothpaste (elephant toothpaste)</span>
                  </li>
                  <li className="flex items-start mb-2">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Cabbage pH indicator</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Inflatable balloon experiments</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Engineering Projects */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="h-48 bg-purple-600 flex items-center justify-center">
                <PuzzlePiece className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Engineering Projects</h3>
                <p className="text-gray-700 mb-4">
                  Design and build structures using various materials. Students will learn about structural integrity,
                  weight distribution, and problem-solving through hands-on engineering challenges.
                </p>
                <ul className="text-gray-700 mb-4">
                  <li className="flex items-start mb-2">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Learn about bridges</span>
                  </li>
                  <li className="flex items-start mb-2">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Make bridges from popsicle sticks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Structural engineering basics</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Coding & Robotics */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="h-48 bg-yellow-400 flex items-center justify-center">
                <Code className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Coding & Robotics</h3>
                <p className="text-gray-700 mb-4">
                  Introduction to programming concepts and challenges. Students will learn logical thinking and
                  problem-solving through fun coding activities.
                </p>
                <ul className="text-gray-700 mb-4">
                  <li className="flex items-start mb-2">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Block coding</span>
                  </li>
                  <li className="flex items-start mb-2">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Python programming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Interactive coding projects</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Problem-Solving Games */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="h-48 bg-blue-600 flex items-center justify-center">
                <Lightbulb className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Problem-Solving Games</h3>
                <p className="text-gray-700 mb-4">
                  Team challenges that develop critical thinking and collaborative skills. Students will work together
                  to solve puzzles and overcome obstacles.
                </p>
                <ul className="text-gray-700 mb-4">
                  <li className="flex items-start mb-2">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Logic puzzles and riddles</span>
                  </li>
                  <li className="flex items-start mb-2">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Team-based challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Creative problem-solving</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Schedules */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample Schedules</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Here's what typical days at our camp look like. Activities vary each day to keep learning fresh and
              exciting!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Day 1 Schedule */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 text-white p-4">
                <h3 className="text-xl font-bold">Day 1 Schedule (Science and Coding)</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="font-bold text-blue-600">10:30 AM</div>
                    <div className="col-span-3">Drop-off</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="font-bold text-blue-600">11:00 - 11:15</div>
                    <div className="col-span-3">Camp Start (Introduction)</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="font-bold text-blue-600">11:15 - 11:25</div>
                    <div className="col-span-3">10 Minute Brief Quiz</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="font-bold text-blue-600">11:30 - 12:00</div>
                    <div className="col-span-3">Experiment 1 - Cabbage pH Indicator</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="font-bold text-blue-600">12:00 - 12:20</div>
                    <div className="col-span-3">Experiment 2 - Devils Toothpaste</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="font-bold text-blue-600">12:20 - 1:00</div>
                    <div className="col-span-3">Coding - Block Coding & Python</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="font-bold text-blue-600">1:00 PM</div>
                    <div className="col-span-3">Camp End (Goodbye & More!) </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="font-bold text-blue-600">1:05 PM</div>
                    <div className="col-span-3">Pick-up</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 Schedule */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-green-600 text-white p-4">
                <h3 className="text-xl font-bold">Day 2 Schedule (Engineering and Science Fair)</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="font-bold text-green-600">10:30 AM</div>
                    <div className="col-span-3">Drop-off</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="font-bold text-green-600">11:00 - 11:45</div>
                    <div className="col-span-3">Learning about Engineering & Bridges</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="font-bold text-green-600">11:45 - 12:20</div>
                    <div className="col-span-3">Building Bridges from Popsicle Sticks</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="font-bold text-green-600">12:20 - 12:40</div>
                    <div className="col-span-3">Science Fair Show and Tell</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="font-bold text-green-600">12:40 - 12:55</div>
                    <div className="col-span-3">Wrap up with Slideshow + Give out freebies </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="font-bold text-green-600">1:00 PM</div>
                    <div className="col-span-3">Camp End & Closing Circle</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="font-bold text-green-600">1:05 PM</div>
                    <div className="col-span-3">Pick-up</div>
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
            Contact us to learn about upcoming camps and programs. We're always planning new STEM experiences!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
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
        </div>
      </section>
    </main>
  )
}
