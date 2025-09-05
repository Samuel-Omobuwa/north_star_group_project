import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Phone, Mail, Clock, Search, BookOpen } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-northstar">
      <SiteHeader />

      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How can we <span className="text-blue-400">help</span> you?
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get the support you need with our comprehensive help center and dedicated support team.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for help articles, guides, or FAQs..."
              className="pl-12 py-4 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Live Chat</h3>
            <p className="text-gray-400 mb-4">Get instant help from our support team through live chat.</p>
            <div className="flex items-center justify-center text-green-400 mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span className="text-sm">Available 24/7</span>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full">Start Chat</Button>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Email Support</h3>
            <p className="text-gray-400 mb-4">Send us an email and we&apos;ll get back to you within 24 hours.</p>
            <div className="flex items-center justify-center text-gray-400 mb-4">
              <Clock className="w-4 h-4 mr-2" />
              <span className="text-sm">Response within 24h</span>
            </div>
            <Button
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500/10 w-full bg-transparent"
            >
              Send Email
            </Button>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Phone Support</h3>
            <p className="text-gray-400 mb-4">Call our support line for urgent matters and complex issues.</p>
            <div className="flex items-center justify-center text-gray-400 mb-4">
              <Clock className="w-4 h-4 mr-2" />
              <span className="text-sm">Mon-Fri 9AM-6PM EST</span>
            </div>
            <Button
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500/10 w-full bg-transparent"
            >
              Call Now
            </Button>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Popular Help Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Getting Started with NSG",
              "Account Security & Verification",
              "Making Transactions",
              "NSG Card Usage",
              "Fees & Pricing",
              "Mobile App Guide",
              "Precious Metals Backing",
              "International Transfers",
              "Tax Information",
            ].map((topic, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition-colors cursor-pointer"
              >
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">{topic}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-800/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <Input
                    type="text"
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <Input
                    type="text"
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <Input
                  type="email"
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <Input
                  type="text"
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <Textarea
                  rows={5}
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Describe your issue or question in detail..."
                />
              </div>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3">Send Message</Button>
            </form>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
