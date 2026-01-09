import { Instagram, Mail } from 'lucide-react'
import Container from '@/components/Container'
import Section from '@/components/Section'
import SectionHeading from '@/components/SectionHeading'
import Card from '@/components/Card'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Connect | Agape Collective',
  description: 'Get connected with Agape Collective. Reach out, join a small group, or follow us on social media.',
}

export default function ConnectPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="dark" className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-semibold text-4xl md:text-5xl text-warm-white mb-6">
              Connect With Us
            </h1>
            <p className="text-xl text-warm-white/80">
              We&apos;d love to hear from you. Reach out anytime.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section variant="cream">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="font-heading font-semibold text-2xl text-navy-dark mb-4">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Have a question? Want to learn more? Just want to say hi?
                Drop us a message and we&apos;ll get back to you.
              </p>
              <Card>
                <ContactForm />
              </Card>
            </div>
            <div>
              <h2 className="font-heading font-semibold text-2xl text-navy-dark mb-4">
                Other Ways to Connect
              </h2>
              <div className="space-y-4">
                <Card hover>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold-accent/10 rounded-full flex items-center justify-center">
                      <Instagram size={24} className="text-navy-light" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-navy-dark">
                        Instagram
                      </h3>
                      <p className="text-gray-500 text-sm">@agapecollectivekpcf</p>
                    </div>
                  </div>
                </Card>
                <Card hover>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold-accent/10 rounded-full flex items-center justify-center">
                      <Mail size={24} className="text-navy-light" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-navy-dark">
                        Email
                      </h3>
                      <p className="text-gray-500 text-sm">agapecollective@kpcf.org</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Newsletter */}
      <Section variant="cream">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy-dark mb-4">
              Stay in the Loop
            </h2>
            <p className="text-gray-600 mb-6">
              Get updates about gatherings, events, and what&apos;s happening in the Hana community.
            </p>
            <Card>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-soft border border-navy-dark/10 bg-warm-white focus:outline-none focus:ring-2 focus:ring-navy-light/20 focus:border-navy-light transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-navy-light text-warm-white rounded-soft font-medium hover:bg-navy-medium transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-gray-500 text-sm mt-3">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  )
}
