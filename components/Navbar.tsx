import { getUser } from "@/app/actions/user";
import NavLinks from "./NavLinks";
import { sleep } from "@/lib/sleep";
import Link from "next/link";

export default async function Navbar() {
	await sleep(1500);
	const user = await getUser();

	return (
		<header className="flex-shrink p-2 min-h-10 bg-black/75 text-white">
			<div className="container flex flex-wrap gap-2 justify-between items-center">
				<Link href={"/"} prefetch={false}>
					<h1 className="text-xl md:text-2xl font-bold whitespace-nowrap flex-1 text-purple-300 tracking-tight">
						Donis3/Next-SST
					</h1>
				</Link>
				<NavLinks user={user} />
			</div>
		</header>
	);
}
