import PageTitle from "@/components/PageTitle";

type LoginPageProps = {};

export default async function LoginPage({}: LoginPageProps) {
	return (
		<div className="p-2">
			<PageTitle uses={["Server Actions", "cookies"]}>
				Login Form
			</PageTitle>
			<p className="leading-snug mt-2 text-balance">
				This will attempt to create a cookie to preserve your login
				state. No actual database is used.
			</p>
		</div>
	);
}
