import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
    apiKey: "AIzaSyB9JkjTMPiM_1pdK5xHO29gCHlL7rbmDFU",
    authDomain: "e-clone-me.firebaseapp.com",
    projectId: "e-clone-me",
    storageBucket: "e-clone-me.appspot.com",
    messagingSenderId: "675036856688",
    appId: "1:675036856688:web:28b77106254fc6ffca8fb5",
    measurementId: "G-38QTYRY0P9"
};


const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);