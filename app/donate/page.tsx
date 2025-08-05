import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Share2, Globe, Mail } from "lucide-react"

export default function Donate() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-purple-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Our Mission</h1>
            <p className="text-xl opacity-90">
              Help us make STEM education accessible to all young learners through your generous support.
            </p>
          </div>
        </div>
      </section>

      {/* Support Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Your Support Matters</h2>
              <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700">
                Spark for STEM is committed to providing free, high-quality STEM education to elementary school
                students. Your support helps us purchase materials, secure venues, and ensure our camp remains
                accessible to all children regardless of their financial background.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-md p-8 mb-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">How Your Support Helps</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>$160 provides materials for all campers, including science kits and project supplies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>$140 goes toward basic robotics and coding tools for interactive tech activities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>$140 helps us secure a venue for our activities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>$60 supports snacks, certificates, and souvenirs for the campers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Any amount helps us continue our mission!</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xs text-center">
                    <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Support Us Today</h4>
                    <p className="text-gray-700 mb-4">
                      Every contribution makes a difference in a child's STEM journey.
                    </p>
                    <a
                      href="mailto:Sparkforstem@gmail.com?subject=Support Inquiry - Donation"
                      className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-md transition-colors"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Us to Support
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <Image
                src="/images/classroom-session.png"
                alt="Students engaged in STEM activities"
                width={800}
                height={500}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Support</h2>
              <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700">
                Financial contributions aren't the only way to help. Here are other ways you can support our mission:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Donate Supplies</h3>
                <p className="text-gray-700 mb-4">
                  We welcome donations of materials and supplies for our hands-on activities.
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="w-full bg-transparent">
                    Contact Us About Supplies
                  </Button>
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Promotion & Awareness</h3>
                <p className="text-gray-700 mb-4">
                  Help spread the word about our camp to reach more students and potential supporters.
                </p>
                <ul className="text-gray-700 mb-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Share our camp info on social media (Instagram, local groups)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Recommend us to local families or schools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Introduce us to potential sponsors or donors</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button variant="outline" className="w-full flex items-center justify-center bg-transparent">
                    <Share2 className="mr-2 h-4 w-4" /> Help Spread the Word
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Together, We Can Inspire the Next Generation</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support helps us create meaningful STEM experiences that can shape a child's future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:Sparkforstem@gmail.com?subject=Support Inquiry - Donation">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6">
                Contact Us to Support <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link href="/global/about">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-green-600 font-bold text-lg px-8 py-6 bg-transparent"
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
