import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGTm3OQGJ6hDryU5a7tosK1DCfDdoWErQ",
    authDomain: "clone-ada9e.firebaseapp.com",
    projectId: "clone-ada9e",
    storageBucket: "clone-ada9e.appspot.com",
    messagingSenderId: "908342518804",
    appId: "1:908342518804:web:7ae36d260aa368464e7301",
    measurementId: "G-6P5VJ9V5BF"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebaseApp.auth()

  export {db, auth}