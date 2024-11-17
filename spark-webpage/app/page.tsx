import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Globe, Key, Lock, Shield, UserCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Shield className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">Spark</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/sponsors">
            Sponsors
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/team">
            Team
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/media">
            Media
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/events">
            Events
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-100 to-white dark:from-blue-900 dark:to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Secure Identity for Digital Nomads
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Spark is a decentralized identity verification system leveraging blockchain technology for secure,
                  portable, and verifiable identities.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Get Started</Button>
                <Button size="lg" variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <UserCircle className="w-8 h-8 mb-2 text-blue-500" />
                  <CardTitle>DID Profiles</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Create decentralized identity profiles on the TON blockchain for secure verification.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CheckCircle className="w-8 h-8 mb-2 text-green-500" />
                  <CardTitle>Verifiable Credentials</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Issue and manage verifiable credentials for residency, employment, and more.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Key className="w-8 h-8 mb-2 text-yellow-500" />
                  <CardTitle>Selective Sharing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Share only the necessary credentials while keeping your personal information private.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join the Spark Community</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Be part of the revolution in digital identity management for the modern nomad lifestyle.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" size="lg">Sign Up for Early Access</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Spark. All rights reserved.</p>
      </footer>
    </div>
  )
}