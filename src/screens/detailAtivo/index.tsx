import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import { BackButton } from "../../components/backButton";
import { Button } from "../../components/button";
import { CardInfo } from "../../components/cardInfo";
import { styles } from "./styles";
import { TextInput } from "react-native-gesture-handler";

export function DetailAtivo() {
	const [userCode, setUserCode] = useState("");
	const navigation = useNavigation();

	function handleCallPreviousPage() {
		navigation.goBack();
		console.log("Página anterior");
	}

	return (
		<KeyboardAvoidingView
			contentContainerStyle={styles.container}
			behavior="position"
			enabled
		>
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
						listText={[""]}
					/>
					<CardInfo
						headerText="Serviços Executados"
						bodyText="Atendente1"
						listText={[""]}
					/>
					<CardInfo
						headerText="Peças Repostas"
						bodyText="Atendente1"
						listText={["João", "Ana"]}
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
						</View>
					</View>
				</ScrollView>
			</View>
		</KeyboardAvoidingView>
	);
}
