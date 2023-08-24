import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyDwmlr3AfIODJPhGI7UoV-qWqHmWaSZNNo",
    authDomain: "pawlove-23bad.firebaseapp.com",
    databaseURL: "https://pawlove-23bad-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pawlove-23bad",
    storageBucket: "pawlove-23bad.appspot.com",
    messagingSenderId: "185061020018",
    appId: "1:185061020018:web:005f63c9a35371f6638deb",
    measurementId: "G-PDSKVKWPKT"
}

export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);