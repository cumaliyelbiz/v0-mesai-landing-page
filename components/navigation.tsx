"use client"

import { Button } from "@/components/ui/button"
import { Zap, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitcher } from "./language-switcher"
import { useTranslations } from "next-intl"
import type { Locale } from "@/i18n/config"

export function Navigation({ locale }: { locale: Locale }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = useTranslations("navigation")

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon/20 ring-2 ring-neon/50">
              <Zap className="h-6 w-6 text-neon" fill="currentColor" />
            </div>
            <span className="text-2xl font-bold tracking-tight">Mesai</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("about")}
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("services")}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("contact")}
            </Link>
            <LanguageSwitcher currentLocale={locale} />
            <ThemeToggle />
            <Button variant="outline" size="sm">
              {t("login")}
            </Button>
            <Button size="sm" className="bg-neon text-background hover:bg-neon/90">
              {t("getStarted")}
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher currentLocale={locale} />
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border/40">
            <Link
              href="/about"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("about")}
            </Link>
            <Link
              href="/services"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("services")}
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("contact")}
            </Link>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                {t("login")}
              </Button>
              <Button size="sm" className="flex-1 bg-neon text-background hover:bg-neon/90">
                {t("getStarted")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
