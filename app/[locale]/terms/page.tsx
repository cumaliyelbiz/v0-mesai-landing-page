import { TermsPageClient } from "./TermsPageClient"

export async function generateStaticParams() {
  return [{ locale: "tr" }, { locale: "en" }]
}

export default function TermsPage() {
  return <TermsPageClient />
}
