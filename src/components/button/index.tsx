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
				className="items-center justify-center px-7 py-[2px] bg-white border-[1.5px] border-[#2B3049] mt-2 h-10"
				style={{
					borderRadius: props.borderRadius || 10,
					marginBottom: props.marginBottom || 10,
				}}
				onPress={props.callFunc}
			>
				<Text
					className="text-[#2B3049] font-OpenSansBold"
					style={{
						fontSize: props.fontSize || 20,
					}}
				>
					{props.text}
				</Text>
			</TouchableOpacity>
		</View>
	);
}
