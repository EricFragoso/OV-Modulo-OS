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
	onAddItem?: (item: string) => void;
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
		//bodyListText.push(item);
		setModalVisible(false);
		if (props.onAddItem) {
			props.onAddItem(item); // Chamando onAddItem
		}
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
		<View className="bg-[#2B3049] rounded-xl mb-7">
			<View className="flex-row justify-between bg-[#2B3049] rounded-xl py-1 px-3 ">
				<Text className="text-white text-base font-OpenSansBold">
					{props.headerText}
				</Text>
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
			<View className="bg-[#459EE8] rounded-b-xl px-5 py-4">
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
