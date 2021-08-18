import Firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyCSfXtPqBXmh2Xj8MCt5kUPeqPSPNNwhbw",
    authDomain: "netflix-f4a31.firebaseapp.com",
    projectId: "netflix-f4a31",
    storageBucket: "netflix-f4a31.appspot.com",
    messagingSenderId: "15439853876",
    appId: "1:15439853876:web:ed74f3cf1f5771de240d61"
};

const firebase = Firebase.initializeApp(config)

// seedDatabase(firebase)

export {firebase};