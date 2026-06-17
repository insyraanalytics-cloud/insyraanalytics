import { LineChart, UserRound, Clock, Trophy } from "lucide-react"

const reasons = [
  {
    icon: LineChart,
    title: "Data-Driven Insights",
    description: "We turn complex data into clear, actionable recommendations.",
  },
  {
    icon: UserRound,
    title: "Tailored Solutions",
    description: "Every study is customized to your industry, goals, and challenges.",
  },
  {
    icon: Clock,
    title: "Faster Decisions",
    description: "Get accurate insights that help you act with confidence and speed.",
  },
  {
    icon: Trophy,
    title: "Growth Focused",
    description: "Our research uncovers opportunities and drives measurable growth.",
  },
]

export function WhyChooseSection() {
  return (
    <section id="why" className="bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose Insyra Analytics
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Transforming data into actionable insights that drive smarter decisions and sustainable growth.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex flex-col items-center text-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-background shadow-sm">
                <reason.icon className="size-7 text-primary" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">{reason.title}</h3>
              <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
