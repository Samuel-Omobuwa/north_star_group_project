import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Building2, TrendingUp, Shield, Users } from "lucide-react"

export default function InvestorPage() {
  return (
    <div className="min-h-screen bg-northstar">
      <SiteHeader />

      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Investor <span className="text-blue-400">Relations</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover investment opportunities in the future of digital precious metals and sustainable finance.
          </p>
        </div>

        {/* Investment Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Growth Potential</h3>
            <p className="text-gray-400">Exponential growth in digital precious metals market</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Secure Assets</h3>
            <p className="text-gray-400">Fully allocated precious metals backing</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Growing Community</h3>
            <p className="text-gray-400">Expanding global user base and adoption</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Strong Foundation</h3>
            <p className="text-gray-400">Established infrastructure and partnerships</p>
          </div>
        </div>

        {/* Financial Performance */}
        <div className="bg-gray-800/50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Financial Performance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">$2.5B+</div>
              <div className="text-gray-400">Assets Under Management</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">150%</div>
              <div className="text-gray-400">YoY Growth Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-400">Countries Served</div>
            </div>
          </div>
        </div>

        {/* Investment Opportunities */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Investment Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Series B Funding</h3>
              <p className="text-gray-400 mb-6">
                Join our Series B round to accelerate global expansion and product development.
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">Learn More</Button>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Strategic Partnerships</h3>
              <p className="text-gray-400 mb-6">
                Explore partnership opportunities in the digital precious metals ecosystem.
              </p>
              <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10 bg-transparent">
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Invest?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get in touch with our investor relations team to learn more about opportunities with NorthStar Group.
          </p>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3">Contact Investor Relations</Button>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
