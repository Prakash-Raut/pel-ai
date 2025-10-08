import { getAllSummaries } from "@/actions/summary";
import { EmptyDemo } from "@/components/common/empty-demo";
import Header from "@/components/dashboard/header";
import { SummaryCardNew } from "@/components/summary/summary-card";

export default async function Home() {
  const summaries = await getAllSummaries();
  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <Header />
      <main className="">
        {summaries.length === 0 ? (
          <EmptyDemo />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {summaries.map((summary) => (
              <SummaryCardNew key={summary.id} {...summary} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
