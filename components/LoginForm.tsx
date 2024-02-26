"use client";

import { loginAction } from "@/app/actions/login";

import { useFormState } from "react-dom";
import SubmitButton from "./SubmitButton";

type LoginFormProps = {};

export default function LoginForm({}: LoginFormProps) {
	const [state, formAction] = useFormState(loginAction, { message: "" });

	return (
		<form
			className="mt-10 py-5 border-t border-black/5 "
			id="login_form"
			action={formAction}>
			<h3 className="font-bold text-lg">Login To Next-SST</h3>
			<div className="mt-2 flex justify-between gap-2 items-center">
				<label
					className="max-w-fit flex-shrink font-medium text-sm opacity-65"
					htmlFor="username">
					Username
				</label>
				<input
					id="username"
					name="name"
					className="flex-1 rounded-md  bg-white/50 border-black/20 border px-1 py-0.5 text-base"
					type="text"
					placeholder="@user"
					minLength={2}
					required
				/>
			</div>
			<div className="px-2 flex  flex-col items-center justify-center mt-6">
				<SubmitButton form="login_form">Login</SubmitButton>
				<p className="font-medium text-blue-800">{state.message}</p>
			</div>
		</form>
	);
}
