import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import { BackButton } from "../../components/backButton";
import { Button } from "../../components/button";
import { CardInfo } from "../../components/cardInfo";
import { styles } from "./styles";
import { TextInput } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";

export function DetailAtivo() {
	const [userCode, setUserCode] = useState("");
	const navigation = useNavigation();
	const [checked, setChecked] = React.useState("30 Dias");

	function handleCallPreviousPage() {
		navigation.goBack();
		console.log("Página anterior");
	}

	function handleSalvarDetalhamento() {}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Detalhamento</Text>
			</View>
			<View style={styles.headerAtivo}>
				<BackButton callFunc={handleCallPreviousPage}></BackButton>
				<Text style={styles.headerAtivoText}> Ativo 1</Text>
			</View>
			<View style={styles.listContainer}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<CardInfo
						headerText="Atendentes"
						bodyText="Atendente1"
						listText={["João", "Ana"]}
					/>
					<CardInfo
						headerText="Serviços Executados"
						bodyText="Atendente1"
						listText={["Limpeza", "Troca de Peça"]}
					/>
					<CardInfo
						headerText="Peças Repostas"
						bodyText="Atendente1"
						listText={["Peça 1", "Peça 2"]}
					/>
					<View style={styles.card}>
						<View style={styles.headerCard}>
							<Text style={styles.headerTextCard}>Detalhes</Text>
						</View>
						<View style={styles.bodyCard}>
							<Text>Laudo</Text>
							<TextInput
								style={styles.inputField}
								multiline
								placeholder="Descreva"
								placeholderTextColor={"#000"}
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
		</View>
	);
}
