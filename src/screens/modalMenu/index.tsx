import React from "react";
import {
	Modal,
	View,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

type Props = {
	modalVisible?: boolean;
	fecharModal?: () => void;
};

export function ModalMenu(props: Props) {
	const navigation = useNavigation();

	function handleLogoff() {
		navigation.navigate("home");
		props.fecharModal();
	}
	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={props.modalVisible}
		>
			<TouchableWithoutFeedback onPress={props.fecharModal}>
				<View style={styles.card}>
					<View style={styles.bodyCard}>
						<TouchableOpacity onPress={handleLogoff}>
							<Text style={styles.bodyText}>Encerrar Sessão</Text>
						</TouchableOpacity>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	);
}
