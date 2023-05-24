import React, { useState, useContext, useEffect } from "react";
import {
	Text,
	View,
	ScrollView,
	Image,
	Alert,
	ImageBackground,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BackButton } from "../../components/backButton";
import { MenuHamburger } from "../../components/menuHamburger";
import { Button } from "../../components/button";
import { ButtonFilled } from "../../components/buttonFilled";
import Context from "../../../Context";
import { TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableOpacity } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import axios from "axios";

type RouteParams = {
	lista: [];
};

type FormData = {
	numeroAtivo: string;
	CNPJ: string;
	ocorrencia?: string;
	prioridade?: string;
	motivo?: string;
	tipoAtendimento?: string;
	colaborador: string;
	inicio?: string;
	finalizacao?: string;
	solucao?: string;
};

export function CriarOS() {
	const baseURL = "https://overview-os-api.onrender.com";

	const route = useRoute();
	const { control, handleSubmit } = useForm<FormData>();
	const navigation = useNavigation();
	const [prioridade, setPrioridade] = useState("");

	const prioridadeData = [
		{ key: "1", value: "Alta" },
		{ key: "2", value: "Média" },
		{ key: "3", value: "Baixa" },
	];

	function handleGoBack() {
		navigation.goBack();
	}

	async function CriarOS(data: FormData) {
		const urlCriarOS = `${baseURL}/preos`;
		//await axios.post(urlCriarOS, {});
		data.prioridade = prioridade;
		console.log(data);
	}

	useEffect(() => {}, []);

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
							<Controller
								control={control}
								name="numeroAtivo"
								render={({ field: { value, onChange } }) => (
									<TextInput
										className="w-full h-10 border-[#000] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5"
										placeholder="Número do ativo"
										placeholderTextColor={"#999999"}
										value={value}
										onChangeText={onChange}
									/>
								)}
							/>
							<Controller
								control={control}
								name="CNPJ"
								render={({ field: { value, onChange } }) => (
									<TextInput
										className="w-full h-10 border-[#000] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5"
										placeholder="CNPJ"
										placeholderTextColor={"#999999"}
										value={value}
										onChangeText={onChange}
									/>
								)}
							/>
							<Controller
								control={control}
								name="ocorrencia"
								render={({ field: { value, onChange } }) => (
									<TextInput
										className="w-full h-10 border-[#000] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5"
										placeholder="Ocorrência"
										placeholderTextColor={"#999999"}
										value={value}
										onChangeText={onChange}
									/>
								)}
							/>

							<SelectList
								search={false}
								placeholder={"Selecione a Prioridade"}
								boxStyles={{
									paddingLeft: 8,
									borderRadius: 3,
									marginTop: 20,
									backgroundColor: "white",
									borderColor: "white",
								}}
								inputStyles={{
									fontSize: 12,
									lineHeight: 16,
									color: prioridade ? "#000" : "#999",
								}}
								dropdownStyles={{
									borderRadius: 3,
									marginTop: 20,
									backgroundColor: "white",
									borderColor: "white",
								}}
								dropdownTextStyles={{
									fontSize: 12,
									lineHeight: 16,
									color: "#777",
								}}
								setSelected={(val) => setPrioridade(val)}
								data={prioridadeData}
								save="value"
							/>
							<Controller
								control={control}
								name="motivo"
								render={({ field: { value, onChange } }) => (
									<TextInput
										className="w-full h-10 border-[#000] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5"
										placeholder="Motivo"
										placeholderTextColor={"#999999"}
										value={value}
										onChangeText={onChange}
									/>
								)}
							/>
							<Controller
								control={control}
								name="tipoAtendimento"
								render={({ field: { value, onChange } }) => (
									<TextInput
										className="w-full h-10 border-[#000] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5"
										placeholder="Tipo de atendimento"
										placeholderTextColor={"#999999"}
										value={value}
										onChangeText={onChange}
									/>
								)}
							/>
							<Controller
								control={control}
								name="colaborador"
								render={({ field: { value, onChange } }) => (
									<TextInput
										className="w-full h-10 border-[#000] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5"
										placeholder="Colaborador"
										placeholderTextColor={"#999999"}
										value={value}
										onChangeText={onChange}
									/>
								)}
							/>
							<View className="flex flex-row pr-2">
								<Controller
									control={control}
									name="inicio"
									render={({ field: { value, onChange } }) => (
										<TextInput
											className="w-1/2 h-10 mr-2 border-[#000] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5"
											placeholder="Inicio"
											placeholderTextColor={"#999999"}
											value={value}
											onChangeText={onChange}
										/>
									)}
								/>
								<Controller
									control={control}
									name="finalizacao"
									render={({ field: { value, onChange } }) => (
										<TextInput
											className="w-1/2 h-10 border-[#000] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5"
											placeholder="Finalização"
											placeholderTextColor={"#999999"}
											value={value}
											onChangeText={onChange}
										/>
									)}
								/>
							</View>
							<Controller
								control={control}
								name="solucao"
								render={({ field: { value, onChange } }) => (
									<TextInput
										className="w-full h-20 border-[#000] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5 pt-3"
										multiline
										placeholder="Solução"
										placeholderTextColor={"#999999"}
										value={value}
										onChangeText={onChange}
									/>
								)}
							/>
						</View>
						<Button
							text="Criar"
							borderRadius={6}
							callFunc={handleSubmit(CriarOS)}
						></Button>
					</KeyboardAwareScrollView>
				</View>
			</ImageBackground>
		</View>
	);
}
