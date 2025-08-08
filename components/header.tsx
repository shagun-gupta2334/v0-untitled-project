"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Instagram, ChevronDown, Globe } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isGlobalToggleOpen, setIsGlobalToggleOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleGlobalDropdown = () => {
    setIsGlobalToggleOpen(!isGlobalToggleOpen)
  }

  // Determine current selection and dropdown options based on pathname
  const isOnIndiaPage = pathname === "/global/india"
  const isOnAfricaPage = pathname === "/global/africa"

  let currentSelection = "Global"
  let dropdownOptions = [
    { label: "India", link: "/global/india" },
    { label: "Africa", link: "/global/africa" },
  ]

  if (isOnIndiaPage) {
    currentSelection = "India"
    dropdownOptions = [
      { label: "Global", link: "/global/about" },
      { label: "Africa", link: "/global/africa" },
    ]
  } else if (isOnAfricaPage) {
    currentSelection = "Africa"
    dropdownOptions = [
      { label: "Global", link: "/global/about" },
      { label: "India", link: "/global/india" },
    ]
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left side - Logo and Global Toggle */}
          <div className="flex items-center space-x-4">
            {/* Global Toggle Button */}
            <div className="relative">
              <button
                onClick={toggleGlobalDropdown}
                className={`flex items-center px-3 py-2 rounded-lg border-2 transition-all duration-200 ${
                  isGlobalToggleOpen
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-white border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600"
                }`}
              >
                <Globe className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">{currentSelection}</span>
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${isGlobalToggleOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isGlobalToggleOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                  {dropdownOptions.map((option) => (
                    <Link
                      key={option.label}
                      href={option.link}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => setIsGlobalToggleOpen(false)}
                    >
                      {option.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="Spark for STEM Logo" width={150} height={60} className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-blue-600 font-medium">
              Events
            </Link>
            <Link href="/activities" className="text-gray-700 hover:text-blue-600 font-medium">
              Activities
            </Link>
            <Link href="/donate" className="text-gray-700 hover:text-blue-600 font-medium">
              Donate
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>

            {/* Registration Buttons */}
            <div className="flex items-center space-x-3">
              <Link href="/register">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm px-4 py-2">Register Now</Button>
              </Link>
              <Link href="/global/about">
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm px-4 py-2 bg-transparent"
                >
                  <Globe className="mr-1 h-4 w-4" />
                  Partner with us - Globally
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <a
              href="https://www.instagram.com/sparkforstem/followers/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 pb-6">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/events"
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/activities"
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Activities
              </Link>
              <Link
                href="/donate"
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile Global Links */}
              <div className="border-t border-gray-200 pt-4">
                <div className="text-gray-500 text-sm font-medium mb-2">Global Programs</div>
                <div className="pl-4 space-y-2">
                  <div className="text-blue-600 font-medium py-1">Current: {currentSelection}</div>
                  {dropdownOptions.map((option) => (
                    <Link
                      key={option.label}
                      href={option.link}
                      className="block text-gray-600 hover:text-blue-600 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Switch to: {option.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Registration Buttons */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black w-full">Register Now</Button>
                </Link>
                <Link href="/global/about" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white w-full bg-transparent"
                  >
                    <Globe className="mr-2 h-4 w-4" />
                    Partner with us - Globally
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
