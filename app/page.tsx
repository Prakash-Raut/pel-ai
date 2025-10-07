import { EmptyDemo } from "@/components/common/empty-demo";
import { SummaryDAL } from "@/data/summary/summary.dal";
import { requireUser } from "@/data/user/require-user";

async function getSummaries() {
  const user = await requireUser();
  const dal = await SummaryDAL.public();
  const summaries = await dal.listSummaries(user.id);
  return summaries;
}

export default async function Home() {
  const summary = await getSummaries();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {
          summary.length === 0 ? (
            <EmptyDemo />
          ) : (
            <div>
              Summaries
            </div>
          )
        }
      </main>
    </div>
  );
}
