import Link from "next/link";
import NavLinks from "./NavLinks";

type NavbarProps = {};

export default async function Navbar({}: NavbarProps) {
	return (
		<header className="flex-shrink p-2 min-h-10 bg-black/75 text-white">
			<div className="container flex flex-wrap gap-2 justify-between items-center">
				<h1 className="text-xl md:text-2xl font-bold whitespace-nowrap flex-1 text-purple-300 tracking-tight">Donis3/Next-SST</h1>
				<NavLinks />
			</div>
		</header>
	);
}
