import DitherImage from "@/components/dither-image";
import { posts } from "@/utils/dummy";
import { timeAgo } from "@/utils/time";
import { useAtoms } from "@/utils/use-atoms";
import { router } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const pages = [
	{
		id: "text-os",
		title: "Text OS",
	},
	{
		id: "thumbhash",
		title: "ThumbHash",
	},
];

export default function Index() {
	const a = useAtoms();
	const { bottom, top } = useSafeAreaInsets();

	return (
		<View style={[a.flex1, { paddingTop: top, paddingBottom: bottom }]}>
			<View style={[a.flex1]}>
				<FlatList
					data={pages}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() => {
								router.push(item.id);
							}}
							style={[
								a.p16,
								a.borderB,
								{
									borderColor: "#111111",
								},
							]}
						>
							<Text style={[a.fontMedium]}>{item.title}</Text>
						</TouchableOpacity>
					)}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</View>
	);
}
