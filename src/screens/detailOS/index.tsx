import {
	Text,
	View,
	ScrollView,
	Image,
	Alert,
	ImageBackground,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { ModalInserir } from "../modalInserirItem";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";

import { ImageCard } from "../../components/imageCard";
import { BackButton } from "../../components/backButton";
import { Button } from "../../components/button";
import { ButtonFilled } from "../../components/buttonFilled";

import { MenuHamburger } from "../../components/menuHamburger";
import Context from "../../../Context";
import OS from "OSTypeCard";
import Ativo from "ativoType";

type RouteParams = {
	ID: string;
	AtivoNumero: string;
};

export function DetailOS() {
	const baseURL = "https://overview-os-api.onrender.com";

	const { listaDeOS } = useContext(Context);
	const [listaDeAtivos, setListaDeAtivos] = useState<Ativo>();
	const [objectInfo, setObjectInfo] = useState<OS>();
	const [btuInfo, setBtuInfo] = useState("");
	const [idInfo, setIdInfo] = useState("");
	const [nameInfo, setNameInfo] = useState("");

	const navigation = useNavigation();
	const route = useRoute();
	const { ID, AtivoNumero } = route.params as RouteParams;

	useEffect(() => {
		const findObject = listaDeOS.find((OS: OS) => OS.numero === ID);
		getListAtivo();
		setObjectInfo(findObject);
	}, []);

	async function getListAtivo() {
		const urlListaAtivo = `${baseURL}/ativo/numero/${AtivoNumero}`;
		await axios.get(urlListaAtivo).then((response) => {
			const listAtivo = response.data;
			if (!listAtivo) {
				return Alert.alert("Atenção", "Nenhum ativo cadastrado");
			} else {
				setListaDeAtivos(listAtivo.ativo[0]);
				setBtuInfo(listAtivo.ativo[0].BTU);
				setIdInfo(listAtivo.ativo[0].numeroAtivo);
				setNameInfo(listAtivo.ativo[0].produto);
			}
		});
	}

	function handleShowAtivo(idAtivo: string) {
		navigation.navigate("detailativo", { idAtivo });
	}

	function handleCallPreviousPage() {
		navigation.goBack();
	}

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
						OS {ID}
					</Text>
				</View>

				<View className="flex-1 mx-7">
					{!objectInfo && !listaDeAtivos ? (
						<Text>Loading</Text>
					) : (
						<>
							<View className="bg-[#2B3049] rounded-xl mb-7">
								<View className="bg-[#2B3049] rounded-xl py-2 pl-3">
									<Text className="text-[#FFF] text-base font-OpenSansBold ">
										Informações
									</Text>
								</View>
								<View className="bg-[#459EE8] rounded-bl-xl rounded-br-xl px-5 py-6">
									<Text className="text-[#2B3049] text-base font-OpenSansBold mb-4">
										{objectInfo.cliente}
									</Text>
									<Text className="text-[#2B3049] text-sm font-OpenSansRegular mb-5">
										CNPJ: {objectInfo.cnpj}
									</Text>
									<View className="flex-row justify-between mb-3">
										<View className="flex-1 mr-2">
											<Text className="text-[#2B3049] text-sm font-OpenSansBold mb-1">
												Cidade:
											</Text>
											<Text className="text-[#2B3049] text-sm font-OpenSansRegular">
												{objectInfo.cidade}
											</Text>
										</View>
										<View className="flex-1 mr-2">
											<Text className="text-[#2B3049] text-sm font-OpenSansBold mb-1">
												Demandante:
											</Text>
											<Text className="text-[#2B3049] text-sm font-OpenSansRegular">
												{objectInfo.demandante}
											</Text>
										</View>
									</View>
									<View className="flex-row justify-between mb-3">
										<View className="flex-1 mr-2">
											<Text className="text-[#2B3049] text-sm font-OpenSansBold mb-1">
												Telefone
											</Text>
											<Text className="text-[#2B3049] text-sm font-OpenSansRegular">
												{objectInfo.telefone}
											</Text>
										</View>
										<View className="flex-1 mr-2">
											<Text className="text-[#2B3049] text-sm font-OpenSansBold mb-1">
												Data da Solicitação:
											</Text>
											<Text className="text-[#2B3049] text-sm font-OpenSansRegular">
												{objectInfo.data}
											</Text>
										</View>
									</View>
								</View>
							</View>
							<ImageCard
								key={idInfo}
								id={idInfo}
								nameAtivo={nameInfo}
								value={btuInfo}
								callFunc={() => handleShowAtivo(idInfo)}
							></ImageCard>
						</>
					)}
				</View>
			</ImageBackground>
		</View>
	);
}
