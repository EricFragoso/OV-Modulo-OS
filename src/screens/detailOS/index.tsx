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

type RouteParams = {
	ID: string;
};

type ativoInfo = {
	id: string;
	numeroAtivo: string;
	qr: string;
	cliente: string;
	BTU: string;
	anoFabricacao: string;
	produto: string;
	contrato: string;
	created_at: string;
};

export function DetailOS() {
	const baseURL = "https://overview-os-api.onrender.com";

	const { listaDeOS } = useContext(Context);
	const [listaDeAtivos, setListaDeAtivos] = useState([]);
	const [objectInfo, setObjectInfo] = useState<OS>();
	const ListaAtivos = [{ id: 1, nameAtivo: "Ativo 1", value: "R$1000,00" }];

	const navigation = useNavigation();
	const route = useRoute();
	const { ID } = route.params as RouteParams;

	useEffect(() => {
		const findObject = listaDeOS.find((OS: OS) => OS.numero === ID);
		setObjectInfo(findObject);
		console.log("info");
		console.log(objectInfo);

		getListAtivo();
	}, []);

	async function getListAtivo() {
		console.log("Entrou no get");
		const urlListaAtivo = `${baseURL}/ativo`;
		await axios.get(urlListaAtivo).then((response) => {
			const listAtivo = response.data;

			if (!listAtivo) {
				return Alert.alert("Atenção", "Nenhum ativo cadastrado");
			} else {
				setListaDeAtivos(listAtivo);

				const findObjectAtivo = listaDeAtivos.map((ativo) => {
					const match = ativo.numeroAtivo;
					return match !== null ? match[1] : null;
				});
				console.log(findObjectAtivo);
			}
		});
		console.log("Saiu do get");
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
					{/*<View className="bg-[#2B3049] rounded-xl mb-7">
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
	</View>*/}

					{ListaAtivos.map((listaAtivos) => (
						<ImageCard
							key={listaAtivos.id}
							id={objectInfo.ativoNumero}
							nameAtivo={listaAtivos.nameAtivo}
							value={listaAtivos.value}
							callFunc={() => handleShowAtivo(objectInfo.ativoNumero)}
						></ImageCard>
					))}
				</View>
			</ImageBackground>
		</View>
	);
}
