import Link from 'next/link'
import { Shield, ImageIcon } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function MediaPage() {
  const photos = [
    { src: "/placeholder.svg?height=400&width=600", alt: "Spark team at a conference" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Spark app demonstration" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Digital nomads using Spark" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Spark identity verification process" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Spark team working remotely" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Spark user testimonial" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Shield className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">Spark</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">Home</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/features">Features</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/sponsors">Sponsors</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/team">Team</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/events">Events</Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Media Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-auto object-cover aspect-video"
                    />
                  </CardContent>
                </Card>
              ))}
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