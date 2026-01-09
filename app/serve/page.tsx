import { Music, Utensils, Camera, Heart, Mic, BookOpen } from 'lucide-react'
import Container from '@/components/Container'
import Section from '@/components/Section'
import SectionHeading from '@/components/SectionHeading'
import Card from '@/components/Card'
import Button from '@/components/Button'

export const metadata = {
  title: 'Serve | Hana Community',
  description: 'Find serving opportunities with Hana Community. Use your gifts to make an impact.',
}

const teams = [
  {
    icon: Music,
    name: 'Worship Team',
    description: 'Lead others in worship through music. Vocalists and instrumentalists welcome.',
  },
  {
    icon: Utensils,
    name: 'Hospitality Team',
    description: 'Help with food, setup, and making everyone feel welcome.',
  },
  {
    icon: Camera,
    name: 'Media Team',
    description: 'Capture moments, create content, and help share our story.',
  },
  {
    icon: Mic,
    name: 'Tech Team',
    description: 'Run sound, slides, and technical aspects of our gatherings.',
  },
  {
    icon: BookOpen,
    name: 'Small Group Leaders',
    description: 'Facilitate meaningful conversations and lead a small group.',
  },
  {
    icon: Heart,
    name: 'Care Team',
    description: 'Check in on members, provide support, and help people feel seen.',
  },
]

export default function ServePage() {
  return (
    <>
      {/* Hero */}
      <Section variant="dark" className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-semibold text-4xl md:text-5xl text-warm-white mb-6">
              Serve With Us
            </h1>
            <p className="text-xl text-warm-white/80">
              We believe everyone has something to offer.
            </p>
          </div>
        </Container>
      </Section>

      {/* Why Serve */}
      <Section variant="cream">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy-dark mb-6">
              Why Serve?
            </h2>
            <div className="text-gray-600 space-y-4 text-lg">
              <p>
                Serving isn&apos;t about being perfect or having all the skills.
                It&apos;s about showing up, using what you have, and being part of
                something bigger than yourself.
              </p>
              <p>
                When we serve together, we grow together. We build relationships,
                discover our gifts, and make a real impact in our community.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Teams */}
      <Section variant="light">
        <Container>
          <SectionHeading
            title="Ministry Teams"
            subtitle="Find a place where your gifts can shine."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teams.map((team) => (
              <Card key={team.name} hover>
                <div className="w-12 h-12 bg-gold-accent/10 rounded-full flex items-center justify-center mb-4">
                  <team.icon size={24} className="text-navy-light" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-navy-dark mb-2">
                  {team.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {team.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Interest Form */}
      <Section variant="cream">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy-dark mb-4">
              Interested in Serving?
            </h2>
            <p className="text-gray-600 mb-8">
              Let us know what you&apos;re interested in and we&apos;ll connect you with a team.
              No experience necessary — just a willing heart.
            </p>
            <Card>
              <form className="space-y-6 text-left">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-navy-dark mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-soft border border-navy-dark/10 bg-warm-white focus:outline-none focus:ring-2 focus:ring-navy-light/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-dark mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-soft border border-navy-dark/10 bg-warm-white focus:outline-none focus:ring-2 focus:ring-navy-light/20"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-dark mb-2">
                    Which team(s) interest you?
                  </label>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {teams.map((team) => (
                      <label key={team.name} className="flex items-center gap-2 text-gray-600">
                        <input type="checkbox" className="rounded" />
                        {team.name}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-dark mb-2">
                    Tell us a bit about yourself
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 rounded-soft border border-navy-dark/10 bg-warm-white focus:outline-none focus:ring-2 focus:ring-navy-light/20 resize-none"
                    placeholder="Any experience, skills, or just what excites you..."
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit Interest
                </Button>
              </form>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  )
}
