import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Mail, Users, Globe } from "lucide-react"

export default function GlobalAbout() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Spark for STEM Global</h1>
            <p className="text-xl opacity-90">
              Expanding STEM education worldwide through virtual programs and international partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Global Presence</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Spark for STEM is expanding beyond borders to bring quality STEM education to young learners around the
              world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* USA */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🇺🇸</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">USA</h3>
              <p className="text-gray-700 mb-4">Our home base with in-person camps and programs.</p>
              <div className="text-sm text-gray-600">
                <div className="flex items-center justify-center mb-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Westford, MA</span>
                </div>
              </div>
            </div>

            {/* Africa */}
            <div className="bg-green-50 p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Africa</h3>
              <p className="text-gray-700 mb-4">Expanding STEM education across the continent.</p>
              <div className="text-sm text-gray-600">
                <div className="flex items-center justify-center mb-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Ghana</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Global Programs</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our international programs are designed to be culturally relevant while maintaining the same high-quality
              STEM education standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Virtual Camps */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Virtual STEM Camps</h3>
              <p className="text-gray-700 mb-6">
                Interactive online camps that bring the Spark for STEM experience directly to students' homes, featuring
                live experiments, coding sessions, and engineering challenges.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Live interactive sessions via Google Meet</li>
                <li>• Materials list provided to participants in advance</li>
                <li>• Small group sizes for personalized attention</li>
                <li>• Culturally relevant examples and applications</li>
              </ul>
            </div>

            {/* Partnership Programs */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnership Programs</h3>
              <p className="text-gray-700 mb-6">
                Collaborative initiatives with local organizations, schools, and non-profits to expand our reach and
                create sustainable STEM education programs.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Local organization partnerships</li>
                <li>• Teacher training and support</li>
                <li>• Curriculum adaptation for local contexts</li>
                <li>• Community-based program implementation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Get Involved</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Whether you're a student, educator, organization, or supporter, there are many ways to join our global
              STEM education mission.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* For Students */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Students</h3>
              <p className="text-gray-700 mb-6">
                Join our virtual camps and programs to explore STEM concepts through hands-on activities and connect
                with peers globally.
              </p>
              <Link href="/events">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">View Programs</Button>
              </Link>
            </div>

            {/* For Organizations */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Organizations</h3>
              <p className="text-gray-700 mb-6">
                Partner with us to bring STEM education to your community through collaborative programs and
                initiatives.
              </p>
              <Link href="/contact">
                <Button className="bg-green-600 hover:bg-green-700 text-white">Partner With Us</Button>
              </Link>
            </div>

            {/* For Supporters */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Supporters</h3>
              <p className="text-gray-700 mb-6">
                Support our mission by helping us expand our reach, sponsor materials, or connect us with potential
                partners.
              </p>
              <Link href="/contact">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Support Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Regional Programs</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore our region-specific programs designed to meet the unique needs and interests of students in
              different parts of the world.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {/* Africa Program */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-yellow-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Spark for STEM Africa</h3>
                <p className="opacity-90">Innovative STEM solutions for African communities</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Our Africa program focuses on practical STEM applications that address real challenges faced by
                  African communities while fostering innovation and creativity.
                </p>
                <ul className="text-gray-700 space-y-2 mb-6">
                  <li>• Sustainable technology projects</li>
                  <li>• Environmental science initiatives</li>
                  <li>• Community-focused engineering solutions</li>
                  <li>• Cross-cultural collaboration</li>
                </ul>
                <Link href="/global/africa">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Global STEM Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of a worldwide movement to make STEM education accessible, engaging, and impactful for young
            learners everywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6">
                View Programs <ArrowRight className="ml-2 h-5 w-5" />
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
