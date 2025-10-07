import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { nanoid } from "nanoid";
import { user } from "./auth-schema";

export const pdfStatus = pgEnum("pdf_status", ["pending", "processing", "completed", "failed"]);

export const pdfSummaries = pgTable("pdf_summaries", {
  id: text("id").primaryKey().default(nanoid()),
  title: text("title").notNull(),
  fileName: text("file_name").notNull(),
  originalFileUrl: text("original_file_url").notNull(),
  summaryText: text("summary_text").notNull(),
  status: pdfStatus("status").default("pending").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull(),
});