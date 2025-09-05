import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { ChevronDown, Shield, Smartphone, CreditCard, Globe, Zap, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen ">
      <SiteHeader />

      <main className="container mx-auto px-6">
        {/* Hero Section */}
        <section className="py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-blue-400 font-bold font-medium tracking-wide uppercase text-sm">YOUR MONEY, YOUR CHOICE</p>

                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Manage your money with <span className="text-yellow-400">Gold</span> &{" "}
                  <span className="text-gray-400">Silver</span>
                </h1>

                <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                  Spend and save in physical gold and silver. Buy digital currency. Earn rewards for every transaction
                </p>
              </div>

              <div className="flex gap-4">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg">Join Group</Button>
                <Button
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-lg bg-transparent"
                >
                  About US
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Image
              alt="Hero Image"
              src="/images/hero-image.png"
              width={500}
              height={500}
               />
              
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Make your money work for you</h2>
            <div className="flex justify-center">
              <Image 
            src='/images/image1.png'
            alt="Hero Image"
            width={800}
            height={400}
            />
            </div>
            
          </div>

          {/* About Us Section with Stats */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <p className="text-blue-400 font-medium tracking-wide uppercase text-sm">ABOUT US</p>
              <h3 className="text-3xl font-bold text-white">
                Built by a team of world-class money & fintech experts backed by a network of retail, wholesale &
                institutional partners
              </h3>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2">Read more</Button>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-blue-400">500+</div>
                <div className="text-gray-300">Over 500 globally for NSG</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-blue-400">40+</div>
                <div className="text-gray-300">Over 40 location for NSG</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-blue-400">24/7</div>
                <div className="text-gray-300">24/7 help service for all customers</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-medium tracking-wide uppercase text-sm mb-4">KINESIS VIRTUAL CARD</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Spend your gold and silver instantly</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Protect your wealth in gold and silver - or hold digital currency - only converting your assets at the
              exact moment of purchase
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 p-6 rounded-lg bg-gray-800/50">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Go borderless</h3>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 rounded-lg bg-gray-800/50">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Sky-high daily limits</h3>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 rounded-lg bg-gray-800/50">
              <div className="w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Get paid gold and silver</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Digital currency made easy</h2>
            <p className="text-gray-300 text-lg mb-8">
              Instantly buy or sell digital currency 24/7, from your regular account - starting at just $1.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2">Join Group</Button>
          </div>
        </section>

        <section className="py-20">
          <div className="mb-16">
            <p className="text-blue-400 font-medium tracking-wide uppercase text-sm mb-4">REMITTANCE</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Send money globally in seconds</h2>
            <p className="text-gray-300 text-lg max-w-2xl">
              Send our gold and silver-based digital currencies to friends and family around the globe, with a low, flat
              fee. They&apos;ll get it in 2-3 seconds - every time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">No hidden fees</h3>
                <p className="text-gray-400 text-sm">
                  A flat 0.45% fee. Any amount, sent any time to anywhere in the world.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Arrives in seconds</h3>
                <p className="text-gray-400 text-sm">Make payments in gold and silver cleared within seconds, 24/7.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">No mark-ups - ever</h3>
                <p className="text-gray-400 text-sm">The same low cost, whether weekday or weekend, all year round.</p>
              </div>
            </div>
          </div>

          {/* Kinesis CoolWallet Section */}
          <div className="mb-16">
            <p className="text-blue-400 font-medium tracking-wide uppercase text-sm mb-4">KINESIS COOLWALLET</p>
            <h3 className="text-3xl font-bold text-white mb-6">Your portable vault</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl">
              Keep all of your digital assets offline, secure and safely in your pocket with the NSG CoolWallet S.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Added security</h4>
                  <p className="text-gray-400 text-sm">Biometric and physical 2FA checks ensure your assets&apos; safety.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Compact</h4>
                  <p className="text-gray-400 text-sm">Credit card-size, convenient and accessible, wherever you go.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <p className="text-blue-400 font-medium tracking-wide uppercase text-sm mb-4">MOBILE APP</p>
              <h2 className="text-4xl font-bold text-white mb-8">One app for everything</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Stay connected</h3>
                  <p className="text-gray-300">
                    Manage your spending and savings. Always get digital currency. Instantly buy gold and silver in
                    real-time pricing.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Take an opportunity</h3>
                  <p className="text-gray-300">
                    Buy gold, silver and digital currency in seconds, 24/7, or sell your own price.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="/mobile-app-interface-showing-gold-and-silver-tradi.jpg"
                alt="Mobile App Interface"
                className="w-full max-w-sm"
              />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Ask a little more from your money</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Gold and silver</h3>
              <p className="text-gray-400 text-sm">Spend and save in digitalized physical gold and silver.</p>
              <Button variant="link" className="text-blue-400 p-0">
                Learn More →
              </Button>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Earn</h3>
              <p className="text-gray-400 text-sm">Earn gold and silver just for spending and transacting.</p>
              <Button variant="link" className="text-blue-400 p-0">
                Learn More →
              </Button>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">NSG Card</h3>
              <p className="text-gray-400 text-sm">
                Spend gold, silver and digital currency globally with the NSG card.
              </p>
              <Button variant="link" className="text-blue-400 p-0">
                Learn More →
              </Button>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Trust and security</h3>
              <p className="text-gray-400 text-sm">Be sure of your gold and silver with our world-class security.</p>
              <Button variant="link" className="text-blue-400 p-0">
                Learn More →
              </Button>
            </div>
          </div>

          {/* More than average bank section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">More than just your average bank account</h3>
              <p className="text-gray-300 mb-8">
                Manage your spending and savings from a single account. Get digital currency. Instantly buy gold and
                silver at world-class industry prices.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/50">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">NSG Money platform</h4>
                  <p className="text-gray-400 text-sm mb-2">
                    Keep track of everyday spending. Build your wealth in gold and silver.
                  </p>
                  <Button variant="link" className="text-blue-400 p-0 text-sm">
                    Learn More →
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/50">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">NSG mobile app</h4>
                  <p className="text-gray-400 text-sm mb-2">
                    Take full control of your finances on the move. Buy gold, silver and digital currency.
                  </p>
                  <Button variant="link" className="text-blue-400 p-0 text-sm">
                    Learn More →
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/50">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">NSG card</h4>
                  <p className="text-gray-400 text-sm mb-2">
                    Spend gold, silver and digital currency globally with the NSG card.
                  </p>
                  <Button variant="link" className="text-blue-400 p-0 text-sm">
                    Learn More →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">FAQ</h2>
            <p className="text-blue-400 mb-8">Visit our Help Center</p>

            <div className="space-y-4 max-w-3xl">
              <div className="border border-gray-700 rounded-lg">
                <button className="w-full flex items-center justify-between p-6 text-left">
                  <span className="text-white font-medium">How do I know my gold and silver are there?</span>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="border border-gray-700 rounded-lg">
                <button className="w-full flex items-center justify-between p-6 text-left">
                  <span className="text-white font-medium">How do I know my gold and silver are safe?</span>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="border border-gray-700 rounded-lg">
                <button className="w-full flex items-center justify-between p-6 text-left">
                  <span className="text-white font-medium">Why should I trust Kinesis?</span>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Investor and Trader sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="p-8 rounded-lg bg-gray-800/50">
              <p className="text-blue-400 font-medium tracking-wide uppercase text-sm mb-4">INVESTOR</p>
              <h3 className="text-2xl font-bold text-white mb-4">Our offering for gold and silver investors.</h3>
              <Button variant="link" className="text-blue-400 p-0">
                Learn more →
              </Button>
            </div>

            <div className="p-8 rounded-lg bg-gray-800/50">
              <p className="text-blue-400 font-medium tracking-wide uppercase text-sm mb-4">TRADER</p>
              <h3 className="text-2xl font-bold text-white mb-4">Our offering for professional traders.</h3>
              <Button variant="link" className="text-blue-400 p-0">
                Learn more →
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
