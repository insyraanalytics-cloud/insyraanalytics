import { Search, Users, BarChart3, ClipboardList, PieChart, Target } from "lucide-react"

const services = [
  { icon: Search, title: "Market Research" },
  { icon: Users, title: "Customer Insights" },
  { icon: BarChart3, title: "Competitor Analysis" },
  { icon: ClipboardList, title: "Survey & Data Collection" },
  { icon: PieChart, title: "Business Intelligence & Analytics" },
  { icon: Target, title: "Market Entry & Growth Strategy" },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Services We Offer
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Comprehensive research and analytics solutions tailored to your business needs.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:gap-x-6 lg:grid-cols-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center gap-3 border-border text-center md:not-last:border-r"
            >
              <service.icon className="size-9 text-primary" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="text-sm font-semibold leading-snug text-foreground">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
