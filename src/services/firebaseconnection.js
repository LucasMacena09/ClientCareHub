
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCRo5EiiiimyvZit6ug_1RVF02z_oPSPC0",
  authDomain: "projetochamados-3d68f.firebaseapp.com",
  projectId: "projetochamados-3d68f",
  storageBucket: "projetochamados-3d68f.appspot.com",
  messagingSenderId: "59509664533",
  appId: "1:59509664533:web:56c850ee0ea5bbd774571c",
  measurementId: "G-FB64Z7ZV5X"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };