"use client";

import { uploadAndSummarize } from "@/actions/upload";
import { authClient } from "@/lib/auth-client";
import { UploadButton } from "@/lib/uploadthing";

export default function UploadPage() {
  const result = authClient.useSession();
  const user = result.data?.user;

  if (!user) {
    return <div>Not found</div>;
  }

  const handleUploadComplete = async (res: any) => {
    const file = res[0];
    await uploadAndSummarize({
      fileName: file.name,
      fileUrl: file.ufsUrl,
      userId: user.id,
    });
  };

  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <UploadButton
        endpoint="pdfUploader"
        className="mt-4"
        onClientUploadComplete={handleUploadComplete}
      />
    </div>
  );
}
