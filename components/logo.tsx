export function Logo({ className, variant = "dark" }: { className?: string; variant?: "dark" | "light" }) {
  const main = variant === "dark" ? "text-foreground" : "text-navy-foreground"
  const sub = variant === "dark" ? "text-muted-foreground" : "text-navy-foreground/60"
  return (
    <div className={className}>
      <span className={`block text-2xl font-bold leading-none tracking-tight ${main}`}>insyra</span>
      <span className={`block text-[0.6rem] font-medium uppercase tracking-[0.45em] ${sub}`}>Analytics</span>
    </div>
  )
}
