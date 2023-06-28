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
import AsyncStorage from "@react-native-async-storage/async-storage";

import LoadingModal from "../../components/loadingModal";
import { Button } from "../../components/button";
import Context from "../../../Context";

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

	const [flagCPF, setFlagCPF] = useState(false);

	const [loading, setLoading] = useState(false);

	const navigation = useNavigation();

	const dismissKeyboard = () => {
		Keyboard.dismiss();
	};

	useEffect(() => {
		const kbDidHideListener = Keyboard.addListener("keyboardDidHide", () => {});
		return kbDidHideListener.remove();
	}, []);

	function getList(codigo: string) {
		const urlListaOS = `${baseURL}/os/colaborador/${codigo}`;
		axios.get(urlListaOS).then((response) => {
			const listOS = response.data;
			setListaDeOS(listOS);
			setLoading(false);
			return navigation.navigate("menuos", { lista: listaDeOS });
		});
	}

	function validateCPF(cpf: string) {
		if (cpf.length !== 11) {
			console.log("menos de 11");

			setFlagCPF(false);
			throw new Error("Insira um código válido");
		}
		//Validação se todos os caracteres são iguais
		if (/^(\d)\1+$/.test(cpf)) {
			console.log("todos iguais");
			setFlagCPF(false);
			throw new Error("Insira um código válido");
		}

		// Verificar o primeiro dígito verificador
		let sum = 0;
		for (let i = 0; i < 9; i++) {
			sum += parseInt(cpf.charAt(i)) * (10 - i);
		}
		let mod = sum % 11;
		let digit1 = mod < 2 ? 0 : 11 - mod;
		if (parseInt(cpf.charAt(9)) !== digit1) {
			console.log("tinvalido");
			setFlagCPF(false);
			throw new Error("Insira um código válido");
		}

		// Verificar o segundo dígito verificador
		sum = 0;
		for (let i = 0; i < 10; i++) {
			sum += parseInt(cpf.charAt(i)) * (11 - i);
		}
		mod = sum % 11;
		let digit2 = mod < 2 ? 0 : 11 - mod;
		if (parseInt(cpf.charAt(10)) !== digit2) {
			console.log("invalido");
			setFlagCPF(false);
			throw new Error("Insira um código válido");
		}

		// CPF válido
		return setFlagCPF(true);
	}

	async function handleUserLogin(codigo: string) {
		if (codigo == "") {
			return Alert.alert("Atenção", "Código em branco");
		} else {
			try {
				await validateCPF(codigo);

				setLoading(true);
				getList(codigo);
			} catch (error) {
				Alert.alert("Atenção", error.message);
			}
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
								maxLength={11}
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
						<LoadingModal visible={loading} />
					</View>
				</ImageBackground>
			</View>
		</TouchableWithoutFeedback>
	);
}
