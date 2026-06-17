import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

export const contactLeads = pgTable("contact_leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
})
