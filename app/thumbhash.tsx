import { useAtoms } from "@/utils/use-atoms";
import { Canvas, Image, Skia, useImage } from "@shopify/react-native-skia";
import React from "react";
import { View } from "react-native";
import { thumbHashToDataURL } from "thumbhash";

const url =
	"https://images.unsplash.com/photo-1741705877369-d07743ad1010?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const base64ToBinary = (base64: string) =>
	new Uint8Array(
		atob(base64)
			.split("")
			.map((x) => x.charCodeAt(0)),
	);

const scale = 100 / 70;
const WIDTH = 260;
const HEIGHT = WIDTH * scale;

const Thumbhash = () => {
	const a = useAtoms();
	const thumbhash = "WBgGHQZgeK9mmIlneHd3d4CuBudq";
	const placeholder = thumbHashToDataURL(base64ToBinary(thumbhash));
	const base64 = placeholder.split(",")[1];
	const data = Skia.Data.fromBase64(base64);
	const thumbnailImage = Skia.Image.MakeImageFromEncoded(data);
	const image = useImage(url);

	return (
		<View style={[a.flex1, a.justifyCenter, a.itemsCenter]}>
			<Canvas style={[{ width: WIDTH, height: HEIGHT }]}>
				{image ? (
					<Image
						image={image}
						x={0}
						y={0}
						width={WIDTH}
						height={HEIGHT}
						fit="cover"
					/>
				) : (
					<Image
						image={thumbnailImage}
						x={0}
						y={0}
						width={WIDTH}
						height={HEIGHT}
						fit="cover"
					/>
				)}
			</Canvas>
		</View>
	);
};

export default Thumbhash;
