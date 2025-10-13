"use server";

import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

export const fetchAndExtractPdfText = async (fileUrl: string) => {
  try {
    // fetch the file from the url
    const response = await fetch(fileUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch PDF file");
    }

    // convert the response to a blob
    const blob = await response.blob();
    if (blob.size === 0) {
      throw new Error("PDF file is empty");
    }

    // convert the blob to an array buffer
    const arrayBuffer = await blob.arrayBuffer();
    if (arrayBuffer.byteLength === 0) {
      throw new Error("PDF file is empty");
    }

    // create a new PDFLoader with the array buffer
    const loader = new PDFLoader(new Blob([arrayBuffer]));

    // load the PDF file
    const docs = await loader.load();
    if (docs.length === 0) {
      throw new Error("No pages found in PDF file");
    }

    // combine all pages
    return docs.map((doc) => doc.pageContent).join("\n");
  } catch (error) {
    console.error("Error fetching and extracting PDF text", error);
    throw new Error("Error fetching and extracting PDF text");
  }
};

export const formatFileNameAsTitle = async (fileName: string) => {
  const withoutExtension = fileName.split(".")[0];

  if (!withoutExtension) {
    throw new Error("File name is required");
  }

  const withSpaces = withoutExtension.replace(/_/g, " ");

  return withSpaces.replace(/\b\w/g, (char) => char.toUpperCase());
};
