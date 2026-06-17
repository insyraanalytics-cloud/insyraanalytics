import Link from "next/link"
import { Mail, MapPin } from "lucide-react"
import { Logo } from "@/components/logo"
import { LinkedInIcon } from "@/components/brand-icons"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Insights", href: "#insights" },
  { label: "Contact Us", href: "#contact" },
]

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 border-t border-navy-foreground/10 py-14 md:grid-cols-3">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-foreground/70">
              Insyra Analytics is a market research and analytics company committed to delivering insights that
              inspire action.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Get in Touch</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-navy-foreground/70">
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                <a href="mailto:insyraanalytics@gmail.com" className="hover:text-navy-foreground">
                  insyraanalytics@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0" aria-hidden="true" />
                80 LIG, 149 Mahashakti Nagar, Ujjain, Madhya Pradesh, India
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex size-9 items-center justify-center rounded-full border border-navy-foreground/20 transition-colors hover:bg-navy-foreground/10"
              >
                <LinkedInIcon className="size-4" />
              </a>
              <a
                href="#"
                aria-label="X"
                className="flex size-9 items-center justify-center rounded-full border border-navy-foreground/20 transition-colors hover:bg-navy-foreground/10"
              >
                <XIcon className="size-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex size-9 items-center justify-center rounded-full border border-navy-foreground/20 transition-colors hover:bg-navy-foreground/10"
              >
                <FacebookIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-foreground/10 py-6 text-center text-xs text-navy-foreground/60">
          © 2026 Insyra Analytics. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
