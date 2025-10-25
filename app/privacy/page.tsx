"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Shield } from "lucide-react"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import { Locale } from "@/i18n/config"

function getLocaleFromCookie(): Locale {
  if (typeof document === "undefined") return "tr"
  const cookie = document.cookie.split("; ").find((row) => row.startsWith("NEXT_LOCALE="))
  return (cookie?.split("=")[1] as Locale) || "tr"
}

export default function PrivacyPage() {
  const t = useTranslations("privacy")
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
                <Shield className="h-4 w-4" />
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
                <p className="text-muted-foreground leading-relaxed">
                  {t("section2.intro")}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>{t("section2.item1")}</li>
                  <li>{t("section2.item2")}</li>
                  <li>{t("section2.item3")}</li>
                  <li>{t("section2.item4")}</li>
                  <li>{t("section2.item5")}</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">{t("section3.title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("section3.intro")}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>{t("section3.item1")}</li>
                  <li>{t("section3.item2")}</li>
                  <li>{t("section3.item3")}</li>
                  <li>{t("section3.item4")}</li>
                  <li>{t("section3.item5")}</li>
                  <li>{t("section3.item6")}</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">{t("section4.title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("section4.intro")}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>{t("section4.item1")}</li>
                  <li>{t("section4.item2")}</li>
                  <li>{t("section4.item3")}</li>
                  <li>{t("section4.item4")}</li>
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
                  {t("section6.intro")}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>{t("section6.item1")}</li>
                  <li>{t("section6.item2")}</li>
                  <li>{t("section6.item3")}</li>
                  <li>{t("section6.item4")}</li>
                  <li>{t("section6.item5")}</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">{t("section7.title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("section7.content")}
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">{t("section8.title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("section8.content")}
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">{t("section9.title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("section9.intro")}
                </p>
                <p className="text-muted-foreground">
                  E-posta: {t("section9.email")}
                  <br />
                  Adres: {t("section9.address")}
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
