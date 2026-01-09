import { Users, Heart, Church } from 'lucide-react'
import Container from '@/components/Container'
import Section from '@/components/Section'
import SectionHeading from '@/components/SectionHeading'
import Card from '@/components/Card'

export const metadata = {
  title: 'About | Hana Community',
  description: 'Learn about Hana Community, a young adult ministry at Korean Presbyterian Church of Fresno.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="dark" className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-semibold text-4xl md:text-5xl text-warm-white mb-6">
              About Hana
            </h1>
            <p className="text-xl text-warm-white/80 font-korean">
              하나 (Hana) means &quot;one&quot; in Korean.
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
              subtitle="A community of young adults finding our place in faith together."
            />
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Hana Community is a young adult ministry at Korean Presbyterian Church of Fresno (KPCF).
                We&apos;re a diverse group of people in our 20s and 30s — from high school graduates to
                young professionals — all figuring out life, faith, and community together.
              </p>
              <p>
                Our name, Hana (하나), means &quot;one&quot; in Korean. It reflects our heart: to be
                united as one family, bridging generations and cultures within our church and beyond.
              </p>
              <p>
                Whether you grew up in church or you&apos;re just curious about faith, whether you&apos;re
                Korean or from any other background — you&apos;re welcome here. We don&apos;t have it
                all figured out. We&apos;re just trying to walk this journey together.
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
              Who Is Hana For?
            </h2>
            <p className="text-lg text-gray-600">
              For young adults from high school graduation through their 30s — and anyone young
              at heart who wants to grow alongside us.
            </p>
          </div>
        </Container>
      </Section>

      {/* Why Hana */}
      <Section variant="cream">
        <Container>
          <SectionHeading
            title="Why Hana?"
            subtitle="The meaning behind our name."
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="text-center">
              <div className="text-4xl font-korean text-navy-dark mb-4">하나</div>
              <h3 className="font-heading font-semibold text-lg text-navy-dark mb-2">
                One
              </h3>
              <p className="text-gray-600 text-sm">
                United as one community, regardless of background or where you are in your faith journey.
              </p>
            </Card>
            <Card className="text-center">
              <div className="w-12 h-12 bg-gold-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={24} className="text-navy-light" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-navy-dark mb-2">
                One Heart
              </h3>
              <p className="text-gray-600 text-sm">
                Sharing life, struggles, and joys with one heart and one purpose.
              </p>
            </Card>
            <Card className="text-center">
              <div className="w-12 h-12 bg-gold-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Church size={24} className="text-navy-light" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-navy-dark mb-2">
                One Church
              </h3>
              <p className="text-gray-600 text-sm">
                Bridging generations and cultures as one body within KPCF.
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
            subtitle="The team behind Hana Community."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Placeholder leadership cards */}
            {[1, 2, 3].map((i) => (
              <Card key={i} className="text-center">
                <div className="w-20 h-20 bg-cream rounded-full mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-lg text-navy-dark mb-1">
                  Leader Name
                </h3>
                <p className="text-gray-500 text-sm">Role / Title</p>
              </Card>
            ))}
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
              Hana Community is a ministry of Korean Presbyterian Church of Fresno.
              We&apos;re grateful to be part of a church that invests in the next generation
              and supports our vision for young adult community.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
