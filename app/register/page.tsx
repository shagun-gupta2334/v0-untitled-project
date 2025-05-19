import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function Register() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-yellow-400 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Register for Spark for STEM</h1>
            <p className="text-xl text-gray-800">Join our free summer camp and embark on an exciting STEM adventure!</p>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Registration Form</h2>
                <p className="text-gray-700 mb-8">
                  Please complete the registration form below to secure your spot in our free STEM summer camp. Spaces
                  are limited and will be filled on a first-come, first-served basis.
                </p>

                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfdoIPItbaU45BNVFXvEyhw0YBSkRjp4OWVndZnDBPAILFzpg/viewform?embedded=true"
                    width="100%"
                    height="800"
                    className="border-0"
                    title="Registration Form"
                  >
                    Loading…
                  </iframe>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-gray-700 mb-4">
                    If you have any issues with the form, you can also access it directly:
                  </p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfdoIPItbaU45BNVFXvEyhw0YBSkRjp4OWVndZnDBPAILFzpg/viewform?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Open Registration Form in New Tab
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/">
                <Button variant="outline" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Who can attend the camp?</h3>
                <p className="text-gray-700">
                  Our camp is designed for elementary school students (grades 1-5). All skill levels are welcome!
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Is the camp really free?</h3>
                <p className="text-gray-700">
                  Yes! Spark for STEM is completely free for all participants. We are a nonprofit, student-led
                  initiative committed to making STEM education accessible to everyone.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">What should my child bring to camp?</h3>
                <p className="text-gray-700">
                  Students should bring a packed snack, water bottle, and their curiosity! All materials for activities
                  will be provided.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">How long is the camp?</h3>
                <p className="text-gray-700">
                  Our camp runs for one weekend, from 11:00 AM to 1:00 PM each day.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">What if I have more questions?</h3>
                <p className="text-gray-700">
                  Please visit our{" "}
                  <Link href="/contact" className="text-blue-600 hover:underline">
                    Contact page
                  </Link>{" "}
                  to get in touch with our team. We're happy to answer any additional questions you may have!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
