import PageTitle from "@/components/PageTitle";
import { sleep } from "@/lib/sleep";

type AboutPageProps = {};

export default async function AboutPage({}: AboutPageProps) {
	await sleep(2000);

	return (
		<div className="p-2">
			<PageTitle uses={["SSR", "Server Component"]}>About Page</PageTitle>

			<p className="lading-snug mt-2 text-balance">
				This page is a react server component with async/await before
				rendering. Awaits 2 seconds before render. This triggers the
				suspense and loading.tsx
			</p>
		</div>
	);
}
