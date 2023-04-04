import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

type Props = {
	text: string;
	fontSize?: number;
	borderRadius?: number;
	marginBottom?: number;
	callFunc: () => void;
};

export function Button(props: Props) {
	return (
		<View>
			<TouchableOpacity
				style={{
					alignItems: "center",
					justifyContent: "center",
					paddingHorizontal: 28,
					paddingVertical: 2,
					backgroundColor: "#FFF",
					borderWidth: 1.5,
					borderColor: "#459EE8",
					borderRadius: props.borderRadius || 10,
					marginBottom: props.marginBottom || 10,
					marginTop: 8,
					height: 40,
				}}
				onPress={props.callFunc}
			>
				<Text
					style={{
						color: "#2B3049",
						fontSize: props.fontSize || 20,
						fontFamily: "OpenSans_700Bold",
					}}
				>
					{props.text}
				</Text>
			</TouchableOpacity>
		</View>
	);
}
