"use server";

import { SUMMARY_SYSTEM_PROMPT } from "@/constants";
import { google } from "@ai-sdk/google";
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

export const getSummaryByGoogleGemini = async (pdfText: string) => {
  const { text } = await generateText({
    model: google("gemini-2.5-flash"),
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
        formatting:\n\n${pdfText}`,
      },
    ],
    temperature: 0.7,
    maxOutputTokens: 1500,
  });
  return text;
};

export const getSummaryByOpenAI = async (pdfText: string) => {
  const { text } = await generateText({
    model: openai("gpt-4o-mini"),
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
        formatting:\n\n${pdfText}`,
      },
    ],
    temperature: 0.7,
    maxOutputTokens: 1500,
  });
  return text;
};
