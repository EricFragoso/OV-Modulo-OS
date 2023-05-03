import React from "react";
import { View, Image, Text } from "react-native";

type Props = {
	url: string;
	name: string;
};
export function PhotoItem(Props) {
	return (
		<View>
			<Image
				source={{
					uri: "https://reactnative.dev/img/tiny_logo.png",
				}}
				alt={Props.name}
			/>
			<Text>{Props.name} </Text>
		</View>
	);
}
