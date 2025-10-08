"use server";

import { db } from "@/db";
import { pdfSummaries } from "@/db/schema/pdf-schema";
import { getCurrentUser } from "@/lib/auth-util";
import { and, eq } from "drizzle-orm";

export async function getAllSummaries() {
  const user = await getCurrentUser();
  const summaries = await db
    .select()
    .from(pdfSummaries)
    .where(eq(pdfSummaries.userId, user.id));
  return summaries;
}

export async function getSummary(summaryId: string) {
  const user = await getCurrentUser();
  const [summary] = await db
    .select()
    .from(pdfSummaries)
    .where(
      and(eq(pdfSummaries.id, summaryId), eq(pdfSummaries.userId, user.id)),
    );
  return summary;
}

export async function deleteSummary(summaryId: string) {
  const user = await getCurrentUser();
  await db
    .delete(pdfSummaries)
    .where(
      and(eq(pdfSummaries.id, summaryId), eq(pdfSummaries.userId, user.id)),
    );
}
