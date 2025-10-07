import { User } from "better-auth";
import "server-only";

type PolicyUser = User;

export function canCreateSummary(user: PolicyUser | null) {
  return Boolean(user);
}

export function canEditSummary(user: PolicyUser | null
  , summary: { id: string, userId: string }
) {
  if (!user) return false;
  if (user.id === summary.userId) return true;
  return false;
}