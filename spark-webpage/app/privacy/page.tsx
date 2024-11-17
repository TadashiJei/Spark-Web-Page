import Link from 'next/link'
import { Shield } from 'lucide-react'

export default function PrivacyPolicy() {
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">Privacy Policy</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>Last updated: [Date]</p>
              <h3>1. Introduction</h3>
              <p>Spark ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our decentralized identity verification system.</p>
              <h3>2. Information We Collect</h3>
              <p>We collect information that you provide directly to us when you use our services, including:</p>
              <ul>
                <li>Personal information for creating your Decentralized Identity (DID) profile</li>
                <li>Verifiable Credentials (VCs) that you choose to store and manage through our platform</li>
                <li>Information related to your use of the TON wallet in connection with our services</li>
              </ul>
              <h3>3. How We Use Your Information</h3>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Facilitate the creation and management of your DID profile</li>
                <li>Enable the issuance, storage, and sharing of your Verifiable Credentials</li>
                <li>Ensure the security and integrity of our platform</li>
              </ul>
              <h3>4. Data Security</h3>
              <p>We implement appropriate technical and organizational measures to protect your information, including the use of blockchain technology and zero-knowledge proofs to ensure privacy-preserving credential verification.</p>
              <h3>5. Your Rights</h3>
              <p>You have the right to access, correct, or delete your personal information. You can exercise these rights by contacting us at [contact email].</p>
              <h3>6. Changes to This Privacy Policy</h3>
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
              <h3>7. Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, please contact us at [contact email].</p>
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