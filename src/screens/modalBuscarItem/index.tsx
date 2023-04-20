import React, { useState } from "react";
import {
	Modal,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Alert,
} from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Feather";
import { Button } from "../../components/button";
import { ButtonFilled } from "../../components/buttonFilled";
import { useNavigation } from "@react-navigation/native";

type Props = {
	modalVisible: boolean;
	textItem: string;
	buttonText: string;
	fecharModal?: () => void;
	adicionarItem: (item: string) => void;
};

export function ModalBuscar(props: Props) {
	const [item, setItem] = useState("");
	const navigation = useNavigation();

	const addCloseModal = () => {
		props.adicionarItem(item);
		if (
			item == "546798445as" ||
			item == "29" ||
			item == "33" ||
			item == "35" ||
			item == "5467984458"
		) {
			navigation.navigate("detailos", { numberOS: item });
		} else {
			Alert.alert("Atenção", "Nenhuma OS cadastrada");
		}
		setItem("");
		props.fecharModal();
	};

	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={props.modalVisible}
		>
			<View className="flex-1 justify-center items-center">
				<View className="bg-[#459EE8] border-[1.5px] border-[#2B3049] rounded-xl px-5 py-4 drop-shadow">
					<View className="flex-row justify-between">
						<Text className="text-base font-OpenSansBold text-[#2B3049]">
							{props.textItem}
						</Text>
						<TouchableOpacity onPress={props.fecharModal}>
							<Icon
								name="x"
								size={16}
							/>
						</TouchableOpacity>
					</View>
					<TextInput
						keyboardType="numeric"
						onChangeText={setItem}
						className="mt-2 mb-2 w-60 h-10 rounded-md bg-white border-[1.5px] border-[#459EE8] text-black pl-2 text-base items-center"
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
