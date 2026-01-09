'use server'

import { createClient } from '@/lib/supabase/server'

interface ContactData {
  name: string
  email: string
  message: string
}

export async function submitContact(data: ContactData): Promise<void> {
  const supabase = await createClient()

  const { error } = await supabase
    .from('contact_submissions')
    .insert([data])

  if (error) {
    console.error('Error submitting contact form:', error)
    throw new Error('Failed to submit contact form')
  }
}

export async function getContactSubmissions() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching contact submissions:', error)
    return []
  }

  return data || []
}

export async function markAsRead(id: string): Promise<void> {
  const supabase = await createClient()

  const { error } = await supabase
    .from('contact_submissions')
    .update({ is_read: true })
    .eq('id', id)

  if (error) {
    console.error('Error marking submission as read:', error)
    throw new Error('Failed to mark as read')
  }
}
