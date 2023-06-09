import React, { useState, useEffect, useContext } from "react";
import { Text, View, ImageBackground, Image } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./style";
import { MenuHamburger } from "../../components/menuHamburger";
import { BackButton } from "../../components/backButton";
import { ButtonFilled } from "../../components/buttonFilled";
import { ContextQR } from "../../../ContextQR";

type RouteParams = {
	flagCriar: string;
};

export default function LeitorQRCode() {
	const navigation = useNavigation();
	const route = useRoute();

	const [hasPermission, setHasPermission] = useState(null);
	const [scanned, setScanned] = useState(false);

	const { flagCriar } = route.params as RouteParams;
	console.log(flagCriar);

	useEffect(() => {
		const getBarCodeScannerPermissions = async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === "granted");
		};

		getBarCodeScannerPermissions();
	}, []);

	function handleCallPreviousPage() {
		navigation.goBack();
	}

	function handleQRData(str: string) {
		const parts = str.split(",");
		const idPart = parts.find((part) => part.includes("ID:"));

		if (idPart) {
			const match = idPart.match(/ID:\s*(\d+)/);
			const ID = match?.[0];
			const IDNumber = match?.[1];
			if (ID) {
				if (flagCriar) {
					const regexCnpj = /CNPJ\/CPF: (\d+)/;
					const matchCnpj = str.match(regexCnpj);
					const cnpj = matchCnpj ? matchCnpj[1] : null;

					navigation.navigate("criaros", {
						idLido: IDNumber,
						cnpjLido: cnpj,
					});
				} else {
					navigation.navigate("detailativo", { idAtivo: ID });
				}
			} else {
				alert("QR Code Inválido");
			}
		} else {
			alert("QR Code Inválido");
		}

		return undefined;
	}

	const handleBarCodeScanned = ({ data }) => {
		console.log(data);

		handleQRData(data);

		setScanned(true);
	};

	if (hasPermission === null) {
		return <Text>Solicitando permissão para utilizar a câmera</Text>;
	}
	if (hasPermission === false) {
		return <Text>Sem acesso à câmera</Text>;
	}

	return (
		<View className="flex-1 w-full bg-white items-center">
			<ImageBackground
				className="flex-1 w-full items-center justify-center"
				source={require("../../assets/img/Overview-50-BG.png")}
			>
				<View className="w-full h-32 flex-row justify-between items-center bg-[#459EE8] pt-[52px] px-8">
					<Image
						className="h-11 w-11"
						source={require("../../assets/img/CG-Preto.png")}
					/>
					<Text className="flex-1 text-center font-OpenSansBold text-[28px]">
						Escanear Ativo
					</Text>
					<MenuHamburger />
				</View>

				<View className="flex-1 w-[80%]">
					<View className="flex-row my-6 px-7 items-center">
						<BackButton callFunc={handleCallPreviousPage}></BackButton>
						<Text className="flex-1 text-2xl font-OpenSansBold text-center">
							{" "}
							Leitor de QR Code
						</Text>
					</View>

					<BarCodeScanner
						className="my-10 w-full h-[45%] border-[#459EE8] border-4"
						onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
					/>
					{scanned && (
						<ButtonFilled
							text="Escanear novamente"
							fontSize={16}
							callFunc={() => setScanned(false)}
						/>
					)}
				</View>
			</ImageBackground>
		</View>
	);
}
