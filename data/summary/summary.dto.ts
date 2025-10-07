import "server-only";
import { z } from "zod";

export const SummaryCreateInputSchema = z.object({
  title: z.string().min(1).max(50),
  fileName: z.string().min(1).max(50),
  originalFileUrl: z.url(),
  summaryText: z.string().min(1).max(1000),
  userId: z.string().min(1).max(255),
});

export type SummaryCreateInput = z.infer<typeof SummaryCreateInputSchema>;

export const SummaryPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  fileName: z.string(),
  originalFileUrl: z.url(),
  summaryText: z.string(),
  status: z.enum(["pending", "processing", "completed", "failed"]),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type SummaryPostDTO = z.infer<typeof SummaryPostSchema>;