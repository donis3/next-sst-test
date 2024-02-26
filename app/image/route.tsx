export const runtime = "edge";
import { cookies } from "next/headers";
import { ImageResponse } from "next/og";

export async function GET(req: Request) {
	const user = cookies().get("name");
	const msg = user ? user.value : null;
	return Image(msg);
}

// Image generation
async function Image(message: string | null) {
	// Font
	const interSemiBold = fetch(
		new URL("./Inter-SemiBold.ttf", import.meta.url),
	).then((res) => res.arrayBuffer());

	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 48,
					background: "#59D5E0",
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
				}}>
				<p tw="p-2 text-center">Testing Image Generation 😒</p>
				{message ? <p tw="p-2 text-center">{message}</p> : null}
			</div>
		),
		// ImageResponse options
		{
			// For convenience, we can re-use the exported opengraph-image
			// size config to also set the ImageResponse's width and height.
			width: 600,
			height: 300,
			fonts: [
				{
					name: "Inter",
					data: await interSemiBold,
					style: "normal",
					weight: 400,
				},
			],
		},
	);
}
