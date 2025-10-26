"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Zap, Users, TrendingUp } from "lucide-react"
import { Locale } from "@/i18n/config"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

function getLocaleFromCookie(): Locale {
  if (typeof document === "undefined") return "tr"
  const cookie = document.cookie.split("; ").find((row) => row.startsWith("NEXT_LOCALE="))
  return (cookie?.split("=")[1] as Locale) || "tr"
}

export default function CareersPage() {
  const t = useTranslations("careers")
  const [locale, setLocale] = useState<Locale>("tr")

  useEffect(() => {
    setLocale(getLocaleFromCookie())
  }, [])
  const openPositions = [
    {
      title: t("positions.position1.title"),
      department: t("positions.position1.department"),
      location: t("positions.position1.location"),
      type: t("positions.position1.type"),
      description: t("positions.position1.description"),
    },
    {
      title: t("positions.position2.title"),
      department: t("positions.position2.department"),
      location: t("positions.position2.location"),
      type: t("positions.position2.type"),
      description: t("positions.position2.description"),
    },
    {
      title: t("positions.position3.title"),
      department: t("positions.position3.department"),
      location: t("positions.position3.location"),
      type: t("positions.position3.type"),
      description: t("positions.position3.description"),
    },
    {
      title: t("positions.position4.title"),
      department: t("positions.position4.department"),
      location: t("positions.position4.location"),
      type: t("positions.position4.type"),
      description: t("positions.position4.description"),
    },
    {
      title: t("positions.position5.title"),
      department: t("positions.position5.department"),
      location: t("positions.position5.location"),
      type: t("positions.position5.type"),
      description: t("positions.position5.description"),
    },
    {
      title: t("positions.position6.title"),
      department: t("positions.position6.department"),
      location: t("positions.position6.location"),
      type: t("positions.position6.type"),
      description: t("positions.position6.description"),
    },
  ]

  const benefits = [
    {
      icon: Heart,
      title: t("benefits.benefit1.title"),
      description: t("benefits.benefit1.description"),
    },
    {
      icon: Zap,
      title: t("benefits.benefit2.title"),
      description: t("benefits.benefit2.description"),
    },
    {
      icon: Users,
      title: t("benefits.benefit3.title"),
      description: t("benefits.benefit3.description"),
    },
    {
      icon: TrendingUp,
      title: t("benefits.benefit4.title"),
      description: t("benefits.benefit4.description"),
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation locale={locale} />

      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="absolute top-1/4 -right-48 h-96 w-96 rounded-full bg-accent-green/20 blur-[128px]" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-green/30 bg-accent-green/10 px-4 py-2 text-sm font-medium text-accent-green">
              <Briefcase className="h-4 w-4" />
              <span>{t("badge")}</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
              {t("title")} <span className="text-neon">{t("titleHighlight")}</span>
            </h1>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              {t("description")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">{t("benefits.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              {t("benefits.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, i) => (
              <Card
                key={i}
                className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:border-neon/50 transition-all duration-300 group text-center"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neon/10 ring-1 ring-neon/20 group-hover:bg-neon/20 transition-colors">
                    <benefit.icon className="h-7 w-7 text-neon" />
                  </div>
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">{t("positions.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              {t("positions.subtitle")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, i) => (
              <Card
                key={i}
                className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:border-neon/50 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                        <p className="text-sm text-muted-foreground">{position.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-neon" />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-neon" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-neon" />
                        <span>{position.type}</span>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-neon text-background hover:bg-neon/90 shrink-0">
                    {t("positions.apply")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-12 text-center">
            <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">{t("cta.title")}</h3>
              <p className="text-muted-foreground mb-6">
                {t("cta.description")}
              </p>
              <Button onClick={() => window.location.href = "mailto:" + t("cta.button")} className="bg-neon text-background hover:bg-neon/90">{t("cta.button")}</Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
