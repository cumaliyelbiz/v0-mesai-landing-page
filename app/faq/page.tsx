"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { HelpCircle, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Mesai nedir ve nasıl çalışır?",
      answer:
        "Mesai, iş arayanları ve işverenleri lokasyon bazlı olarak buluşturan bir platformdur. Kullanıcılar yakınlarındaki iş fırsatlarını keşfedebilir, başvurabilir ve esnek şekilde çalışabilirler. İşverenler ise hızlıca iş ilanı yayınlayıp uygun adaylarla eşleşebilirler.",
    },
    {
      question: "Mesai'ye nasıl kayıt olabilirim?",
      answer:
        "Mobil uygulamamızı indirerek veya web sitemiz üzerinden telefon numaranızla hızlıca kayıt olabilirsiniz. Kimlik doğrulama işlemini tamamladıktan sonra hemen iş aramaya veya ilan vermeye başlayabilirsiniz.",
    },
    {
      question: "İş arayanlar için ücret var mı?",
      answer:
        "Hayır! İş arayanlar için Mesai tamamen ücretsizdir. İş bulma, başvuru yapma ve kazanç takibi gibi tüm özellikler ücretsiz olarak sunulmaktadır.",
    },
    {
      question: "İşverenler için fiyatlandırma nasıl?",
      answer:
        "İşverenler için Standart (₺499/ay) ve Premium (₺999/ay) olmak üzere iki farklı plan sunuyoruz. Standart plan 10 aktif iş ilanı içerirken, Premium plan sınırsız ilan ve gelişmiş özellikler sunar.",
    },
    {
      question: "Ödemeler nasıl yapılıyor?",
      answer:
        "Tüm ödemeler platform üzerinden güvenli bir şekilde gerçekleştirilir. İş tamamlandıktan sonra ödeme otomatik olarak işçinin hesabına aktarılır. İşverenler kredi kartı, banka kartı veya havale ile ödeme yapabilirler.",
    },
    {
      question: "Güvenlik önlemleriniz nelerdir?",
      answer:
        "Tüm kullanıcılarımız kimlik doğrulamasından geçer. İşverenler doğrulanır ve ödemeler güvenli ödeme sistemleri üzerinden yapılır. Ayrıca değerlendirme sistemi sayesinde güvenilir bir topluluk oluşturuyoruz.",
    },
    {
      question: "Hangi şehirlerde hizmet veriyorsunuz?",
      answer:
        "Şu anda İstanbul, Ankara, İzmir, Bursa ve Antalya'da aktif olarak hizmet veriyoruz. Yakında tüm Türkiye'ye yayılmayı planlıyoruz.",
    },
    {
      question: "İş bulamadım, ne yapmalıyım?",
      answer:
        "Profilinizi eksiksiz doldurun, yeteneklerinizi belirtin ve bildirimlerinizi açık tutun. Ayrıca lokasyon ayarlarınızı genişleterek daha fazla iş fırsatına erişebilirsiniz. Destek ekibimiz size yardımcı olmak için her zaman hazır.",
    },
    {
      question: "İşveren olarak nasıl ilan verebilirim?",
      answer:
        "İşveren hesabı oluşturduktan sonra 'İlan Ver' butonuna tıklayarak iş detaylarını, lokasyonu, ücret bilgilerini ve gerekli yetenekleri girebilirsiniz. İlanınız onaylandıktan sonra uygun adaylara gösterilmeye başlar.",
    },
    {
      question: "Destek ekibinize nasıl ulaşabilirim?",
      answer:
        "İletişim sayfamız üzerinden bize e-posta gönderebilir, telefon ile arayabilir veya canlı destek hattımızdan anlık yardım alabilirsiniz. Hafta içi 09:00-18:00 saatleri arasında aktif olarak hizmet veriyoruz.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-neon/20 blur-[128px]" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-4 py-2 text-sm font-medium text-neon">
              <HelpCircle className="h-4 w-4" />
              <span>Sıkça Sorulan Sorular</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
              Size <span className="text-neon">yardımcı</span> olalım
            </h1>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Mesai hakkında merak ettiğiniz her şey burada
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-neon/50 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-neon shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</div>
                </div>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-16 text-center">
            <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Sorunuz yanıtlanmadı mı?</h3>
              <p className="text-muted-foreground mb-6">
                Destek ekibimiz size yardımcı olmak için burada. Bize ulaşın, en kısa sürede dönüş yapalım.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-neon text-background hover:bg-neon/90 h-12 px-8 font-semibold transition-colors"
              >
                İletişime Geç
              </a>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
