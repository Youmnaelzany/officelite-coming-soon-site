import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const formSubmissions = pgTable("form_submissions", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 100 }).notNull().unique(),
  plan: varchar("plan", { length: 20 })
    .notNull()
    .$type<"basic" | "pro" | "ultimate">(),
  phone: varchar("phone", { length: 20 }),
  company: varchar("company", { length: 100 }),
  submittedAt: timestamp("submitted_at").defaultNow(),
});
