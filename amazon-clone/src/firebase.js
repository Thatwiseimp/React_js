import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCvWkbD_3WvrZSKbBe6YMHQCfSyouuYLII",
    authDomain: "clone-b39a4.firebaseapp.com",
    projectId: "clone-b39a4",
    storageBucket: "clone-b39a4.appspot.com",
    messagingSenderId: "100470509019",
    appId: "1:100470509019:web:0759cc64b3dc0b2c5f6bfe",
    measurementId: "G-W4TPY1FDJV"
  });

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{ db, auth, provider }