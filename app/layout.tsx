import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import { Navbar } from '@/components/navbar'
import { WhatsAppButton } from '@/components/whatsapp-button'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'مكتب الركيزة القانونية | استشارات قانونية بالرياض',
  description: 'مكتب متخصص في القضايا المدنية والتجارية وتأسيس الشركات. خبرة أكثر من 10 سنوات في تمثيل العملاء بكفاءة واحترافية',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
