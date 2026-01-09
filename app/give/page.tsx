import { Heart, ExternalLink } from 'lucide-react'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'

export const metadata = {
  title: 'Give | Hana Community',
  description: 'Support Hana Community through generous giving. Every gift makes a difference.',
}

export default function GivePage() {
  return (
    <>
      {/* Hero */}
      <Section variant="dark" className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-semibold text-4xl md:text-5xl text-warm-white mb-6">
              Give
            </h1>
            <p className="text-xl text-warm-white/80">
              Generosity changes lives — including our own.
            </p>
          </div>
        </Container>
      </Section>

      {/* Why Give */}
      <Section variant="cream">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-gold-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart size={32} className="text-navy-light" />
            </div>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy-dark mb-6">
              Why We Give
            </h2>
            <div className="text-gray-600 space-y-4 text-lg">
              <p>
                Giving is an act of worship and trust. When we give, we acknowledge
                that everything we have comes from God and that we want to be part
                of what He&apos;s doing in the world.
              </p>
              <p>
                Your generosity helps us create space for community, provide food
                at gatherings, support events, and invest in the lives of young adults
                in our church and beyond.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* How to Give */}
      <Section variant="light">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy-dark mb-8 text-center">
              How to Give
            </h2>
            <div className="space-y-6">
              <Card>
                <h3 className="font-heading font-semibold text-xl text-navy-dark mb-4">
                  Online Giving
                </h3>
                <p className="text-gray-600 mb-4">
                  Give securely online through KPCF&apos;s giving platform.
                  Select &quot;Hana Community&quot; in the fund dropdown to designate
                  your gift to our ministry.
                </p>
                <Button href="#" variant="primary">
                  Give Online
                  <ExternalLink size={16} className="ml-2" />
                </Button>
              </Card>

              <Card>
                <h3 className="font-heading font-semibold text-xl text-navy-dark mb-4">
                  In-Person Giving
                </h3>
                <p className="text-gray-600">
                  You can also give in person during KPCF Sunday services or at
                  Hana Community gatherings. Just mark your envelope or giving
                  form with &quot;Hana Community&quot;.
                </p>
              </Card>

              <Card>
                <h3 className="font-heading font-semibold text-xl text-navy-dark mb-4">
                  Other Ways to Give
                </h3>
                <p className="text-gray-600">
                  Interested in giving stock, setting up recurring gifts, or other
                  giving options? Contact us and we&apos;ll help you find the best
                  way to support our ministry.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Part of KPCF */}
      <Section variant="cream">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading font-semibold text-xl text-navy-dark mb-4">
              Part of KPCF
            </h2>
            <p className="text-gray-600">
              Hana Community is a ministry of Korean Presbyterian Church of Fresno.
              All gifts are tax-deductible and go through KPCF&apos;s giving system.
              Thank you for your generosity!
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
