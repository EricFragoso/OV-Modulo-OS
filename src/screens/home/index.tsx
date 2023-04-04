import React, { useState } from "react";
import {
	Text,
	View,
	TextInput,
	Alert,
	ImageBackground,
	Image,
} from "react-native";
import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/button";

export function Home() {
	const [userCode, setUserCode] = useState("");

	const navigation = useNavigation();

	function handleUserLogin(codigo: string) {
		if (codigo == "") {
			return Alert.alert("Atenção", "Código em branco");
		} else if (codigo == "3421") {
			navigation.navigate("listos");
		} else {
			return Alert.alert("Atenção", "Código inválido");
		}

		console.log(codigo);
	}

	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.container}
				source={require("../../assets/img/HomeBG.png")}
			>
				<View style={styles.header}>
					<Text style={styles.headerText}>CG Climatizações</Text>
				</View>

				<View style={styles.content}>
					<View style={styles.firstContent}>
						<Image
							style={styles.imagem}
							source={require("../../assets/img/CG-Transparente.png")}
						/>
					</View>
					<View>
						<Text style={styles.inputText}>Código do usuário</Text>
						<TextInput
							style={styles.inputField}
							keyboardType="number-pad"
							placeholder="Insira o código"
							placeholderTextColor={"#999999"}
							onChangeText={(inputText) => setUserCode(inputText)}
						/>
					</View>
					<Button
						text="Enviar"
						fontSize={24}
						borderRadius={5}
						callFunc={() => handleUserLogin(userCode)}
					/>
				</View>
			</ImageBackground>
		</View>
	);
}
