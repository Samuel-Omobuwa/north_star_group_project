import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-northstar">
      <SiteHeader />

      <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-6">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center justify-center">
                <Image
                  src="/icons/logoGlow.png"
                  alt="Northstar Group Logo"
                  width={150}
                  height={150}
                />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome to North Star Group
            </h1>
            <p className="text-gray-400">
              Sign up with your email address or Google account.
            </p>
          </div>

          {/* Sign Up Form */}
          <div className="space-y-6">
            <div>
              <Input
                type="email"
                placeholder="northstargroup@gmail.com"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 text-base font-medium">
              Continue with email
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-northstar text-gray-400">OR</span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full bg-white hover:bg-gray-100 text-gray-900 border-gray-300 py-3 text-base font-medium"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </Button>
          </div>

          {/* Terms */}
          <div className="text-center text-sm text-gray-400">
            By signing in or creating an account, you agree with our{" "}
            <Link href="/terms" className="text-blue-400 hover:text-blue-300">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
              Privacy Policy
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
