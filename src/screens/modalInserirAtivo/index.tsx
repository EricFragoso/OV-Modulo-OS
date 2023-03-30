import React, { useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Feather";
import { Button } from "../../components/button";
import { ButtonFilled } from "../../components/buttonFilled";

type Props = {
	modalVisible: boolean;
	fecharModal?: () => void;
	adicionarAtivo: () => void;
};

export function ModalInserirAtivo(props: Props) {
	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={props.modalVisible}
		>
			<View style={styles.card}>
				<View style={styles.bodyCard}>
					<View style={styles.header}>
						<Text style={styles.headerTextCard}>Insira o código do ativo</Text>
						<TouchableOpacity onPress={props.fecharModal}>
							<Icon
								name="x"
								size={16}
							/>
						</TouchableOpacity>
					</View>
					<TextInput
						keyboardType="number-pad"
						style={styles.inputField}
					/>
					<ButtonFilled
						text="Adicionar"
						callFunc={props.adicionarAtivo}
						fontSize={12}
						borderRadius={5}
					></ButtonFilled>
				</View>
			</View>
		</Modal>
	);
}
