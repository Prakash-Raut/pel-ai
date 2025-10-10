import Link from "next/link";
import UserMenu from "../home/user-menu";

export default function Header() {
  const links = [
    { to: "/dashboard", label: "Home" },
    { to: "/upload", label: "Upload" },
    { to: "/analytics", label: "Analytics" },
    { to: "/settings", label: "Settings" },
  ] as const;

  return (
    <div>
      <div className="flex flex-row items-center justify-between px-2 py-1">
        <nav className="flex gap-4 text-lg">
          {links.map(({ to, label }) => {
            return (
              <Link key={to} href={to} className="hover:text-primary">
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <UserMenu />
        </div>
      </div>
      <hr />
    </div>
  );
}
