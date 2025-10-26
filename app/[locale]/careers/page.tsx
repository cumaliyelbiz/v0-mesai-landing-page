import { CareersClientPage } from "./careers-client"

export function generateStaticParams() {
  return [{ locale: "tr" }, { locale: "en" }]
}

export default function CareersPage() {
  return <CareersClientPage />
}
