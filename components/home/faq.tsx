"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { AccordionHeader } from "@radix-ui/react-accordion";
import {
	BadgeDollarSign,
	PlusIcon,
	Route,
	ShieldCheck,
	Truck,
	Undo2,
	UserRoundCheck,
} from "lucide-react";
import { useState } from "react";

const faq = [
	{
		id: 1,
		icon: Undo2,
		question: "What is Saaransh AI?",
		answer:
			"Saaransh AI is an intelligent document summarization tool that helps you quickly extract key insights from long documents, articles, and text content.",
	},
	{
		id: 2,
		icon: Route,
		question: "How does the summarization process work?",
		answer:
			"Our AI analyzes your document's content, identifies the most important information, and generates a concise summary while preserving the key points and context.",
	},
	{
		id: 3,
		icon: Truck,
		question: "What types of documents can I summarize?",
		answer:
			"You can summarize various text formats including PDFs, Word documents, articles, research papers, reports, and more. Our AI handles multiple languages and domains.",
	},
	{
		id: 4,
		icon: BadgeDollarSign,
		question: "Is there a free plan available?",
		answer:
			"Yes, we offer a free tier that lets you summarize up to 5 documents per month. For higher usage, check out our affordable premium plans with additional features.",
	},
	{
		id: 5,
		icon: ShieldCheck,
		question: "How secure is my data?",
		answer:
			"We take data security seriously. All documents are encrypted in transit and at rest. We don't store your original documents after processing and summaries are only accessible to you.",
	},
	{
		id: 6,
		icon: UserRoundCheck,
		question: "How accurate are the summaries?",
		answer:
			"Our AI is trained on millions of documents to provide highly accurate summaries. You can adjust the summary length and focus to match your needs while maintaining accuracy.",
	},
];

const FAQ = () => {
	const [value, setValue] = useState<string>();

	return (
		<div className="flex min-h-screen items-center justify-center px-6 py-12">
			<div className="w-full max-w-(--breakpoint-lg)">
				<h2 className="text-center font-semibold text-4xl leading-[1.15]! tracking-tighter md:text-5xl">
					Frequently Asked Questions &#40;FAQs&#41;
				</h2>
				<div className="mt-6 grid w-full gap-x-10 md:grid-cols-2">
					<Accordion
						className="w-full"
						collapsible
						onValueChange={setValue}
						type="single"
						value={value}
					>
						{faq.slice(0, 3).map(({ id, question, answer }) => (
							<AccordionItem key={id} value={`question-${id}`}>
								<AccordionHeader className="flex">
									<AccordionTrigger
										className={cn(
											"flex flex-1 items-center justify-between py-4 font-semibold transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
											"text-start text-lg",
										)}
									>
										<h5 className="text-[28px]">{question}</h5>
										<PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
									</AccordionTrigger>
								</AccordionHeader>
								<AccordionContent className="text-pretty text-base text-muted-foreground">
									<p className="text-lg">{answer}</p>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
					<Accordion
						className="w-full"
						collapsible
						onValueChange={setValue}
						type="single"
						value={value}
					>
						{faq.slice(3).map(({ question, answer }, index) => (
							<AccordionItem key={question} value={`question-${index + 5}`}>
								<AccordionHeader className="flex">
									<AccordionTrigger
										className={cn(
											"flex flex-1 items-center justify-between py-4 font-semibold text-[28px] tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
											"text-start",
										)}
									>
										{question}
										<PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
									</AccordionTrigger>
								</AccordionHeader>
								<AccordionContent className="text-pretty text-base text-muted-foreground">
									{answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
