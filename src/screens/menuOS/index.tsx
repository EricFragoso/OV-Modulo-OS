import React, { useContext } from "react";
import {
	Text,
	View,
	ScrollView,
	Image,
	Alert,
	ImageBackground,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BackButton } from "../../components/backButton";
import { MenuHamburger } from "../../components/menuHamburger";
import { Button } from "../../components/button";
import { ButtonFilled } from "../../components/buttonFilled";
import Context from "../../../Context";

type RouteParams = {
	lista: [];
};

export function MenuOS() {
	const { listaDeOS, setListaDeOS } = useContext(Context);
	const route = useRoute();
	const navigation = useNavigation();
	const { lista } = route.params as RouteParams;

	function handleCallListaOS() {
		if (listaDeOS.length === 0) {
			return Alert.alert("Atenção", "Nenhuma OS cadastrada");
		} else {
			navigation.navigate("listos", { lista: listaDeOS });
		}
	}

	function handleCallCriarOS() {
		navigation.navigate("criaros");
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
						Menu
					</Text>
					<MenuHamburger />
				</View>

				<View className="flex w-80 flex-1 mt-40 align-center">
					<ButtonFilled
						text="Lista de OS"
						callFunc={handleCallListaOS}
					/>
					<Button
						fontSize={24}
						text="Criar OS"
						callFunc={handleCallCriarOS}
					/>
				</View>
			</ImageBackground>
		</View>
	);
}
