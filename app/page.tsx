import Image from "next/image";

export default function Home() {
	return (
		<div className="p-2 max-w-lg">
			<h2 className="font-bold text-lg mt-2">SST Deployment</h2>
			<p className="leading-relaxed font-medium  mt-2">
				This is a Next.js 14 application using App Router.In this app,
				we will explore deploying this app on AWS using SST
			</p>
			<h3 className="mt-8 border-b border-black/20  font-semibold">
				Key Points
			</h3>
			<ul className="mt-4 max-w-sm pl-1 space-y-2">
				<li>Next.js 14 - App Router</li>
				<li>Server Components and SSR should work</li>
				<li>Server Actions must work.</li>
				<li>Middleware must run on edge</li>
				<li>Try local file read/write</li>
			</ul>

			<div className="mt-6 ">
				<h3 className="mt-8 border-b border-black/20  font-semibold">
					Components
				</h3>
				<p className="mt-2">
					<strong>Navbar: </strong>
					Navbar is a server component wrapped in a suspense. It
					awaits getUser to read the name cookie. Suspense will show
					NavbarLoading while it awaits.
				</p>
			</div>

			<div className="mt-6 ">
				<h3 className="mt-8 border-b border-black/20  font-semibold">
					Image Response
				</h3>
				<p className="mt-2">
					<Image
						alt="Generated Image"
						src={"/image"}
						width={600}
						height={300}
					/>
				</p>
			</div>
		</div>
	);
}
