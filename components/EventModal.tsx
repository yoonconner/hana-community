'use client'

import { useEffect } from 'react'
import { X, Calendar, Clock, MapPin } from 'lucide-react'
import type { Event } from '@/lib/types'

interface EventModalProps {
  event: Event | null
  onClose: () => void
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
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

export default function EventModal({ event, onClose }: EventModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (event) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [event])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  if (!event) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* Modal */}
      <div
        className="relative bg-warm-white rounded-softer shadow-soft-lg max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-navy-dark text-warm-white px-6 py-4 flex items-start justify-between rounded-t-softer">
          <h2 className="font-heading font-semibold text-xl pr-8">
            {event.title}
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-warm-white/10 rounded-soft transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-navy-dark">
              <Calendar size={20} className="text-navy-light flex-shrink-0" />
              <span>{formatDate(event.event_date)}</span>
            </div>

            <div className="flex items-center gap-3 text-navy-dark">
              <Clock size={20} className="text-navy-light flex-shrink-0" />
              <span>
                {formatTime(event.start_time)}
                {event.end_time && ` - ${formatTime(event.end_time)}`}
              </span>
            </div>

            {event.location && (
              <div className="flex items-center gap-3 text-navy-dark">
                <MapPin size={20} className="text-navy-light flex-shrink-0" />
                <span>{event.location}</span>
              </div>
            )}
          </div>

          {event.description && (
            <div className="mt-6 pt-6 border-t border-navy-dark/10">
              <h3 className="font-heading font-medium text-sm text-navy-dark/70 uppercase tracking-wide mb-2">
                Details
              </h3>
              <p className="text-navy-dark/80 whitespace-pre-line">
                {event.description}
              </p>
            </div>
          )}

          {event.is_recurring && (
            <div className="mt-4 bg-gold-accent/10 text-navy-dark px-4 py-2 rounded-soft text-sm">
              This is a recurring event ({event.recurrence_pattern})
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
