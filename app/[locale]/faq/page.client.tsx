"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { HelpCircle, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import type { Locale } from "@/i18n/config"
import { useTranslations } from "next-intl"

function getLocaleFromCookie(): Locale {
  if (typeof document === "undefined") return "tr"
  const cookie = document.cookie.split("; ").find((row) => row.startsWith("NEXT_LOCALE="))
  return (cookie?.split("=")[1] as Locale) || "tr"
}

export default function FAQPageClient({ params }: { params: { locale: Locale } }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const t = useTranslations("faq")
  const [locale, setLocale] = useState<Locale>(params.locale)

  useEffect(() => {
    setLocale(getLocaleFromCookie())
  }, [params.locale])

  const faqs = [
    {
      question: t("questions.q1.question"),
      answer: t("questions.q1.answer"),
    },
    {
      question: t("questions.q2.question"),
      answer: t("questions.q2.answer"),
    },
    {
      question: t("questions.q3.question"),
      answer: t("questions.q3.answer"),
    },
    {
      question: t("questions.q4.question"),
      answer: t("questions.q4.answer"),
    },
    {
      question: t("questions.q5.question"),
      answer: t("questions.q5.answer"),
    },
    {
      question: t("questions.q6.question"),
      answer: t("questions.q6.answer"),
    },
    {
      question: t("questions.q7.question"),
      answer: t("questions.q7.answer"),
    },
    {
      question: t("questions.q8.question"),
      answer: t("questions.q8.answer"),
    },
    {
      question: t("questions.q9.question"),
      answer: t("questions.q9.answer"),
    },
    {
      question: t("questions.q10.question"),
      answer: t("questions.q10.answer"),
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation locale={locale} />

      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-neon/20 blur-[128px]" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-4 py-2 text-sm font-medium text-neon">
              <HelpCircle className="h-4 w-4" />
              <span>{t("badge")}</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
              {t("title")} <span className="text-neon">{t("titleHighlight")}</span> {t("titleEnd")}
            </h1>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              {t("description")}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-neon/50 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-neon shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</div>
                </div>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-16 text-center">
            <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">{t("cta.title")}</h3>
              <p className="text-muted-foreground mb-6">{t("cta.description")}</p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-neon text-background hover:bg-neon/90 h-12 px-8 font-semibold transition-colors"
              >
                {t("cta.button")}
              </a>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
