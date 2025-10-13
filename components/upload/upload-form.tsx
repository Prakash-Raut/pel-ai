"use client";

import { getSummaryByGoogleGemini } from "@/actions/ai";
import { createSummary } from "@/actions/summary";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fetchAndExtractPdfText } from "@/lib/pdf";
import { useUploadThing } from "@/lib/uploadthing";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  file: z
    .instanceof(File)
    .refine((file) => file.size <= 20 * 1024 * 1024, {
      message: "File size must be less than 20MB",
    })
    .refine((file) => file.type.startsWith("application/pdf"), {
      message: "File must be a PDF",
    }),
});

export function UploadForm({ userId }: { userId: string }) {
  const { startUpload, isUploading } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      toast.success("Pdf uploaded successfully");
    },
    onUploadError: () => {
      toast.error("error occurred while uploading");
    },
    onUploadBegin: () => {
      toast.success("Starting to upload...");
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const file = formData.get("file") as File;

    const { success, data, error } = schema.safeParse({ file });

    if (!success) {
      const errorMessage =
        error.flatten().fieldErrors.file?.[0] ?? "Invalid file";
      toast.error(errorMessage);
      return;
    }

    // upload to uploadthing
    const uploadRes = await startUpload([data.file]);

    if (!uploadRes) {
      return;
    }

    toast.success("Starting to parse...");

    // parse using langchain
    const pdfText = await fetchAndExtractPdfText(uploadRes[0].ufsUrl);

    if (!pdfText) {
      toast.error(`Failed to parse ${file.name}`);
      return;
    }

    toast.success("Parsed pdf successfully");

    toast.success("Summarizing pdf...");

    const summaryText = await getSummaryByGoogleGemini(pdfText);

    if (!summaryText) {
      toast.error(`Failed to summarize ${file.name}`);
      return;
    }

    toast.success("Getting Results...");

    // save to db
    await createSummary({
      title: file.name,
      fileName: file.name,
      originalFileUrl: uploadRes[0].ufsUrl,
      summaryText,
      userId,
    });

    toast.success("Saved to db successfully");

    toast.success("Summarized pdf successfully");
  };

  return (
    <form
      className="flex justify-between items-center gap-6"
      onSubmit={handleSubmit}
    >
      <Input
        id="file"
        name="file"
        type="file"
        accept="application/pdf"
        required
      />
      <Button type="submit" disabled={isUploading}>
        Upload Your Pdf
      </Button>
    </form>
  );
}
