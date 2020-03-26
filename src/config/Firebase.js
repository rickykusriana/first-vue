import fb from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

let config = {
	apiKey: "AIzaSyAf6CpheRBvdE3ou2nQplp-CivMkQQUPPk",
	authDomain: "first-158002.firebaseapp.com",
	databaseURL: "https://first-158002.firebaseio.com",
	projectId: "first-158002",
	storageBucket: "first-158002.appspot.com",
	messagingSenderId: "541585712871",
	appId: "1:541585712871:web:3f8a651634471fcfae2442"
}

fb.initializeApp(config);

// Export auth
export const firebase = fb;

// Realtime Database
export const database = fb.database()

// Cloud Firestore
export const firestore = fb.firestore()

// Default timestamp
export const datetime = fb.firestore.FieldValue.serverTimestamp()





