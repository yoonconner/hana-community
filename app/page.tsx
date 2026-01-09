import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Card from '@/components/Card'
import { getUpcomingEvents } from '@/lib/actions/events'

export default async function HomePage() {
  const upcomingEvents = await getUpcomingEvents(1)
  const nextGathering = upcomingEvents[0]

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-navy-dark" />
        <Container className="relative z-10 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-semibold text-4xl md:text-5xl lg:text-6xl mb-4">
              Agape Collective
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-6 font-light">
              A community of young adults growing in faith together.
            </p>
            {nextGathering ? (
              <div className="mb-6 bg-white/10 inline-block px-6 py-3 rounded-soft">
                <p className="text-gold-accent font-medium text-sm mb-1">Next Gathering</p>
                <p className="text-white/90">
                  {new Date(nextGathering.event_date + 'T00:00:00').toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                  })}{' '}
                  at 5:30 PM
                </p>
              </div>
            ) : (
              <div className="mb-6 bg-white/10 inline-block px-6 py-3 rounded-soft">
                <p className="text-gold-accent font-medium text-sm mb-1">Every Other Friday</p>
                <p className="text-white/90">5:30 PM at CM</p>
              </div>
            )}
            <div className="mt-4">
              <Button href="/gather" size="lg">
                Join Us
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision & Mission Section */}
      <Section variant="cream">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <Card className="p-8 md:p-10">
              <h3 className="font-heading font-semibold text-2xl md:text-3xl text-navy-dark mb-6">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                A ministry grounded in worship, discipleship, fellowship, and community service
                where young believers find healing, renewed passion, and leadership to empower the church.
              </p>
            </Card>
            <Card className="p-8 md:p-10">
              <h3 className="font-heading font-semibold text-2xl md:text-3xl text-navy-dark mb-6">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Building bridges across KPCF through faith, fellowship, and worship.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Photo Gallery Placeholder Section */}
      <section className="relative py-16 md:py-24 bg-navy-dark text-warm-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-dark/90 to-navy-dark/80">
          {/* Placeholder background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-3 gap-4 h-full w-full">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="bg-warm-white/20 border-2 border-dashed border-warm-white/30 flex items-center justify-center"
                >
                  <svg
                    className="w-12 h-12 text-warm-white/40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Container className="relative z-10">
          <div className="text-center">
            <p className="text-warm-white/60 text-sm uppercase tracking-wide mb-2">
              Photo Gallery
            </p>
            <p className="text-warm-white/40 text-xs">
              Photos can be added here later
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
