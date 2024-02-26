export default function Home() {
	return (
		<div className="p-2">
			<h2 className="font-bold text-lg mt-2">SST Deployment</h2>
			<p className="leading-relaxed font-medium max-w-sm mt-2">
				This is a Next.js 14 application using App Router.In this app,
				we will explore deploying this app on AWS using SST
			</p>
			<h3 className="mt-8 border-b border-black/20 max-w-sm font-semibold">
				Key Points
			</h3>
			<ul className="mt-4 max-w-sm pl-1 space-y-2">
				<li>Next.js 14 - App Router</li>
				<li>Server Components and SSR should work</li>
				<li>Server Actions must work.</li>
				<li>Middleware must run on edge</li>
				<li>Try local file read/write</li>
			</ul>
		</div>
	);
}
