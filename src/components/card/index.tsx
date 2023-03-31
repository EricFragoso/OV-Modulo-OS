import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { styles } from "./styles";

type Props = {
	numberOS: number;
	client: string;
	name: string;
	callFunc: () => void;
};

export function Card(props: Props) {
	return (
		<View>
			<TouchableOpacity
				style={styles.card}
				onPress={props.callFunc}
			>
				<View style={styles.firstColumn}>
					<Text style={styles.cardHeader}>OS {props.numberOS}</Text>
					<Text style={styles.cardText}>{props.client}</Text>
					<Text style={styles.cardText}>{props.name}</Text>
				</View>
				<View style={styles.iconColumn}>
					<Icon
						name={"chevron-right"}
						size={40}
					/>
				</View>
			</TouchableOpacity>
		</View>
	);
}
