import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin | Hana Community',
  description: 'Admin dashboard for Hana Community',
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
