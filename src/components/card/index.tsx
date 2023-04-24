import React from "react";
import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/Feather";

type Props = {
	numberOS: string;
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
				className="w-full items-center justify-between flex-row bg-[#B5D8F6] rounded-xl pl-7 mt-5 mb-5 max-h-48"
				onPress={props.callFunc}
			>
				<>
					<View className="flex-1 my-5">
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

					<View className="bg-[#2B3049] w-16 h-full rounded-r-xl items-center justify-center">
						<Icon
							color="#B5D8F6"
							name={"chevron-right"}
							size={40}
						/>
					</View>
				</>
			</TouchableHighlight>
		</View>
	);
}
