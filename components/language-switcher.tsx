"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Languages, Check } from "lucide-react"
import { locales, localeNames, type Locale } from "@/i18n/config"
import { useRouter, usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const router = useRouter()
  const pathname = usePathname()
  const [activeLocale, setActiveLocale] = useState<Locale>(currentLocale)

  useEffect(() => {
    setActiveLocale(currentLocale)
  }, [currentLocale])

  const handleLocaleChange = (locale: Locale) => {
    setActiveLocale(locale)
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`

    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`)
    router.push(newPath)
    router.refresh()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Languages className="h-4 w-4" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => handleLocaleChange(locale)}
            className={activeLocale === locale ? "bg-accent" : ""}
          >
            <div className="flex items-center justify-between w-full gap-2">
              <span>{localeNames[locale]}</span>
              {activeLocale === locale && <Check className="h-4 w-4 text-neon" />}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
