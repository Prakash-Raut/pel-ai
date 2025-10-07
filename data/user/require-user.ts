import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { cache } from "react";

export const getCurrentUser = cache(async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return null;
  }

  return session.user;
});

export const requireUser = cache(async () => {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Not Authenticated");
  }

  return user;
});