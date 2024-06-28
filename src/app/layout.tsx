import './globals.css'

export const metadata = {
  title: 'Locksmite Locksmiths',
  description: 'Locksmiths is a family-owned locksmith business in the heart of san franisco.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
