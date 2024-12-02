import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDx1k3fsKQ78V2m-t5Q-Q5by3nM04Tmjs",
  authDomain: "nexflix-react-clone.firebaseapp.com",
  projectId: "nexflix-react-clone",
  storageBucket: "nexflix-react-clone.firebasestorage.app",
  messagingSenderId: "525215989752",
  appId: "1:525215989752:web:8c5ee4df484c2ced2e200d",
  measurementId: "G-3GFLT3MQ4C"
};


const firebaseApp = initializeApp(firebaseConfig);
const db= getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);

export {firebaseApp,db,auth}