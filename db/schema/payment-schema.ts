import { integer, pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { user } from "./auth-schema";

export const paymentStatus = pgEnum("payment_status", [
  "pending",
  "paid",
  "failed",
]);

export const payments = pgTable("payments", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  priceId: text("price_id").notNull(),
  stripePaymentId: text("stripe_payment_id").notNull(),
  userEmail: text("user_email").notNull(),
  amount: integer("amount").notNull(),
  status: paymentStatus("status").notNull(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});
