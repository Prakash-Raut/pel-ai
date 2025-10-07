import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

const plans = [
	{
		name: "Starter",
		price: 9,
		description: "Process up to 30 PDFs per month with our AI summarization.",
		features: [
			"30 PDFs per month",
			"Basic summarization",
			"Key points extraction",
			"Single language support",
			"Email support",
		],
		buttonText: "Start Summarizing",
	},
	{
		name: "Advanced",
		price: 19,
		isRecommended: true,
		description: "Process up to 300 PDFs per month with advanced features.",
		features: [
			"300 PDFs per month",
			"Advanced summarization",
			"Multi-language support",
			"Custom summary length",
			"Priority email support",
		],
		buttonText: "Get Advanced Access",
		isPopular: true,
	},
	{
		name: "Premium",
		price: 29,
		description: "Unlimited PDFs with premium features and API access.",
		features: [
			"Unlimited PDFs",
			"Premium summarization",
			"API access",
			"Team collaboration",
			"24/7 priority support",
		],
		buttonText: "Go Premium",
	},
];

const Pricing = () => (
	<div className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
		<h2 className="text-center font-semibold text-5xl tracking-tighter sm:text-6xl">
			Pricing that grows with you
		</h2>
		<p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground leading-8">
			Choose an affordable plan that's packed with the best features for
			engaging your audience, creating customer loyalty, and driving sales.
		</p>
		<div className="mx-auto mt-12 grid max-w-(--breakpoint-lg) grid-cols-1 items-center gap-8 sm:mt-16 lg:grid-cols-3">
			{plans.map((plan) => (
				<div
					className={cn("relative rounded-lg border p-6", {
						"border-2 border-primary py-10": plan.isPopular,
					})}
					key={plan.name}
				>
					{plan.isPopular && (
						<Badge className="-translate-y-1/2 absolute top-1 right-1/2 translate-x-1/2">
							Most Popular
						</Badge>
					)}
					<h3 className="font-medium text-lg">{plan.name}</h3>
					<p className="mt-2 font-bold text-4xl">${plan.price}</p>
					<p className="mt-4 font-medium text-muted-foreground">
						{plan.description}
					</p>
					<Separator className="my-4" />
					<ul className="space-y-2">
						{plan.features.map((feature) => (
							<li className="flex items-start gap-2" key={feature}>
								<CircleCheck className="mt-1 h-4 w-4 text-green-600" />
								{feature}
							</li>
						))}
					</ul>
					<Button
						className="mt-6 w-full"
						size="lg"
						variant={plan.isPopular ? "default" : "outline"}
					>
						{plan.buttonText}
					</Button>
				</div>
			))}
		</div>
	</div>
);

export default Pricing;
