import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Globe } from "lucide-react"

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

      {/* Camp Details with Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Camp Details</h2>
            <p className="text-lg text-gray-700 mb-6">
              Here's everything you need to know about Spark for STEM, including dates, times, location, and important
              information for parents and guardians.
            </p>
            <ul className="space-y-4 text-lg text-gray-700 mb-10">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Dates: August 9–10, 2025</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Time: 11:00 AM – 1:00 PM (drop-off starts at 10:30 AM)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Location: The Roudenbush Community Center, 65 Main Street, Westford, MA 01886 — Room 105</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Who Can Attend: Kids ages 8–14</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Cost: Free</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Camp Location</h3>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
              <div className="aspect-w-16 aspect-h-9 relative h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.0254673262584!2d-71.43831199999999!3d42.5831587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3bd68267b31f7%3A0x5be2c174c897e24f!2sThe%20Roudenbush%20Community%20Center%2C%20Inc!5e0!3m2!1sen!2sus!4v1716733000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                  title="Camp Location Map"
                ></iframe>
              </div>
              <div className="p-4 bg-blue-50">
                <div className="flex items-center text-blue-700">
                  <MapPin className="h-5 w-5 mr-2" />
                  <a
                    href="https://www.google.com/maps/place/The+Roudenbush+Community+Center,+Inc/@42.5831587,-71.438312,17z/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:underline"
                  >
                    The Roudenbush Community Center, Inc
                  </a>
                </div>
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
            Registration is now open for our free summer camp. Spaces are limited, so sign up today!
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
                className="border-white text-black hover:bg-white hover:text-blue-600 font-bold text-lg px-8 py-6"
              >
                Register - Out of USA <Globe className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
