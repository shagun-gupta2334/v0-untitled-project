import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Calendar, Clock } from "lucide-react"

export default function GlobalIndia() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Spark for STEM India</h1>
            <p className="text-xl opacity-90">
              Bringing hands-on STEM education to young learners across India through student-led initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">STEM Education in India</h2>
                <p className="text-lg text-gray-700 mb-6">
                  India's rich tradition of mathematics and science provides the perfect foundation for our STEM
                  initiatives. Our program in India focuses on making advanced STEM concepts accessible to students from
                  diverse backgrounds.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="h-6 w-6 text-orange-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">Dates</h4>
                      <p className="text-gray-700">June 21, 22</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-orange-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">Time</h4>
                      <p className="text-gray-700">5:00 to 6:00 PM IST</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-8 w-8 text-orange-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">Location</h4>
                      <p className="text-gray-700">
                        Online via Google Meet (A link will be emailed to you before the event.)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/stem-chemistry-illustration.png"
                  alt="STEM education in India"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our India Program</h2>
            <p className="text-lg text-gray-700 mb-8">
              Ready to be part of our STEM initiative in India? Register now to join our upcoming workshops
            </p>
            <a href="https://forms.gle/odcZQ79dDSDpYCxu9" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-8 py-6">
                Register for India Program <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-gray-600 mt-4">Registration is free and open to all students aged 8-14.</p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Programs in India</h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Coding & Robotics Workshops</h3>
                <p className="text-gray-700 mb-4">
                  Introduction to programming using local languages and culturally relevant examples, making technology
                  education more accessible.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Python programming basics</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Environmental Science Projects</h3>
                <p className="text-gray-700 mb-4">
                  Hands-on projects addressing local environmental challenges like air quality monitoring and water
                  purification.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Air quality sensors</li>
                  <li>• Water testing kits</li>
                  <li>• Renewable energy models</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Support STEM Education in India</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Help us expand our reach and impact more young minds across India.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
