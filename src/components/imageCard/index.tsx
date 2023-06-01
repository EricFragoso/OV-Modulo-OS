import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	TouchableHighlight,
	Alert,
	Image,
} from "react-native";
import axios from "axios";

type Props = {
	id: string;
	nameAtivo: string;
	value: string;
	callFunc: () => void;
};

export function ImageCard(props: Props) {
	const baseURL = "https://overview-os-api.onrender.com";
	const [photoUrl, setPhotoUrl] = useState("");

	useEffect(() => {
		getImage(props.id);
	}, []);

	async function getImage(idAtivo) {
		const urlFavorito = `${baseURL}/images/favorite/${idAtivo}`;
		await axios.get(urlFavorito).then((response) => {
			const favoritePhoto = response.data;
			if (!favoritePhoto) {
				return Alert.alert("Atenção", "Nenhuma foto favoritada");
			} else {
				setPhotoUrl(favoritePhoto.image[0].path);
			}
		});
	}

	return (
		<View>
			<TouchableHighlight
				underlayColor={"#459EE8"}
				className="bg-[#B5D8F6] items-start justify-between flex-row w-[336] h-[76px] rounded-xl pr-14 mb-7 mt-1"
				onPress={props.callFunc}
			>
				<>
					<Image
						className="bg-[#6AB1ED] w-[84px] h-[84px] rounded-xl mt-[-4px] border-2 border-[#6AB1ED]"
						source={{ uri: photoUrl }}
					/>
					<View className="justify-around mb-3">
						<Text className="text-[#2B3049] mt-3 mb-3 text-xl font-OpenSansBold">
							Produto: {props.nameAtivo}
						</Text>
						<Text className="text-[#2B3049] text-base font-OpenSansMedium">
							ID {props.id}
						</Text>
					</View>
					<View className="mt-11">
						<Text className="text-[#2B3049] text-base font-OpenSansMedium">
							BTU: {props.value}
						</Text>
					</View>
				</>
			</TouchableHighlight>
		</View>
	);
}
