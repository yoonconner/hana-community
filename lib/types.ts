export interface Event {
  id: string
  title: string
  description: string | null
  event_date: string
  start_time: string
  end_time: string | null
  location: string | null
  is_recurring: boolean
  recurrence_pattern: string | null
  created_at: string
  updated_at: string
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  message: string
  created_at: string
  is_read: boolean
}

export interface AdminUser {
  id: string
  email: string
  role: string
  created_at: string
}
