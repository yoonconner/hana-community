'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import type { Event } from '@/lib/types'

// Demo events for when Supabase isn't configured
const demoEvents: Event[] = [
  {
    id: '1',
    title: 'Agape Collective Gathering',
    description: 'Join us for our bi-weekly gathering! Food, fellowship, and faith.',
    event_date: '2026-01-16',
    start_time: '17:30',
    end_time: '20:00',
    location: 'CM',
    is_recurring: true,
    recurrence_pattern: 'bi-weekly',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Agape Collective Gathering',
    description: 'Join us for our bi-weekly gathering! Food, fellowship, and faith.',
    event_date: '2026-01-30',
    start_time: '17:30',
    end_time: '20:00',
    location: 'CM',
    is_recurring: true,
    recurrence_pattern: 'bi-weekly',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Agape Collective Gathering',
    description: 'Join us for our bi-weekly gathering! Food, fellowship, and faith.',
    event_date: '2026-02-13',
    start_time: '17:30',
    end_time: '20:00',
    location: 'CM',
    is_recurring: true,
    recurrence_pattern: 'bi-weekly',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Agape Collective Gathering',
    description: 'Join us for our bi-weekly gathering! Food, fellowship, and faith.',
    event_date: '2026-02-27',
    start_time: '17:30',
    end_time: '20:00',
    location: 'CM',
    is_recurring: true,
    recurrence_pattern: 'bi-weekly',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
]

export async function getEvents(): Promise<Event[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return demoEvents
  }

  const supabase = await createClient()

  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('event_date', { ascending: true })

  if (error) {
    console.error('Error fetching events:', error)
    return demoEvents
  }

  return data || []
}

export async function getUpcomingEvents(limit = 5): Promise<Event[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    const today = new Date().toISOString().split('T')[0]
    return demoEvents.filter(e => e.event_date >= today).slice(0, limit)
  }

  const supabase = await createClient()
  const today = new Date().toISOString().split('T')[0]

  const { data, error } = await supabase
    .from('events')
    .select('*')
    .gte('event_date', today)
    .order('event_date', { ascending: true })
    .limit(limit)

  if (error) {
    console.error('Error fetching upcoming events:', error)
    return demoEvents.filter(e => e.event_date >= today).slice(0, limit)
  }

  return data || []
}

export async function getEventById(id: string): Promise<Event | null> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching event:', error)
    return null
  }

  return data
}

export async function createEvent(eventData: Omit<Event, 'id' | 'created_at' | 'updated_at'>): Promise<Event | null> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('events')
    .insert([eventData])
    .select()
    .single()

  if (error) {
    console.error('Error creating event:', error)
    throw new Error('Failed to create event')
  }

  revalidatePath('/')
  revalidatePath('/gather')
  revalidatePath('/admin/events')

  return data
}

export async function updateEvent(id: string, eventData: Partial<Event>): Promise<Event | null> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('events')
    .update({ ...eventData, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating event:', error)
    throw new Error('Failed to update event')
  }

  revalidatePath('/')
  revalidatePath('/gather')
  revalidatePath('/admin/events')

  return data
}

export async function deleteEvent(id: string): Promise<boolean> {
  const supabase = await createClient()

  const { error } = await supabase
    .from('events')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting event:', error)
    throw new Error('Failed to delete event')
  }

  revalidatePath('/')
  revalidatePath('/gather')
  revalidatePath('/admin/events')

  return true
}
