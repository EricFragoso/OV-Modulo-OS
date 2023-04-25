import React from "react";
import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";

type Props = {
	id: string;
	nameAtivo: string;
	value: string;
	callFunc: () => void;
};

export function ImageCard(props: Props) {
	return (
		<View>
			<TouchableHighlight
				underlayColor={"#459EE8"}
				className="bg-[#B5D8F6] items-start justify-between flex-row w-[336] h-[76px] rounded-xl pr-14 mb-7 mt-1"
				onPress={props.callFunc}
			>
				<>
					<View className="bg-[#6AB1ED] w-[84px] h-[84px] rounded-xl mt-[-4px]"></View>
					<View className="justify-around mb-3">
						<Text className="text-[#2B3049] mt-3 mb-3 text-xl font-OpenSansBold">
							{props.nameAtivo}
						</Text>
						<Text className="text-[#2B3049] text-base font-OpenSansMedium">
							ID {props.id}
						</Text>
					</View>
					<View className="mt-11">
						<Text className="text-[#2B3049] text-base font-OpenSansMedium">
							{props.value}
						</Text>
					</View>
				</>
			</TouchableHighlight>
		</View>
	);
}
