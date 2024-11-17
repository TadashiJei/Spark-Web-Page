import Link from 'next/link'
import { Shield, Calendar, MapPin, Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function EventsPage() {
  const events = [
    {
      title: "Spark Identity Summit",
      date: "2024-09-15",
      time: "10:00 AM - 5:00 PM",
      location: "Virtual Event",
      description: "Join us for a day of talks and workshops on the future of decentralized identity.",
    },
    {
      title: "Digital Nomad Meetup",
      date: "2024-10-20",
      time: "2:00 PM - 6:00 PM",
      location: "Bali, Indonesia",
      description: "Connect with fellow digital nomads and learn how Spark can revolutionize your remote work experience.",
    },
    {
      title: "Blockchain and Identity Hackathon",
      date: "2024-11-05",
      time: "9:00 AM - 9:00 PM",
      location: "New York City, USA",
      description: "A 12-hour hackathon focused on building innovative solutions using Spark's identity platform.",
    },
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
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/media">Media</Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Upcoming Events</h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              {events.map((event, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <p className="text-sm mb-4">{event.description}</p>
                    <Button>Register Now</Button>
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