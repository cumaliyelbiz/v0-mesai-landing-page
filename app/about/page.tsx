"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Target, Heart, Lightbulb, Users, TrendingUp, Award, ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

export default function AboutPage() {
  const t = useTranslations("about")

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-neon/20 blur-[128px]" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-4 py-2 text-sm font-medium text-neon">
              <Heart className="h-4 w-4" />
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

      {/* Mission & Vision */}
      <section className="py-20 sm:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neon/10 ring-1 ring-neon/20">
                  <Target className="h-7 w-7 text-neon" />
                </div>
                <h2 className="text-3xl font-bold">{t("mission.title")}</h2>
                <p className="text-muted-foreground leading-relaxed">{t("mission.description")}</p>
              </div>
            </Card>

            <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-green/10 ring-1 ring-accent-green/20">
                  <Lightbulb className="h-7 w-7 text-accent-green" />
                </div>
                <h2 className="text-3xl font-bold">{t("vision.title")}</h2>
                <p className="text-muted-foreground leading-relaxed">{t("vision.description")}</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">{t("values.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">{t("values.subtitle")}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Users, key: "value1" },
              { icon: Award, key: "value2" },
              { icon: TrendingUp, key: "value3" },
              { icon: Heart, key: "value4" },
              { icon: Lightbulb, key: "value5" },
              { icon: Target, key: "value6" },
            ].map((value, i) => (
              <Card
                key={i}
                className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:border-neon/50 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neon/10 ring-1 ring-neon/20 group-hover:bg-neon/20 transition-colors">
                    <value.icon className="h-6 w-6 text-neon" />
                  </div>
                  <h3 className="text-xl font-semibold">{t(`values.${value.key}.title`)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`values.${value.key}.description`)}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 sm:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { value: "10,000+", key: "users" },
              { value: "50,000+", key: "jobs" },
              { value: "500+", key: "employers" },
              { value: "4.8/5", key: "satisfaction" },
            ].map((stat, i) => (
              <Card key={i} className="p-8 border-border/50 bg-card/50 backdrop-blur-sm text-center">
                <div className="text-4xl font-bold text-neon mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{t(`stats.${stat.key}`)}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-neon/10 to-accent-green/10" />
            <div className="absolute top-0 right-0 h-64 w-64 bg-neon/20 blur-3xl rounded-full" />

            <div className="relative p-12 sm:p-16 text-center space-y-8">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">{t("cta.title")}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">{t("cta.description")}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-neon text-background hover:bg-neon/90 text-base font-semibold h-12 px-8"
                >
                  {t("cta.startNow")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-base font-semibold h-12 px-8 bg-transparent">
                  {t("cta.contact")}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
