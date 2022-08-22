import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB2PEhWkIIec5cDC_Itx47RrZgQ9VXoQEw",
    authDomain: "cajacine-29e02.firebaseapp.com",
    projectId: "cajacine-29e02",
    storageBucket: "cajacine-29e02.appspot.com",
    messagingSenderId: "39010612641",
    appId: "1:39010612641:web:1d98d52e72661c36c087e0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    app,
    db
}