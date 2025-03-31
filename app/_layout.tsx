import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="thumbhash"
				options={{
					title: "ThumbHash",
				}}
			/>
			<Stack.Screen
				name="text-os"
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="pulsating-grid"
				options={{
					headerShown: false,
				}}
			/>
		</Stack>
	);
}
