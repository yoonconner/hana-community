'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Event } from '@/lib/types'
import EventModal from './EventModal'

interface CalendarProps {
  events: Event[]
  className?: string
}

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay()
}

function formatDate(year: number, month: number, day: number): string {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

export default function Calendar({ events, className = '' }: CalendarProps) {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  const daysInMonth = getDaysInMonth(currentYear, currentMonth)
  const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth)

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const getEventsForDate = (day: number): Event[] => {
    const dateStr = formatDate(currentYear, currentMonth, day)
    return events.filter(event => event.event_date === dateStr)
  }

  const isToday = (day: number): boolean => {
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    )
  }

  // Generate calendar grid
  const calendarDays: (number | null)[] = []

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null)
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day)
  }

  return (
    <>
      <div className={`bg-warm-white rounded-softer shadow-soft overflow-hidden ${className}`}>
        {/* Header */}
        <div className="bg-navy-dark text-warm-white px-4 py-4 flex items-center justify-between">
          <button
            onClick={goToPreviousMonth}
            className="p-2 hover:bg-warm-white/10 rounded-soft transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft size={20} />
          </button>
          <h2 className="font-heading font-medium text-lg">
            {MONTHS[currentMonth]} {currentYear}
          </h2>
          <button
            onClick={goToNextMonth}
            className="p-2 hover:bg-warm-white/10 rounded-soft transition-colors"
            aria-label="Next month"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Days of week header */}
        <div className="grid grid-cols-7 bg-cream border-b border-navy-dark/10">
          {DAYS.map(day => (
            <div
              key={day}
              className="py-3 text-center text-sm font-medium text-navy-dark/70"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7">
          {calendarDays.map((day, index) => {
            const dayEvents = day ? getEventsForDate(day) : []
            const hasEvents = dayEvents.length > 0

            return (
              <div
                key={index}
                className={`min-h-[80px] md:min-h-[100px] p-1 md:p-2 border-b border-r border-navy-dark/5 ${
                  day === null ? 'bg-cream/50' : 'bg-warm-white'
                }`}
              >
                {day !== null && (
                  <>
                    <div
                      className={`text-sm font-medium mb-1 w-7 h-7 flex items-center justify-center rounded-full ${
                        isToday(day)
                          ? 'bg-navy-light text-warm-white'
                          : 'text-navy-dark'
                      }`}
                    >
                      {day}
                    </div>
                    {hasEvents && (
                      <div className="space-y-1">
                        {dayEvents.slice(0, 2).map(event => (
                          <button
                            key={event.id}
                            onClick={() => setSelectedEvent(event)}
                            className="w-full text-left text-xs bg-gold-accent/20 text-navy-dark px-2 py-1 rounded truncate hover:bg-gold-accent/30 transition-colors"
                          >
                            {event.title}
                          </button>
                        ))}
                        {dayEvents.length > 2 && (
                          <span className="text-xs text-navy-dark/60">
                            +{dayEvents.length - 2} more
                          </span>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Event Modal */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </>
  )
}
