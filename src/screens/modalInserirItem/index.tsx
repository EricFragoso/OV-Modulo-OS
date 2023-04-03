import React, { useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Feather";
import { Button } from "../../components/button";
import { ButtonFilled } from "../../components/buttonFilled";

type Props = {
	modalVisible: boolean;
	textItem: string;
	buttonText: string;
	fecharModal?: () => void;
	adicionarItem: (item: string) => void;
};

export function ModalInserir(props: Props) {
	const [item, setItem] = useState("");

	const addCloseModal = () => {
		props.adicionarItem(item);
		setItem("");
		props.fecharModal();
	};

	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={props.modalVisible}
		>
			<View style={styles.card}>
				<View style={styles.bodyCard}>
					<View style={styles.header}>
						<Text style={styles.headerTextCard}>{props.textItem}</Text>
						<TouchableOpacity onPress={props.fecharModal}>
							<Icon
								name="x"
								size={16}
							/>
						</TouchableOpacity>
					</View>
					<TextInput
						onChangeText={setItem}
						style={styles.inputField}
					/>
					<ButtonFilled
						text={props.buttonText}
						callFunc={addCloseModal}
						fontSize={12}
						borderRadius={5}
					></ButtonFilled>
				</View>
			</View>
		</Modal>
	);
}
