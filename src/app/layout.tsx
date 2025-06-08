import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DSA Visualizer',
  description: 'Data Structures and Algorithms Visualizer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}