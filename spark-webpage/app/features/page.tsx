import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Globe, Key, Lock, Shield, UserCircle, Calendar, Award, Gift, Layers, Gamepad, Search, BarChart, Globe2, Smartphone } from 'lucide-react'

export default function Features() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Shield className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">Spark</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/sponsors">
            Sponsors
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Spark Features</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <UserCircle className="w-8 h-8 mb-2 text-blue-500" />
                  <CardTitle>DID Profile Creation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Create a decentralized identity on the TON blockchain, representing your verified digital identity.
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
                    Issue, store, and share verifiable credentials for residency, employment history, and more.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Key className="w-8 h-8 mb-2 text-yellow-500" />
                  <CardTitle>Selective Disclosure</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Selectively share credentials while maintaining control over your private information.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Lock className="w-8 h-8 mb-2 text-red-500" />
                  <CardTitle>Zero-Knowledge Proofs</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Verify attributes without exposing full data, ensuring privacy in transactions.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Globe className="w-8 h-8 mb-2 text-purple-500" />
                  <CardTitle>TON Wallet Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Seamlessly access and manage credentials through your TON wallet.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Calendar className="w-8 h-8 mb-2 text-indigo-500" />
                  <CardTitle>Decentralized Event Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Create and manage events on the TON blockchain with ticketing and attendance verification.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Award className="w-8 h-8 mb-2 text-orange-500" />
                  <CardTitle>NFT-based Certificates</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Mint tamper-proof, verifiable attendance records as NFTs.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Gift className="w-8 h-8 mb-2 text-pink-500" />
                  <CardTitle>Rewards Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Earn points for attending events, redeemable for discounts and perks.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Layers className="w-8 h-8 mb-2 text-teal-500" />
                  <CardTitle>Multi-chain Interoperability</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Integrate with other popular blockchains like Ethereum and Polygon.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Spark. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/terms">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}