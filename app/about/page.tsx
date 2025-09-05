import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Building2, User, Phone } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#13131D] text-white">
      <SiteHeader />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-500">NSG</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We&apos;re mission to accelerate the world&apos;s transition to sustainable money.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-500">OUR MISSION</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Exchange Rate Discovery Service</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Borderless Payments</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Borderless Company</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              North Star Group Africa is indeed a blend where money is honest, fair and focused by actual value and
              where everyone can access it. We believe that the current monetary system is broken and needs to be fixed.
            </p>
            <br />
            <p className="text-gray-300 leading-relaxed">
              NSG has introduced a new form of money to solve the use of fiat and cryptocurrencies which is a
              blockchain-based money backed by 1:1 physical gold and silver. This new form of money is called Kinesis
              money (KAU & KAG). Through the yield system, users of this currency is granted incentives and bonuses as
              they participate in the ecosystem.
            </p>
          </div>
        </div>

        {/* Lorem Ipsum Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Lorem Ipsum</h2>
          <p className="text-gray-300 leading-relaxed">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief,
            Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
            looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
            the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
            sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero,
            written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The
            first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.
          </p>
        </div>

        {/* Industry Leaders Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Industry Leaders in Fully Allocated
            <br />
            Precious Metals
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Name and address</h3>
            <p className="text-gray-400">
              Send and address, come visit
              <br />
              our head office anytime
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">CEO</h3>
            <p className="text-gray-400">Chris Henning.net</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
            <p className="text-gray-400">
              +27 11 568 5 100
              <br />
              northstargroup@gmail.com
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
