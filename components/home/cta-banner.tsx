import { ArrowUpRight, Forward } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CtaBanner() {
	return (
		<div className="px-6">
			<div className="dark relative mx-auto my-20 w-full max-w-screen-lg overflow-hidden rounded-2xl bg-background px-6 py-10 text-foreground md:px-14 md:py-16 dark:border">
				<div className="relative z-0 flex flex-col gap-3">
					<h3 className="font-semibold text-3xl md:text-4xl">
						Ready to Save Hours of Reading Time?
					</h3>
					<p className="mt-2 text-base md:text-lg">
						Transform lengthy documents into clear, actionable insights with our
						AI-powered summarizer!
					</p>
				</div>
				<div className="relative z-0 mt-14 flex gap-4 sm:flex-row">
					<Button size="lg">
						Get Started <ArrowUpRight className="!h-5 !w-5" />
					</Button>
					<Button size="lg" variant="outline">
						Discover More <Forward className="!h-5 !w-5" />
					</Button>
				</div>
			</div>
		</div>
	);
}
