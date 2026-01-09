import { Clock, MapPin } from 'lucide-react'
import Container from '@/components/Container'
import Section from '@/components/Section'
import SectionHeading from '@/components/SectionHeading'
import Card from '@/components/Card'
import Calendar from '@/components/Calendar'
import EventCard from '@/components/EventCard'
import { getEvents, getUpcomingEvents } from '@/lib/actions/events'

export const metadata = {
  title: 'Gather | Agape Collective',
  description: 'Find out when and where Agape Collective meets. Join us for our bi-weekly gatherings!',
}

export default async function GatherPage() {
  const events = await getEvents()
  const upcomingEvents = await getUpcomingEvents(3)

  return (
    <>
      {/* Hero */}
      <Section variant="dark" className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-semibold text-4xl md:text-5xl text-warm-white mb-6">
              Gather With Us
            </h1>
            <p className="text-xl text-warm-white/80">
              Every other Friday at 5:30 PM. Food, fellowship, and faith.
            </p>
          </div>
        </Container>
      </Section>

      {/* Details */}
      <Section variant="cream">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-navy-light" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-navy-dark mb-2">
                    When
                  </h3>
                  <p className="text-gray-600 mb-1">
                    <strong>Every other Friday</strong>
                  </p>
                  <p className="text-gray-600">
                    5:30 PM - 8:00 PM
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-navy-light" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-navy-dark mb-2">
                    Where
                  </h3>
                  <p className="text-gray-600 mb-1">
                    <strong>CM Building</strong>
                  </p>
                  <p className="text-gray-600">
                    Korean Presbyterian Church of Fresno
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Calendar */}
      <Section variant="light">
        <Container>
          <SectionHeading
            title="Calendar"
            subtitle="See all our upcoming gatherings."
          />
          <div className="max-w-4xl mx-auto">
            <Calendar events={events} />
          </div>
        </Container>
      </Section>

      {/* Upcoming Events List */}
      {upcomingEvents.length > 0 && (
        <Section variant="cream">
          <Container>
            <SectionHeading
              title="Coming Up"
              subtitle="Our next few gatherings."
            />
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* What to Expect */}
      <Section variant="light">
        <Container>
          <SectionHeading
            title="What to Expect"
            subtitle="Here's what a typical gathering looks like."
          />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <Card>
                <h3 className="font-heading font-semibold text-lg text-navy-dark mb-2">
                  5:30 PM — Meet at CM
                </h3>
                <p className="text-gray-600">
                  Arrive and settle in. Say hi to familiar faces and meet new ones.
                </p>
              </Card>
              <Card>
                <h3 className="font-heading font-semibold text-lg text-navy-dark mb-2">
                  6:00 PM — Worship & Announcements
                </h3>
                <p className="text-gray-600">
                  Come together in praise and hear what&apos;s happening in our community.
                </p>
              </Card>
              <Card>
                <h3 className="font-heading font-semibold text-lg text-navy-dark mb-2">
                  6:30 PM — Sermon
                </h3>
                <p className="text-gray-600">
                  Dive into God&apos;s Word together through teaching and reflection.
                </p>
              </Card>
              <Card>
                <h3 className="font-heading font-semibold text-lg text-navy-dark mb-2">
                  6:45 PM — Fellowship & Food
                </h3>
                <p className="text-gray-600">
                  The best part — eating together and building community.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
