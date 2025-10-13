import { UploadForm } from "@/components/upload/upload-form";
import { UploadHeader } from "@/components/upload/upload-header";
import { getCurrentUser } from "@/lib/auth-util";

export default async function UploadPage() {
  const user = await getCurrentUser();

  return (
    <section className="container mx-auto px-4 max-w-5xl min-h-screen">
      <UploadHeader />
      <UploadForm userId={user.id} />
    </section>
  );
}
