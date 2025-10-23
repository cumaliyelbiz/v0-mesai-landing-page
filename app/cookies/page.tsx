"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Cookie } from "lucide-react"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-4 py-2 text-sm font-medium text-neon">
                <Cookie className="h-4 w-4" />
                <span>Çerez Politikası</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance">Çerez Politikası</h1>

              <p className="text-muted-foreground">Son güncelleme: 18 Ekim 2025</p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8 text-foreground">
              <section className="space-y-4">
                <h2 className="text-3xl font-bold">1. Çerezler Nedir?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Çerezler, web sitelerini ziyaret ettiğinizde cihazınıza (bilgisayar, tablet veya mobil cihaz)
                  kaydedilen küçük metin dosyalarıdır. Çerezler, web sitelerinin daha verimli çalışmasını sağlar ve
                  kullanıcı deneyimini iyileştirir.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">2. Çerez Türleri</h2>
                <p className="text-muted-foreground leading-relaxed">Mesai platformunda kullandığımız çerez türleri:</p>

                <div className="space-y-4 ml-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Zorunlu Çerezler</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Platformun temel işlevlerini yerine getirmesi için gereklidir. Bu çerezler olmadan platform düzgün
                      çalışmaz.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Performans Çerezleri</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olur. Bu bilgiler anonim olarak
                      toplanır ve site performansını iyileştirmek için kullanılır.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">İşlevsellik Çerezleri</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Tercihlerinizi hatırlamamıza ve size daha kişiselleştirilmiş bir deneyim sunmamıza olanak tanır
                      (örneğin, dil tercihi, tema seçimi).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Hedefleme/Reklam Çerezleri</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Size ve ilgi alanlarınıza daha uygun reklamlar göstermek için kullanılır. Ayrıca bir reklamın kaç
                      kez gösterildiğini sınırlamak için de kullanılabilir.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">3. Kullandığımız Çerezler</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border/50">
                        <th className="text-left p-3 font-semibold">Çerez Adı</th>
                        <th className="text-left p-3 font-semibold">Tür</th>
                        <th className="text-left p-3 font-semibold">Süre</th>
                        <th className="text-left p-3 font-semibold">Amaç</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="p-3">session_id</td>
                        <td className="p-3">Zorunlu</td>
                        <td className="p-3">Oturum</td>
                        <td className="p-3">Kullanıcı oturumunu yönetir</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-3">auth_token</td>
                        <td className="p-3">Zorunlu</td>
                        <td className="p-3">30 gün</td>
                        <td className="p-3">Kimlik doğrulama</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-3">theme_preference</td>
                        <td className="p-3">İşlevsellik</td>
                        <td className="p-3">1 yıl</td>
                        <td className="p-3">Tema tercihini hatırlar</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-3">_ga</td>
                        <td className="p-3">Performans</td>
                        <td className="p-3">2 yıl</td>
                        <td className="p-3">Google Analytics</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">4. Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Çoğu web tarayıcısı çerezleri otomatik olarak kabul eder, ancak tarayıcı ayarlarınızdan çerezleri
                  reddedebilir veya silebilirsiniz. Ancak, çerezleri devre dışı bırakırsanız, platformun bazı
                  özellikleri düzgün çalışmayabilir.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Chrome: Ayarlar → Gizlilik ve güvenlik → Çerezler</li>
                  <li>Firefox: Ayarlar → Gizlilik ve Güvenlik → Çerezler ve Site Verileri</li>
                  <li>Safari: Tercihler → Gizlilik → Çerezler ve web sitesi verileri</li>
                  <li>Edge: Ayarlar → Çerezler ve site izinleri</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">5. Üçüncü Taraf Çerezleri</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Platformumuzda Google Analytics gibi üçüncü taraf hizmetler kullanıyoruz. Bu hizmetler kendi
                  çerezlerini kullanabilir. Bu çerezler hakkında daha fazla bilgi için ilgili üçüncü tarafların gizlilik
                  politikalarını inceleyebilirsiniz.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">6. Çerez Politikası Güncellemeleri</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bu Çerez Politikası zaman zaman güncellenebilir. Önemli değişiklikler olduğunda sizi
                  bilgilendireceğiz.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">7. İletişim</h2>
                <p className="text-muted-foreground leading-relaxed">Çerez politikamız hakkında sorularınız için:</p>
                <p className="text-muted-foreground">
                  E-posta: privacy@mesai.com
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
