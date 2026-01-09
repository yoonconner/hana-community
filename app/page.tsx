import { Heart, Users, Coffee, MessageCircle } from 'lucide-react'
import Container from '@/components/Container'
import Section from '@/components/Section'
import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Calendar from '@/components/Calendar'
import { getEvents, getUpcomingEvents } from '@/lib/actions/events'

const values = [
  {
    icon: Heart,
    title: 'Authentic Community',
    description: 'Real relationships with people who care about you.',
  },
  {
    icon: Users,
    title: 'No Pressure',
    description: 'Come as you are. No expectations, no judgment.',
  },
  {
    icon: MessageCircle,
    title: 'Real Conversations',
    description: 'Honest discussions about faith, life, and everything in between.',
  },
  {
    icon: Coffee,
    title: 'Food & Fellowship',
    description: 'Good food, great company, and meaningful connections.',
  },
]

export default async function HomePage() {
  const events = await getEvents()
  const upcomingEvents = await getUpcomingEvents(1)
  const nextGathering = upcomingEvents[0]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy-dark text-warm-white min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-medium to-navy-light opacity-90" />
        <Container className="relative z-10 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-semibold text-4xl md:text-6xl lg:text-7xl mb-6">
              Welcome Home
            </h1>
            <p className="text-xl md:text-2xl text-warm-white/80 mb-8 font-light">
              You belong here. A community of young adults growing in faith together.
            </p>
            <p className="text-lg text-warm-white/60 mb-8 font-korean">
              하나 공동체 — We are one.
            </p>
            {nextGathering ? (
              <div className="mb-8">
                <p className="text-gold-accent font-medium mb-2">Next Gathering</p>
                <p className="text-warm-white/90">
                  {new Date(nextGathering.event_date + 'T00:00:00').toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                  })}{' '}
                  at 5:30 PM
                </p>
              </div>
            ) : (
              <div className="mb-8">
                <p className="text-gold-accent font-medium mb-2">Every Other Friday</p>
                <p className="text-warm-white/90">5:30 PM at CM</p>
              </div>
            )}
            <Button href="/gather" size="lg">
              Join Us This Friday
            </Button>
          </div>
        </Container>
      </section>

      {/* Vision & Mission Section */}
      <Section variant="cream">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <h3 className="font-heading font-semibold text-xl text-navy-dark mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A vibrant community where young adults from every background grow in faith,
                serve together, and bridge the generations and cultures of our church.
              </p>
            </Card>
            <Card>
              <h3 className="font-heading font-semibold text-xl text-navy-dark mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Building bridges across KPCF through faith, fellowship, and service.
                We believe in creating space where everyone can belong.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Calendar Section */}
      <Section variant="light">
        <Container>
          <SectionHeading
            title="Upcoming Gatherings"
            subtitle="We meet every other Friday at 5:30 PM. Join us!"
          />
          <div className="max-w-4xl mx-auto">
            <Calendar events={events} />
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section variant="cream">
        <Container>
          <SectionHeading
            title="What to Expect"
            subtitle="Here's what you'll find when you join us."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <div className="w-12 h-12 bg-gold-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon size={24} className="text-navy-light" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-navy-dark mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-warm-white mb-4">
              Ready to Connect?
            </h2>
            <p className="text-warm-white/70 text-lg mb-8">
              We&apos;d love to meet you. Drop by a gathering or reach out — no pressure, just community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/gather" variant="secondary">
                Find a Gathering
              </Button>
              <Button href="/connect" variant="ghost" className="text-warm-white hover:bg-warm-white/10">
                Get in Touch
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
