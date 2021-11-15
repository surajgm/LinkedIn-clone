import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC9AjmD5ym0NaC0url1pBIhng2dHmz6PGg",
  authDomain: "sj-linkedin.firebaseapp.com",
  projectId: "sj-linkedin",
  storageBucket: "sj-linkedin.appspot.com",
  messagingSenderId: "1060606855645",
  appId: "1:1060606855645:web:2335deba29ccbf28ce4e34",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// First we initialize firebase app as above then firebaseApp object is exposed to firebase services that we can use

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
// storage to store image

export { auth, provider, storage };
export default db;
