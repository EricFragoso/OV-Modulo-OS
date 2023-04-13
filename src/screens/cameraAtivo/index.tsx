import { Camera, CameraType } from "expo-camera";
import React, { useState, useEffect, useRef } from "react";
import { Text, View, Modal, Image } from "react-native";
import { Button } from "../../components/button";

export function CameraAtivo() {
	const [type, setType] = useState(CameraType.back);
	const [permission, requestPermission] = useState(null);
	const [photoTaken, setPhotoTaken] = useState(null);
	const [open, setOpen] = useState(false);
	const camRef = useRef(null);

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

	return (
		<View className="flex-1 justify-center">
			<Camera
				className="flex-1 items-center justify-end p-10"
				type={type}
				ref={camRef}
			>
				<Button
					text="Tirar Foto"
					marginBottom={0}
					callFunc={handleTakePhoto}
				></Button>
			</Camera>

			{photoTaken && (
				<Modal
					animationType="slide"
					transparent={false}
					visible={open}
				>
					<View>
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
