import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDT8CA78PAej5T9A85R34v9Xhzp9Lrwx2k",
    authDomain: "cajacine-bd83e.firebaseapp.com",
    projectId: "cajacine-bd83e",
    storageBucket: "cajacine-bd83e.appspot.com",
    messagingSenderId: "494680909941",
    appId: "1:494680909941:web:d23ece1a933012bd22703c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    app,
    db
}