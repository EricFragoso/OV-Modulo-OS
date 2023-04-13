import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { ModalMenu } from "../../screens/modalMenu";

export function MenuHamburger() {
	const [modalVisible, setModalVisible] = useState(false);

	function handleOpenModal() {
		console.log("setando modal");
		setModalVisible(true);
	}

	function handleCloseModal() {
		setModalVisible(false);
	}

	return (
		<View>
			<TouchableOpacity onPress={handleOpenModal}>
				<View>
					<Icon
						name={"menu"}
						size={32}
					/>
				</View>
			</TouchableOpacity>
			<ModalMenu
				modalVisible={modalVisible}
				fecharModal={handleCloseModal}
			/>
		</View>
	);
}
