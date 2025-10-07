import { revalidatePath } from "next/cache";
import { SummaryDAL } from "../../data/summary/summary.dal";
import { SummaryCreateInput, SummaryCreateInputSchema } from "../../data/summary/summary.dto";


export async function createSummaryAction(input: SummaryCreateInput) {
  const parsed = SummaryCreateInputSchema.safeParse(input);

  if (!parsed.success) {
    return {
      ok: false as const,
      error: parsed.error.issues
        .map((i) => `${i.path.join(".")}: ${i.message}`)
        .join("\n"),
    }
  }

  try {
    const dal = await SummaryDAL.create();
    const created = await dal.createSummary(parsed.data);
    revalidatePath("/");
    return {
      ok: true as const,
      summaryId: created.id,
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return {
      ok: false as const,
      error: message,
    }
  }
}
