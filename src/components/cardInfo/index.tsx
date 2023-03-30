import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
	headerText: string;
	bodyText?: string;
	listText?: [""];
	callFunc?: () => void;
};

export function CardInfo(props: Props) {
	const bodyTextList = [""];

	return (
		<View style={styles.card}>
			<View style={styles.headerCard}>
				<Text style={styles.headerTextCard}>{props.headerText}</Text>
			</View>
			<View style={styles.bodyCard}>
				{bodyTextList.map((bodyTextList) => (
					<Text style={styles.bodyText}>{bodyTextList}</Text>
				))}
			</View>
		</View>
	);
}
