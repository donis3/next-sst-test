"use server";

import { sleep } from "@/lib/sleep";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

type LoginResponse = { message: string };

export async function loginAction(
	prevState: {
		message: string;
	},
	formData: FormData,
): Promise<{ message: string }> {
	await sleep(500);
	const name = formData.get("name")?.toString().trim();
	if (!name || name.length <= 2) {
		return {
			message: "Invalid Username",
		};
	}
	const currentUser = getUser();
	if (currentUser) {
		//Already logged in
		return {
			message: `Error: You're already logged in as ${currentUser}`,
		};
	}

	cookies().set("name", name, { httpOnly: true, maxAge: 24 * 60 * 60 });
	revalidatePath("/image");

	return {
		message: `Success: Logged in as ${name}`,
	};
}

function getUser() {
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
