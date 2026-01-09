'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import Button from './Button'
import { submitContact } from '@/lib/actions/contact'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    try {
      await submitContact({ name, email, message })
      setIsSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
        <h3 className="font-heading font-semibold text-xl text-navy-dark mb-2">
          Message Sent!
        </h3>
        <p className="text-gray-600">
          Thanks for reaching out. We&apos;ll get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-navy-dark mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-soft border border-navy-dark/10 bg-warm-white focus:outline-none focus:ring-2 focus:ring-navy-light/20 focus:border-navy-light transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-navy-dark mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-soft border border-navy-dark/10 bg-warm-white focus:outline-none focus:ring-2 focus:ring-navy-light/20 focus:border-navy-light transition-colors"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-navy-dark mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 rounded-soft border border-navy-dark/10 bg-warm-white focus:outline-none focus:ring-2 focus:ring-navy-light/20 focus:border-navy-light transition-colors resize-none"
          placeholder="How can we help you?"
        />
      </div>

      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            Send Message
            <Send size={16} className="ml-2" />
          </>
        )}
      </Button>
    </form>
  )
}
