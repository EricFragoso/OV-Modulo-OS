import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCqqwI7kCsvmooQ6E3YO79VErqP21LRhZE",

	authDomain: "ov-moduloos-53f9f.firebaseapp.com",

	projectId: "ov-moduloos-53f9f",

	storageBucket: "ov-moduloos-53f9f.appspot.com",

	messagingSenderId: "831704138373",

	appId: "1:831704138373:web:efabacf17f4e525cae5fec",
};

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);
