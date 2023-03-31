import { Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { ModalInserir } from "../modalInserirItem";
import { useNavigation, useRoute } from "@react-navigation/native";
import QRCodeScanner from "react-native-qrcode-scanner";

import { ImageCard } from "../../components/imageCard";
import { BackButton } from "../../components/backButton";
import { Button } from "../../components/button";
import { ButtonFilled } from "../../components/buttonFilled";

import { styles } from "./styles";
import { MenuHamburger } from "../../components/menuHamburger";

type RouteParams = {
	numberOS: number;
};

export function DetailOS() {
	const ListaAtivos = [
		{ id: 1, nameAtivo: "Ativo 1", value: "R$1000,00" },
		{ id: 2, nameAtivo: "Ativo 2", value: "R$1000,00" },
		{ id: 3, nameAtivo: "Ativo 3", value: "R$1000,00" },
		{ id: 4, nameAtivo: "Ativo 4", value: "R$1000,00" },
		{ id: 5, nameAtivo: "Ativo 5", value: "R$1000,00" },
		{ id: 6, nameAtivo: "Ativo 6", value: "R$1000,00" },
	];
	const [modalVisible, setModalVisible] = useState(false);

	const navigation = useNavigation();
	const route = useRoute();
	const { numberOS } = route.params as RouteParams;

	function handleShowAtivo(idAtivo: number) {
		console.log(idAtivo);
		navigation.navigate("detailativo", { idAtivo });
	}

	function handleCallPreviousPage() {
		navigation.goBack();
	}

	function handleQRCode() {
		console.log("Abrindo Câmera");
	}

	function handleOpenModal() {
		setModalVisible(true);
		console.log("Abrindo Modal");
	}

	function handleAddAtivo() {
		console.log("Adicionando Ativo");

		setModalVisible(false);
	}

	function handleCloseModal() {
		setModalVisible(false);
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Detalhamento</Text>
				<MenuHamburger />
			</View>

			<View style={styles.headerOS}>
				<BackButton callFunc={handleCallPreviousPage}></BackButton>
				<Text style={styles.headerOSText}> OS {numberOS}</Text>
			</View>

			<View style={styles.listContainer}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.card}>
						<View style={styles.headerCard}>
							<Text style={styles.headerTextCard}>Informações</Text>
						</View>
						<View style={styles.companyInfo}>
							<Text style={styles.companyName}>Cliente</Text>
							<Text style={styles.companyCnpj}>CNPJ: 00.000.000/0000-00</Text>
							<View style={styles.row}>
								<View style={styles.column}>
									<Text style={styles.label}>Cidade:</Text>
									<Text style={styles.info}>São Paulo</Text>
								</View>
								<View style={styles.column}>
									<Text style={styles.label}>Demandante:</Text>
									<Text style={styles.info}>João Silva</Text>
								</View>
							</View>
							<View style={styles.row}>
								<View style={styles.column}>
									<Text style={styles.label}>Telefone</Text>
									<Text style={styles.info}>(81)99999-9999</Text>
								</View>
								<View style={styles.column}>
									<Text style={styles.label}>Data da Solicitação:</Text>
									<Text style={styles.info}>01/01/2022</Text>
								</View>
							</View>
						</View>
					</View>
					{ListaAtivos.map((listaAtivos) => (
						<ImageCard
							key={listaAtivos.id}
							id={listaAtivos.id}
							nameAtivo={listaAtivos.nameAtivo}
							value={listaAtivos.value}
							callFunc={() => handleShowAtivo(listaAtivos.id)}
						></ImageCard>
					))}
					<View style={styles.containerButton}>
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
							modalVisible={modalVisible}
							fecharModal={handleCloseModal}
							adicionarItem={handleAddAtivo}
						/>
					</View>
				</ScrollView>
			</View>
		</View>
	);
}
