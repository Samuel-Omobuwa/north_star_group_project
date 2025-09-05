import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Smartphone, CreditCard, Coins, Globe, Shield, Zap } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-northstar">
      <SiteHeader />

      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-blue-400">Products</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our comprehensive suite of digital precious metals products designed for the modern economy.
          </p>
        </div>

        {/* Main Products */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* NSG Money */}
          <div className="bg-gray-800/50 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                <Smartphone className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">NSG Money</h2>
            </div>
            <p className="text-gray-400 mb-6">
              Digital currency backed by physical gold and silver. Spend, save, and transfer value globally with the
              stability of precious metals.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <Shield className="w-4 h-4 text-blue-400 mr-2" />
                <span>100% backed by allocated precious metals</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Globe className="w-4 h-4 text-blue-400 mr-2" />
                <span>Global transfers in seconds</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Zap className="w-4 h-4 text-blue-400 mr-2" />
                <span>Low transaction fees</span>
              </div>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">Learn More</Button>
          </div>

          {/* NSG Card */}
          <div className="bg-gray-800/50 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                <CreditCard className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">NSG Card</h2>
            </div>
            <p className="text-gray-400 mb-6">
              Spend your gold and silver instantly anywhere in the world. The first debit card backed by precious
              metals.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <Globe className="w-4 h-4 text-blue-400 mr-2" />
                <span>Accepted worldwide</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Shield className="w-4 h-4 text-blue-400 mr-2" />
                <span>Real-time precious metal conversion</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Zap className="w-4 h-4 text-blue-400 mr-2" />
                <span>No hidden fees</span>
              </div>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">Get Your Card</Button>
          </div>
        </div>

        {/* Additional Products */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Additional Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coins className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">NSG Mint</h3>
              <p className="text-gray-400 mb-4">
                Mint digital currencies backed by physical precious metals with full transparency.
              </p>
              <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10 bg-transparent">
                Explore
              </Button>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">NSG Exchange</h3>
              <p className="text-gray-400 mb-4">
                Trade digital precious metals with institutional-grade security and liquidity.
              </p>
              <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10 bg-transparent">
                Start Trading
              </Button>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">NSG Vault</h3>
              <p className="text-gray-400 mb-4">
                Secure storage solutions for your digital and physical precious metals holdings.
              </p>
              <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10 bg-transparent">
                Secure Storage
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-800/50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already using NSG products to manage their wealth with precious metals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3">Open Account</Button>
            <Button
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-3 bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
