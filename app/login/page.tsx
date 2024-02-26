import LoginForm from "@/components/LoginForm";
import PageTitle from "@/components/PageTitle";
import { getUser } from "../actions/user";
import { redirect } from "next/navigation";

type LoginPageProps = {};

export default async function LoginPage({}: LoginPageProps) {
	const user = await getUser();

	if (user) redirect("/user");

	return (
		<div className="p-2">
			<PageTitle uses={["Server Actions", "cookies"]}>
				Login Form
			</PageTitle>
			<p className="leading-snug mt-2 text-balance">
				This will attempt to create a cookie to preserve your login
				state. No actual database is used.
			</p>
			<LoginForm />
		</div>
	);
}
