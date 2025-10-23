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

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="absolute top-1/4 -right-48 h-96 w-96 rounded-full bg-accent-green/20 blur-[128px]" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-green/30 bg-accent-green/10 px-4 py-2 text-sm font-medium text-accent-green">
              <Zap className="h-4 w-4" />
              <span>Hizmetlerimiz</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
              Size özel <span className="text-neon">çözümler</span> sunuyoruz
            </h1>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              İş arayanlar ve işverenler için tasarlanmış kapsamlı özellikler ve hizmetler
            </p>
          </div>
        </div>
      </section>

      {/* For Workers */}
      <section className="py-20 sm:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">İş Arayanlar İçin</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Kariyerinizi ilerletmek için ihtiyacınız olan tüm araçlar
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: MapPin,
                title: "Lokasyon Bazlı İş Bulma",
                description: "Akıllı konum eşleştirme ile size en yakın işleri keşfedin.",
              },
              {
                icon: Clock,
                title: "Esnek Çalışma Saatleri",
                description: "Saatlik veya günlük çalışma seçenekleri ile kendi programınızı oluşturun.",
              },
              {
                icon: Shield,
                title: "Güvenli Ödeme Sistemi",
                description: "Doğrulanmış işverenler ve garantili ödemelerle güvenle çalışın.",
              },
              {
                icon: Bell,
                title: "Anlık Bildirimler",
                description: "Yeni iş fırsatları için anında bildirim alın.",
              },
              {
                icon: BarChart,
                title: "Kazanç Takibi",
                description: "Çalışma geçmişinizi ve toplam kazancınızı gerçek zamanlı izleyin.",
              },
              {
                icon: Smartphone,
                title: "Mobil Uygulama",
                description: "iOS ve Android uygulamaları ile her yerden erişim.",
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:border-neon/50 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neon/10 ring-1 ring-neon/20 group-hover:bg-neon/20 transition-colors">
                    <feature.icon className="h-7 w-7 text-neon" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-neon text-background hover:bg-neon/90">
              İşçi Olarak Katıl
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* For Employers */}
      <section className="py-20 sm:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">İşverenler İçin</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              İşe alım sürecinizi hızlandıran profesyonel araçlar
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Hızlı İlan Yayınlama",
                description: "Dakikalar içinde iş ilanı oluşturun ve yayınlayın.",
              },
              {
                icon: Users,
                title: "Çoklu İK Hesapları",
                description: "Tek şirket profili altında ekip üyelerinizi yönetin.",
              },
              {
                icon: Clock,
                title: "Saat ve Ödeme Takibi",
                description: "Çalışma saatlerini izleyin ve ödemeleri sorunsuz yönetin.",
              },
              {
                icon: CheckCircle2,
                title: "Değerlendirme Sistemi",
                description: "Çalışanları değerlendirin ve güvenilir ekibinizi oluşturun.",
              },
              {
                icon: Building2,
                title: "Şirket Profili",
                description: "Profesyonel şirket profilinizle öne çıkın.",
              },
              {
                icon: CreditCard,
                title: "Esnek Ödeme Seçenekleri",
                description: "Kredi kartı, havale ve diğer ödeme yöntemleri.",
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent-green/50 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-green/10 ring-1 ring-accent-green/20 group-hover:bg-accent-green/20 transition-colors">
                    <feature.icon className="h-7 w-7 text-accent-green" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-accent-green text-background hover:bg-accent-green/90">
              İşveren Olarak Katıl
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 sm:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Fiyatlandırma</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Size uygun planı seçin ve hemen başlayın
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "İşçi",
                price: "Ücretsiz",
                description: "İş arayanlar için tamamen ücretsiz",
                features: [
                  "Sınırsız iş başvurusu",
                  "Lokasyon bazlı iş bulma",
                  "Güvenli ödeme sistemi",
                  "Kazanç takibi",
                  "Mobil uygulama erişimi",
                ],
                cta: "Hemen Başla",
                highlighted: false,
              },
              {
                name: "İşveren Standart",
                price: "₺499/ay",
                description: "Küçük ve orta ölçekli işletmeler için",
                features: [
                  "10 aktif iş ilanı",
                  "Sınırsız başvuru",
                  "Temel analitik",
                  "E-posta desteği",
                  "Çalışan değerlendirme",
                ],
                cta: "Planı Seç",
                highlighted: true,
              },
              {
                name: "İşveren Premium",
                price: "₺999/ay",
                description: "Büyük işletmeler için gelişmiş özellikler",
                features: [
                  "Sınırsız iş ilanı",
                  "Öncelikli listeleme",
                  "Gelişmiş analitik",
                  "Öncelikli destek",
                  "Çoklu İK hesapları",
                  "API erişimi",
                ],
                cta: "Planı Seç",
                highlighted: false,
              },
            ].map((plan, i) => (
              <Card
                key={i}
                className={`p-8 border-border/50 bg-card/50 backdrop-blur-sm ${
                  plan.highlighted ? "ring-2 ring-neon scale-105" : ""
                }`}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  <div className="text-4xl font-bold">
                    {plan.price}
                    {plan.price !== "Ücretsiz" && <span className="text-lg text-muted-foreground">/ay</span>}
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-neon shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    size="lg"
                    className={`w-full ${
                      plan.highlighted ? "bg-neon text-background hover:bg-neon/90" : "bg-transparent hover:bg-accent"
                    }`}
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
