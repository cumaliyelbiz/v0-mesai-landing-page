"use"
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { UserPlus, Search, Send, CheckCircle } from "lucide-react";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const StepCard = ({ number, title, description, icon, isActive, onClick }: StepCardProps) => {
  return (
    <div 
      className={cn(
        "rounded-xl p-6 cursor-pointer transition-all duration-500 border",
        isActive 
          ? "bg-white shadow-elegant border-primary/30" 
          : "bg-white/50 hover:bg-white/80 border-transparent"
      )}
      onClick={onClick}
    >
      <div className="flex items-start">
        <div className={cn(
          "flex items-center justify-center rounded-full w-12 h-12 mr-4 flex-shrink-0 transition-colors duration-300",
          isActive ? "bg-primary text-white" : "bg-gray-100 text-gray-500"
        )}>
          {icon}
        </div>
        <div>
          <h3 className={cn(
            "text-lg font-semibold mb-2 transition-colors duration-300",
            isActive ? "text-primary" : "text-gray-800"
          )}>
            {title}
          </h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const stepsData = [
    {
      number: "01",
      title: "Kayıt Ol",
      description: "İş arayan veya işveren olarak platforma üye ol. Profilini oluştur ve tercihlerini belirle.",
      icon: <UserPlus className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "02",
      title: "İlanları Keşfet",
      description: "Konum, kategori ve maaş filtrelerine göre sana uygun iş ilanlarını bul. Harita üzerinde görüntüle.",
      icon: <Search className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "03",
      title: "Başvur ve İletişim Kur",
      description: "Tek tıkla başvurunu yap. İşverenlerle mesajlaş, sorularını sor ve görüşme ayarla.",
      icon: <Send className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "04",
      title: "İşe Başla",
      description: "Başvurun onaylandı mı? Tebrikler! İşverenden onay aldıktan sonra işe başlama detaylarını öğren.",
      icon: <CheckCircle className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stepsData.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [stepsData.length]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".fade-in-stagger");
    elements.forEach((el, index) => {
      (el as HTMLElement).style.animationDelay = `${0.1 * (index + 1)}s`;
      observer.observe(el);
    });
    
    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <section className="py-20 bg-white relative" id="how-it-works" ref={sectionRef}>
      <div className="absolute -top-20 right-0 w-72 h-72 bg-primary/5 rounded-full opacity-60 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-secondary/5 rounded-full opacity-70 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 fade-in-stagger">
          <div className="mesai-chip mx-auto mb-4">
            <span>Nasıl Çalışır?</span>
          </div>
          <h2 className="section-title mb-4">Mesai. ile İş Bulmak Çok Kolay</h2>
          <p className="section-subtitle mx-auto">
            4 basit adımda hayalinizdeki işe kavuşun.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 order-2 lg:order-1 opacity-0 fade-in-stagger">
            {stepsData.map((step, index) => (
              <StepCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isActive={activeStep === index}
                onClick={() => setActiveStep(index)}
              />
            ))}
          </div>
          
          <div className="relative rounded-3xl overflow-hidden h-[400px] shadow-elegant order-1 lg:order-2 opacity-0 fade-in-stagger">
            {stepsData.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000",
                  activeStep === index ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="text-primary/80 font-medium mb-2 block">{step.number}</span>
                    <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-white/80">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
