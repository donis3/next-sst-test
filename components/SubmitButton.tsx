"use client";

import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButton({
	children,
	form,
}: {
	children: ReactNode;
	form?: string;
}) {
	const { pending } = useFormStatus();

	return (
		<button
			aria-disabled={pending}
			disabled={pending}
			type="submit"
			form={form}
			className="p-2 bg-blue-600 text-white rounded-sm w-full max-w-xs font-bold text-lg disabled:bg-gray-700 disabled:text-gray-100">
			{children}
		</button>
	);
}
