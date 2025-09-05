"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header>
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <Image
              src="/icons/logoGlow.png"
              alt="Northstar Group Logo"
              width={150}
              height={150}
            />
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-sm-bold text-gray-300 hover:text-blue-400 hover:border-b-3  py-5"
          >
            Home
          </Link>
          <Link
            href="/investor"
            className="text-sm-bold text-gray-300 hover:text-blue-400 hover:border-b-3  py-5"
          >
            Investor
          </Link>
          <Link
            href="/products"
            className="text-sm-bold text-gray-300 hover:text-blue-400 hover:border-b-3  py-5"
          >
            Products
          </Link>
          <Link
            href="/roadmap"
            className="text-sm-bold text-gray-300 hover:text-blue-400 hover:border-b-3  py-5"
          >
            Roadmap
          </Link>
          <Link
            href="/about"
            className="text-sm-bold text-gray-300 hover:text-blue-400 hover:border-b-3  py-5"
          >
            About
          </Link>
          <Link
            href="/support"
            className="text-sm-bold text-gray-300 hover:text-blue-400 hover:border-b-3  py-5"
          >
            Support
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-3">
          <Link href="/login">
            <Button
              variant="default"
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm"
            >
              Log In
            </Button>
          </Link>

          <Link href="/signup">
          <Button
            variant="outline"
            size="sm"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-4 py-2 text-sm bg-transparent"
          >
            Sign Up
          </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
