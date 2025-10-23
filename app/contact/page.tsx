"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
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
              <Mail className="h-4 w-4" />
              <span>İletişim</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
              Sizden <span className="text-neon">haber almak</span> isteriz
            </h1>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Sorularınız, önerileriniz veya işbirliği teklifleriniz için bize ulaşın
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 sm:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
              <form className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Bize Mesaj Gönderin</h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      Ad
                    </label>
                    <Input id="firstName" placeholder="Adınız" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Soyad
                    </label>
                    <Input id="lastName" placeholder="Soyadınız" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    E-posta
                  </label>
                  <Input id="email" type="email" placeholder="ornek@email.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Telefon
                  </label>
                  <Input id="phone" type="tel" placeholder="+90 (5XX) XXX XX XX" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Konu
                  </label>
                  <Input id="subject" placeholder="Mesajınızın konusu" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mesaj
                  </label>
                  <Textarea id="message" placeholder="Mesajınızı buraya yazın..." rows={6} />
                </div>

                <Button size="lg" className="w-full bg-neon text-background hover:bg-neon/90">
                  Gönder
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">İletişim Bilgileri</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mesai ekibi olarak size yardımcı olmaktan mutluluk duyarız. Aşağıdaki kanallardan bize
                  ulaşabilirsiniz.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neon/10 ring-1 ring-neon/20">
                      <Mail className="h-6 w-6 text-neon" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">E-posta</h3>
                      <p className="text-sm text-muted-foreground">destek@mesai.com</p>
                      <p className="text-sm text-muted-foreground">info@mesai.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-green/10 ring-1 ring-accent-green/20">
                      <Phone className="h-6 w-6 text-accent-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefon</h3>
                      <p className="text-sm text-muted-foreground">+90 (212) 123 45 67</p>
                      <p className="text-sm text-muted-foreground">Hafta içi 09:00 - 18:00</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neon/10 ring-1 ring-neon/20">
                      <MapPin className="h-6 w-6 text-neon" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adres</h3>
                      <p className="text-sm text-muted-foreground">
                        Maslak Mahallesi, Büyükdere Caddesi
                        <br />
                        No: 123, Sarıyer / İstanbul
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                <h3 className="font-semibold mb-4">Çalışma Saatleri</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pazartesi - Cuma</span>
                    <span className="font-medium">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cumartesi</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pazar</span>
                    <span className="font-medium">Kapalı</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
