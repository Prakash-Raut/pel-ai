import { getSummary } from "@/actions/summary";
import { DownloadSummary } from "@/components/summary/download-summary";
import { SummaryView } from "@/components/summary/summary-view";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon,
  Calendar1Icon,
  LinkIcon,
  Loader2Icon,
  SparklesIcon,
  TimerIcon,
} from "lucide-react";
import Link from "next/link";

export default async function SummaryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await getSummary(id);

  if (!data) {
    return (
      <div>
        <Loader2Icon className="animate-spin" />{" "}
      </div>
    );
  }

  return (
    <section className="container mx-auto flex flex-col max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
      <nav className="flex justify-between items-center space-y-4 border p-4 rounded-xl">
        <Badge>
          <SparklesIcon />
          AI SUMMARY
        </Badge>
        <div className="flex flex-1 items-center gap-2">
          <div className="flex items-center gap-2">
            <Calendar1Icon />
            <time dateTime={data.createdAt.toISOString()}>
              {data.createdAt.toUTCString()}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <TimerIcon />
            <span>2 minutes to read</span>
          </div>
        </div>
        <Button variant="outline" asChild>
          <Link href="/dashboard">
            <ArrowLeftIcon />
            Back to Dashboard
          </Link>
        </Button>
      </nav>
      <div className="container mx-auto max-w-5xl px-4 py-2 text-center">
        <SummaryHeader title={data.title} />
        <SourceInfo fileName={data.fileName} />
        <div className="flex justify-center gap-4">
          <ViewOriginalFile originalFileUrl={data.originalFileUrl} />
          <DownloadSummary
            createdAt={data.createdAt}
            fileName={data.fileName}
            summary={data.summaryText}
            title={data.title}
          />
        </div>
        <div className="relative space-y-4">
          <SummaryView summary={data.summaryText} />
        </div>
      </div>
    </section>
  );
}

function SummaryHeader({ title }: { title: string }) {
  return (
    <h1 className="scroll-m-20 text-balance font-extrabold text-4xl tracking-tight">
      {title}
    </h1>
  );
}

function SourceInfo({ fileName }: { fileName: string }) {
  return <p className="text-muted-foreground text-sm">Source: {fileName}</p>;
}

function ViewOriginalFile({ originalFileUrl }: { originalFileUrl: string }) {
  return (
    <Button variant="link">
      <LinkIcon />
      <a href={originalFileUrl} target="_blank">
        View Original File
      </a>
    </Button>
  );
}
