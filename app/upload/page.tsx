"use client";

import { inngest } from '@/inngest/client';
import { authClient } from '@/lib/auth-client';
import { UploadButton } from '@/lib/uploadthing';

export default function UploadPage() {
  const user = authClient.useSession();

  const handleUploadComplete = async (res: any) => {
    console.log("res", res);
    if (!user.data?.user.id) {
      return;
    }
    await inngest.send({
      name: "ai/summarize.content",
      data: {
        fileUrl: res[0].url,
        userId: user.data?.user.id,
      },
    });
  }


  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <UploadButton
        endpoint="pdfUploader"
        className="mt-4"
        onClientUploadComplete={handleUploadComplete}
      />
    </div>
  )
}
