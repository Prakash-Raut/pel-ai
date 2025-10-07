import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import UserMenu from "./user-menu";

const Navbar = () => {
	return (
		<div className="bg-muted">
			<nav className="h-16 bg-background" aria-label="Primary">
				<div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
					{/* <Logo /> */}
					<Logo />

					{/* Desktop Menu */}
					<NavMenu />

					<div className="flex items-center gap-3">
						<UserMenu />

						{/* Mobile Menu */}
						<div className="md:hidden">
							<NavigationSheet />
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
