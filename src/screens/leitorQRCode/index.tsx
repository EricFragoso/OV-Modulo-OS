import React, { useState, useEffect } from "react";
import { Text, View, ImageBackground, Image } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import { MenuHamburger } from "../../components/menuHamburger";
import { BackButton } from "../../components/backButton";
import { ButtonFilled } from "../../components/buttonFilled";

export default function LeitorQRCode() {
	const [hasPermission, setHasPermission] = useState(null);
	const [scanned, setScanned] = useState(false);
	const navigation = useNavigation();

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

	const handleBarCodeScanned = ({ data }) => {
		setScanned(true);
		alert(`Os dados ${data} foram salvos`);
	};

	if (hasPermission === null) {
		return <Text>Solicitando permissão para utilizar a câmera</Text>;
	}
	if (hasPermission === false) {
		return <Text>Sem acesso à câmera</Text>;
	}

	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.background}
				source={require("../../assets/img/Overview-50-BG.png")}
			>
				<View style={styles.header}>
					<Image
						style={styles.imagem}
						source={require("../../assets/img/CG-Preto.png")}
					/>
					<Text style={styles.headerText}>Escanear Ativo</Text>
					<MenuHamburger />
				</View>

				<View style={styles.content}>
					<View style={styles.headerQR}>
						<BackButton callFunc={handleCallPreviousPage}></BackButton>
						<Text style={styles.headerQRText}> Leitor de QR Code</Text>
					</View>

					<BarCodeScanner
						style={styles.camera}
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
