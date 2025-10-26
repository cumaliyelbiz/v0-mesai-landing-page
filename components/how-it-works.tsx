"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { UserPlus, Search, Send, CheckCircle } from "lucide-react"
import { useTranslations } from "next-intl"

interface StepCardProps {
  number: string
  title: string
  description: string
  icon: React.ReactNode
  isActive: boolean
  onClick: () => void
}

const StepCard = ({ number, title, description, icon, isActive, onClick }: StepCardProps) => {
  return (
    <div
      className={cn(
        "rounded-xl p-6 cursor-pointer transition-all duration-500 border",
        isActive
          ? "bg-card shadow-lg border-neon/30 ring-1 ring-neon/20"
          : "bg-card/50 hover:bg-card/80 border-border/50 hover:border-neon/20",
      )}
      onClick={onClick}
    >
      <div className="flex items-start">
        <div
          className={cn(
            "flex items-center justify-center rounded-full w-12 h-12 mr-4 flex-shrink-0 transition-colors duration-300",
            isActive ? "bg-neon text-background" : "bg-muted text-muted-foreground",
          )}
        >
          {icon}
        </div>
        <div>
          <h3
            className={cn(
              "text-lg font-semibold mb-2 transition-colors duration-300",
              isActive ? "text-neon" : "text-foreground",
            )}
          >
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const t = useTranslations("howItWorks")

  const stepsData = [
    {
      number: "01",
      title: t("step1.title"),
      description: t("step1.description"),
      icon: <UserPlus className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    },
    {
      number: "02",
      title: t("step2.title"),
      description: t("step2.description"),
      icon: <Search className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    },
    {
      number: "03",
      title: t("step3.title"),
      description: t("step3.description"),
      icon: <Send className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    },
    {
      number: "04",
      title: t("step4.title"),
      description: t("step4.description"),
      icon: <CheckCircle className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stepsData.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [stepsData.length])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".fade-in-stagger")
    elements.forEach((el, index) => {
      ;(el as HTMLElement).style.animationDelay = `${0.1 * (index + 1)}s`
      observer.observe(el)
    })

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])

  return (
    <section className="py-20 sm:py-32 relative border-t border-border/50" id="how-it-works" ref={sectionRef}>
      {/* Background decorations */}
      <div className="absolute -top-20 right-0 w-72 h-72 bg-neon/10 rounded-full opacity-60 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-accent-green/10 rounded-full opacity-70 blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 fade-in-stagger">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">{t("title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">{t("subtitle")}</p>
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

          <div className="relative rounded-3xl overflow-hidden h-[400px] shadow-2xl order-1 lg:order-2 opacity-0 fade-in-stagger border border-border/50">
            {stepsData.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000",
                  activeStep === index ? "opacity-100" : "opacity-0 pointer-events-none",
                )}
              >
                <img src={step.image || "/placeholder.svg"} alt={step.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-neon font-medium mb-2 block">{step.number}</span>
                    <h3 className="text-2xl font-semibold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
