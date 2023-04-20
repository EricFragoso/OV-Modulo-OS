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

				const findObject = listaDeAtivos.find(
					(ativo: Ativo) => ativo.id === "cad0c4e3-3029-4414-8aae-91876797396c"
				);
				console.log(findObject);

				setObjectInfo(findObject);
			}
		});
	}

	function handleSalvarDetalhamento() {}
	function handleTirarFoto() {
		navigation.navigate("cameraativo");
	}

	useEffect(() => {
		getListAtivo();
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
					<ScrollView showsVerticalScrollIndicator={false}>
						<CardInfo
							headerText="Atendentes"
							modalText="Insira o atendente"
							listText={listAtendentes}
						/>
						<CardInfo
							headerText="Serviços Executados"
							modalText="Insira o Serviço"
							listText={listServicos}
						/>
						<CardInfo
							headerText="Peças Repostas"
							modalText="Insira a Peça"
							listText={listPecas}
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
									onChangeText={(inputText) => setUserCode(inputText)}
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
						<View className="flex-row justify-center items-center mb-10">
							{/*<ButtonFilled
								borderRadius={5}
								text="Tirar Foto"
								callFunc={handleTirarFoto}
								fontSize={20}
							/>*/}
							<Button
								borderRadius={5}
								text="Salvar"
								callFunc={handleSalvarDetalhamento}
							/>
						</View>
					</ScrollView>
				</View>
			</ImageBackground>
		</View>
	);
}
