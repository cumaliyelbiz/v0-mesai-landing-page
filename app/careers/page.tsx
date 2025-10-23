"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Zap, Users, TrendingUp } from "lucide-react"

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Mühendislik",
      location: "İstanbul (Hibrit)",
      type: "Tam Zamanlı",
      description: "React, Node.js ve cloud teknolojileri konusunda deneyimli geliştiriciler arıyoruz.",
    },
    {
      title: "Product Manager",
      department: "Ürün",
      location: "İstanbul",
      type: "Tam Zamanlı",
      description: "Kullanıcı deneyimini iyileştirmek ve ürün stratejisi geliştirmek için lider arıyoruz.",
    },
    {
      title: "UI/UX Designer",
      department: "Tasarım",
      location: "Uzaktan",
      type: "Tam Zamanlı",
      description: "Kullanıcı odaklı, yaratıcı ve detaycı tasarımcılar arıyoruz.",
    },
    {
      title: "Business Development Manager",
      department: "Satış",
      location: "İstanbul",
      type: "Tam Zamanlı",
      description: "İşveren tarafında büyümeyi hızlandıracak deneyimli satış profesyonelleri arıyoruz.",
    },
    {
      title: "Customer Success Specialist",
      department: "Müşteri Hizmetleri",
      location: "İstanbul (Hibrit)",
      type: "Tam Zamanlı",
      description: "Kullanıcılarımıza en iyi deneyimi sunmak için müşteri odaklı ekip üyeleri arıyoruz.",
    },
    {
      title: "Marketing Manager",
      department: "Pazarlama",
      location: "İstanbul",
      type: "Tam Zamanlı",
      description: "Dijital pazarlama stratejileri geliştirecek ve uygulayacak deneyimli pazarlamacılar arıyoruz.",
    },
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Sağlık Sigortası",
      description: "Kapsamlı özel sağlık sigortası",
    },
    {
      icon: Zap,
      title: "Esnek Çalışma",
      description: "Hibrit ve uzaktan çalışma seçenekleri",
    },
    {
      icon: Users,
      title: "Takım Etkinlikleri",
      description: "Düzenli takım aktiviteleri ve sosyal etkinlikler",
    },
    {
      icon: TrendingUp,
      title: "Kariyer Gelişimi",
      description: "Eğitim ve gelişim fırsatları",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="absolute top-1/4 -right-48 h-96 w-96 rounded-full bg-accent-green/20 blur-[128px]" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-green/30 bg-accent-green/10 px-4 py-2 text-sm font-medium text-accent-green">
              <Briefcase className="h-4 w-4" />
              <span>Kariyer Fırsatları</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
              Mesai ailesine <span className="text-neon">katılın</span>
            </h1>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              İş dünyasını değiştiren bir ekibin parçası olun. Yetenekli, tutkulu ve yenilikçi insanlarla birlikte
              çalışın.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Neden Mesai?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Çalışanlarımıza sunduğumuz avantajlar
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
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Açık Pozisyonlar</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Size uygun pozisyonu bulun ve başvurun
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
                    Başvur
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-12 text-center">
            <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Aradığınız pozisyonu bulamadınız mı?</h3>
              <p className="text-muted-foreground mb-6">
                Yine de sizinle tanışmak isteriz! Özgeçmişinizi ve motivasyon mektubunuzu bize gönderin.
              </p>
              <Button className="bg-neon text-background hover:bg-neon/90">kariyer@mesai.com</Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
