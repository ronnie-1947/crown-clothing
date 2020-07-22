import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyCkvSWMG9Vph7cDqIHTeKBtahoWsjeS-xo",
    authDomain: "crwn-db-913cf.firebaseapp.com",
    databaseURL: "https://crwn-db-913cf.firebaseio.com",
    projectId: "crwn-db-913cf",
    storageBucket: "crwn-db-913cf.appspot.com",
    messagingSenderId: "266231434047",
    appId: "1:266231434047:web:ed1a7a627bcf4840e0618a",
    measurementId: "G-1FEK039K0B"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithRedirect(provider)