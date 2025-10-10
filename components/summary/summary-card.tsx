import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Summary } from "@/db/schema/pdf-schema";
import { HeartIcon, ShareIcon } from "lucide-react";
import Link from "next/link";
import DeleteButton from "./delete-summary";

export function SummaryCard({
  id,
  title,
  // fileName,
  // originalFileUrl,
  summaryText,
  // status,
  // createdAt,
}: Summary) {
  return (
    <Card className="w-full max-w-xs shadow-none py-0 gap-0">
      <CardContent className="p-0 m-2">
        <Link href={`/summaries/${id}`}>
          <div className="relative aspect-video bg-muted border-y rounded-xl" />
          <div className="py-5 px-6">
            <h2 className="font-semibold line-clamp-1">{title}</h2>
            <p className="mt-1 text-sm text-muted-foreground line-clamp-3">
              {summaryText}
            </p>
          </div>
        </Link>
      </CardContent>
      <CardFooter className="border-t flex px-2 pb-0 py-2!">
        <Button variant="ghost" className="grow shrink-0 text-muted-foreground">
          <HeartIcon /> <span className="hidden sm:inline">Like</span>
        </Button>
        <Button variant="ghost" className="grow shrink-0 text-muted-foreground">
          <ShareIcon /> <span className="hidden sm:inline">Share</span>
        </Button>
        <DeleteButton id={id} />
      </CardFooter>
    </Card>
  );
}
