"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, MessageSquare, Instagram } from "lucide-react"

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-purple-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90">Have questions about our STEM camp? We're here to help!</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                Whether you have questions about registration, camp activities, or want to learn more about our program,
                we're here to help. Fill out the form and our team will get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                    <p className="text-gray-700">Sparkforstem@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Instagram className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Follow Us</h3>
                    <a
                      href="https://www.instagram.com/sparkforstem/followers/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      @sparkforstem
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MessageSquare className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Response Time</h3>
                    <p className="text-gray-700">We aim to respond to all inquiries within 24-48 hours.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Us</h3>
                <p className="text-gray-700 mb-6">
                  The best way to reach us is by sending an email to{" "}
                  <a href="mailto:Sparkforstem@gmail.com" className="text-blue-600 hover:underline">
                    Sparkforstem@gmail.com
                  </a>
                </p>
                <p className="text-gray-700 mb-6">
                  You can also follow us on Instagram for updates and announcements about our camp.
                </p>
                <div className="flex justify-center">
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
              </div>
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">When does registration close?</h3>
                <p className="text-gray-700">
                  Registration closes two weeks before the camp start date or when all spots are filled, whichever comes
                  first.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Is there a waitlist if the camp is full?</h3>
                <p className="text-gray-700">
                  Yes, we maintain a waitlist and will contact you if a spot becomes available.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Can parents volunteer at the camp?</h3>
                <p className="text-gray-700">
                No — Spark for STEM is a student-led camp run by trained high school volunteers. We kindly ask that parents remain off-site during the camp to maintain a comfortable, peer-led environment for the kids.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">How can I support Spark for STEM?</h3>
                <p className="text-gray-700">
                  We’re grateful for any support! You can help by donating funds, supplies, to keep the camp running smoothly. Every contribution helps us keep the camp free and full of hands-on STEM fun.
                </p>
              </div>
            </div>
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
