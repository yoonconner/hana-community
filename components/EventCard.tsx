import { Calendar, Clock, MapPin } from 'lucide-react'
import type { Event } from '@/lib/types'
import Card from './Card'

interface EventCardProps {
  event: Event
  onClick?: () => void
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

export default function EventCard({ event, onClick }: EventCardProps) {
  return (
    <Card hover className="cursor-pointer" onClick={onClick}>
      <h3 className="font-heading font-semibold text-lg text-navy-dark mb-3">
        {event.title}
      </h3>

      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-navy-light" />
          <span>{formatDate(event.event_date)}</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock size={16} className="text-navy-light" />
          <span>
            {formatTime(event.start_time)}
            {event.end_time && ` - ${formatTime(event.end_time)}`}
          </span>
        </div>

        {event.location && (
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-navy-light" />
            <span>{event.location}</span>
          </div>
        )}
      </div>

      {event.description && (
        <p className="mt-4 text-gray-600 text-sm line-clamp-2">
          {event.description}
        </p>
      )}
    </Card>
  )
}
