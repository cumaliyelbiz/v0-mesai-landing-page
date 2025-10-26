import CookiesClientPage from "./CookiesClientPage"

export function generateStaticParams() {
  return [{ locale: "tr" }, { locale: "en" }]
}

export default function CookiesPage() {
  return <CookiesClientPage />
}
