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
import LoadingModal from "../../components/loadingModal";
import { TextInputMask } from "react-native-masked-text";
import { isLength } from "validator";
import { ContextQR } from "../../../ContextQR";

type RouteParams = {
	idLido?: string;
	cnpjLido?: string;
};

type FormData = {
	id: string;
	numeroAtivo: string;
	cnpj: string;
	ocorrencia?: string;
	prioridade?: string;
	motivo?: string;
	tipoAtendimento?: string;
	colaborador: string;
	inicio?: string;
	finalizacao?: string;
	solucao?: string;
	sincronizada: boolean;
	created_at: string;
};

const cnpjValidation = (value: string) => {
	if (!isLength(value, { min: 18 })) {
		return "O CNPJ deve ter no mínimo 14 caracteres";
	}
	return true;
};

export function CriarOS() {
	const { control, handleSubmit, setValue } = useForm<FormData>();
	const baseURL = "https://overview-os-api.onrender.com";

	const route = useRoute();
	const navigation = useNavigation();

	let { idLido, cnpjLido } = (route.params as RouteParams) || {
		idLido: null,
		cnpjLido: null,
	};

	const flagCriar = true;

	const [loading, setLoading] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [prioridade, setPrioridade] = useState("");
	const [inicializacao, setInicializacao] = useState(0);
	const [finalizacao, setFinalizacao] = useState(0);

	const prioridadeData = [
		{ key: "1", value: "Alta" },
		{ key: "2", value: "Média" },
		{ key: "3", value: "Baixa" },
	];

	function handleGoBack() {
		navigation.goBack();
	}

	function handleCallLeitorQR() {
		navigation.navigate("leitorqrcode", { flagCriar: flagCriar });
	}

	async function CriarOS(data: FormData) {
		setLoading(true);
		setSubmitted(true);
		const urlCriarOS = `${baseURL}/preos`;
		await setFinalizacao(Date.now());
		console.log(inicializacao);
		console.log(finalizacao);

		data.prioridade = prioridade;
		data.tipoAtendimento = "PRESENCIAL";
		data.sincronizada = false;
		const dataInicio = new Date(inicializacao).toLocaleString("en-US", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
		});
		const dataFinalizacao = new Date(finalizacao).toLocaleString("en-US", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
		});

		const horarioInicio = new Date(inicializacao);
		const horarioFinalizacao = new Date(finalizacao);

		const horaInicio = horarioInicio.getHours();
		const minInicio = horarioInicio.getMinutes();
		const segInicio = horarioInicio.getSeconds();

		const horaFinalizacao = horarioFinalizacao.getHours();
		const minFinalizacao = horarioFinalizacao.getMinutes();
		const segFinalizacao = horarioFinalizacao.getSeconds();

		const FullDataInicio = `${dataInicio}T${horaInicio}:${minInicio}:${segInicio}`;
		const FullDataFinalizacao = `${dataFinalizacao}T${horaFinalizacao}:${minFinalizacao}:${segFinalizacao}`;

		data.inicio = FullDataInicio;
		data.finalizacao = FullDataFinalizacao;

		console.log(data.inicio);
		console.log(data.finalizacao);

		await axios
			.post(urlCriarOS, data)
			.then((response) => {
				console.log(data);
				console.log("sucesso");

				console.log(response.data);
				setLoading(false);
				Alert.alert("Sucesso", "Pre-OS Registrada");
			})
			.catch((e) => {
				setLoading(false);
				Alert.alert("Atenção", "Erro ao registrar a Pre-OS");
				console.log(data);

				console.log("erro");

				console.log(e.response.data);
			});
	}

	useEffect(() => {
		if (idLido) {
			console.log("IDLIDO " + idLido);

			setValue("numeroAtivo", idLido);
		} else {
			console.log("IDNAOLIDO " + idLido);
		}
		if (cnpjLido) {
			console.log("CNPJLIDO " + cnpjLido);
			setValue("cnpj", cnpjLido);
		}

		const flagCriar = true;
		setInicializacao(Date.now());
		console.log(submitted);

		console.log("CNPJ", cnpjLido);
	}, [cnpjLido, idLido, setValue]);

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
										className={
											submitted && !value
												? "w-full h-10 border-[#d12b4f] border-[1.5px] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5"
												: "w-full h-10 border-[#459EE8] border-[1px] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5"
										}
										placeholder="Número do ativo"
										placeholderTextColor={"#999999"}
										value={idLido !== null ? idLido : value}
										onChangeText={onChange}
									/>
								)}
							/>
							<Controller
								control={control}
								name="cnpj"
								rules={{ validate: cnpjValidation }}
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<TextInputMask
										type={"cnpj"}
										className={
											error
												? "w-full h-10 border-[#d12b4f] border-[1.5px] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5"
												: "w-full h-10 border-[#459EE8] border-[1px] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5"
										}
										placeholder="CNPJ"
										placeholderTextColor="#999999"
										value={cnpjLido !== null ? cnpjLido : value}
										onChangeText={onChange}
									/>
								)}
							/>
							<Controller
								control={control}
								name="ocorrencia"
								render={({ field: { value, onChange } }) => (
									<TextInput
										className={
											"w-full h-10 border-[#459EE8] border-[1px] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5"
										}
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
									borderColor: "#459EE8",
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
									borderColor: "#459EE8",
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
										className={
											"w-full h-10 border-[#459EE8] border-[1px] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5"
										}
										placeholder="Motivo"
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
										className={
											submitted && !value
												? "w-full h-10 border-[#d12b4f] border-[1.5px] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5"
												: "w-full h-10 border-[#459EE8] border-[1px] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5"
										}
										placeholder="Colaborador"
										placeholderTextColor={"#999999"}
										value={value}
										onChangeText={onChange}
									/>
								)}
							/>
							<Controller
								control={control}
								name="solucao"
								render={({ field: { value, onChange } }) => (
									<TextInput
										className="w-full h-20 border-[#459EE8] border-[1px] rounded-sm bg-white text-[#000] pl-2 text-xs font-OpenSansRegular mt-5 pt-3"
										multiline
										placeholder="Solução"
										placeholderTextColor={"#999999"}
										value={value}
										onChangeText={onChange}
									/>
								)}
							/>
						</View>
						<View className="mt-5">
							<ButtonFilled
								text="Escanear Ativo"
								borderRadius={6}
								callFunc={handleCallLeitorQR}
							/>
							<Button
								text="Criar"
								borderRadius={6}
								callFunc={handleSubmit(CriarOS)}
							></Button>
							<LoadingModal visible={loading} />
						</View>
					</KeyboardAwareScrollView>
				</View>
			</ImageBackground>
		</View>
	);
}
