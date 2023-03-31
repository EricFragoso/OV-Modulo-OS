import React, { useState } from "react";
import { Text, View, TextInput, Alert } from "react-native";
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
			<View style={styles.header}>
				<Text style={styles.headerText}>Overview</Text>
			</View>

			<View style={styles.content}>
				<View>
					<Text style={styles.inputText}>Código do usuário</Text>

					<TextInput
						style={styles.inputField}
						keyboardType="number-pad"
						placeholder="Insira o código"
						placeholderTextColor={"#000"}
						onChangeText={(inputText) => setUserCode(inputText)}
					/>
				</View>

				<Button
					text="Enviar"
					fontSize={24}
					callFunc={() => handleUserLogin(userCode)}
				/>
			</View>
		</View>
	);
}
