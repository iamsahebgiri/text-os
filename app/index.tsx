import DitherImage from "@/components/dither-image";
import { posts } from "@/utils/dummy";
import { timeAgo } from "@/utils/time";
import { useAtoms } from "@/utils/use-atoms";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
	const a = useAtoms();
	const { bottom, top } = useSafeAreaInsets();

	return (
		<View
			style={[a.flex1, a.bgBlack, { paddingBottom: bottom, paddingTop: top }]}
		>
			<View
				style={[
					a.flexRow,
					a.itemsCenter,
					a.justifyBetween,
					a.gap16,
					a.px16,
					a.py12,
				]}
			>
				<View style={[a.flexRow, a.itemsCenter, a.gap16]}>
					<TouchableOpacity>
						<Text style={[a.textGray, a.fontMedium]}>for you</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={[a.textWhite, a.fontMedium]}>following</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity>
					<Text style={[a.textGray, a.fontMedium]}>search</Text>
				</TouchableOpacity>
			</View>
			<View style={[a.flex1]}>
				<FlatList
					data={posts}
					keyExtractor={(_, i) => i.toString()}
					renderItem={({ item }) => (
						<View style={[a.px16, a.py12]}>
							<View style={[a.gap8]}>
									<Text style={[a.textWhite, a.fontMedium]}>
										{item.content}
									</Text>
									{item.cover ? <DitherImage src={item.cover} /> : null}
									<Text style={[a.textGray]}>
										@{item.username} - {timeAgo(item.createdAt)}
									</Text>
								</View>
						</View>
					)}
					showsVerticalScrollIndicator={false}
				/>
			</View>
			<View
				style={[a.flexRow, a.itemsCenter, a.justifyBetween, a.px16, a.py12]}
			>
				<View style={[a.flexRow, a.itemsCenter, a.gap16]}>
					<TouchableOpacity>
						<Text style={[a.textWhite, a.fontMedium]}>home</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={[a.textGray, a.fontMedium]}>profile</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[a.flexRow, a.itemsCenter, a.gap4]}>
						<Text style={[a.textGray, a.fontMedium]}>new</Text>
						<View style={[a.h4, a.w4, a.bgWhite, a.rounded4]} />
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={[a.textGray, a.fontMedium]}>chat</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity>
					<Text style={[a.textWhite, a.fontMedium]}>write</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
