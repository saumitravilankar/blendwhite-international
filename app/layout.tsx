import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'

import Footer from '@/components/footer'
import { Navbar } from '@/components/navbar'

const font = Outfit({ weight: "variable", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BlendWhite International Pvt. Ltd.',
  description: "India's First Plant-Powered Milk",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${font.className} bg-backgroundColor`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
