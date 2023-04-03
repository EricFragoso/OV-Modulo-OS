import { Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Feather";
import { ModalInserir } from "../../screens/modalInserirItem";

type Props = {
	headerText: string;
	listText?: Array<string>;
	modalText: string;
	callFunc?: () => void;
};

export function CardInfo(props: Props) {
	const bodyListText = props.listText;
	const [modalVisible, setModalVisible] = useState(false);

	var listEmpty: boolean;

	function handleOpenModal() {
		setModalVisible(true);
		console.log("Abrindo Modal");
	}

	function handleAddAtivo(item: string) {
		if (bodyListText.indexOf("Vazio") == 0) {
			bodyListText.pop();
		}
		console.log("Adicionando Ativo");
		bodyListText.push(item);
		setModalVisible(false);
	}

	function handleCloseModal() {
		setModalVisible(false);
	}

	function checkBodyList() {
		if (bodyListText.indexOf("Vazio") == 0) {
			console.log(bodyListText.indexOf("Vazio"));
			return (listEmpty = true);
		} else {
			return (listEmpty = false);
		}
	}

	return (
		<View style={styles.card}>
			<View style={styles.headerCard}>
				<Text style={styles.headerTextCard}>{props.headerText}</Text>
				<TouchableOpacity onPress={handleOpenModal}>
					<Icon
						name="plus-circle"
						size={20}
						color={"#fff"}
					/>
				</TouchableOpacity>
				<ModalInserir
					textItem={props.modalText}
					buttonText="Adicionar"
					modalVisible={modalVisible}
					fecharModal={handleCloseModal}
					adicionarItem={handleAddAtivo}
				/>
			</View>
			<View style={styles.bodyCard}>
				{bodyListText.map(
					(bodyListText) => (
						checkBodyList(),
						(
							<Text
								key={bodyListText}
								style={[
									styles.bodyText,
									listEmpty ? styles.bodyTextEmpty : styles.bodyTextFilled,
								]}
							>
								{bodyListText}
							</Text>
						)
					)
				)}
			</View>
		</View>
	);
}
