"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="border-b border-gray-800 bg-gray-900">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-sm font-medium text-white">NORTHSTAR</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm text-blue-400 hover:text-blue-300 border-b-2 border-blue-400 pb-1">
            Home
          </Link>
          <Link href="/investor" className="text-sm text-gray-300 hover:text-white">
            Investor
          </Link>
          <Link href="/products" className="text-sm text-gray-300 hover:text-white">
            Products
          </Link>
          <Link href="/roadmap" className="text-sm text-gray-300 hover:text-white">
            Roadmap
          </Link>
          <Link href="/about" className="text-sm text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="/support" className="text-sm text-gray-300 hover:text-white">
            Support
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-3">
          <Button variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm">
            Log In
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-4 py-2 text-sm bg-transparent"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  )
}

