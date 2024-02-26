import PageTitle from "@/components/PageTitle";
import SubmitButton from "@/components/SubmitButton";
import { sleep } from "@/lib/sleep";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type UserPageProps = {};

export default async function UserPage({}: UserPageProps) {
	async function getUser() {
		"use server";
		await sleep(1000);
		try {
			const user = cookies().get("name");
			if (user) {
				return user.value;
			}
		} catch (error) {
			console.error(error);
		}
		return undefined;
	}

	async function logOut() {
		"use server";
		await sleep(1000);
		try {
			cookies().delete("name");
			revalidatePath("/image");
		} catch (error) {
			console.error(error);
		}
	}

	const user = await getUser();
	if (!user) return redirect("/login");

	return (
		<div className="p-2">
			<PageTitle uses={["Server Actions", "cookies"]}>
				Welcome back {user}
			</PageTitle>
			<p className="leading-snug mt-2 text-balance">
				This page has 2 server actions defined in the server component
				itself. It also awaits 1 of the actions to retrieve current user
				with 1 second delay.
				<br />
				<br />
				Logout button calls logOut action defined in this component as
				well.
			</p>
			<div className="mt-6 py-4 border-t border-black/20">
				<form action={logOut}>
					<SubmitButton>Log Out</SubmitButton>
				</form>
			</div>
		</div>
	);
}
