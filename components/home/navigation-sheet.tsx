import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => (
	<Sheet>
		<SheetTrigger asChild>
			<Button size="icon" variant="outline">
				<Menu />
			</Button>
		</SheetTrigger>
		<SheetContent className="px-6 py-3">
			<Logo />
			<NavMenu className="mt-6 [&>div]:h-full" orientation="vertical" />
		</SheetContent>
	</Sheet>
);
