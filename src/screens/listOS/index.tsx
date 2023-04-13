import { Text, View, ScrollView, Image, ImageBackground } from "react-native";

import { Card } from "../../components/card";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MenuHamburger } from "../../components/menuHamburger";

type RouteParams = {
	listOS: Array<string>[];
};

export function ListOS() {
	const route = useRoute();

	const navigation = useNavigation();
	const { listOS } = route.params as RouteParams;
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
			client: "Montanha de Ouro Investimentos S.A.",
			name: "Luiz Santino",
		},
	];

	useEffect(() => {
		console.log(listOS);
	});

	function handleShowOSDetail(numberOS: number) {
		return navigation.navigate("detailos", { numberOS });
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
					<MenuHamburger />
				</View>

				<View className="flex-1 mx-7">
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
			</ImageBackground>
		</View>
	);
}
