'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getEventById, updateEvent } from '@/lib/actions/events'
import type { Event } from '@/lib/types'
import Container from '@/components/Container'
import Card from '@/components/Card'
import Button from '@/components/Button'
import Logo from '@/components/Logo'

export default function EditEventPage() {
  const router = useRouter()
  const params = useParams()
  const eventId = params.id as string

  const [event, setEvent] = useState<Event | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadEvent() {
      const data = await getEventById(eventId)
      setEvent(data)
      setIsLoading(false)
    }
    loadEvent()
  }, [eventId])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    try {
      await updateEvent(eventId, {
        title: formData.get('title') as string,
        description: formData.get('description') as string || null,
        event_date: formData.get('event_date') as string,
        start_time: formData.get('start_time') as string,
        end_time: formData.get('end_time') as string || null,
        location: formData.get('location') as string || null,
        is_recurring: formData.get('is_recurring') === 'on',
        recurrence_pattern: formData.get('recurrence_pattern') as string || null,
      })

      router.push('/admin/dashboard')
    } catch (err) {
      setError('Failed to update event. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    )
  }

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <p className="text-gray-500">Event not found.</p>
          <Link href="/admin/dashboard" className="text-navy-light mt-4 inline-block">
            Back to Dashboard
          </Link>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-navy-dark text-warm-white py-4">
        <Container>
          <div className="flex items-center gap-4">
            <Logo variant="icon" colorMode="light" />
            <div>
              <h1 className="font-heading font-semibold">Edit Event</h1>
            </div>
          </div>
        </Container>
      </header>

      <Container className="py-8">
        <Link
          href="/admin/dashboard"
          className="inline-flex items-center text-navy-dark hover:text-navy-light mb-6 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Dashboard
        </Link>

        <Card className="max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-navy-dark mb-2">
                Title *
              </label>
              <input
                type="text"
                name="title"
                required
                defaultValue={event.title}
                className="w-full px-4 py-3 rounded-soft border border-navy-dark/10 bg-warm-white focus:outline-none focus:ring-2 focus:ring-navy-light/20"
                placeholder="Event title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-dark mb-2">
                Description
              </label>
              <textarea
                name="description"
                rows={3}
                defaultValue={event.description || ''}
                className="w-full px-4 py-3 rounded-soft border border-navy-dark/10 bg-warm-white focus:outline-none focus:ring-2 focus:ring-navy-light/20 resize-none"
                placeholder="Event description"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-navy-dark mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  name="event_date"
                  required
                  defaultValue={event.event_date}
                  className="w-full px-4 py-3 rounded-soft border border-navy-dark/10 bg-warm-white focus:outline-none focus:ring-2 focus:ring-navy-light/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-dark mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  defaultValue={event.location || ''}
                  className="w-full px-4 py-3 rounded-soft border border-navy-dark/10 bg-warm-white focus:outline-none focus:ring-2 focus:ring-navy-light/20"
                  placeholder="e.g., CM"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-navy-dark mb-2">
                  Start Time *
                </label>
                <input
                  type="time"
                  name="start_time"
                  required
                  defaultValue={event.start_time}
                  className="w-full px-4 py-3 rounded-soft border border-navy-dark/10 bg-warm-white focus:outline-none focus:ring-2 focus:ring-navy-light/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-dark mb-2">
                  End Time
                </label>
                <input
                  type="time"
                  name="end_time"
                  defaultValue={event.end_time || ''}
                  className="w-full px-4 py-3 rounded-soft border border-navy-dark/10 bg-warm-white focus:outline-none focus:ring-2 focus:ring-navy-light/20"
                />
              </div>
            </div>

            <div className="border-t border-navy-dark/10 pt-6">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="is_recurring"
                  defaultChecked={event.is_recurring}
                  className="w-4 h-4 rounded"
                />
                <span className="text-sm font-medium text-navy-dark">
                  This is a recurring event
                </span>
              </label>
              <div className="mt-3 ml-7">
                <input
                  type="text"
                  name="recurrence_pattern"
                  defaultValue={event.recurrence_pattern || ''}
                  className="w-full px-4 py-3 rounded-soft border border-navy-dark/10 bg-warm-white focus:outline-none focus:ring-2 focus:ring-navy-light/20"
                  placeholder="e.g., bi-weekly, weekly, monthly"
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm bg-red-50 px-4 py-2 rounded-soft">
                {error}
              </div>
            )}

            <div className="flex gap-4">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Saving...' : 'Save Changes'}
              </Button>
              <Button
                type="button"
                variant="ghost"
                onClick={() => router.push('/admin/dashboard')}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      </Container>
    </div>
  )
}
