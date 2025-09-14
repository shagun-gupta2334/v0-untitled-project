import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe } from "lucide-react"

export default function About() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-pink-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Spark for STEM!</h1>
            <p className="text-xl opacity-90">
              A free, student-led summer camp inspiring the next generation of scientists, engineers, and innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                Spark for STEM was created with a simple mission: to make STEM education accessible, engaging, and fun
                for elementary school students. We believe that early exposure to science, technology, engineering, and
                mathematics can ignite a lifelong passion for learning and discovery.
              </p>
              <p className="text-lg text-gray-700">
                Our program is designed to introduce young learners to STEM concepts through hands-on activities,
                experiments, and projects that encourage curiosity, critical thinking, and creativity.
              </p>
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

          {/* Mission in Action */}
          <div className="mt-12 space-y-8">
            <div className="text-center">
              <Image
                src="/images/classroom-presentation.jpeg"
                alt="Our student instructors presenting the Spaghetti Tower Marshmallow Challenge to engaged elementary students in a classroom setting"
                width={800}
                height={600}
                className="rounded-lg shadow-lg mx-auto"
              />
              <p className="text-gray-600 mt-4 italic">
                Our high school instructors presenting the Spaghetti Tower Marshmallow Challenge to elementary students.
                This engineering activity teaches students about structural design, teamwork, and creative
                problem-solving - core elements of our hands-on STEM approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Free for Everyone</h3>
              <p className="text-gray-700">
                Our camp is completely free of charge, making quality STEM education accessible to all elementary school
                students regardless of their background or financial situation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Student-Led Initiative</h3>
              <p className="text-gray-700">
                Our camp is organized and run by passionate high school students who serve as mentors and instructors,
                creating a unique peer-learning environment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hands-on Learning</h3>
              <p className="text-gray-700">
                We focus on interactive, hands-on activities rather than lectures, allowing students to learn by doing
                and experimenting in a supportive environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Impact</h2>
            <p className="text-lg text-gray-700 mb-8">
              Since our founding, Spark for STEM has been dedicated to making STEM education accessible and engaging for
              young learners. Through our camps and programs, we've inspired students to explore science, technology,
              engineering, and mathematics in fun and meaningful ways.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">1</div>
                <p className="text-gray-700">Year of Impact</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
                <p className="text-gray-700">Students Reached</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
                <p className="text-gray-700">STEM Activities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our STEM Adventure</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Learn more about our programs and how you can get involved in bringing STEM education to young learners.
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
