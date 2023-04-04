import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, ScrollView, Image, ImageBackground } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";

import { BackButton } from "../../components/backButton";
import { Button } from "../../components/button";
import { CardInfo } from "../../components/cardInfo";

import { styles } from "./styles";
import { MenuHamburger } from "../../components/menuHamburger";

type RouteParams = {
	idAtivo: number;
};

export function DetailAtivo() {
	const [userCode, setUserCode] = useState("");
	const [checked, setChecked] = React.useState("30 Dias");

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

	function handleSalvarDetalhamento() {}

	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.background}
				source={require("../../assets/img/Overview-50-BG.png")}
			>
				<View style={styles.header}>
					<Image
						style={styles.imagem}
						source={require("../../assets/img/CG-Preto.png")}
					/>
					<Text style={styles.headerText}>Detalhamento</Text>
					<MenuHamburger />
				</View>
				<View style={styles.headerAtivo}>
					<BackButton callFunc={handleCallPreviousPage}></BackButton>
					<Text style={styles.headerAtivoText}>Ativo {idAtivo}</Text>
				</View>
				<View style={styles.listContainer}>
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
						<View style={styles.card}>
							<View style={styles.headerCard}>
								<Text style={styles.headerTextCard}>Detalhes</Text>
							</View>
							<View style={styles.bodyCard}>
								<Text style={styles.label}>Laudo</Text>
								<TextInput
									style={styles.inputField}
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
						<Button
							text="Salvar"
							callFunc={handleSalvarDetalhamento}
						/>
					</ScrollView>
				</View>
			</ImageBackground>
		</View>
	);
}
