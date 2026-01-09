import { Clock, MapPin, HelpCircle } from 'lucide-react'
import Container from '@/components/Container'
import Section from '@/components/Section'
import SectionHeading from '@/components/SectionHeading'
import Card from '@/components/Card'
import Calendar from '@/components/Calendar'
import EventCard from '@/components/EventCard'
import { getEvents, getUpcomingEvents } from '@/lib/actions/events'

export const metadata = {
  title: 'Gather | Hana Community',
  description: 'Find out when and where Hana Community meets. Join us for our bi-weekly gatherings!',
}

const faqs = [
  {
    question: 'Do I need to RSVP?',
    answer: 'Nope! Just show up. We\'d love to see you there.',
  },
  {
    question: 'What should I bring?',
    answer: 'Just yourself! We\'ll have food and everything else covered.',
  },
  {
    question: 'Is there parking?',
    answer: 'Yes, there\'s free parking available at the church.',
  },
  {
    question: 'What if I don\'t know anyone?',
    answer: 'That\'s totally fine! We were all new at some point. Our community is welcoming and we\'ll make sure you feel at home.',
  },
  {
    question: 'Do I have to be Korean?',
    answer: 'Not at all! Hana Community welcomes everyone from every background.',
  },
  {
    question: 'What\'s the age range?',
    answer: 'We\'re a young adult group for those from high school graduation through their 30s, but anyone young at heart is welcome!',
  },
]

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
                  5:30 PM — Arrive & Eat
                </h3>
                <p className="text-gray-600">
                  Grab some food, catch up with friends, meet someone new. No rush.
                </p>
              </Card>
              <Card>
                <h3 className="font-heading font-semibold text-lg text-navy-dark mb-2">
                  6:15 PM — Together Time
                </h3>
                <p className="text-gray-600">
                  Worship, a short message, and time for reflection. Real talk about real life.
                </p>
              </Card>
              <Card>
                <h3 className="font-heading font-semibold text-lg text-navy-dark mb-2">
                  7:30 PM — Hang & Connect
                </h3>
                <p className="text-gray-600">
                  Small group discussions, games, or just hanging out. Stay as long as you want.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section variant="cream">
        <Container>
          <SectionHeading
            title="FAQ"
            subtitle="Got questions? We've got answers."
          />
          <div className="max-w-3xl mx-auto grid gap-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <div className="flex gap-3">
                  <HelpCircle size={20} className="text-navy-light flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-navy-dark mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
