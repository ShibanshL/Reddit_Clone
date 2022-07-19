import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB7LRqv3vUjPmX0g_rn1WHkC6RW2Zb7hOQ",
  authDomain: "reddit-clone-83f7f.firebaseapp.com",
  projectId: "reddit-clone-83f7f",
  storageBucket: "reddit-clone-83f7f.appspot.com",
  messagingSenderId: "706695240833",
  appId: "1:706695240833:web:9bdbac1e1ed9e3d9b30180"
};

const app = initializeApp(firebaseConfig);
const storeData = getStorage(app)
const db = getFirestore(app)

export {storeData,db}