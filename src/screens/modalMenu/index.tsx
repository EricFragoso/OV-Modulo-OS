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
	onRefresh?: () => void;
};

export function ModalMenu(props: Props) {
	const navigation = useNavigation();

	function handleLogoff() {
		navigation.navigate("home");
		props.fecharModal();
	}

	function handleRefresh() {
		props.onRefresh();
		props.fecharModal();
	}
	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={props.modalVisible}
		>
			<TouchableWithoutFeedback onPress={props.fecharModal}>
				<View className="flex-1 justify-start items-end mt-36 mr-10">
					<View className="bg-[#459EE8] border-[1.5px] border-[#2B3049] rounded-lg px-4 py-4 shadow-2xl">
						<TouchableOpacity onPress={handleLogoff}>
							<Text className="font-OpenSansBold mb-5">Encerrar Sessão</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={handleRefresh}>
							<Text className="font-OpenSansBold">Atualizar Página</Text>
						</TouchableOpacity>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	);
}
