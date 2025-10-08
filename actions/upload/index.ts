"use server";

import { getSummaryByGoogleGemini } from "@/actions/ai";
import { db } from "@/db";
import { pdfSummaries } from "@/db/schema/pdf-schema";
import { fetchAndExtractPdfText } from "@/lib/pdf";

export async function uploadAndSummarize({
  fileName,
  fileUrl,
  userId,
}: {
  fileName: string;
  fileUrl: string;
  userId: string;
}) {
  const pdfText = await fetchAndExtractPdfText(fileUrl);

  const summaryText = await getSummaryByGoogleGemini(pdfText);

  await db.insert(pdfSummaries).values({
    title: fileName,
    fileName,
    originalFileUrl: fileUrl,
    summaryText,
    userId,
  });
}
