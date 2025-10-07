import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { user } from "./auth-schema";

export const pdfStatus = pgEnum("pdf_status", ["pending", "processing", "completed", "failed"]);

export const pdfSummaries = pgTable("pdf_summaries", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  fileName: text("file_name").notNull(),
  originalFileUrl: text("original_file_url").notNull(),
  summaryText: text("summary_text").notNull(),
  status: pdfStatus("status").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});