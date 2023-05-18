import React, { useEffect, useState } from "react";
import {
	useFocusEffect,
	useNavigation,
	useRoute,
} from "@react-navigation/native";
import {
	View,
	Text,
	Image,
	ImageBackground,
	Alert,
	Modal,
	TouchableHighlight,
	TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
	requestForegroundPermissionsAsync,
	getCurrentPositionAsync,
} from "expo-location";
import { FirebaseApp } from "firebase/app";
import { BackButton } from "../../components/backButton";
import { Button } from "../../components/button";
import { CardInfo } from "../../components/cardInfo";
import * as Photos from "../../services/photos";
import { Photo } from "../../@types/photo";

import { MenuHamburger } from "../../components/menuHamburger";
import { ButtonFilled } from "../../components/buttonFilled";
import axios from "axios";
import { PhotoItem } from "../../components/photoItem";

type RouteParams = {
	ID: string;
	idAtivo: string;
};

export function DetailAtivo() {
	const baseURL = "https://overview-os-api.onrender.com";

	const [userCode, setUserCode] = useState("");
	const [checked, setChecked] = React.useState("30 Dias");
	const [listaDeAtivos, setListaDeAtivos] = useState([]);
	const [objectInfo, setObjectInfo] = useState({});
	const [photoOpen, setPhotoOpen] = useState(false);
	const [photoUrl, setPhotoUrl] = useState("");
	const [photoName, setPhotoName] = useState("");
	const [inicializacao, setInicializacao] = useState(0);
	const [finalizacao, setFinalizacao] = useState(0);
	const [atendentes, setAtendentes] = useState([]);
	const [servicos, setServicos] = useState([]);
	const [pecas, setPecas] = useState([]);
	const [laudo, setLaudo] = useState("");
	const [geoloc, setGeoloc] = useState("");
	const [photos, setPhotos] = useState<Photo[]>([]);
	const [loading, setLoading] = useState(false);
	const [loadEffect, setLoadEffect] = useState(false);

	const navigation = useNavigation();
	const route = useRoute();
	const { ID, idAtivo } = route.params as RouteParams;

	useEffect(() => {
		setInicializacao(Date.now());
		getListAtivo();

		navigation.addListener("focus", () => setLoadEffect(!loadEffect));

		const getPhotos = async () => {
			setLoading(true);
			const listaFotoFB = await Photos.getAllPhotos(idAtivo);
			setPhotos(listaFotoFB);
			setLoading(false);
		};
		getPhotos();

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

		requestLocationPermissions();
	}, [loadEffect, navigation]);

	function handleOpenPhoto(item) {
		console.log(item.url);
		console.log(item.name);

		setPhotoOpen(true);
		setPhotoUrl(item.url);
		setPhotoName(item.name);
	}

	function handleCallPreviousPageCam() {
		setPhotoOpen(false);
		setLoadEffect(false);
	}

	async function handleFavorito(photoUrl) {
		try {
			const response = await axios.post(`${baseURL}/images`, {
				ativo: idAtivo,
				favorita: true,
				os: ID,
				path: photoUrl,
			});
			console.log(response.data);
			Alert.alert("Foto favoritada");
		} catch (e) {
			console.log("erro");

			console.log(e.response.data);
			Alert.alert("Erro ao favoritar foto");
		}
	}

	function handleCallPreviousPage() {
		navigation.navigate("detailos", { ID });
		console.log("Página anterior");
	}

	async function requestLocationPermissions() {
		const { granted } = await requestForegroundPermissionsAsync();

		if (granted) {
			const currentPsition = await getCurrentPositionAsync();
			setGeoloc(
				`Altitude:${currentPsition.coords.altitude}, Latitude:${currentPsition.coords.latitude}, Longitude:${currentPsition.coords.longitude}`
			);
		}
	}

	async function getListAtivo() {
		const urlListaAtivo = `${baseURL}/ativo/numero/${idAtivo}`;
		await axios.get(urlListaAtivo).then((response) => {
			const listAtivo = response.data;
			if (!listAtivo) {
				return Alert.alert("Atenção", "Nenhum ativo cadastrado");
			} else {
				setListaDeAtivos(listAtivo.ativo[0]);
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
		setFinalizacao(Date.now());
		setGeoloc("Ali");
		try {
			const dataAgora = new Date("2023-12-31");
			const response = await axios.post(`${baseURL}/historico`, {
				atendentes: atendentes.toString(),
				ativo: idAtivo,
				estado_conservacao: "",
				geoloc: "",
				laudo: laudo,
				proximo_atendimento: dataAgora,
				reposicao: pecas.join(),
				servicos: servicos.join(),
			});
			console.log(response.data);
			Alert.alert("Sucesso", "Detalhamento salvo com sucesso!");
		} catch (error) {
			console.log(error.response.data);
			Alert.alert("Erro", "Ocorreu um erro ao salvar o detalhamento.");
		}
		try {
			const solucao = await axios.put(`${baseURL}/os`, {
				inicio: new Date(inicializacao),
				finalizacao: new Date(finalizacao),
				numero: ID,
				solucao: montarSolucao(pecas, servicos, atendentes, laudo, geoloc),
				status: "FINALIZADO",
			});
			return solucao.data;
		} catch (error) {
			console.log(error.response.data);
			Alert.alert("Erro", "Ocorreu um erro ao salvar a solução.");
		}
	}

	function montarSolucao(reposicao, servicos, atendentes, laudo, geoloc) {
		let solucaoString = "Atendentes:\n";
		atendentes.map((atendente) => (solucaoString += ", " + atendente));
		solucaoString += "\n Serviços Realizados:\n ";
		servicos.map((servico) => (solucaoString += ", " + servico));
		solucaoString += "\n Peças repostas:\n ";
		reposicao.map((peca) => (solucaoString += ", " + peca));
		solucaoString += `\n Laudo:\n ${laudo}`;
		solucaoString += `\n Serviço realizado na localização:\n ${geoloc}`;

		return solucaoString;
	}

	function handleTirarFoto() {
		navigation.navigate("cameraativo", { ID, idAtivo });
	}
	function handleLimparDados() {
		setAtendentes([]);
		setServicos([]);
		setPecas([]);
		setPhotos([]);
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
					<BackButton callFunc={handleCallPreviousPage} />
					<Text className="flex-1 text-2xl font-OpenSansBold text-center">
						Ativo {idAtivo}
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
							</View>*/}
								<View className="mt-5">
									{!loading && photos.length > 0 && (
										<>
											<Text>Fotos</Text>
											<View
												className={
													"flex flex-1 flex-row flex-wrap w-80 h-auto mb-4"
												}
											>
												{photos.map((item, index) => (
													<TouchableOpacity
														key={index}
														onPress={() => handleOpenPhoto(item)}
													>
														<Image
															className={"w-20 h-20 mr-5 mt-5 rounded-md"}
															source={{
																uri: item.url,
															}}
															alt={item.name}
														/>
													</TouchableOpacity>
												))}
											</View>
										</>
									)}
									<ButtonFilled
										borderRadius={5}
										text="Tirar foto"
										fontSize={15}
										callFunc={handleTirarFoto}
									/>
								</View>
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
			{photoOpen && (
				<Modal
					className="w-8"
					animationType="slide"
					transparent={false}
					visible={photoOpen}
				>
					<View className="mt-32 flex-row">
						<BackButton callFunc={handleCallPreviousPageCam} />
						<TouchableOpacity onPress={handleCallPreviousPageCam}>
							<Text className="font-OpenSansBold text-xl mb-10">Voltar</Text>
						</TouchableOpacity>
					</View>
					<View>
						<Image
							className="w-[90%] h-[65%] ml-5"
							source={{ uri: photoUrl }}
						/>
					</View>
					<View className="mx-10">
						<Button
							text="Favoritar"
							callFunc={() => handleFavorito(photoUrl)}
						/>
					</View>
				</Modal>
			)}
		</View>
	);
}
