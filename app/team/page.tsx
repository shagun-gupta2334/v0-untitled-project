import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Instagram, Globe } from "lucide-react"

export default function Team() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-yellow-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl opacity-90">Get to know the passionate high school students behind Spark for STEM.</p>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Student Organizers</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Spark for STEM is organized and run by a dedicated team of high school students passionate about STEM
              education and community service.
            </p>
          </div>

          {/* Co-founder (Shagun) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Co-founder (Shagun) */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="aspect-w-1 aspect-h-1">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Team Member"
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Shagun Gupta</h3>
                <p className="text-purple-600 font-medium mb-3">Co-Founder</p>
                <p className="text-gray-700 mb-4">
                  I’m a high school student with a strong passion for STEM, especially in technology, engineering, and math. I’m currently learning Python and working through the Harvard CS50 course, which has been a great way to challenge myself and build new skills. I also design and develop this website as part of this project. I enjoy problem-solving, creating new things, and sharing my interest in STEM with others. Through this camp, I hope to inspire other students to explore STEM and discover how exciting and meaningful it can be.
                </p>
              </div>
            </div>

            {/* Co-founder (miriam) */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="aspect-w-1 aspect-h-1">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Team Member"
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Miriam Sabri</h3>
                <p className="text-green-500 font-medium mb-3">Co-Founder</p>
                <p className="text-gray-700 mb-4">
                  I'm a high school student with a strong interest in STEM, especially in areas like math, engineering,
                  and technology. I enjoy solving problems, building new ideas, and helping others learn and grow along
                  the way. Whether it's through hands-on projects or collaborative learning, I believe in making STEM
                  fun, accessible, and meaningful. This camp is one way I hope to share that excitement with others and
                  inspire future innovators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                As high school students passionate about STEM, we created Spark for STEM with a simple mission: to make
                science, technology, engineering, and math accessible and exciting for elementary school students in our
                community.
              </p>
              <p className="text-lg text-gray-700">
                We believe that early exposure to STEM concepts through hands-on, engaging activities can ignite a
                lifelong passion for learning and discovery. By sharing our knowledge and enthusiasm, we hope to inspire
                the next generation of scientists, engineers, and innovators.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Team working together"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Follow Our Journey</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Stay updated on our activities, behind-the-scenes preparations, and camp highlights by following us on
            social media!
          </p>

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
