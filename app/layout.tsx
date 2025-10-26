import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mesai - Yakınınızda İş Bulun",
  description: "Lokasyon bazlı günlük iş platformu - İş arayanları ve işverenleri gerçek zamanlı buluşturur",
  generator: "v0.app",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const messages = await getMessages()

  return (
    <html lang="tr">
      <body className={`font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
