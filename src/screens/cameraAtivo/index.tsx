import { Camera, CameraType } from "expo-camera";
import React, { useState, useEffect, useRef } from "react";
import {
	Text,
	View,
	Modal,
	Image,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/button";
import { MenuHamburger } from "../../components/menuHamburger";
import { BackButton } from "../../components/backButton";

export function CameraAtivo() {
	const [type, setType] = useState(CameraType.back);
	const [permission, requestPermission] = useState(null);
	const [photoTaken, setPhotoTaken] = useState(null);
	const [open, setOpen] = useState(false);
	const camRef = useRef(null);
	const navigation = useNavigation();

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			requestPermission(status === "granted");
		})();
	}, []);

	if (requestPermission === null) {
		return <View />;
	}

	async function handleTakePhoto() {
		if (camRef) {
			const data = await camRef.current.takePictureAsync();
			setPhotoTaken(data.uri);
			setOpen(true);
			console.log(data);
		}
	}

	function handleCallPreviousPage() {
		navigation.goBack();
	}

	return (
		<View className="flex-1">
			<ImageBackground
				className="flex-1 w-full"
				source={require("../../assets/img/Overview-50-BG.png")}
			>
				<View className="w-full h-32 flex-row justify-between items-center bg-[#459EE8] pt-14 px-8">
					<Image
						className={"w-11 h-11"}
						source={require("../../assets/img/CG-Preto.png")}
					/>
					<Text className="flex-1 text-center font-OpenSansBold text-3xl">
						Foto do Ativo
					</Text>
					<MenuHamburger />
				</View>
				<View className="flex-row items-center my-2 ml-3">
					<BackButton callFunc={handleCallPreviousPage} />

					<TouchableOpacity onPress={handleCallPreviousPage}>
						<Text className="font-OpenSansBold text-xl">Voltar</Text>
					</TouchableOpacity>
				</View>
				<View className="px-5">
					<Camera
						className="h-4/6 mb-5"
						type={type}
						ref={camRef}
					></Camera>
					<Button
						text="Tirar Foto"
						marginBottom={0}
						callFunc={handleTakePhoto}
					/>
				</View>
			</ImageBackground>

			{photoTaken && (
				<Modal
					animationType="slide"
					transparent={false}
					visible={open}
				>
					<View className="mt-32">
						<BackButton callFunc={handleCallPreviousPage} />
						<TouchableOpacity onPress={handleCallPreviousPage}>
							<Text className="font-OpenSansBold text-xl">Voltar</Text>
						</TouchableOpacity>
						<Image
							className="w-100, h-[300] rounded-5"
							source={{ uri: photoTaken }}
						/>
					</View>
				</Modal>
			)}
		</View>
	);
}
