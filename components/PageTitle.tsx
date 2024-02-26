import { ReactNode } from "react";

type PageTitleProps = {
	children: ReactNode;
	uses?: string[];
};

export default function PageTitle({ children, uses }: PageTitleProps) {
	return (
		<div className="flex flex-wrap justify-between w-full max-w-lg items-center">
			<h2 className="font-bold text-xl flex-1">{children}</h2>
			{uses && uses.length > 0 ? (
				<span className="text-xs  bg-orange-500/30 py-1 px-2 rounded-md ml-2 font-medium text-orange-800">
					{uses.join(", ")}
				</span>
			) : null}
		</div>
	);
}
