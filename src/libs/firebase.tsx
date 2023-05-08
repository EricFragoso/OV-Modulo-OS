import { FirebaseStorage } from '@firebase/storage-types';
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: "AIzaSyCqqwI7kCsvmooQ6E3YO79VErqP21LRhZE",

	authDomain: "ov-moduloos-53f9f.firebaseapp.com",

	projectId: "ov-moduloos-53f9f",

	storageBucket: "ov-moduloos-53f9f.appspot.com",

	messagingSenderId: "831704138373",

	appId: "1:831704138373:web:efabacf17f4e525cae5fec",
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
let storage

if (firebaseApp){
	storage = getStorage(firebaseApp)	
}
export {storage, firebase}

