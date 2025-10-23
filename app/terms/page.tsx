"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FileText } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent-green/30 bg-accent-green/10 px-4 py-2 text-sm font-medium text-accent-green">
                <FileText className="h-4 w-4" />
                <span>Kullanım Şartları</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance">Kullanım Şartları</h1>

              <p className="text-muted-foreground">Son güncelleme: 18 Ekim 2025</p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8 text-foreground">
              <section className="space-y-4">
                <h2 className="text-3xl font-bold">1. Hizmet Şartlarının Kabulü</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mesai platformunu kullanarak, bu Kullanım Şartlarını kabul etmiş sayılırsınız. Bu şartları kabul
                  etmiyorsanız, lütfen platformumuzu kullanmayın.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">2. Hesap Oluşturma</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mesai'ye kayıt olurken doğru, güncel ve eksiksiz bilgiler vermeyi kabul edersiniz. Hesap güvenliğinden
                  siz sorumlusunuz ve hesabınızda gerçekleşen tüm aktivitelerden siz sorumlusunuz.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">3. Kullanıcı Sorumlulukları</h2>
                <p className="text-muted-foreground leading-relaxed">Kullanıcılar olarak şunları kabul edersiniz:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>18 yaşından büyük olduğunuzu</li>
                  <li>Verdiğiniz bilgilerin doğru ve güncel olduğunu</li>
                  <li>Platformu yasalara uygun şekilde kullanacağınızı</li>
                  <li>Diğer kullanıcılara saygılı davranacağınızı</li>
                  <li>Sahte profil oluşturmayacağınızı</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">4. İş Arayanlar İçin Şartlar</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Başvurduğunuz işlere zamanında ve hazırlıklı gelmelisiniz</li>
                  <li>İşveren talimatlarına uymalısınız</li>
                  <li>Profesyonel davranış sergilemelisiniz</li>
                  <li>İş sözleşmesi şartlarına uymalısınız</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">5. İşverenler İçin Şartlar</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>İş ilanlarında doğru ve eksiksiz bilgi vermelisiniz</li>
                  <li>Çalışanlara güvenli çalışma ortamı sağlamalısınız</li>
                  <li>Ödemeleri zamanında yapmalısınız</li>
                  <li>İş kanunlarına ve düzenlemelerine uymalısınız</li>
                  <li>Ayrımcılık yapmamalısınız</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">6. Ödemeler ve İadeler</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Tüm ödemeler platform üzerinden güvenli şekilde gerçekleştirilir. İşverenler, iş tamamlandıktan sonra
                  ödeme yapmayı kabul eder. İş arayanlar, ödemenin iş tamamlandıktan sonra hesaplarına aktarılacağını
                  kabul eder.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">7. Fikri Mülkiyet</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mesai platformundaki tüm içerik, tasarım, logo ve markalar Mesai Technologies'e aittir. İzinsiz
                  kullanım yasaktır.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">8. Sorumluluk Reddi</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mesai, kullanıcılar arasındaki işlemlerde aracı rolü oynar. İş arayanlar ve işverenler arasındaki
                  anlaşmazlıklardan Mesai sorumlu değildir. Platform "olduğu gibi" sunulur ve herhangi bir garanti
                  verilmez.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">9. Hesap Askıya Alma ve Sonlandırma</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mesai, bu şartları ihlal eden kullanıcıların hesaplarını askıya alma veya sonlandırma hakkını saklı
                  tutar.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">10. Değişiklikler</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bu Kullanım Şartları zaman zaman güncellenebilir. Önemli değişiklikler olduğunda kullanıcılar
                  bilgilendirilecektir.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">11. İletişim</h2>
                <p className="text-muted-foreground leading-relaxed">Kullanım şartları hakkında sorularınız için:</p>
                <p className="text-muted-foreground">
                  E-posta: legal@mesai.com
                  <br />
                  Adres: Mesai Technologies, İstanbul, Türkiye
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
