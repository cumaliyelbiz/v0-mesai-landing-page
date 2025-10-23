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
  TrendingUp,
  CheckCircle2,
  Star,
  ArrowRight,
  Smartphone,
  Building2,
} from "lucide-react"
import { useEffect, useState } from "react"

export default function MesaiLanding() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div
          className="absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-neon/20 blur-[128px]"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div
          className="absolute bottom-1/4 -right-48 h-96 w-96 rounded-full bg-accent-green/20 blur-[128px]"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-4 py-2 text-sm font-medium text-neon">
                <Zap className="h-4 w-4" />
                <span>İş dünyası basitleşti</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
                Yakınınızda iş bulun. <span className="text-neon">Hızlı, esnek,</span> kendi şartlarınızda.
              </h1>

              <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl">
                Mesai, iş arayanları ve işverenleri gerçek zamanlı olarak buluşturur — lokasyon bazlı işleri keşfedin ve
                hemen çalışmaya başlayın.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-neon text-background hover:bg-neon/90 text-base font-semibold h-12 px-8"
                >
                  Hemen Başla
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-base font-semibold h-12 px-8 bg-transparent">
                  Demo İzle
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-background bg-muted" />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-semibold">10,000+ aktif kullanıcı</div>
                  <div className="text-muted-foreground">Topluluğa katılın</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-neon/20 blur-3xl rounded-full" />
              <div className="relative aspect-[9/16] max-w-[320px] mx-auto">
                <div className="absolute inset-0 rounded-[3rem] border-8 border-foreground/10 bg-gradient-to-br from-muted to-background shadow-2xl overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-br from-neon/10 to-accent-green/10 p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <div className="text-sm font-semibold">Mesai</div>
                      <div className="flex gap-1">
                        <div className="h-1 w-6 rounded-full bg-foreground/20" />
                        <div className="h-1 w-1 rounded-full bg-foreground/20" />
                        <div className="h-1 w-1 rounded-full bg-foreground/20" />
                      </div>
                    </div>

                    <div className="space-y-3 flex-1">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <div className="h-3 w-24 rounded-full bg-foreground/20" />
                            <div className="h-6 w-16 rounded-full bg-neon/20 flex items-center justify-center">
                              <div className="h-2 w-10 rounded-full bg-neon" />
                            </div>
                          </div>
                          <div className="h-2 w-full rounded-full bg-foreground/10" />
                          <div className="h-2 w-3/4 rounded-full bg-foreground/10" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 sm:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Nasıl Çalışır</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Üç basit adımda başlayın ve sonraki fırsatınızı bulun
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Smartphone,
                step: "01",
                title: "Kimliğinizi Doğrulayın",
                description: "Telefon numaranızı girin ve hızlı doğrulama ile güvenli başlayın.",
              },
              {
                icon: MapPin,
                step: "02",
                title: "Yakınızda İşleri Keşfedin",
                description: "Yetenekleriniz ve uygunluklarınızla eşleşen lokasyon tabanlı fırsatları keşfedin.",
              },
              {
                icon: Zap,
                step: "03",
                title: "Başvurun ve Kazanmaya Başlayın",
                description: "İşlere hızlı başvurun ve esnek zamanlamalarla çalışın.",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="relative p-8 border-border/50 bg-card/50 backdrop-blur-sm hover:border-neon/50 transition-all duration-300 group"
              >
                <div className="absolute top-8 right-8 text-6xl font-bold text-foreground/5 group-hover:text-neon/10 transition-colors">
                  {item.step}
                </div>
                <div className="relative space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neon/10 ring-1 ring-neon/20 group-hover:bg-neon/20 transition-colors">
                    <item.icon className="h-7 w-7 text-neon" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Job Seekers */}
      <section id="for-workers" className="py-20 sm:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-4 py-2 text-sm font-medium text-neon">
                <Users className="h-4 w-4" />
                <span>İş Arayanlar için</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">Sonraki işiniz yakında.</h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Zamanlamalarınız ve lokasyonunuzla uyumlu esnek iş fırsatlarını bulun. Doğrulanmış işverenlerle kendi
                şartlarınızda çalışın.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    title: "Lokasyon Bazlı İşler",
                    desc: "Akıllı lokasyon eşleştirme ile yakınızda iş bulun",
                  },
                  {
                    icon: Clock,
                    title: "Esnek Zamanlamalar",
                    desc: "Saatlik veya günlük iş seçin ve hayatınıza uymak",
                  },
                  {
                    icon: Shield,
                    title: "Doğrulanmış İşverenler",
                    desc: "Güvenilir şirketlerle çalışın ve güvenli ödemeler yapın",
                  },
                  {
                    icon: TrendingUp,
                    title: "Kazançlarınızı Takip Edin",
                    desc: "İş geçmişi ve toplam kazançlarınızı gerçek zamanlı olarak izleyin",
                  },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neon/10 ring-1 ring-neon/20 group-hover:bg-neon/20 transition-colors">
                      <feature.icon className="h-5 w-5 text-neon" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-neon text-background hover:bg-neon/90">
                İşçi Olarak Katılın
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-accent-green/20 blur-3xl rounded-full" />
              <Card className="relative p-8 border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Paneliniz</h3>
                    <div className="h-8 w-8 rounded-full bg-neon/20" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-border/50 bg-background/50 p-4">
                      <div className="text-sm text-muted-foreground mb-1">Toplam Kazanç</div>
                      <div className="text-2xl font-bold text-neon">₺12,450</div>
                    </div>
                    <div className="rounded-xl border border-border/50 bg-background/50 p-4">
                      <div className="text-sm text-muted-foreground mb-1">Tamamlanan İşler</div>
                      <div className="text-2xl font-bold">47</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm font-semibold">Son İşler</div>
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between rounded-lg border border-border/50 bg-background/50 p-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-lg bg-muted" />
                          <div>
                            <div className="text-sm font-medium">Depo Asistanı</div>
                            <div className="text-xs text-muted-foreground">2.3 km uzaklıktaki</div>
                          </div>
                        </div>
                        <div className="text-sm font-semibold text-neon">₺350/gün</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* For Employers */}
      <section id="for-employers" className="py-20 sm:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-neon/20 blur-3xl rounded-full" />
              <Card className="relative p-8 border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">İşveren Paneli</h3>
                    <Building2 className="h-6 w-6 text-neon" />
                  </div>

                  <div className="rounded-xl border border-border/50 bg-background/50 p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">Aktif İş Gönderileri</div>
                      <div className="text-2xl font-bold">12</div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                      <div className="h-full w-3/4 bg-neon rounded-full" />
                    </div>
                    <div className="text-xs text-muted-foreground">75% pozisyonlar dolduruldu</div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm font-semibold">Son Başvurular</div>
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between rounded-lg border border-border/50 bg-background/50 p-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-muted" />
                          <div>
                            <div className="text-sm font-medium">Aday #{i}</div>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Star className="h-3 w-3 fill-neon text-neon" />
                              <span>4.8 puan</span>
                            </div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="text-xs bg-transparent">
                          Görüntüle
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent-green/30 bg-accent-green/10 px-4 py-2 text-sm font-medium text-accent-green">
                <Building2 className="h-4 w-4" />
                <span>İşverenler için</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">
                Hızlı olarak iş alın. Kolay yönetin.
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Kısa vadeli işleri dakikalar içinde yayınlayın ve bölgenizdeki yetenekli işçilerle bağlantı kurun. İş
                alma sürecinizi basitleştirin.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Zap, title: "Anında İş Gönderimi", desc: "İş ilanları oluşturun ve yayınlayın" },
                  {
                    icon: Users,
                    title: "Çoklu HR Hesapları",
                    desc: "Tüm şirket profiliniz altında takım üyelerini yönetin",
                  },
                  {
                    icon: Clock,
                    title: "Çalışma Saatlerini ve Ödemeleri Takip Edin",
                    desc: "Çalışma saatlerini izleyin ve ödemeleri sorunsuz yönetin",
                  },
                  {
                    icon: Star,
                    title: "Puanlayın ve Tekrar İşleyin",
                    desc: "Güvenilir işçi ağınıza puanlarla katılmak",
                  },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-green/10 ring-1 ring-accent-green/20 group-hover:bg-accent-green/20 transition-colors">
                      <feature.icon className="h-5 w-5 text-accent-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-accent-green text-background hover:bg-accent-green/90">
                İşveren Olarak Katılın
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 sm:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Akıllı teknoloji tarafından destekleniyor.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Güvenlik, güvenilirlik ve sorunsuz deneyim için en son teknolojilerle oluşturulmuştur
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "API Tabanlı Kimlik Doğrulama",
                desc: "Tüm kullanıcılar için güvenli kimlik doğrulama",
              },
              { icon: MapPin, title: "Lokasyon Takibi", desc: "İşler için gerçek zamanlı lokasyon eşleme" },
              { icon: Zap, title: "Anında Ödemeler", desc: "Hızlı ve güvenli ödeme işleme" },
              { icon: CheckCircle2, title: "Akıllı Eşleşme", desc: "AI destekli iş önerileri" },
            ].map((tech, i) => (
              <Card
                key={i}
                className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:border-neon/50 transition-all duration-300 group text-center"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neon/10 ring-1 ring-neon/20 group-hover:bg-neon/20 transition-colors">
                    <tech.icon className="h-8 w-8 text-neon" />
                  </div>
                  <h3 className="text-lg font-semibold">{tech.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tech.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Binlerce tarafından güvenilir</h2>
            <p className="text-xl text-muted-foreground">10,000+ kişi Mesai'yi güveniyor</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Ahmet Yılmaz",
                role: "Depo İşçisi",
                content: "Mesai, zamanlamalarımın uygun olduğu esnek iş bulmamı sağladı. 3 ayda ₺15,000 kazandım!",
                rating: 5,
              },
              {
                name: "Zeynep Kaya",
                role: "HR Müdürü",
                content: "1 haftada 20 pozisyonu doldurdum. Platform çok kolay kullanılır ve işçiler güvenilirdir.",
                rating: 5,
              },
              {
                name: "Mehmet Demir",
                role: "Teslimat Şoförü",
                content:
                  "Lokasyon tabanlı iş eşleşmesi mükemmel. Sadece yakınımdaki işleri görüyorum ve hemen çalışmaya başlayabilirim.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <Card key={i} className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-neon text-neon" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <div className="h-10 w-10 rounded-full bg-muted" />
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-neon/10 to-accent-green/10" />
            <div className="absolute top-0 right-0 h-64 w-64 bg-neon/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 h-64 w-64 bg-accent-green/20 blur-3xl rounded-full" />

            <div className="relative p-12 sm:p-16 text-center space-y-8">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">
                Hemen başlamaya hazır mısınız?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                Mesai'ye katılın ve bugün sonraki işinizi bulun. Zamanlamalarınızla uyumlu esnek fırsatlarla çalışın.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-neon text-background hover:bg-neon/90 text-base font-semibold h-12 px-8"
                >
                  İşçi Olarak Katılın
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-base font-semibold h-12 px-8 bg-transparent">
                  İşveren Olarak Katılın
                </Button>
              </div>

              <div className="flex items-center justify-center gap-4 pt-8">
                <div className="h-12 w-32 rounded-lg border border-border/50 bg-background/50 flex items-center justify-center">
                  <span className="text-xs font-semibold">App Store</span>
                </div>
                <div className="h-12 w-32 rounded-lg border border-border/50 bg-background/50 flex items-center justify-center">
                  <span className="text-xs font-semibold">Google Play</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
