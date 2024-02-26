"use server";

import { cookies } from "next/headers";

export async function getUser() {
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
