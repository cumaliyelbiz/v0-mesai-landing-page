"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  MapPin,
  Clock,
  Shield,
  Zap,
  Users,
  CheckCircle2,
  Building2,
  Smartphone,
  Bell,
  CreditCard,
  BarChart,
  ArrowRight,
} from "lucide-react"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import type { Locale } from "@/i18n/config"

function getLocaleFromCookie(): Locale {
  if (typeof document === "undefined") return "tr"
  const cookie = document.cookie.split("; ").find((row) => row.startsWith("NEXT_LOCALE="))
  return (cookie?.split("=")[1] as Locale) || "tr"
}

export default function ServicesClientPage() {
  const t = useTranslations("services")
  const [locale, setLocale] = useState<Locale>("tr")

  useEffect(() => {
    setLocale(getLocaleFromCookie())
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation locale={locale} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="absolute top-1/4 -right-48 h-96 w-96 rounded-full bg-accent-green/20 blur-[128px]" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-green/30 bg-accent-green/10 px-4 py-2 text-sm font-medium text-accent-green">
              <Zap className="h-4 w-4" />
              <span>{t("badge")}</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
              {t("title")} <span className="text-neon">{t("titleHighlight")}</span> {t("titleEnd")}
            </h1>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              {t("description")}
            </p>
          </div>
        </div>
      </section>

      {/* For Workers */}
      <section className="py-20 sm:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">{t("forWorkers.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">{t("forWorkers.subtitle")}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: MapPin, key: "feature1" },
              { icon: Clock, key: "feature2" },
              { icon: Shield, key: "feature3" },
              { icon: Bell, key: "feature4" },
              { icon: BarChart, key: "feature5" },
              { icon: Smartphone, key: "feature6" },
            ].map((feature, i) => (
              <Card
                key={i}
                className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:border-neon/50 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neon/10 ring-1 ring-neon/20 group-hover:bg-neon/20 transition-colors">
                    <feature.icon className="h-7 w-7 text-neon" />
                  </div>
                  <h3 className="text-xl font-semibold">{t(`forWorkers.${feature.key}.title`)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`forWorkers.${feature.key}.description`)}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-neon text-background hover:bg-neon/90">
              {t("forWorkers.cta")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* For Employers */}
      <section className="py-20 sm:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">{t("forEmployers.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">{t("forEmployers.subtitle")}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Zap, key: "feature1" },
              { icon: Users, key: "feature2" },
              { icon: Clock, key: "feature3" },
              { icon: CheckCircle2, key: "feature4" },
              { icon: Building2, key: "feature5" },
              { icon: CreditCard, key: "feature6" },
            ].map((feature, i) => (
              <Card
                key={i}
                className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent-green/50 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-green/10 ring-1 ring-accent-green/20 group-hover:bg-accent-green/20 transition-colors">
                    <feature.icon className="h-7 w-7 text-accent-green" />
                  </div>
                  <h3 className="text-xl font-semibold">{t(`forEmployers.${feature.key}.title`)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`forEmployers.${feature.key}.description`)}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-accent-green text-background hover:bg-accent-green/90">
              {t("forEmployers.cta")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
