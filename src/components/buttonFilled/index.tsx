import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

type Props = {
	text: string;
	fontSize?: number;
	borderRadius?: number;
	marginBottom?: number;
	callFunc: () => void;
};

export function ButtonFilled(props: Props) {
	return (
		<View>
			<TouchableOpacity
				className="items-center justify-center px-7 py-[2px] bg-[#2B3049] border-[1.5px] mt-2 h-10"
				style={{
					borderRadius: props.borderRadius || 10,
					marginBottom: props.marginBottom || 10,
				}}
				onPress={props.callFunc}
			>
				<Text
					style={{
						color: "#DAECFA",
						fontSize: props.fontSize || 24,
						fontFamily: "OpenSans_700Bold",
					}}
				>
					{props.text}
				</Text>
			</TouchableOpacity>
		</View>
	);
}
