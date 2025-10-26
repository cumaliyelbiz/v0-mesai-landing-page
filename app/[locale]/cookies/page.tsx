"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Cookie } from "lucide-react"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import { Locale } from "@/i18n/config"

function getLocaleFromCookie(): Locale {
  if (typeof document === "undefined") return "tr"
  const cookie = document.cookie.split("; ").find((row) => row.startsWith("NEXT_LOCALE="))
  return (cookie?.split("=")[1] as Locale) || "tr"
}

export default function CookiesPage() {
  const t = useTranslations("cookies")
  const [locale, setLocale] = useState<Locale>("tr")

  useEffect(() => {
    setLocale(getLocaleFromCookie())
  }, [])
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation locale={locale} />

      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-4 py-2 text-sm font-medium text-neon">
                <Cookie className="h-4 w-4" />
                <span>{t("badge")}</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance">{t("title")}</h1>

              <p className="text-muted-foreground">{t("lastUpdated")}</p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8 text-foreground">
              <section className="space-y-4">
                <h2 className="text-3xl font-bold">{t("section1.title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("section1.content")}
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">{t("section2.title")}</h2>
                <p className="text-muted-foreground leading-relaxed">{t("section2.intro")}</p>

                <div className="space-y-4 ml-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t("section2.essential.title")}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t("section2.essential.description")}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t("section2.performance.title")}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t("section2.performance.description")}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t("section2.functionality.title")}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t("section2.functionality.description")}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t("section2.targeting.title")}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t("section2.targeting.description")}
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">{t("section3.title")}</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border/50">
                        <th className="text-left p-3 font-semibold">{t("section3.table.name")}</th>
                        <th className="text-left p-3 font-semibold">{t("section3.table.type")}</th>
                        <th className="text-left p-3 font-semibold">{t("section3.table.duration")}</th>
                        <th className="text-left p-3 font-semibold">{t("section3.table.purpose")}</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="p-3">{t("section3.table.cookie1.name")}</td>
                        <td className="p-3">{t("section3.table.cookie1.type")}</td>
                        <td className="p-3">{t("section3.table.cookie1.duration")}</td>
                        <td className="p-3">{t("section3.table.cookie1.purpose")}</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-3">{t("section3.table.cookie2.name")}</td>
                        <td className="p-3">{t("section3.table.cookie2.type")}</td>
                        <td className="p-3">{t("section3.table.cookie2.duration")}</td>
                        <td className="p-3">{t("section3.table.cookie2.purpose")}</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-3">{t("section3.table.cookie3.name")}</td>
                        <td className="p-3">{t("section3.table.cookie3.type")}</td>
                        <td className="p-3">{t("section3.table.cookie3.duration")}</td>
                        <td className="p-3">{t("section3.table.cookie3.purpose")}</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-3">{t("section3.table.cookie4.name")}</td>
                        <td className="p-3">{t("section3.table.cookie4.type")}</td>
                        <td className="p-3">{t("section3.table.cookie4.duration")}</td>
                        <td className="p-3">{t("section3.table.cookie4.purpose")}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">{t("section4.title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("section4.intro")}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>{t("section4.chrome")}</li>
                  <li>{t("section4.firefox")}</li>
                  <li>{t("section4.safari")}</li>
                  <li>{t("section4.edge")}</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">{t("section5.title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("section5.content")}
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">{t("section6.title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("section6.content")}
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">{t("section7.title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("section7.intro")}
                </p>
                <p className="text-muted-foreground">
                  E-posta: {t("section7.email")}
                  <br />
                  Adres: {t("section7.address")}
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
