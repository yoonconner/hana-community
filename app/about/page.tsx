import { Users, Heart, Church } from 'lucide-react'
import Container from '@/components/Container'
import Section from '@/components/Section'
import SectionHeading from '@/components/SectionHeading'
import Card from '@/components/Card'

export const metadata = {
  title: 'About | Agape Collective',
  description: 'Learn about Agape Collective, a young adult ministry at Korean Presbyterian Church of Fresno.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="dark" className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-semibold text-4xl md:text-5xl text-warm-white mb-6">
              About Agape
            </h1>
            <p className="text-xl text-warm-white/80">
              Agape (ἀγάπη) — Unconditional love.
            </p>
          </div>
        </Container>
      </Section>

      {/* Who We Are */}
      <Section variant="cream">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Who We Are"
              subtitle="A young adult ministry at Korean Presbyterian Church of Fresno."
            />
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Agape Collective exists to create a Christ-centered space where young adults can
                grow in faith, build genuine relationships, and discover their place in the church.
              </p>
              <p>
                Our name comes from the Greek word ἀγάπη (agape) — unconditional, selfless love.
                It&apos;s the kind of love God shows us, and it&apos;s the foundation of everything we do.
                We strive to love one another deeply and create a space where everyone feels valued.
              </p>
              <p>
                We don&apos;t have it all figured out. We&apos;re simply walking this journey of
                faith together — learning, growing, and supporting one another along the way.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Age Group */}
      <Section variant="light">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-gold-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={32} className="text-navy-light" />
            </div>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy-dark mb-4">
              Who Is Agape For?
            </h2>
            <p className="text-lg text-gray-600">
              For any young adults from high school graduates to 40 who feel the need for a
              community, restoration, and growth in faith. We also celebrate when members are
              ready to step into broader church ministry beyond Young Adults.
            </p>
          </div>
        </Container>
      </Section>

      {/* Why Agape */}
      <Section variant="cream">
        <Container>
          <SectionHeading
            title="Why Agape?"
            subtitle="The meaning behind our name."
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="text-center">
              <div className="text-4xl text-navy-dark mb-4">ἀγάπη</div>
              <h3 className="font-heading font-semibold text-lg text-navy-dark mb-2">
                Unconditional Love
              </h3>
              <p className="text-gray-600 text-sm">
                The highest form of love — selfless, sacrificial, and unconditional.
              </p>
            </Card>
            <Card className="text-center">
              <div className="w-12 h-12 bg-gold-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={24} className="text-navy-light" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-navy-dark mb-2">
                Community
              </h3>
              <p className="text-gray-600 text-sm">
                Sharing life, struggles, and joys together as a family.
              </p>
            </Card>
            <Card className="text-center">
              <div className="w-12 h-12 bg-gold-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Church size={24} className="text-navy-light" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-navy-dark mb-2">
                Christ-Centered
              </h3>
              <p className="text-gray-600 text-sm">
                Rooted in Christ&apos;s love, serving KPCF and our community.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Leadership */}
      <Section variant="light">
        <Container>
          <SectionHeading
            title="Leadership"
            subtitle="The team behind Agape Collective."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <div className="w-20 h-20 bg-cream rounded-full mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-lg text-navy-dark mb-1">Sam Seong</h3>
              <p className="text-gray-500 text-sm">Pastor</p>
            </Card>
            <Card className="text-center">
              <div className="w-20 h-20 bg-cream rounded-full mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-lg text-navy-dark mb-1">John Park</h3>
              <p className="text-gray-500 text-sm">Leader (Deacon)</p>
            </Card>
            <Card className="text-center">
              <div className="w-20 h-20 bg-cream rounded-full mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-lg text-navy-dark mb-1">Yoon Conner</h3>
              <p className="text-gray-500 text-sm">Leader</p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Connection to KPCF */}
      <Section variant="dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-warm-white mb-4">
              Part of KPCF
            </h2>
            <p className="text-warm-white/80 text-lg">
              Agape Collective is a ministry of Korean Presbyterian Church of Fresno.
              We&apos;re grateful to be part of a church that invests in the next generation
              and supports our vision for young adult community.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
