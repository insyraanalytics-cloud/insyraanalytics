import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="bg-secondary/40">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-primary">
            Market Research. Trusted Insights. Smarter Decisions.
          </p>
          <h1 className="mt-4 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            We turn data into actionable insights
          </h1>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Insyra Analytics provides reliable market research and data-driven insights to help businesses grow
            with confidence.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="#services">Learn More</Link>
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-border shadow-sm">
          <Image
            src="/images/hero-analytics.png"
            alt="A magnifying glass over printed market research reports with bar charts and a pie chart"
            width={720}
            height={560}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
