import { getCurrentUser, requireUser } from "@/data/user/require-user";
import { db } from "@/db";
import { pdfSummaries } from "@/db/schema/pdf-schema";
import { desc, eq } from "drizzle-orm";
import { SummaryCreateInput, SummaryCreateInputSchema, SummaryPostDTO } from "./summary.dto";
import { canCreateSummary } from "./summary.policy";

export class SummaryDAL {
  private constructor(private readonly userId: string) { }

  static async create() {
    const user = await requireUser();
    return new SummaryDAL(user.id);
  }

  static async public() {
    const user = await getCurrentUser();
    return new SummaryDAL(user?.id ?? "");
  }

  async listSummaries(userId: string): Promise<SummaryPostDTO[]> {
    const summaries = await db
      .select()
      .from(pdfSummaries)
      .where(eq(pdfSummaries.userId, userId))
      .orderBy(desc(pdfSummaries.createdAt));

    return summaries;
  }

  async createSummary(input: SummaryCreateInput): Promise<SummaryPostDTO> {
    const parsed = SummaryCreateInputSchema.safeParse(input);

    if (!parsed.success) {
      const message = parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join(", ");
      throw new Error(`ValidationError: ${message}`);
    }

    const user = await requireUser();

    if (!canCreateSummary(user)) {
      throw new Error("Forbidden: cannot create summary");
    }

    const [created] = await db.insert(pdfSummaries).values({
      ...parsed.data,
      userId: user.id,
    }).returning();

    return created;
  }
}