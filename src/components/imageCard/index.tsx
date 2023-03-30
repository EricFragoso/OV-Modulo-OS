import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
	id: number;
	nameAtivo: string;
	value: string;
	callFunc: () => void;
};

export function ImageCard(props: Props) {
	return (
		<View>
			<TouchableOpacity
				style={styles.card}
				onPress={props.callFunc}
			>
				<View style={styles.imageBox}></View>
				<View style={styles.firstColumn}>
					<Text style={styles.cardHeader}>{props.nameAtivo}</Text>
					<Text style={styles.cardText}>ID {props.id}</Text>
				</View>
				<View style={styles.secondColumn}>
					<Text style={styles.cardText}>{props.value}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}
