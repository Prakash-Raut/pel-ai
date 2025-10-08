import { headers } from "next/headers";
import { cache } from "react";
import { auth } from "./auth";

export const getCurrentUser = cache(async () => {
  const result = await auth.api.getSession({
    headers: await headers(),
  });

  if (!result?.user) {
    throw new Error("Unauthorized");
  }

  return result.user;
});

export const getCurrentSession = cache(async () => {
  const result = await auth.api.getSession({
    headers: await headers(),
  });

  if (!result?.session) {
    throw new Error("Unauthorized");
  }

  return result.session;
});
