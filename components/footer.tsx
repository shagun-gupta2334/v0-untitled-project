import Link from "next/link"
import Image from "next/image"
import { Instagram, Globe } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image src="/images/logo.png" alt="Spark for STEM Logo" width={180} height={72} className="h-14 w-auto" />
            </Link>
            <p className="text-gray-400 mb-4">
              A student-led, nonprofit summer camp designed to spark curiosity and build foundational STEM skills
              through hands-on activities.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/sparkforstem/followers/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Activities
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Support Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Register */}
          <div>
            <h3 className="text-lg font-bold mb-4">Join Us</h3>
            <p className="text-gray-400 mb-4">Registration is now open for our free summer camp. Spaces are limited!</p>
            <div className="space-y-3">
              <Link
                href="/register"
                className="block bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-4 py-2 rounded-md transition-colors text-center"
              >
                Register Now
              </Link>
              <Link
                href="/global/about"
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition-colors"
              >
                <Globe className="mr-2 h-4 w-4" />
                Register - Out of USA
              </Link>
            </div>
            <div className="mt-4">
              <Link
                href="/donate"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-md transition-colors"
              >
                Support Our Camp
              </Link>
            </div>
            <div className="mt-3">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeP_JtPWP6WAIVN5_7N7GOSWZOJZ_6FLAG0yoXxhJDWs-cDVQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2 rounded-md transition-colors text-center w-full"
              >
                Volunteer as Parent
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Spark for STEM. All rights reserved. AI was used in making of this
            website.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
