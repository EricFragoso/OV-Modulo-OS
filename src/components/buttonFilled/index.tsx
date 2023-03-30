import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

type Props = {
	text: string;
	fontSize?: number;
	borderRadius?: number;
	callFunc: () => void;
};

export function ButtonFilled(props: Props) {
	return (
		<View>
			<TouchableOpacity
				style={{
					alignItems: "center",
					justifyContent: "center",
					paddingHorizontal: 28,
					paddingVertical: 14,
					backgroundColor: "#2B3049",
					borderRadius: props.borderRadius || 10,
				}}
				onPress={props.callFunc}
			>
				<Text
					style={{
						color: "#DAECFA",
						fontSize: props.fontSize || 24,
						fontWeight: "bold",
					}}
				>
					{props.text}
				</Text>
			</TouchableOpacity>
		</View>
	);
}
