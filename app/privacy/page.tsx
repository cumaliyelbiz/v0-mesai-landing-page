"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Shield } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-4 py-2 text-sm font-medium text-neon">
                <Shield className="h-4 w-4" />
                <span>Gizlilik Politikası</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance">Gizlilik Politikası</h1>

              <p className="text-muted-foreground">Son güncelleme: 18 Ekim 2025</p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8 text-foreground">
              <section className="space-y-4">
                <h2 className="text-3xl font-bold">1. Giriş</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mesai Technologies ("Mesai", "biz", "bizim") olarak, kullanıcılarımızın gizliliğini korumayı en önemli
                  önceliklerimizden biri olarak görüyoruz. Bu Gizlilik Politikası, kişisel verilerinizi nasıl
                  topladığımızı, kullandığımızı, sakladığımızı ve koruduğumuzu açıklamaktadır.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">2. Topladığımız Bilgiler</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Hizmetlerimizi sunabilmek için aşağıdaki bilgileri topluyoruz:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Kimlik bilgileri (ad, soyad, telefon numarası, e-posta adresi)</li>
                  <li>Lokasyon bilgileri (iş eşleştirme için)</li>
                  <li>Çalışma geçmişi ve yetenekler</li>
                  <li>Ödeme bilgileri (güvenli ödeme sağlayıcıları aracılığıyla)</li>
                  <li>Cihaz ve kullanım bilgileri</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">3. Bilgilerin Kullanımı</h2>
                <p className="text-muted-foreground leading-relaxed">Topladığımız bilgileri şu amaçlarla kullanırız:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Platform hizmetlerini sağlamak ve geliştirmek</li>
                  <li>İş arayanlar ve işverenleri eşleştirmek</li>
                  <li>Güvenli ödeme işlemlerini gerçekleştirmek</li>
                  <li>Müşteri desteği sağlamak</li>
                  <li>Platformun güvenliğini sağlamak</li>
                  <li>Yasal yükümlülükleri yerine getirmek</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">4. Bilgi Paylaşımı</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kişisel bilgilerinizi üçüncü taraflarla yalnızca aşağıdaki durumlarda paylaşırız:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>İş eşleştirme için gerekli bilgileri işverenler ve iş arayanlar arasında</li>
                  <li>Ödeme işlemleri için güvenli ödeme sağlayıcılarıyla</li>
                  <li>Yasal zorunluluklar gereği yetkili makamlarla</li>
                  <li>Açık rızanız dahilinde</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">5. Veri Güvenliği</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kişisel verilerinizi korumak için endüstri standardı güvenlik önlemleri kullanıyoruz. Verileriniz
                  şifrelenmiş olarak saklanır ve yetkisiz erişime karşı korunur.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">6. Haklarınız</h2>
                <p className="text-muted-foreground leading-relaxed">KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                  <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                  <li>Verilerin düzeltilmesini veya silinmesini isteme</li>
                  <li>Verilerin aktarıldığı üçüncü kişileri öğrenme</li>
                  <li>
                    İşlenen verilerin münhasıran otomatik sistemler ile analiz edilmesi sonucu aleyhinize bir sonucun
                    ortaya çıkmasına itiraz etme
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">7. Çerezler</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Platformumuz, kullanıcı deneyimini iyileştirmek için çerezler kullanır. Çerez kullanımı hakkında
                  detaylı bilgi için Çerez Politikamızı inceleyebilirsiniz.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">8. Değişiklikler</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bu Gizlilik Politikası zaman zaman güncellenebilir. Önemli değişiklikler olduğunda sizi
                  bilgilendireceğiz.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">9. İletişim</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
                </p>
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
