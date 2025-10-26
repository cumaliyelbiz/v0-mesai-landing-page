import { ContactPageClient } from "./contact-client"

export function generateStaticParams() {
  return [{ locale: "tr" }, { locale: "en" }]
}

export default function ContactPage() {
  return <ContactPageClient />
}
