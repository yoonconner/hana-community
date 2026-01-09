import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin | Agape Collective',
  description: 'Admin dashboard for Agape Collective',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-cream">
      {children}
    </div>
  )
}
