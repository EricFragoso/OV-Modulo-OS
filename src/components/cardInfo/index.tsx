import { Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";

type Props = {
	headerText: string;
	bodyText?: string;
	listText?: Array<string>;
	callFunc?: () => void;
};

export function CardInfo(props: Props) {
	const bodyListText = props.listText;

	return (
		<View style={styles.card}>
			<View style={styles.headerCard}>
				<Text style={styles.headerTextCard}>{props.headerText}</Text>
			</View>
			<View style={styles.bodyCard}>
				{bodyListText.map((bodyListText) => (
					<Text style={styles.bodyText}>{bodyListText}</Text>
				))}
			</View>
		</View>
	);
}
