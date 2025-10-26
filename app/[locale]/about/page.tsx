import AboutPageClient from "./about-page-client"

export function generateStaticParams() {
  return [{ locale: "tr" }, { locale: "en" }]
}

export default function AboutPage() {
  return <AboutPageClient />
}
