import firebase from '@firebase/app';
import 'firebase/firestore';


const firebaseApp= firebase.initializeApp({
      apiKey: "AIzaSyCnpU19i3923ZhmXWkV9DPEtxa7A6Za2S0",
      authDomain: "messenger-clone-395b9.firebaseapp.com",
      projectId: "messenger-clone-395b9",
      storageBucket: "messenger-clone-395b9.appspot.com",
      messagingSenderId: "991778063664",
      appId: "1:991778063664:web:3c9d9dfe4de761ee28f4f5",
      measurementId: "G-ZRDYCNMK7K"
    });

    const db = firebaseApp.firestore();

    export default db;