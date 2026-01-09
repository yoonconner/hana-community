'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Pencil, Trash2, Calendar, Clock, MapPin } from 'lucide-react'
import type { Event } from '@/lib/types'
import { deleteEvent } from '@/lib/actions/events'
import Card from '@/components/Card'
import Button from '@/components/Button'

interface AdminEventListProps {
  events: Event[]
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function formatTime(timeStr: string): string {
  const [hours, minutes] = timeStr.split(':')
  const hour = parseInt(hours, 10)
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour % 12 || 12
  return `${displayHour}:${minutes} ${ampm}`
}

export default function AdminEventList({ events }: AdminEventListProps) {
  const [deletingId, setDeletingId] = useState<string | null>(null)

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return

    setDeletingId(id)
    try {
      await deleteEvent(id)
    } catch (error) {
      alert('Failed to delete event')
    } finally {
      setDeletingId(null)
    }
  }

  if (events.length === 0) {
    return (
      <Card>
        <p className="text-gray-500 text-center py-4">
          No events yet. Create your first event!
        </p>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <Card key={event.id}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex-grow">
              <h3 className="font-heading font-semibold text-lg text-navy-dark mb-2">
                {event.title}
              </h3>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{formatDate(event.event_date)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{formatTime(event.start_time)}</span>
                </div>
                {event.location && (
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{event.location}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href={`/admin/events/${event.id}/edit`}
                className="p-2 text-navy-light hover:bg-cream rounded-soft transition-colors"
              >
                <Pencil size={18} />
              </Link>
              <button
                onClick={() => handleDelete(event.id)}
                disabled={deletingId === event.id}
                className="p-2 text-red-500 hover:bg-red-50 rounded-soft transition-colors disabled:opacity-50"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
