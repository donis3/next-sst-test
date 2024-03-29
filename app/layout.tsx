import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import NavbarLoading from "@/components/NavbarLoading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Donis3/Next-SST - Testing SST Deployment",
	description:
		"A Next.js 14 app router app will be deployed on AWS using SST.",
	metadataBase: new URL(process.env?.SITE_URL || "http://localhost:3000"),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`w-full min-h-dvh bg-amber-300 flex flex-col justify-between ${inter.className} min-w-[300px]`}>
				<Suspense fallback={<NavbarLoading />}>
					<Navbar />
				</Suspense>
				<main className="flex-1  container ">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
