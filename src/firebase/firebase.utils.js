import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBcYguDMf_cczPp39qZe-4sBvBF4dibPNY",
    authDomain: "crwn-db-ccbf6.firebaseapp.com",
    projectId: "crwn-db-ccbf6",
    storageBucket: "crwn-db-ccbf6.appspot.com",
    messagingSenderId: "582701405200",
    appId: "1:582701405200:web:4e24e58b39931dd5672695"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;