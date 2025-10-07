import { inngest } from "@/inngest/client";
import { getSummaryByGoogleGemini, getSummaryByOpenAI, summarizeContent } from "@/inngest/function";
import { serve } from "inngest/next";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    /* your functions will be passed here later! */
    summarizeContent,
    getSummaryByGoogleGemini,
    getSummaryByOpenAI,
  ],
});