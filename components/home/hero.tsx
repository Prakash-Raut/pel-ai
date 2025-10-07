import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";

const Hero = () => (
	<div className="relative flex min-h-screen items-center justify-center">
		<div className="max-w-3xl text-center">
			<Badge
				asChild
				className="rounded-full border-border py-1"
				variant="secondary"
			>
				<Link href="/" target="_blank" rel="noopener">
					Powered by OpenAI v5.23.1{" "}
					<ArrowUpRight className="ml-1 size-4" aria-hidden="true" />
				</Link>
			</Badge>
			<h1 className="mt-6 font-semibold tracking-tighter sm:text-5xl md:text-6xl lg:text-[96px]">
				Make the pdfs more engaging
			</h1>

			<p className="mt-6 md:text-lg">
				Transform your PDFs into engaging, bite-sized video content. Our
				AI-powered platform analyzes documents and creates shareable reels that
				capture key insights in seconds.
			</p>
			<div className="mt-12 flex items-center justify-center gap-4">
				<Button
					className="rounded-full text-base"
					size="lg"
					variant="outline"
					type="button"
				>
					Get Started <ArrowUpRight className="h-5! w-5!" aria-hidden="true" />
				</Button>
				<Button
					className="rounded-full text-base shadow-none"
					size="lg"
					variant="default"
					type="button"
				>
					<CirclePlay className="h-5! w-5!" aria-hidden="true" /> Watch Demo
				</Button>
			</div>
		</div>
	</div>
);

export default Hero;
