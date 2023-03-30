import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { styles } from "./styles";

type Props = {
	callFunc: () => void;
};

export function BackButton(props: Props) {
	return (
		<View>
			<TouchableOpacity
				style={styles.button}
				onPress={props.callFunc}
			>
				<Icon
					name="chevron-left"
					size={32}
					color="#000"
				/>
			</TouchableOpacity>
		</View>
	);
}
