import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyDW8nk0BLzryMHaC9dRO0KbQgRjzZNMrJ8",
  authDomain: "journal-app-auth.firebaseapp.com",
  projectId: "journal-app-auth",
  storageBucket: "journal-app-auth.appspot.com",
  messagingSenderId: "443922545949",
  appId: "1:443922545949:web:49ed5a1e0c04b1ef0275f4"
};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider =  new firebase.auth.FacebookAuthProvider()

export { 
  db, 
  googleAuthProvider,
  facebookAuthProvider,
  firebase
  
}
