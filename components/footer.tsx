import { Instagram, Linkedin, Twitter } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"

const icons = {
  Twitter: <Twitter />,
  LinkedIn: <Linkedin />,
  Instagram: <Instagram />,
};

export function Footer() {
  const socials = [
    { name: "Twitter", href: "https://twitter.com/mesaiwork" },
    { name: "LinkedIn", href: "https://linkedin.com/in/mesaiwork" },
    { name: "Instagram", href: "https://instagram.com/mesaiwork" },
  ];
  const t = useTranslations("footer")
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">Mesai</span>
            </div>
            <p className="text-sm text-muted-foreground">{t("description")}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("product")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  {t("features")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-foreground transition-colors">
                  {t("faq")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("company")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-foreground transition-colors">
                  {t("careers")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("legal")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  {t("terms")}
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-foreground transition-colors">
                  {t("cookies")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Mesai Technologies. {t("rights")}</p>
          <div className="flex gap-4">
            {socials.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">{name}</span>
                <div className="h-5 w-5">{icons[name as keyof typeof icons]}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
