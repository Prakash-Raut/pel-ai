import { EmptyDemo } from "@/components/common/empty-demo";
import Header from "@/components/dashboard/header";
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
    <div className="container mx-auto px-4 max-w-5xl">
      <Header />
      <main className="">
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
