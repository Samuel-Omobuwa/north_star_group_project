"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="py-16 border-t border-gray-800 bg-[#1B1B27]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/" className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/icons/logoGlow.png"
                    alt="Northstar Group Logo"
                    width={200}
                    height={200}
                  />
                </div>
              </Link>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold">
                Get The Latest Updates
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white text-sm placeholder-gray-400"
                />
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">PRODUCTS</h4>
            <div className="space-y-3 text-sm">
              <div className="text-gray-400 hover:text-white cursor-pointer">
                NSG Money
              </div>
              <div className="text-gray-400 hover:text-white cursor-pointer">
                Mobile App
              </div>
              <div className="text-gray-400 hover:text-white cursor-pointer">
                NSG Card
              </div>
              <div className="text-gray-400 hover:text-white cursor-pointer">
                Investment Service
              </div>
              <div className="text-gray-400 hover:text-white cursor-pointer">
                NSG Mint
              </div>
              <div className="text-gray-400 hover:text-white cursor-pointer">
                NSG Exchange
              </div>
              <div className="text-gray-400 hover:text-white cursor-pointer">
                EPD
              </div>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">RESOURCES</h4>
            <div className="space-y-3 text-sm">
              <div className="text-gray-400 hover:text-white cursor-pointer">
                Fees
              </div>
              <div className="text-gray-400 hover:text-white cursor-pointer">
                Projects
              </div>
              <div className="text-gray-400 hover:text-white cursor-pointer">
                Roadmap
              </div>
              <div className="text-gray-400 hover:text-white cursor-pointer">
                Transaction Explorer
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">COMPANY</h4>
            <div className="space-y-3 text-sm">
              <div className="text-gray-400 hover:text-white cursor-pointer">
                About Us
              </div>
              <div className="text-gray-400 hover:text-white cursor-pointer">
                Team
              </div>
              <div className="text-gray-400 hover:text-white cursor-pointer">
                Media Centre
              </div>
              <div className="text-gray-400 hover:text-white cursor-pointer">
                Testimonials
              </div>
              <div className="text-gray-400 hover:text-white cursor-pointer">
                Contact us
              </div>
            </div>
          </div>

          {/* Downloads and Support */}
          <div>
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-4">DOWNLOADS</h4>
              <div className="space-y-3 text-sm">
                <div className="text-gray-400 hover:text-white cursor-pointer">
                  Brand Resources
                </div>
                <div className="text-gray-400 hover:text-white cursor-pointer">
                  Documents
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">SUPPORT</h4>
              <div className="space-y-3 text-sm">
                <div className="text-gray-400 hover:text-white cursor-pointer">
                  Knowledge Base
                </div>
                <div className="text-gray-400 hover:text-white cursor-pointer">
                  Video Lessons
                </div>
                <div className="text-gray-400 hover:text-white cursor-pointer">
                  User Guides
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2024 North Star Group. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-sm">
            <span className="text-gray-400 hover:text-white cursor-pointer">
              Terms of use
            </span>
            <span className="text-gray-400 hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-gray-400 hover:text-white cursor-pointer">
              Offering Memorandum/AML/KYC
            </span>
            <span className="text-gray-400 hover:text-white cursor-pointer">
              Contact & Terms
            </span>
          </div>

          {/* Scroll to top button */}
          <Button
            size="sm"
            className="bg-blue-500 hover:bg-blue-600 text-white p-2"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
