import React from "react";
import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/Feather";

type Props = {
	numberOS: number;
	client: string;
	name: string;
	callFunc: () => void;
};

export function Card(props: Props) {
	return (
		<View>
			<TouchableHighlight
				activeOpacity={0}
				underlayColor={"#459EE8"}
				className="w-full items-center justify-between flex-row bg-[#B5D8F6] rounded-xl py-5 pl-7 pr-3 mt-5 mb-5"
				onPress={props.callFunc}
			>
				<>
					<View className="flex-1">
						<Text className="text-[#2B3049] text-xl font-OpenSansBold mb-2">
							OS {props.numberOS}
						</Text>
						<Text className="text-[#2B3049] text-base font-OpenSansMedium mb-2">
							{props.client}
						</Text>
						<Text className="text-[#2B3049] text-base font-OpenSansMedium mb-2">
							{props.name}
						</Text>
					</View>

					<View>
						<Icon
							name={"chevron-right"}
							size={40}
						/>
					</View>
				</>
			</TouchableHighlight>
		</View>
	);
}
