import { View, Text, ScrollView } from "react-native";
import { BackButton } from "../../components/backButton";
import { Button } from "../../components/button";
import { CardInfo } from "../../components/cardInfo";
import { styles } from "./styles";

export function DetailAtivo() {
	function handleCallPreviousPage() {
		console.log("Página anterior");
	}
	const bodyTextList = [];

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
					/>
					<CardInfo
						headerText="Serviços Executados"
						bodyText="Atendente1"
					/>
					<CardInfo
						headerText="Peças Repostas"
						bodyText="Atendente1"
					/>
					<CardInfo
						headerText="Detalhes"
						listText={bodyTextList["João"]}
					/>
				</ScrollView>
			</View>
		</View>
	);
}
