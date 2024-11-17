import Link from 'next/link'
import { Shield } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Andrea Faith Alimorong",
      role: "Software Engineer / Team Leader / Security Engineer",
      bio: "Blockchain enthusiast with 4+ years in identity management.",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      name: "Java Jay Bartolome ( Tadashi Jei )",
      role: "Software Engineer / Lead Developer",
      bio: "Expert in decentralized systems and cryptography.",
      image: "/public/java.svg?height=100&width=100"
    },
    {
      name: "Jean Carlo M. San Juan",
      role: "Software Engineer / Researcher",
      bio: "Passionate about creating user-centric digital experiences.",
      image: "https://scontent-hkg4-1.xx.fbcdn.net/v/t1.15752-9/440436347_742677597723213_9035462352342232442_n.png?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeH_oqfVeP-B9F3ozOdODR9D_4zeD26GExr_jN4PboYTGszye6aa_ptzbKNLsAFy9uvjaANTH_R9e1lYbTy0sGwj&_nc_ohc=4MSB7YGuGEwQ7kNvgEWKRnV&_nc_zt=23&_nc_ht=scontent-hkg4-1.xx&oh=03_Q7cD1QEpofdrAy09pRXn8o-UECdUeJNnUWiBXYY_RHqfAkE_IQ&oe=6760E24E"
    }
  ]

  const sponsors = [
    "AEON", "Tonkeeper", "AdsGram", "DeDust", "TON Foundation", "GSR", "ByBit", 
    "Gate Ventures", "Pantera", "Foresight Ventures", "ARKHAM", "TON VENTURES", 
    "Kenetic", "MEXC Ventures"
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
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/media">Media</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/events">Events</Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index}>
                  <CardHeader>
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-center">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm font-semibold mb-2">{member.role}</p>
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Sponsors</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sponsors.map((sponsor, index) => (
                <Card key={index} className="flex items-center justify-center h-24">
                  <CardContent className="p-4">
                    <p className="text-center font-semibold">{sponsor}</p>
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