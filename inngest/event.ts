export type AIChatCompletion = {
	name: "ai/chat.completion";
	data: {
		prompt: {
			role: "system" | "user" | "assistant";
			content: string;
		}[];
		temperature: number;
		maxOutputTokens: number;
	};
};

export type AISummarizeContent = {
	name: "ai/summarize.content";
	data: {
		fileUrl: string;
		userId: string;
	};
};

export type EventUnion = AIChatCompletion | AISummarizeContent;