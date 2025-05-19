import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Beaker, Code, Lightbulb, PuzzleIcon as PuzzlePiece } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-yellow-600 to-red-700 py-20 text-white">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Spark for STEM: A Free Summer Camp for Young Learners
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Hands-on STEM activities designed to spark curiosity and build foundational skills in science,
                technology, engineering, and math.
              </p>
              <Link href="/register">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6">
                  Register Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/hero-illustration.svg"
                alt="STEM activities illustration"
                width={500}
                height={400}
                className="drop-shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        ></div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About the Camp</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We are hosting a free STEM-focused summer camp for elementary schoolers, run by high school students. The
              camp introduces STEM principles through guided, hands-on activities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free & Accessible</h3>
              <p className="text-gray-700">
                Our camp is completely free for all participants, making STEM education accessible to everyone.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <PuzzlePiece className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hands-on Learning</h3>
              <p className="text-gray-700">
                Students learn through interactive experiments and projects that make STEM concepts fun and engaging.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg shadow-md text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Beaker className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Student-Led</h3>
              <p className="text-gray-700">
                Our camp is organized and run by passionate high school students who serve as mentors and instructors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Activities</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our camp offers a variety of engaging STEM activities designed to inspire curiosity and develop critical
              thinking skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-blue-600 flex items-center justify-center">
                <Beaker className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Chemistry Experiments</h3>
                <p className="text-gray-700">
                  Safe and exciting experiments that demonstrate chemical reactions and properties.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-purple-600 flex items-center justify-center">
                <PuzzlePiece className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Engineering Projects</h3>
                <p className="text-gray-700">
                  Design and build structures like bridges and towers using various materials.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-yellow-400 flex items-center justify-center">
                <Code className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Coding & Robotics</h3>
                <p className="text-gray-700">
                  Introduction to basic programming concepts and simple robotics challenges.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-green-600 flex items-center justify-center">
                <Lightbulb className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Problem-Solving Games</h3>
                <p className="text-gray-700">
                  Team challenges that develop critical thinking and collaborative skills.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/activities">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                View All Activities <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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
