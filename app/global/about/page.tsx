import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Users, Heart } from "lucide-react"

export default function GlobalAbout() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Spark for STEM Global Initiative</h1>
            <p className="text-xl opacity-90">
              Expanding STEM education worldwide through student-led initiatives and international collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Global Mission</h2>
              <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700">
                Spark for STEM Global represents our commitment to making quality STEM education accessible to young
                learners around the world. Through partnerships with local student organizations and educational
                institutions, we're building a network of student-led STEM initiatives that transcend borders.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Global Reach</h3>
                <p className="text-gray-700">
                  Connecting students across continents to share knowledge, resources, and innovative teaching methods.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Student Leadership</h3>
                <p className="text-gray-700">
                  Empowering high school students worldwide to become STEM educators and mentors in their communities.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cultural Exchange</h3>
                <p className="text-gray-700">
                  Fostering cross-cultural understanding through collaborative STEM projects and shared learning
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Global Programs</h2>
              <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 mb-8">
                If you don't live in the USA and would like to join our STEM programs, register here:
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Available Programs</h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">🇺🇸</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">USA Program</h4>
                        <p className="text-sm text-gray-500">Ages 8-14 • Free registration</p>
                      </div>
                      <a href="https://forms.gle/2dkNANqne474wtc98" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Register for USA</Button>
                      </a>
                    </div>

                    <div className="flex items-center p-4 bg-orange-50 rounded-lg">
                      <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">🇮🇳</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">India Program</h4>
                        <p className="text-sm text-gray-500">Ages 8-14 • Free registration</p>
                      </div>
                      <a href="https://forms.gle/odcZQ79dDSDpYCxu9" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-orange-600 hover:bg-orange-700 text-white">Register for India</Button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Image
                    src="/images/stem-activities-group.png"
                    alt="Global STEM programs"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg mx-auto"
                  />
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Don't see your location? We're always looking to expand our global reach.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Contact Us About New Locations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Global Presence</h2>
              <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700">
                Discover our growing network of STEM initiatives across continents.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-2xl mx-auto">
                <Link
                  href="/register"
                  className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">🇺🇸</span>
                  </div>
                  <h4 className="font-bold text-gray-900">USA</h4>
                  <p className="text-sm text-gray-600">Westford, Massachusetts</p>
                  <p className="text-xs text-gray-500 mt-1">50+ students served</p>
                </Link>

                <Link
                  href="/global/india"
                  className="text-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">🇮🇳</span>
                  </div>
                  <h4 className="font-bold text-gray-900">India</h4>
                  <p className="text-xs text-gray-500 mt-1">200+ students served</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700">Common questions about our global STEM programs and initiatives.</p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  How is the experience going to be Hands-On for me?
                </h3>
                <p className="text-gray-700">
                  To ensure every child can fully participate in our hands-on activities, we’ll provide a PDF in advance with a list of all the materials you’ll need. During the programs, we’ll guide students step-by-step through each experiment.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Are the global programs really free?</h3>
                <p className="text-gray-700">
                  Yes! All our STEM programs worldwide are completely free. We believe in making quality STEM education
                  accessible to everyone, regardless of financial background.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  What age groups can participate in global programs?
                </h3>
                <p className="text-gray-700">
                  Our programs are designed for ages 8-14. Some programs may have
                  slight variations based on local educational systems and needs.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Do I need any prior STEM knowledge to join?</h3>
                <p className="text-gray-700">
                  Not at all! Our programs are designed for beginners and aim to introduce STEM concepts in a fun,
                  accessible way. All skill levels are welcome.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Will photos be taken during the program?
                </h3>
                <p className="text-gray-700">
                  Yes — with permission from parents, we may take photos during the camp to share on our website and social media. No names will ever be posted.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Are the programs conducted in English?</h3>
                <p className="text-gray-700">
                  While our primary language is English, we try to adapt our programs to local needs. If needed please try to keep a translator nearby.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  How can I support the camp?
                </h3>
                <p className="text-gray-700">
                  We're grateful for any support! You can support us by donating supplies, sponsoring materials, 
                  contributing to our GoFundMe, or even tell other potential sponsors. Every little bit helps keep our camp
                  free and fun!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Global Impact</h2>
              <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Building Bridges Through STEM</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Our global initiative connects young minds across different cultures, languages, and backgrounds
                  through the universal language of science, technology, engineering, and mathematics.
                </p>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Cross-cultural STEM project collaborations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Virtual exchange programs for student educators</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Shared resources and curriculum development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>International mentorship networks</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/stem-chemistry-illustration.png"
                  alt="Global STEM collaboration"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Global Movement</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of a worldwide network of student educators making STEM accessible to all.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6">
              Get Involved <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
