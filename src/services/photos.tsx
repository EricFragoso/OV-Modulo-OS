import { Photo } from "../@types/photo";
import { storage } from "../libs/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { Alert } from "react-native";

export const getAllPhotos = async (idAtivo) => {
	let list: Photo[] = [];

	const itemPath = `images/${idAtivo}`;

	const imagesFolder = await ref(storage, itemPath);

	console.log("teste " + imagesFolder);

	const photoList = await listAll(imagesFolder);

	for (let i in photoList.items) {
		let photoUrl = await getDownloadURL(photoList.items[i]);

		list.push({
			name: photoList.items[i].name,
			url: photoUrl,
		});
	}

	return list;
};
