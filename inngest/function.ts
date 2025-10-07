import { createSummaryAction } from "@/actions/summary/action";
import { SUMMARY_SYSTEM_PROMPT } from "@/constants";
import { fetchAndExtractPdfText, formatFileNameAsTitle } from "@/lib/pdf";
import { google } from "@ai-sdk/google";
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { inngest } from "./client";

export const getSummaryByGoogleGemini = inngest.createFunction(
  {
    name: "Get summary by Gemini",
    id: "get-summary-by-gemini",
    throttle: { limit: 5, period: "60s" },
  },
  { event: "ai/chat.completion" },
  async ({ event }) => {
    const { text } = await generateText({
      model: google("gemini-2.5-flash"),
      prompt: event.data.prompt,
      temperature: event.data.temperature,
      maxOutputTokens: event.data.maxOutputTokens,
    });
    return text;
  },
);

export const getSummaryByOpenAI = inngest.createFunction(
  {
    name: "Get summary by OpenAI",
    id: "get-summary-by-openai",
    throttle: { limit: 5, period: "60s" },
  },
  { event: "ai/chat.completion" },
  async ({ event }) => {
    const { text } = await generateText({
      model: openai("gpt-5"),
      prompt: event.data.prompt,
      temperature: event.data.temperature,
      maxOutputTokens: event.data.maxOutputTokens,
    });

    return text;
  },
);

export const summarizeContent = inngest.createFunction(
  { name: "Summarize content via GPT-4", id: "summarize-content" },
  { event: "ai/summarize.content" },
  async ({ event, step }) => {
    // parse the pdf using langchain
    const pdf = await step.run("parse-pdf", async () => {
      const fileUrl = event.data.fileUrl;
      const pdfText = await fetchAndExtractPdfText(fileUrl);
      console.log("pdfText", pdfText);
      return {
        pdfText,
      };
    });

    // generate the summary using the gemini model
    const summaryText = await step.invoke("generate-summary-via-gemini", {
      function: getSummaryByGoogleGemini,
      data: {
        prompt: [
          {
            role: "system",
            content: SUMMARY_SYSTEM_PROMPT,
          },
          {
            role: "user",
            content: `Transform this document into an engaging, 
            easy to read summary with contextually 
            relevant emojis and proper markdown 
            formatting:\n\n${pdf.pdfText}`,
          },
        ],
        temperature: 0.7,
        maxOutputTokens: 1500,
      },
    });
    console.log("summaryText", summaryText);

    // save the summary to the database
    const pdfDetail = await step.run("save-to-db", async () => {
      const fileName = formatFileNameAsTitle("Random file name");

      const summary = await createSummaryAction({
        title: fileName as string,
        fileName: fileName as string,
        originalFileUrl: event.data.fileUrl,
        summaryText: summaryText,
        userId: event.data.userId,
      });

      console.log("summary", summary);

      return { success: true, title: fileName, summary: summary };
    });

    // push the summary to the client
    await step.run("websocket-push-to-client", async () => {
      return {
        success: true,
        title: pdfDetail.title,
        summary: pdfDetail.summary,
      };
    });

    return {
      success: true,
      title: pdfDetail.title,
      summary: pdfDetail.summary,
    };
  },
);
