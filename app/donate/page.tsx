import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Share2 } from "lucide-react"

export default function Donate() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-purple-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Our Mission</h1>
            <p className="text-xl opacity-90">
              Help us make STEM education accessible to all young learners through your generous donation.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Your Support Matters</h2>
              <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700">
                Spark for STEM is committed to providing free, high-quality STEM education to elementary school
                students. Your donation helps us purchase materials, secure venues, and ensure our camp remains
                accessible to ALL children regardless of their financial background.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-md p-8 mb-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">How Your Donation Helps</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>$25 provides materials for one student</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>$100 sponsors a full camp experience for one child</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>$500 helps us secure a venue for our activities</span>
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
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Donate Today</h4>
                    <p className="text-gray-700 mb-4">
                      Every contribution makes a difference in a child's STEM journey.
                    </p>
                    <a
                      href="https://www.gofundme.com/f/and-fund-our-camp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-md transition-colors"
                    >
                      Support on GoFundMe
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <Image
                src="/images/stem-activities-group.png"
                alt="Students engaged in STEM activities"
                width={800}
                height={500}
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 relative h-[400px]">
                <iframe
                  src="https://www.gofundme.com/f/and-fund-our-camp/widget/large/"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  className="absolute inset-0 w-full h-full"
                  title="Spark for STEM GoFundMe Campaign"
                ></iframe>
              </div>
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
                  <Button variant="outline" className="w-full">
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
                    <span>Share our camp info on social media (Instagram, Facebook, local groups)</span>
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
                  <Button variant="outline" className="w-full flex items-center justify-center">
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
          <a href="https://www.gofundme.com/f/and-fund-our-camp" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6">
              Donate Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>
    </main>
  )
}
