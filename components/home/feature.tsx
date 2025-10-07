import {
	ArrowRightIcon,
	Blocks,
	Bot,
	ChartPie,
	Film,
	MessageCircle,
	Settings2,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const features = [
	{
		id: 1,
		icon: Bot,
		title: "Smart Summarization",
		description:
			"Our AI analyzes documents and generates concise, accurate summaries while preserving key insights.",
	},
	{
		id: 2,
		icon: Blocks,
		title: "Multi-Format Support",
		description:
			"Process PDFs, Word docs, articles and more - our system handles diverse document types.",
	},
	{
		id: 3,
		icon: Settings2,
		title: "Customizable Output",
		description:
			"Adjust summary length and focus to match your needs while maintaining accuracy.",
	},
	{
		id: 4,
		icon: ChartPie,
		title: "Advanced Analytics",
		description:
			"Get detailed metrics on document processing, summary quality, and usage patterns.",
	},
	{
		id: 5,
		icon: MessageCircle,
		title: "Multi-Language Support",
		description:
			"Summarize content across different languages with our advanced language processing.",
	},
	{
		id: 6,
		icon: Film,
		title: "Secure Processing",
		description:
			"Your documents are encrypted and processed securely, with summaries only accessible to you.",
	},
];

const Features = () => (
	<div className="w-full px-6 py-12 xs:py-20" id="features">
		<h2 className="text-center font-bold text-3xl xs:text-4xl leading-[1.15] tracking-tight sm:text-5xl">
			<span className="text-primary">Unleash Creativity</span> Connect with your
			audience
		</h2>
		<div className="mx-auto mt-10 grid w-full max-w-screen-lg gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
			{features.map((feature) => (
				<div
					className="flex h-full min-h-[320px] flex-col items-start justify-between space-y-4 rounded-2xl px-5 py-6"
					key={feature.id}
				>
					<div className="flex flex-col space-y-4">
						<feature.icon className="h-10 w-10 text-primary" />
						<h4 className="font-semibold text-2xl">{feature.title}</h4>
						<p className="mt-1 text-lg text-muted-foreground">
							{feature.description}
						</p>
					</div>
					<Button asChild variant="link">
						<Link className="text-primary underline" href="/">
							Learn More <ArrowRightIcon className="h-4 w-4" />
						</Link>
					</Button>
				</div>
			))}
		</div>
	</div>
);

export default Features;
