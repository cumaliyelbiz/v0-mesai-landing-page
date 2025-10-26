import ServicesClientPage from "./servicesClientPage"

export function generateStaticParams() {
  return [{ locale: "tr" }, { locale: "en" }]
}

export default function ServicesPage() {
  return <ServicesClientPage />
}
