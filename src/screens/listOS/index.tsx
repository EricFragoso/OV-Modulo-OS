import { Text, View, ScrollView, Image, ImageBackground } from "react-native";

import { Card } from "../../components/card";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MenuHamburger } from "../../components/menuHamburger";
import OS from "OSTypeCard";
import Context from "../../../Context";
import { Button } from "../../components/button";
import { ButtonFilled } from "../../components/buttonFilled";
import { ModalInserir } from "../modalInserirItem";

type RouteParams = {
	lista: [];
};

export function ListOS() {
	const route = useRoute();

	const [refresh, setRefresh] = useState(false);
	const { listaDeOS, setListaDeOS } = useContext(Context);
	const [modalVisible, setModalVisible] = useState(false);

	const navigation = useNavigation();
	const { lista } = route.params as RouteParams;

	const handleRefresh = () => {
		setRefresh(!refresh);
	};

	useEffect(() => {
		console.log(lista);
	});

	function handleShowOSDetail(numberOS: string) {
		return navigation.navigate("detailos", { numberOS });
	}

	function handleQRCode() {
		navigation.navigate("leitorqrcode");
		console.log("Abrindo Câmera");
	}

	function handleOpenModal() {
		setModalVisible(true);
		console.log("Abrindo Modal");
	}

	function handleCloseModal() {
		setModalVisible(false);
	}

	function handleAddAtivo() {
		console.log("Adicionando Ativo");

		setModalVisible(false);
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
						Lista de OS
					</Text>
					<MenuHamburger onRefresh={handleRefresh} />
				</View>

				<View className="flex-1 mx-7">
					<ScrollView showsVerticalScrollIndicator={false}>
						<View className="flex-row justify-between mt-5">
							<Button
								text="Escanear Ativo"
								fontSize={12}
								borderRadius={5}
								marginBottom={8}
								callFunc={handleQRCode}
							></Button>
							<ButtonFilled
								text="Inserir Código Ativo"
								fontSize={12}
								borderRadius={5}
								callFunc={handleOpenModal}
							></ButtonFilled>
							<ModalInserir
								textItem="Insira o código"
								buttonText="Buscar"
								modalVisible={modalVisible}
								fecharModal={handleCloseModal}
								adicionarItem={handleAddAtivo}
							/>
						</View>
						{listaDeOS.map((OS: OS) => (
							<Card
								key={OS.id}
								numberOS={OS.id}
								client={OS.cliente}
								name={OS.demandante}
								callFunc={() => handleShowOSDetail(OS.id)}
							/>
						))}
					</ScrollView>
				</View>
			</ImageBackground>
		</View>
	);
}
