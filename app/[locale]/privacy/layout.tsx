import type React from "react"
import type { Locale } from "@/i18n/config"

export function generateStaticParams() {
  return [{ locale: "tr" }, { locale: "en" }]
}

export default function PrivacyLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  return <>{children}</>
}
