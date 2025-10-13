import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import type { Summary } from "@/db/schema/pdf-schema";
import { formatDate } from "date-fns";
import {
  ExternalLink,
  HeartIcon,
  MoreHorizontalIcon,
  ShareIcon,
} from "lucide-react";
import Link from "next/link";
import DeleteButton from "./delete-summary";

export function SummaryCard({
  id,
  title,
  // fileName,
  // originalFileUrl,
  summaryText,
  // status,
  createdAt,
}: Summary) {
  return (
    <Card className="w-full max-w-xs shadow-none py-0 gap-0">
      <CardHeader className="flex flex-row items-center justify-between py-2.5 -mr-1">
        <Item className="w-full p-0 gap-2.5">
          <ItemMedia>
            {/* <Image
              src="https://github.com/shadcn.png"
              className="h-8 w-8 rounded-full bg-secondary object-contain"
              alt=""
              height={32}
              width={32}
            /> */}
          </ItemMedia>
          <ItemContent className="gap-0">
            <ItemTitle className="">Pdf Summary </ItemTitle>
            <ItemDescription className="text-xs">
              <time dateTime={formatDate(createdAt, "MMM d, yyyy")}>
                {formatDate(createdAt, "MMM d, yyyy")}
              </time>
            </ItemDescription>
          </ItemContent>
          <ItemActions className="-me-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontalIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <DeleteButton id={id} />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ItemActions>
        </Item>
      </CardHeader>
      <CardContent className="p-0 m-2">
        <div className="relative aspect-video bg-muted border-y rounded-xl" />
        <div className="py-5 px-6">
          <h2 className="font-semibold line-clamp-1">{title}</h2>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-3">
            {summaryText}
          </p>
        </div>
      </CardContent>
      <CardFooter className="border-t flex px-2 pb-0 py-2!">
        <Button variant="ghost" className="grow shrink-0 text-muted-foreground">
          <HeartIcon /> <span className="hidden sm:inline">Like</span>
        </Button>
        <Button variant="ghost" className="grow shrink-0 text-muted-foreground">
          <ShareIcon /> <span className="hidden sm:inline">Share</span>
        </Button>
        <Button
          variant="ghost"
          className="grow shrink-0 text-muted-foreground"
          asChild
        >
          <Link href={`/summaries/${id}`}>
            <ExternalLink /> <span className="hidden sm:inline">View</span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
