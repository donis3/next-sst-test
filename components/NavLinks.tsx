"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function NavLinks({ user }: { user: string | undefined }) {
	const path = usePathname();
	const links = [
		{ href: "/", text: "Home" },
		{ href: "/about", text: "About" },
	];

	if (user) {
		links.push({ href: "/user", text: user });
	} else {
		links.push({ href: "/login", text: "Login" });
	}
	return (
		<nav className="flex justify-end gap-1 flex-shrink ">
			{links.map((link, i) => (
				<NavLink key={`navlink_${i}`} href={link.href} path={path}>
					{link.text}
				</NavLink>
			))}
		</nav>
	);
}

function NavLink({
	href,
	path,
	children,
}: {
	href: string;
	path: string;
	children: ReactNode;
}) {
	const isActive = path === href;

	return (
		<Link
			href={href}
			className="bg-white/5 p-1 rounded-md font-semibold text-sm text-white/75"
			prefetch={false}
			style={{
				backgroundColor: isActive
					? "rgb(255 255 255 / 0.20)"
					: "rgb(255 255 255 / 0.05)",
			}}>
			{children}
		</Link>
	);
}
