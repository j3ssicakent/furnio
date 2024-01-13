import type { Metadata } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import './globals.css'


export const metadata: Metadata = {
  title: 'Furnio',
}


const primary = Montserrat({
  weight: ["400", "600", "700"],
  subsets: ['latin'],
  variable: '--font-primary',
  display: 'swap',
})

const secondary = Poppins({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-secondary',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`h-full ${primary.variable} ${secondary.variable}`}> 
        {children}
      </body>
    </html>
  )
}
