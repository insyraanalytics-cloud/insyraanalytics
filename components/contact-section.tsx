"use client"

import { useActionState, useEffect, useRef } from "react"
import { useFormStatus } from "react-dom"
import { CheckCircle2, AlertCircle } from "lucide-react"
import { submitContact, type ContactState } from "@/app/actions/contact"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const initialState: ContactState = { status: "idle", message: "" }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="min-w-28">
      {pending ? "Sending..." : "Submit"}
    </Button>
  )
}

export function ContactSection() {
  const [state, formAction] = useActionState(submitContact, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset()
    }
  }, [state.status])

  return (
    <section id="contact" className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-primary">Let&apos;s Work Together</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Have a question or need custom insights?
          </h2>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-navy-foreground/70">
            Share your details and our team will get in touch with you to understand your needs.
          </p>
        </div>

        <form ref={formRef} action={formAction} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="sr-only">
              Your Name
            </label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Your Name"
              className="h-12 border-transparent bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Your Work Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Your Work Email"
              className="h-12 border-transparent bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div>
            <label htmlFor="company" className="sr-only">
              Company Name
            </label>
            <Input
              id="company"
              name="company"
              placeholder="Company Name"
              className="h-12 border-transparent bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              How can we help you?
            </label>
            <Textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="How can we help you?"
              className="resize-none border-transparent bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {state.status !== "idle" && state.message && (
            <p
              role="status"
              className={`flex items-center gap-2 text-sm ${
                state.status === "success" ? "text-navy-foreground" : "text-red-300"
              }`}
            >
              {state.status === "success" ? (
                <CheckCircle2 className="size-4 shrink-0" />
              ) : (
                <AlertCircle className="size-4 shrink-0" />
              )}
              {state.message}
            </p>
          )}

          <div>
            <SubmitButton />
          </div>
        </form>
      </div>
    </section>
  )
}
