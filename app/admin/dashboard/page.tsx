import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Calendar, MessageSquare, Plus, LogOut } from 'lucide-react'
import { createClient } from '@/lib/supabase/server'
import { getEvents } from '@/lib/actions/events'
import { getContactSubmissions } from '@/lib/actions/contact'
import Container from '@/components/Container'
import Card from '@/components/Card'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import AdminEventList from './AdminEventList'
import AdminLogoutButton from './AdminLogoutButton'

export default async function AdminDashboard() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/admin/login')
  }

  const events = await getEvents()
  const contacts = await getContactSubmissions()
  const unreadContacts = contacts.filter((c) => !c.is_read)

  return (
    <div className="min-h-screen">
      {/* Admin Header */}
      <header className="bg-navy-dark text-warm-white py-4">
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Logo size={40} />
              <div>
                <h1 className="font-heading font-semibold">Admin Dashboard</h1>
                <p className="text-sm text-warm-white/60">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-warm-white/70 hover:text-warm-white text-sm transition-colors"
              >
                View Site
              </Link>
              <AdminLogoutButton />
            </div>
          </div>
        </Container>
      </header>

      {/* Dashboard Content */}
      <Container className="py-8">
        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gold-accent/10 rounded-full flex items-center justify-center">
                <Calendar size={24} className="text-navy-light" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Total Events</p>
                <p className="font-heading font-semibold text-2xl text-navy-dark">
                  {events.length}
                </p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gold-accent/10 rounded-full flex items-center justify-center">
                <MessageSquare size={24} className="text-navy-light" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Contact Submissions</p>
                <p className="font-heading font-semibold text-2xl text-navy-dark">
                  {contacts.length}
                  {unreadContacts.length > 0 && (
                    <span className="text-sm font-normal text-gold-accent ml-2">
                      ({unreadContacts.length} new)
                    </span>
                  )}
                </p>
              </div>
            </div>
          </Card>
          <Card className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between h-full">
              <div>
                <p className="text-gray-500 text-sm mb-1">Quick Actions</p>
                <p className="text-navy-dark font-medium">Create new event</p>
              </div>
              <Button href="/admin/events/new" size="sm">
                <Plus size={16} className="mr-1" />
                Add Event
              </Button>
            </div>
          </Card>
        </div>

        {/* Events Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading font-semibold text-xl text-navy-dark">
              Events
            </h2>
            <Button href="/admin/events/new" variant="secondary" size="sm">
              <Plus size={16} className="mr-1" />
              Add Event
            </Button>
          </div>
          <AdminEventList events={events} />
        </div>

        {/* Recent Contacts */}
        <div>
          <h2 className="font-heading font-semibold text-xl text-navy-dark mb-4">
            Recent Contact Submissions
          </h2>
          {contacts.length === 0 ? (
            <Card>
              <p className="text-gray-500 text-center py-4">
                No contact submissions yet.
              </p>
            </Card>
          ) : (
            <div className="space-y-4">
              {contacts.slice(0, 5).map((contact) => (
                <Card key={contact.id}>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-navy-dark">{contact.name}</p>
                        {!contact.is_read && (
                          <span className="bg-gold-accent/20 text-navy-dark text-xs px-2 py-0.5 rounded-full">
                            New
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{contact.email}</p>
                      <p className="text-gray-600">{contact.message}</p>
                    </div>
                    <p className="text-xs text-gray-400">
                      {new Date(contact.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}
