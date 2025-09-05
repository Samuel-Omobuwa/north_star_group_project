import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Circle, Clock, Rocket, Target, Zap } from "lucide-react"

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-northstar">
      <SiteHeader />

      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Product <span className="text-blue-400">Roadmap</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover what&apos;s coming next in our journey to revolutionize digital precious metals and sustainable finance.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* Q1 2024 - Completed */}
          <div className="relative mb-12">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-6">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-grow">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">Q1 2024</h3>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Completed</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">Platform Foundation</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>Core platform architecture</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>User authentication system</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>Basic wallet functionality</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>Precious metals backing integration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Q2 2024 - Completed */}
          <div className="relative mb-12">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-6">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-grow">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">Q2 2024</h3>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Completed</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">NSG Card Launch</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>Physical debit card integration</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>Real-time precious metal conversion</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>Mobile app beta release</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>Enhanced security features</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Q3 2024 - In Progress */}
          <div className="relative mb-12">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-grow">
                <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">Q3 2024</h3>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">In Progress</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">Global Expansion</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>European market launch</span>
                    </li>
                    <li className="flex items-center">
                      <Clock className="w-4 h-4 text-blue-400 mr-2" />
                      <span>Multi-currency support</span>
                    </li>
                    <li className="flex items-center">
                      <Clock className="w-4 h-4 text-blue-400 mr-2" />
                      <span>Advanced trading features</span>
                    </li>
                    <li className="flex items-center">
                      <Clock className="w-4 h-4 text-blue-400 mr-2" />
                      <span>Institutional partnerships</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Q4 2024 - Planned */}
          <div className="relative mb-12">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="flex-grow">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">Q4 2024</h3>
                    <span className="px-3 py-1 bg-gray-600/20 text-gray-400 rounded-full text-sm">Planned</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">Advanced Features</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <Circle className="w-4 h-4 text-gray-400 mr-2" />
                      <span>DeFi integration</span>
                    </li>
                    <li className="flex items-center">
                      <Circle className="w-4 h-4 text-gray-400 mr-2" />
                      <span>Yield farming opportunities</span>
                    </li>
                    <li className="flex items-center">
                      <Circle className="w-4 h-4 text-gray-400 mr-2" />
                      <span>Enhanced mobile experience</span>
                    </li>
                    <li className="flex items-center">
                      <Circle className="w-4 h-4 text-gray-400 mr-2" />
                      <span>API for developers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Q1 2025 - Future */}
          <div className="relative mb-12">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-6">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="flex-grow">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">Q1 2025</h3>
                    <span className="px-3 py-1 bg-gray-600/20 text-gray-400 rounded-full text-sm">Future</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">Next Generation Platform</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <Circle className="w-4 h-4 text-gray-400 mr-2" />
                      <span>AI-powered investment insights</span>
                    </li>
                    <li className="flex items-center">
                      <Circle className="w-4 h-4 text-gray-400 mr-2" />
                      <span>Cross-chain compatibility</span>
                    </li>
                    <li className="flex items-center">
                      <Circle className="w-4 h-4 text-gray-400 mr-2" />
                      <span>Advanced portfolio management</span>
                    </li>
                    <li className="flex items-center">
                      <Circle className="w-4 h-4 text-gray-400 mr-2" />
                      <span>Global marketplace integration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Want to be the first to know about new features and updates? Join our community and never miss an
            announcement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3">Join Newsletter</Button>
            <Button
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-3 bg-transparent"
            >
              Follow Updates
            </Button>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
