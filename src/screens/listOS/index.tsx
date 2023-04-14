import { Text, View, ScrollView, Image, ImageBackground } from "react-native";

import { Card } from "../../components/card";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MenuHamburger } from "../../components/menuHamburger";
import OS from "OSTypeCard";

type RouteParams = {
	lista: [];
};

export function ListOS() {
	const route = useRoute();

	const navigation = useNavigation();
	const { lista } = route.params as RouteParams;

	useEffect(() => {
		console.log(lista);
	});

	function handleShowOSDetail(numberOS: string) {
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
						{lista.map((OS: OS) => (
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
