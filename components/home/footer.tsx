import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
	DribbbleIcon,
	GithubIcon,
	TwitchIcon,
	TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { Logo } from "./logo";

const footerLinks = [
	{
		title: "Overview",
		href: "#",
	},
	{
		title: "Features",
		href: "#",
	},
	{
		title: "Pricing",
		href: "#",
	},
	{
		title: "Careers",
		href: "#",
	},
	{
		title: "Help",
		href: "#",
	},
	{
		title: "Privacy",
		href: "#",
	},
] as const;

const Footer = () => {
	return (
		<footer className="dark mt-40 bg-background text-foreground dark:border-t">
			<div className="mx-auto max-w-(--breakpoint-xl)">
				<div className="flex items-start justify-between gap-x-8 gap-y-10 px-6 py-12 sm:flex-row xl:px-0">
					<div>
						{/* Logo */}
						<Logo />

						<h2 id="footer-heading" className="sr-only">
							Site footer
						</h2>
						<ul
							className="mt-6 flex flex-wrap items-center gap-4"
							aria-label="Footer links"
						>
							{footerLinks.map(({ title }) => (
								<li key={title}>
									<Link
										className="text-muted-foreground hover:text-foreground"
										href="/"
									>
										{title}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Subscribe Newsletter */}
					<div className="w-full max-w-xs">
						<h6 className="font-medium" id="newsletter-heading">
							Stay up to date
						</h6>
						<form
							className="mt-6 flex items-center gap-2"
							aria-labelledby="newsletter-heading"
						>
							<label htmlFor="newsletter-email" className="sr-only">
								Email address
							</label>
							<Input
								id="newsletter-email"
								placeholder="Enter your email"
								type="email"
								autoComplete="email"
							/>
							<Button type="submit">Subscribe</Button>
						</form>
					</div>
				</div>
				<Separator />
				<div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-8 sm:flex-row xl:px-0">
					{/* Copyright */}
					<span className="text-muted-foreground">
						&copy; {new Date().getFullYear()}{" "}
						<Link href="/" target="_blank" rel="noopener">
							Made with ❤️ by Prakash Raut
						</Link>
						. All rights reserved.
					</span>

					<div className="flex items-center gap-5 text-muted-foreground">
						<Link href="/" target="_blank" rel="noopener" aria-label="Twitter">
							<TwitterIcon className="h-5 w-5" />
						</Link>
						<Link href="/" target="_blank" rel="noopener" aria-label="Dribbble">
							<DribbbleIcon className="h-5 w-5" />
						</Link>
						<Link href="/" target="_blank" rel="noopener" aria-label="Twitch">
							<TwitchIcon className="h-5 w-5" />
						</Link>
						<Link href="/" target="_blank" rel="noopener" aria-label="GitHub">
							<GithubIcon className="h-5 w-5" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
