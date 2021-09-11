import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBQSXSsN9mhwFN9QdX-rK2H8V3bsPYIzs4",
    authDomain: "coder-react-16930.firebaseapp.com",
    projectId: "coder-react-16930",
    storageBucket: "coder-react-16930.appspot.com",
    messagingSenderId: "719437163636",
    appId: "1:719437163636:web:6e0351f4d312e80394f521"
}

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
    return app
}

export const getFirestore = () => {
    return firebase.firestore(app)
}
