import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDxfVIv_RnKbatgNwz9Ls7HqZC-_6AZTTY",
  authDomain: "evaluacion1-9a1ac.firebaseapp.com",
  projectId: "evaluacion1-9a1ac",
  storageBucket: "evaluacion1-9a1ac.appspot.com",
  messagingSenderId: "669826458148",
  appId: "1:669826458148:web:d190c154ca5b6ef295eeb1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };
