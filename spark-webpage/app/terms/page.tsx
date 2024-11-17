import Link from 'next/link'
import { Shield } from 'lucide-react'

export default function TermsOfService() {
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
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/sponsors">
            Sponsors
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">Terms of Service</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>Last updated: [Date]</p>
              <h3>1. Acceptance of Terms</h3>
              <p>By accessing or using the Spark platform, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
              <h3>2. Description of Service</h3>
              <p>Spark provides a decentralized identity verification system leveraging blockchain technology for secure, portable, and verifiable identities.</p>
              <h3>3. User Responsibilities</h3>
              <p>You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>
              <h3>4. Intellectual Property</h3>
              <p>The Spark platform and its original content, features, and functionality are owned by Spark and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
              <h3>5. Limitation of Liability</h3>
              <p>In no event shall Spark, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
              <h3>6. Governing Law</h3>
              <p>These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.</p>
              <h3>7. Changes to Terms</h3>
              <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.</p>
              <h3>8. Contact Us</h3>
              <p>If you have any questions about these Terms, please contact us at [contact email].</p>
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