import { Camera, CameraType } from "expo-camera";
import React, { useState, useEffect, useRef, FormEvent } from "react";
import {
	Text,
	View,
	Modal,
	Image,
	ImageBackground,
	TouchableOpacity,
	Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "../../components/button";
import { MenuHamburger } from "../../components/menuHamburger";
import { BackButton } from "../../components/backButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Photos from "../../services/photos";
import { Photo } from "../../@types/photo";
import { firebase } from "../../libs/firebase";

import * as FileSystem from 'expo-file-system'
import FirebaseStorage, { getStorage, ref, uploadBytesResumable, getDownloadURL, uploadString, updateMetadata, uploadBytes } from "firebase/storage";

type RouteParams = {
	ID: string;
	idAtivo: string;
};

export function CameraAtivo() {
	const route = useRoute();
	const { ID, idAtivo } = route.params as RouteParams;
	const [uploading, setUploading] = useState(false);
	const [type, setType] = useState(CameraType.back);
	const [permission, requestPermission] = useState(null);
	const [photoTaken, setPhotoTaken] = useState(null);
	const [photoData, setPhotoData] = useState(null);
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
			setPhotoData(data);
			setPhotoTaken(data.uri);
			setOpen(true);
		}
	}

	async function handleSavePhoto() {
		const response = await fetch(photoTaken)
		const blob = await response.blob()
		const filename = photoTaken.substring(photoTaken.lastIndexOf('/') + 1)
		var ref = firebase.storage().ref(`images/${idAtivo}`).child(filename).put(blob)
		
		try {
			await ref
		} catch (err) {
			console.log(err);
			
		}
		Alert.alert('Foto salva com sucesso!')
		setPhotoTaken(null)

		setOpen(false);

		navigation.navigate("detailativo", { idAtivo });
	}

	function handleCallPreviousPage() {
		navigation.goBack();
	}
	function handleCallPreviousPageCam() {
		setOpen(false);
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
						className="my-10 w-full h-[60%] border-[#459EE8] border-4"
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
					className="w-8"
					animationType="slide"
					transparent={false}
					visible={open}
				>
					<View className="mt-32 flex-row">
						<BackButton callFunc={handleCallPreviousPageCam} />
						<TouchableOpacity onPress={handleCallPreviousPageCam}>
							<Text className="font-OpenSansBold text-xl mb-10">
								Tirar outra foto
							</Text>
						</TouchableOpacity>
					</View>
					<View>
						<Image
							className="w-[90%] h-[65%] ml-5"
							source={{ uri: photoTaken }}
						/>
					</View>
					<View className="mx-10">
						<Button
							text="Salvar Foto"
							callFunc={handleSavePhoto}
						/>
					</View>
				</Modal>
			)}
		</View>
	);
}
