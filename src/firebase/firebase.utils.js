import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyAA3Z1bubH2zNE_valEAGD9AXW9zJH5VX8",
	authDomain: "pet-shop-db.firebaseapp.com",
	databaseURL: "https://pet-shop-db.firebaseio.com",
	projectId: "pet-shop-db",
	storageBucket: "pet-shop-db.appspot.com",
	messagingSenderId: "663819886211",
	appId: "1:663819886211:web:745e848d1bfa6684d485b6",
	measurementId: "G-LHNQEW6WDQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
