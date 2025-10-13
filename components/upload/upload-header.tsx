import { SparklesIcon } from "lucide-react";
import { Badge } from "../ui/badge";

export function UploadHeader() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 my-10">
      <Badge variant="outline">
        <SparklesIcon className="ml-1 size-4" aria-hidden="true" />
        AI Powered Summary
      </Badge>
      <h1 className="text-5xl font-bold">
        Start Uploading Your <span className="text-primary">PDFs</span>
      </h1>
      <p className="text-sm text-muted-foreground">
        Upload your PDFs and let our AI do the magic.
      </p>
    </div>
  );
}
