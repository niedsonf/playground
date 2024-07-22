import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import '@/styles/side-menu.css'
import '@/styles/board.css'
import { SideMenu } from '@/components/side-menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Playground',
  description: 'Fun page to play around with Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='h-screen grid place-items-center bg-gray-900 relative'>
          <SideMenu />
          {children}
        </main>
      </body>
    </html>
  )
}
