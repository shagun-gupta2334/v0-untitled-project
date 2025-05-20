import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Lightbulb, PuzzleIcon as PuzzlePiece, Leaf } from "lucide-react"

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

          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="grid md:grid-cols-2">
                <div className="h-full">
                  <Image
                    src="/images/stem-solar-activity.jpeg"
                    alt="Students learning about solar energy"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Featured Activity
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Renewable Energy Exploration</h3>
                  <p className="text-gray-700 mb-6">
                    Students discover the power of renewable energy through hands-on experiments with solar panels,
                    learning how sunlight can be converted into electricity to power various devices. This outdoor
                    activity combines science, technology, and environmental awareness.
                  </p>
                  <ul className="space-y-3 text-gray-700 mb-6">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Build simple solar-powered circuits</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Learn about sustainable energy sources</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Test different conditions to maximize energy output</span>
                    </li>
                  </ul>
                  <div className="flex items-center text-sm text-gray-500">
                    <Leaf className="h-4 w-4 mr-1" />
                    <span>Outdoor Activity</span>
                    <span className="mx-2">•</span>
                    <span>Ages 8-14</span>
                    <span className="mx-2">•</span>
                    <span>45 minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <Image
                src="/images/stem-chemistry-illustration.png"
                alt="Chemistry experiments"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Chemistry Experiments</h3>
                <p className="text-gray-700 mb-4">
                  Safe and exciting experiments that demonstrate chemical reactions and properties. Students will create
                  colorful reactions, learn about acids and bases, and make their own slime!
                </p>
                <ul className="text-gray-700 mb-4">
                  <li className="flex items-start mb-2">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Colorful chemical reactions</span>
                  </li>
                  <li className="flex items-start mb-2">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Making and testing slime</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Learning about acids and bases</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <Image
                src="/images/stem-activities-group.png"
                alt="STEM group activities"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborative STEM Projects</h3>
                <p className="text-gray-700 mb-4">
                  Students work together on exciting projects that combine multiple STEM disciplines. From building and
                  programming robots to conducting experiments and constructing models.
                </p>
                <ul className="text-gray-700 mb-4">
                  <li className="flex items-start mb-2">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Robotics programming</span>
                  </li>
                  <li className="flex items-start mb-2">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Structural engineering challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Team-based problem solving</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Engineering Projects */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="h-48 bg-purple-600 flex items-center justify-center">
                <PuzzlePiece className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Engineering Projects</h3>
                <p className="text-gray-700 mb-4">
                  Design and build structures like bridges and towers using various materials. Students will learn about
                  structural integrity, weight distribution, and problem-solving.
                </p>
                <ul className="text-gray-700 mb-4">
                  <li className="flex items-start mb-2">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Bridge building challenge</span>
                  </li>
                  <li className="flex items-start mb-2">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Egg drop protection design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Paper tower construction</span>
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
                  Introduction to basic programming concepts and simple robotics challenges. Students will learn logical
                  thinking and problem-solving through fun coding activities.
                </p>
                <ul className="text-gray-700 mb-4">
                  <li className="flex items-start mb-2">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Block-based programming</span>
                  </li>
                  <li className="flex items-start mb-2">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Simple robot navigation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Creating interactive stories</span>
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

      {/* Daily Schedule */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample Daily Schedule</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Here's what a typical day at our camp looks like. Activities vary each day to keep learning fresh and
              exciting!
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 text-white p-4">
              <h3 className="text-xl font-bold">Daily Camp Schedule</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-4 items-center">
                  <div className="font-bold text-blue-600">10:30 AM</div>
                  <div className="col-span-3">Drop-off</div>
                </div>
                <div className="grid grid-cols-4 gap-4 items-center">
                  <div className="font-bold text-blue-600">11:00 AM</div>
                  <div className="col-span-3">Camp Start & Morning Circle</div>
                </div>
                <div className="grid grid-cols-4 gap-4 items-center">
                  <div className="font-bold text-blue-600">11:15 AM</div>
                  <div className="col-span-3">STEM Activity Session 1</div>
                </div>
                <div className="grid grid-cols-4 gap-4 items-center">
                  <div className="font-bold text-blue-600">12:00 PM</div>
                  <div className="col-span-3">Snack Break</div>
                </div>
                <div className="grid grid-cols-4 gap-4 items-center">
                  <div className="font-bold text-blue-600">12:15 PM</div>
                  <div className="col-span-3">STEM Activity Session 2</div>
                </div>
                <div className="grid grid-cols-4 gap-4 items-center">
                  <div className="font-bold text-blue-600">1:00 PM</div>
                  <div className="col-span-3">Camp End & Closing Circle</div>
                </div>
                <div className="grid grid-cols-4 gap-4 items-center">
                  <div className="font-bold text-blue-600">1:05 PM</div>
                  <div className="col-span-3">Pick-up</div>
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
            Registration is now open for our free summer camp. Spaces are limited, so sign up today!
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6">
              Register Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
