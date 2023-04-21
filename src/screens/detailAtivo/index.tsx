import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
	View,
	Text,
	ScrollView,
	Image,
	ImageBackground,
	Alert,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { BackButton } from "../../components/backButton";
import { Button } from "../../components/button";
import { CardInfo } from "../../components/cardInfo";

import { MenuHamburger } from "../../components/menuHamburger";
import { ButtonFilled } from "../../components/buttonFilled";
import axios from "axios";
import Ativo from "ativoType";

type RouteParams = {
	idAtivo: number;
};

export function DetailAtivo() {
	const baseURL = "https://overview-os-api.onrender.com";

	const [userCode, setUserCode] = useState("");
	const [checked, setChecked] = React.useState("30 Dias");
	const [listaDeAtivos, setListaDeAtivos] = useState([]);
	const [objectInfo, setObjectInfo] = useState({});

	const [atendentes, setAtendentes] = useState([]);
	const [servicos, setServicos] = useState([]);
	const [pecas, setPecas] = useState([]);
	const [laudo, setLaudo] = useState("");

	const navigation = useNavigation();
	const route = useRoute();
	const { idAtivo } = route.params as RouteParams;

	const listAtendentes = ["Vazio"];
	const listServicos = ["Vazio"];
	const listPecas = ["Vazio"];

	function handleCallPreviousPage() {
		navigation.goBack();
		console.log("Página anterior");
	}

	function getListAtivo() {
		const urlListaAtivo = `${baseURL}/ativo`;
		axios.get(urlListaAtivo).then((response) => {
			const listAtivo = response.data;

			if (!listAtivo) {
				return Alert.alert("Atenção", "Nenhum ativo cadastrado");
			} else {
				setListaDeAtivos(listAtivo);

				const findObject = listaDeAtivos.find((ativo) => {
					const match = ativo.qr.match(/ID: (\d+)/);
					return match !== null ? match[1] : null;
				});

				console.log(findObject);

				setObjectInfo(findObject.id);
			}
		});
	}

	function handleAddAtendente(atendente) {
		const newAtendentes = [...atendentes, atendente];
		setAtendentes(newAtendentes);
		AsyncStorage.setItem("atendentes", JSON.stringify(newAtendentes));
	}

	function handleAddServico(servico) {
		const newServicos = [...servicos, servico];
		setServicos(newServicos);
		AsyncStorage.setItem("servicos", JSON.stringify(newServicos));
	}

	function handleAddPeca(peca) {
		const newPecas = [...pecas, peca];
		setPecas(newPecas);
		AsyncStorage.setItem("pecas", JSON.stringify(newPecas));
	}

	async function handleSalvarDetalhamento() {
		try {
			await AsyncStorage.setItem("laudo", laudo);
			Alert.alert("Sucesso", "Detalhamento salvo com sucesso!");
		} catch (error) {
			console.log(error);
			Alert.alert("Erro", "Ocorreu um erro ao salvar o detalhamento.");
		}
	}
	function handleTirarFoto() {
		navigation.navigate("cameraativo");
	}
	function handleLimparDados() {
		setAtendentes([]);
		setServicos([]);
		setPecas([]);
		setLaudo("");
		clearData();
	}

	async function clearData() {
		try {
			await AsyncStorage.clear();
			console.log("Dados apagados com sucesso!");
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getListAtivo();

		async function getLocalData() {
			try {
				const atendentesData = await AsyncStorage.getItem("atendentes");
				const servicosData = await AsyncStorage.getItem("servicos");
				const pecasData = await AsyncStorage.getItem("pecas");
				const laudoData = await AsyncStorage.getItem("laudo");

				if (atendentesData !== null) {
					setAtendentes(JSON.parse(atendentesData));
				}

				if (servicosData !== null) {
					setServicos(JSON.parse(servicosData));
				}

				if (pecasData !== null) {
					setPecas(JSON.parse(pecasData));
				}

				if (laudoData !== null) {
					setLaudo(laudoData);
				}
			} catch (error) {
				console.log(error);
			}
		}

		getLocalData();
	}, []);

	return (
		<View className="flex-1 bg-white items-center">
			<ImageBackground
				className="flex-1 w-full items-center"
				source={require("../../assets/img/Overview-50-BG.png")}
			>
				<View className="w-full h-32 flex-row justify-between items-center bg-[#459EE8] pt-14 px-8">
					<Image
						className={"w-11 h-11"}
						source={require("../../assets/img/CG-Preto.png")}
					/>
					<Text className="flex-1 text-center font-OpenSansBold text-3xl">
						Detalhamento
					</Text>
					<MenuHamburger />
				</View>

				<View className="flex-row p-6">
					<BackButton callFunc={handleCallPreviousPage}></BackButton>
					<Text className="flex-1 text-2xl font-OpenSansBold text-center">
						Ativo 1
					</Text>
				</View>
				<View className="flex-1 px-7 w-full">
					<KeyboardAwareScrollView
						enableOnAndroid
						extraHeight={250}
					>
						<CardInfo
							headerText="Atendentes"
							modalText="Insira o atendente"
							listText={atendentes}
							onAddItem={handleAddAtendente}
						/>
						<CardInfo
							headerText="Serviços Executados"
							modalText="Insira o Serviço"
							listText={servicos}
							onAddItem={handleAddServico}
						/>
						<CardInfo
							headerText="Peças Repostas"
							modalText="Insira a Peça"
							listText={pecas}
							onAddItem={handleAddPeca}
						/>
						<View className="bg-[#2B3049] rounded-xl mb-7">
							<View className="bg-[#2B3049] rounded-xl py-2 pl-3">
								<Text className="text-white text-base font-OpenSansBold">
									Detalhes
								</Text>
							</View>
							<View className="bg-[#459EE8] rounded-b-xl px-5 py-4">
								<Text className="font-OpenSansMedium mb-1">Laudo</Text>
								<TextInput
									className="w-full h-[60px] rounded-md bg-white text-[#000] pl-2 text-xs font-OpenSansRegular"
									multiline
									placeholder="Descreva"
									placeholderTextColor={"#999999"}
									value={laudo}
									onChangeText={setLaudo}
									//onChangeText={(inputText) => setUserCode(inputText)}
								/>
								{/*	<View>
								<Text>Estado de conservação do aparelho</Text>
								<RadioButton
									value="30 Dias"
									status={checked === "30 Dias" ? "checked" : "unchecked"}
									onPress={() => setChecked("30 Dias")}
									
								/>
								<RadioButton
									value="60 Dias"
									status={checked === "60 Dias" ? "checked" : "unchecked"}
									onPress={() => setChecked("60 Dias")}
								/>
								<RadioButton
									value="90 Dias"
									status={checked === "90 Dias" ? "checked" : "unchecked"}
									onPress={() => setChecked("90 Dias")}
								/>
							</View> 
							<View>
								<Text>Data da próxima manutenção</Text>
							</View>
							<View>
								<Text>Fotos</Text>
							</View>*/}
							</View>
						</View>
						<View className="flex-row justify-between items-center mb-10">
							<ButtonFilled
								borderRadius={5}
								text="Limpar Dados"
								callFunc={handleLimparDados}
								fontSize={20}
							/>
							<Button
								borderRadius={5}
								text="Salvar"
								callFunc={handleSalvarDetalhamento}
							/>
						</View>
					</KeyboardAwareScrollView>
				</View>
			</ImageBackground>
		</View>
	);
}
