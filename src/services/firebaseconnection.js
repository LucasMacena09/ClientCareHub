
import { inializeApp, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDWxjV3aBJib-OLWKw2ToSYaDhIycVQBlI",
    authDomain: "curso-89257.firebaseapp.com",
    projectId: "curso-89257",
    storageBucket: "curso-89257.appspot.com",
    messagingSenderId: "645859985075",
    appId: "1:645859985075:web:54cc4990eae6111af892c6",
    measurementId: "G-VEE7BPNYEV"
  };

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };