import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
	Text,
	View,
	TextInput,
	Alert,
	ImageBackground,
	Image,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { NativeWindStyleSheet } from "nativewind";

import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/button";
import Context from "../../../Context";
import AsyncStorage from "@react-native-async-storage/async-storage";

NativeWindStyleSheet.setOutput({ default: "native" });

export function Home() {
	const { listaDeOS, setListaDeOS } = useContext(Context);
	const [userCode, setUserCode] = useState("");
	const baseURL = "https://overview-os-api.onrender.com";

	const [atendentes, setAtendentes] = useState([]);
	const [servicos, setServicos] = useState([]);
	const [pecas, setPecas] = useState([]);
	const [laudo, setLaudo] = useState("");
	const [geoloc, setGeoloc] = useState("");

	const navigation = useNavigation();

	const dismissKeyboard = () => {
		Keyboard.dismiss();
	};

	useEffect(() => {
		handleLimparDados();
		try {
			AsyncStorage.clear();
		} catch (error) {
			console.error(error);
		}
		const kbDidHideListener = Keyboard.addListener("keyboardDidHide", () => {});
		return kbDidHideListener.remove();
	}, []);

	function getList(codigo: string) {
		const urlListaOS = `${baseURL}/os/colaborador/${codigo}`;
		//axios.get(urlListaOS).then((response) => {
		//const listOS = response.data;
		//setListaDeOS(listOS);
		return navigation.navigate("menuos", { lista: listaDeOS });
		//});
	}

	function handleUserLogin(codigo: string) {
		if (codigo == "") {
			return Alert.alert("Atenção", "Código em branco");
		} else {
			getList(codigo);
		}
	}
	function handleLimparDados() {
		setAtendentes([]);
		setServicos([]);
		setPecas([]);
		setLaudo("");
	}

	return (
		<TouchableWithoutFeedback onPress={dismissKeyboard}>
			<View className="flex-1 w-full items-center">
				<ImageBackground
					className="flex-1 w-full items-center"
					source={require("../../assets/img/HomeBG.png")}
				>
					<View
						className={
							"w-full h-30 bg-[#459EE8] items-center justify-end pb-5 pt-14 mb-20"
						}
					>
						<Text className={"font-OpenSansBold font-semibold text-3xl"}>
							CG Climatizações
						</Text>
					</View>

					<View className={"flex-1 items-center w-10/12 gap-5"}>
						<View className={"items-center justify-center"}>
							<Image
								className={"w-36 h-36 mb-10"}
								source={require("../../assets/img/CG-Transparente.png")}
							/>
						</View>
						<View>
							<Text className={"font-OpenSansSemiBold text-xl"}>
								Código do usuário
							</Text>
							<TextInput
								className={
									"w-60 h-10 bg-[#FFF] rounded-md border-[1.5px] border-[#459EE8] pl-2 text-base font-OpenSansLight"
								}
								placeholder="Insira o código"
								placeholderTextColor={"#999999"}
								onChangeText={(inputText) => setUserCode(inputText)}
							/>
						</View>
						<Button
							text="Enviar"
							fontSize={24}
							borderRadius={5}
							callFunc={() => handleUserLogin(userCode)}
						/>
					</View>
				</ImageBackground>
			</View>
		</TouchableWithoutFeedback>
	);
}
