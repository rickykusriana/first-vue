import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'

let config = {
	apiKey: "AIzaSyAf6CpheRBvdE3ou2nQplp-CivMkQQUPPk",
	authDomain: "first-158002.firebaseapp.com",
	databaseURL: "https://first-158002.firebaseio.com",
	projectId: "first-158002",
	storageBucket: "first-158002.appspot.com",
	messagingSenderId: "541585712871"
}

firebase.initializeApp(config);

// Realtime Database
export const database = firebase.database()

// Cloud Firestore
export const firestore = firebase.firestore()

// Default timestamp
export const datetime = firebase.firestore.FieldValue.serverTimestamp()





