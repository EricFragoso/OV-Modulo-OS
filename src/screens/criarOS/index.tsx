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
import { TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableOpacity } from "react-native";

type RouteParams = {
	lista: [];
};

export function CriarOS() {
	const baseURL = "https://overview-os-api.onrender.com";

	const route = useRoute();
	const navigation = useNavigation();

	function handleGoBack() {
		navigation.goBack();
	}

	function handleCriarOS() {
		//Rotina criação de OS
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
						Criar OS
					</Text>
					<MenuHamburger />
				</View>
				<View className="flex flex-1 w-full px-2">
					<TouchableOpacity
						onPress={handleGoBack}
						className="flex flex-row justify-start my-2"
					>
						<BackButton callFunc={handleGoBack} />
						<Text className="mt-[2px] font-OpenSansBold text-lg">Voltar</Text>
					</TouchableOpacity>
					<KeyboardAwareScrollView
						enableOnAndroid
						extraHeight={250}
					>
						<View className="px-5 pb-5 bg-[#459EE8]/50 rounded-md">
							<TextInput
								className="w-full h-10 border-[#000] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5"
								placeholder="Número do ativo"
								placeholderTextColor={"#999999"}
							/>
							<TextInput
								className="w-full h-10 border-[#000] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5"
								placeholder="CNPJ"
								placeholderTextColor={"#999999"}
							/>
							<TextInput
								className="w-full h-10 border-[#000] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5"
								placeholder="Ocorrência"
								placeholderTextColor={"#999999"}
							/>
							<TextInput
								className="w-full h-10 border-[#000] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5"
								placeholder="Prioridade"
								placeholderTextColor={"#999999"}
							/>
							<TextInput
								className="w-full h-10 border-[#000] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5"
								placeholder="Motivo"
								placeholderTextColor={"#999999"}
							/>
							<TextInput
								className="w-full h-10 border-[#000] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5"
								placeholder="Tipo de atendimento"
								placeholderTextColor={"#999999"}
							/>
							<TextInput
								className="w-full h-10 border-[#000] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5"
								placeholder="Colaborador"
								placeholderTextColor={"#999999"}
							/>
							<View className="flex flex-row pr-2">
								<TextInput
									className="w-1/2 h-10 mr-2 border-[#000] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5"
									placeholder="Inicio"
									placeholderTextColor={"#999999"}
								/>
								<TextInput
									className="w-1/2 h-10 border-[#000] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5"
									placeholder="Finalização"
									placeholderTextColor={"#999999"}
								/>
							</View>
							<TextInput
								className="w-full h-10 border-[#000] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5"
								placeholder="Solução"
								placeholderTextColor={"#999999"}
							/>
						</View>
						<Button
							text="Criar"
							borderRadius={6}
							callFunc={handleCriarOS}
						></Button>
					</KeyboardAwareScrollView>
				</View>
			</ImageBackground>
		</View>
	);
}
