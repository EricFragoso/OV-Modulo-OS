import { Text, View, ScrollView } from "react-native";
import { styles } from "./styles";

import { Card } from "../../components/card";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { MenuHamburger } from "../../components/menuHamburger";

export function ListOS() {
	const ListaOS = [
		{ numberOS: 1694, client: "Oceano Azul S.A.", name: "Ruan Morais" },
		{
			numberOS: 2784,
			client: "Soluções Inovadoras Ltda.",
			name: "João Luiz",
		},
		{
			numberOS: 3213,
			client: "Nova Horizonte Tecnologia Ltda.",
			name: "Vitor Ramalho",
		},
		{
			numberOS: 4024,
			client: "Fortaleza Empreendimentos Imobiliários Ltda.",
			name: "Pedro César",
		},
		{
			numberOS: 5780,
			client: "Vortex Consultoria e Treinamentos Ltda.",
			name: "Roberto Delgado",
		},
		{
			numberOS: 6302,
			client: "Montanha de Ouro Investimentos e Participações S.A.",
			name: "Luiz Santino",
		},
	];

	const navigation = useNavigation();

	function handleShowOSDetail(numberOS: number) {
		return navigation.navigate("detailos", { numberOS });
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Lista de OS</Text>
				<MenuHamburger />
			</View>

			<View style={styles.listContainer}>
				<ScrollView showsVerticalScrollIndicator={false}>
					{ListaOS.map((listaOS) => (
						<Card
							key={listaOS.numberOS}
							numberOS={listaOS.numberOS}
							client={listaOS.client}
							name={listaOS.name}
							callFunc={() => handleShowOSDetail(listaOS.numberOS)}
						></Card>
					))}
				</ScrollView>
			</View>
		</View>
	);
}
